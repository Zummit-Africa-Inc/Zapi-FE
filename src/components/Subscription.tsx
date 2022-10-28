import { makeStyles } from "@mui/styles";
import {
  TableBody,
  TableHead,
  TableCell,
  TableRow,
  Typography,
  Table,
  Button,
} from "@mui/material";
import { useAppSelector, useHttpRequest } from "../hooks";
import { tableCellClasses } from "@mui/material/TableCell";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import {
  ContentCopy,
  ContentCopyOutlined,
  Unsubscribe,
} from "@mui/icons-material";
import { SyntheticEvent, useState } from "react";
import Cookies from "universal-cookie";

const url = "VITE_IDENTITY_URL";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#081f4A",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
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

const Subscription: React.FC = () => {
  const { subscribedApis } = useAppSelector((store) => store.user);
  const classes = useStyles();
  const { error, loading, sendRequest } = useHttpRequest();
  const [copied, setCopied] = useState<boolean>(false);
  const cookies = new Cookies();

  const profileId = cookies.get("profileId");

  const revoke = async (e: SyntheticEvent, apiId: string) => {
    e.preventDefault();

    const headers = { "Content-Type": "application/json" };
    try {
      const response = await sendRequest(
        `/subscription/revoke/${apiId}?profileId=${profileId}`,
        "post",
        url,
        headers
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const unsubscribe = async (e: SyntheticEvent, apiId: string) => {
    e.preventDefault();

    const headers = { "Content-Type": "application/json" };
    try {
      const response = await sendRequest(
        `/subscription/revoke/${apiId}?profileId=${profileId}`,
        "post",
        url,
        headers
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  const copyButton = (e: SyntheticEvent, token: string) => {
    navigator.clipboard.writeText(token);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };
  return (
    <div>
      {subscribedApis.length !== 0 ? (
        <div className={classes.subTable}>
          <Table>
            <TableHead>
              <TableRow className={classes.root}>
                <StyledTableCell>Name</StyledTableCell>
                <StyledTableCell>Token</StyledTableCell>
                <StyledTableCell></StyledTableCell>
                <StyledTableCell></StyledTableCell>
                <StyledTableCell></StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {subscribedApis?.map((api, index) => (
                <StyledTableRow key={index}>
                  <StyledTableCell>{api.name}</StyledTableCell>
                  <StyledTableCell>
                    {"..." + api.token.slice(217, 280)}{" "}
                    {copied === false ? (
                      <Button onClick={(e) => copyButton(e, api.token)}>
                        <ContentCopy />
                      </Button>
                    ) : (
                      <Button>Copied!</Button>
                    )}
                  </StyledTableCell>
                  <StyledTableCell style={{ width: 50 }}>
                    <Link to="#" className={classes.Link}>
                      View
                    </Link>
                  </StyledTableCell>
                  <StyledTableCell style={{ width: 50 }}>
                    <button
                      className={classes.button}
                      onClick={(e) => unsubscribe(e, api.apiId)}>
                      Unsubscribe
                    </button>
                  </StyledTableCell>
                  <StyledTableCell style={{ width: 50 }}>
                    <button
                      className={classes.button}
                      onClick={(e) => revoke(e, api.apiId)}>
                      Revoke
                    </button>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      ) : (
        <div className={classes.addApiDesc}>
          <Typography
            gutterBottom
            variant="subtitle1"
            sx={{
              color: "#000000",
              fontFamily: "Space Grotesk",
              fontWeight: 700,
              fontSize: "18px",
              lineHeight: "30px",
              textAlign: "center",
              marginTop: "116px",
            }}>
            You have not subscribed to any API Project
          </Typography>
          <Typography
            gutterBottom
            variant="subtitle1"
            sx={{
              color: "#000000",
              fontFamily: "Space Grotesk",
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "30px",
              textAlign: "center",
              marginTop: "16px",
            }}>
            Visit the Hub to subscribe to an API
          </Typography>
        </div>
      )}
    </div>
  );
};

export default Subscription;

const useStyles = makeStyles({
  subTable: {
    margin: "2rem auto 0 auto",
    padding: "0",
    width: "90%",
  },
  root: {
    "& .MuiTableCell-head": {
      color: "white",
      backgroundColor: "#081f4A",
    },
  },
  Link: {
    padding: "10px",
    borderRadius: "5px",
    background: "#058A04",
    color: "#fff",
    pointer: "cursor",
  },
  addApiDesc: {
    marginTop: "20px",
    paddingBottom: "80px",
    height: "calc(100vh - 315px)",
  },
  button: {
    background: "#E32C08",
    color: "white",
  },
});
