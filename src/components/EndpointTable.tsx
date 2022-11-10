import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { tableCellClasses } from "@mui/material/TableCell";
import { makeStyles } from "@mui/styles";
import { toast } from "react-toastify";
import { styled } from "@mui/material/styles";
import Cookies from "universal-cookie";
import { useContextProvider } from "../contexts/ContextProvider";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";

import {
  useAppDispatch,
  useAppSelector,
  useFormInputs,
  useHttpRequest,
} from "../hooks";
import {
  removeEndpoint,
  editEndpoint,
  getUserApis,
} from "../redux/slices/userSlice";
import { EndpointProps } from "../interfaces";
import { Spinner } from "../assets";

const core_url = "VITE_CORE_URL";
const initialState = {
  id: "",
  name: "",
  route: "",
  method: "",
} as EndpointProps;

interface Props {
  id: string | undefined;
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    width: "auto",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    width: "auto",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const CollapsibleTable: React.FC<Props> = ({ id }) => {
  const [isEditing, setIsEditing] = useState<number | null>(null);
  const props = { open: false, id: "" };
  const [isModalOpen, setIsModalOpen] = useState(props);
  const { inputs, bind, select } = useFormInputs(initialState);
  const { userApis } = useAppSelector((store) => store.user);
  const { error, loading, sendRequest } = useHttpRequest();
  const api = userApis.find((api) => api?.id === id);
  const endpoint = api?.endpoints ? api.endpoints : null;
  const { triggerRefresh } = useContextProvider();
  const { name, route, method } = inputs;
  const dispatch = useAppDispatch();
  const classes = useStyles();
  let payload: object;
  const cookies = new Cookies();
  const profileId = cookies.get("profileId");
  const [delId, setDelId] = useState("");

  const openEditing = (index: number) => {
    setIsEditing(index);
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = async (e: any, id: any) => {
    e.preventDefault();
    setOpen(true);
    setDelId(id);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const save = async (id: string | undefined) => {
    payload = { id, name, method, route };
    const headers = { "Content-Type": "application/json" };
    try {
      const data = await sendRequest(
        `/endpoints/${id}`,
        "patch",
        core_url,
        payload,
        headers
      );
      if (!data || data === undefined) return;
      dispatch(editEndpoint(payload));
      setIsEditing(null);
      triggerRefresh();
      const { message } = data;
      toast.success(`${message}`);
    } catch (error) {}
  };

  const deleteEndpoint = async (e: any) => {
    e.preventDefault();
    const headers = { "Content-Type": "application/json" };
    try {
      const data = await sendRequest(
        `/endpoints/${delId}?profileId=${cookies.get("profileId")}`,
        "del",
        core_url,
        payload,
        headers
      );

      if (!data || data === undefined) return;
      dispatch(removeEndpoint(delId));
      setOpen(false);
      triggerRefresh();
      const { message } = data;
      toast.success(`${message}`);
    } catch (error) {}
  };

  return (
    <>
      {/* {isModalOpen && <ConfirmDialog message="Are you sure you want to delete this endpoint" id={isModalOpen.id}
    onClose={() => setIsModalOpen({open:false,id:""})}  />} */}
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow className={classes.root}>
              <TableCell>Name</TableCell>
              <TableCell>Method</TableCell>
              <TableCell>Route</TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {endpoint &&
              endpoint.map((endpoint, index) => (
                <StyledTableRow key={index}>
                  <StyledTableCell>
                    <input
                      type="text"
                      name="name"
                      defaultValue={endpoint?.name}
                      {...bind}
                      className={classes.input}
                      disabled={isEditing !== index}
                    />
                  </StyledTableCell>
                  <StyledTableCell>
                    <select
                      name="method"
                      defaultValue={endpoint?.method}
                      {...select}
                      className={classes.input}
                      disabled={isEditing !== index}>
                      <option value="get">GET</option>
                      <option value="post">POST</option>
                      <option value="patch">PATCH</option>
                      <option value="delete">DELETE</option>
                    </select>
                  </StyledTableCell>
                  <StyledTableCell>
                    <input
                      type="text"
                      name="route"
                      defaultValue={endpoint?.route.toString()}
                      {...bind}
                      className={classes.input}
                      disabled={isEditing !== index}
                    />
                  </StyledTableCell>
                  <StyledTableCell>
                    {isEditing === index ? (
                      <button
                        onClick={() => save(endpoint?.id)}
                        className={classes.button}
                        style={{ background: "#081F4A" }}>
                        DONE
                      </button>
                    ) : (
                      <button
                        onClick={() => openEditing(index)}
                        className={classes.button}
                        style={{ background: "#081F4A" }}>
                        EDIT
                      </button>
                    )}
                  </StyledTableCell>
                  <StyledTableCell>
                    <div>
                      <Button
                        variant="contained"
                        className={classes.btnDelete}
                        onClick={(e) => handleClickOpen(e, endpoint!.id)}>
                        Delete
                      </Button>
                      <Dialog
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description">
                        <DialogContent>
                          <DialogContentText
                            className={classes.dialogText}
                            id="alert-dialog-description">
                            Are you sure you want to delete this endpoint.
                          </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                          <Button
                            variant="contained"
                            className={classes.btnNo}
                            onClick={handleClose}>
                            No
                          </Button>
                          <Button
                            variant="contained"
                            className={classes.btnYes}
                            onClick={(e) => {
                              deleteEndpoint(e);
                            }}
                            autoFocus>
                            {loading ? <Spinner /> : "Yes"}
                          </Button>
                        </DialogActions>
                      </Dialog>
                    </div>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

const useStyles = makeStyles({
  form: {
    display: "flex",
    alignItems: "center",
    padding: "0 1rem",
    gap: "1rem",
  },
  root: {
    "& .MuiTableCell-head": {
      color: "white",
      backgroundColor: "#081f4A",
    },
  },
  input: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "40px",
    borderRadius: "4px",
    border: "1px solid #999",
    outline: "none",
    padding: "0 0.5rem",
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: "24px",
    fontFamily: "var(--body-font)",
    transition: "0.5s all ease-in-out cubic-bezier(0.075, 0.82, 0.165, 1)",
    "&:disabled": {
      border: "none",
      background: "#FFF",
      color: "#000",
    },
  },
  button: {
    padding: "0.5rem 1rem",
    border: "none",
    outline: "none",
    borderRadius: "5px",
    color: "#FFF",
    cursor: "pointer",
    fontFamily: "var(--body-font)",
  },
  dialogText: {
    "&.MuiDialogContentText-root": {
      color: "#131212",
    },
  },
  btnDelete: {
    "&.MuiButton-root": {
      backgroundColor: "red",
      color: "#ffff",
      border: "none",
    },
  },
  btnNo: {
    "&.MuiButton-root": {
      backgroundColor: "var(--color-primary)",
      color: "#ffff",
      border: "none",
    },
  },
  btnYes: {
    "&.MuiButton-root": {
      backgroundColor: "var(--color-primary)",
      color: "#ffff",
      border: "none",
      onHover: "blue",
    },
  },
});

export default CollapsibleTable;
