import React from "react";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import {
  CalendarMonth,
  AccountCircle,
  MoreHorizRounded
} from "@mui/icons-material";

import { useContextProvider } from "../contexts/ContextProvider";
import { getSubscribedApis } from "../redux/slices/userSlice";
import { getApis } from "../redux/slices/apiSlice";
import { FeedbackProps } from "../interfaces";
import { Spinner } from "../assets";


const FeedbackCard: React.FC<FeedbackProps> = ({
  name,
  email,
  body,
  createdOn
}) => {
  const classes = useStyles();


  return (
    <Box className={classes.card}>
        <Box className={classes.icon}>
          <AccountCircle />
        </Box>

        <Box className={classes.body}>
          
          <Box sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            "& svg": {
              fontSize: "22px",
              color: "#071B85",
            }
          }}>
            <Box>
              <Typography component="h4">{name || "Name"}</Typography>
              <Typography style={{ marginTop: "-10px", fontSize: "14px"}}>{email || "email@example.com"}</Typography>
            </Box>
            <MoreHorizRounded />
          </Box>

          <Typography component="p" style={{ marginTop: "-9px", fontSize: "16px", color: "#071B85", width: "93%" }}>
            {body || "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
          </Typography>
          <Box sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-end",
            gap: ".2rem",
            marginTop: "30px",
            "& h5": {
              color: "#071B85",
              fontSize: "13px",
              fontWeight: "bold",
            },
            "& svg": {
              fontSize: "22px",
              color: "#071B85",
            }
          }}>
            <CalendarMonth />
            <Typography component="h5">{createdOn || "Today"}</Typography>
          </Box>
        </Box>

    </Box>
  );
};

const useStyles = makeStyles({
  card: {
    userSelect: "none",
    position: "relative",
    display: "flex",
    flexDirection: "row",
    gap: "1.5rem",
    background: "#fff",
    border: "1px solid #071B85",
    boxSizing: "border-box",
    padding: "28px 29px 40px 35px",
    width: "100%",
    height: "auto",
    borderRadius: "7px",
    transition: "ease-in-out all 0.3s",
    "&:hover": {
      boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.25)",
    },
    "@media screen and (max-width: 820px)": {
      marginLeft: "-20px",
      scale: 0.9,
    },
    "@media screen and (max-width: 430px)": {
      scale: 0.85,
    },
  },
  icon: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "13px",
    backgroundColor: "#253480",
    borderRadius: "50%",
    width: "36px",
    height: "36px",
    "& svg": {
      fontSize: "36px",
      color: "#fff",
    }
  },
  subscribe: {
    cursor: "pointer",
    color: "#515D99",
    width: "17px",
    height: "auto",
  },
  body: {
    width: "100%",
    "& h4": {
      marginBottom: "10px",
      fontWeight: "bold",
      fontSize: "19px",
      color: "#071B85",
    },
    "& p": {
      fontSize: "12px",
      color: "#4554A3",
    },
  },
  bottomBar: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "20px",
  },
  item: {
    display: "flex",
    alignItems: "center",
    gap: "2px",
  },
  itemIcon: {
    color: "#515D99",
  },
  itemTitle: {
    fontSize: "10px",
    color: "#515D99",
  },
  spinner: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    display: "grid",
    placeItems: "center",
    background: "rgba(14, 36, 78, 0.5)",
    zIndex: 2,
    borderRadius: "0.5rem",
  },
});

export default FeedbackCard;
