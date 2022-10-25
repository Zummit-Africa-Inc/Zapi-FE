import React from "react";
import { makeStyles } from "@mui/styles";
import { blue } from "@mui/material/colors";
import {
  Avatar,
  CardHeader,
  IconButton,
  Paper,
  Box,
  Card,
  CardContent,
  Typography,
  Menu,
  MenuItem,
  Fade,
} from "@mui/material";
import { Animation, MoreVertRounded } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Cookies from "universal-cookie";
import {
  useAppDispatch,
  useAppSelector,
  useFormInputs,
  useHttpRequest,
} from "../hooks";
import { Spinner } from "../assets";
import { removeApi } from "../redux/slices/apiSlice";
import { useContextProvider } from "../contexts/ContextProvider";

interface CardProps {
  id: string;
  name: string;
  description: string;
  createdOn?: string;
}

// const core_url = import.meta.env.VITE_CORE_URL
const core_url = "VITE_CORE_URL";

const DevAPICard: React.FC<CardProps> = ({
  id,
  name,
  description,
  createdOn,
}) => {
  const classes = useStyles();
  const { error, loading, sendRequest } = useHttpRequest();
  const navigate = useNavigate();
  const cookies = new Cookies();
  const profileId = cookies.get("profileId");
  const { triggerRefresh } = useContextProvider();
  const dispatch = useAppDispatch();
  let payload: object;

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDeleteApi = async (e: any) => {
    const headers = { "Content-Type": "application/json" };
    try {
      const data = await sendRequest(
        `/api/${id}?profileId=${profileId}`,
        "del",
        core_url,
        headers
      );
      if (!data || data === undefined) return;
      dispatch(removeApi(id));
      triggerRefresh();
      const { message } = data;
      toast.success(`${message}`);
    } catch (error) {}
  };

  return (
    <Paper className={classes.paper} sx={{ width: "420px", height: "250px"}}>
      <Box sx={{width: "420px", height: "250px"}}>
        <Card variant="outlined" sx={{width: "100%", height: "100%"}}>
          <React.Fragment>
            <CardContent>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: blue[500], mb: 1, mr: 5, ml: -2 }}>
                    <Animation />
                  </Avatar>
                }
                action={
                  <IconButton
                    aria-label="settings"
                    id="menuButton"
                    aria-controls={open ? "cardMenu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}>
                    <MoreVertRounded />
                  </IconButton>
                }
              />

              <Menu
                id="cardMenu"
                MenuListProps={{
                  "aria-labelledby": "menuButton",
                  disablePadding: true,
                }}
                className={classes.menu}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}>
                <MenuItem
                  style={{ backgroundColor: "red", color: "white" }}
                  onClick={handleDeleteApi}>
                  {loading ? <Spinner /> : "Delete"}
                </MenuItem>
              </Menu>

              <Link to={`/developer/api/${id}`} className={classes.link}>
                <h2>{name || "👋 Onboarding Project"}</h2>
                <p>{description.length > 90 ? `${description.substring(0, 90)}...` : description}</p>
              </Link>
            </CardContent>
            <Typography
              variant="subtitle1"
              sx={{ margin: 1.5, marginLeft: 2.5 }}
              color="text.secondary">
              {createdOn?.slice(0, 10) || "Updated"}
            </Typography>
          </React.Fragment>
        </Card>
      </Box>
    </Paper>
  );
};

const useStyles = makeStyles({
  paper: {},
  menu: {
    padding: "1rem 0.5rem",
  },
  link: {
    color: "#081F4A",
    "& h2": {
      fontSize: "18px",
      fontWeight: "500",
      margin: "0 0 0.75rem",
    },
    "& p": {
      margin: "0 0 1rem"
    }
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
});

export default DevAPICard;
