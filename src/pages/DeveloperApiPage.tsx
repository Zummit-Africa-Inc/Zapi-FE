import React, { useEffect } from "react";
import { makeStyles } from "@mui/styles";
import { useNavigate, useParams } from "react-router-dom";

import { ApiPageLayout, DevNavbar } from "../components";
import { useAppSelector } from "../hooks";
import ErrorPage from "./ErrorPage";
import ReactGA from "react-ga4";

const DeveloperApiPage: React.FC = () => {
  const classes = useStyles();
  const { id } = useParams();
  const navigate = useNavigate();
  const { userApis } = useAppSelector((store) => store.user);
  const api = userApis.find((api) => api?.id === id);

  ReactGA.send({ hitType: "pageview", page: "/developer/api/id" });

  if (api === undefined) {
    return <ErrorPage />;
  }

  return (
    <div className={classes.root}>
      <div className={classes.subRoot}>
        <div className={classes.minRoot}>
          <DevNavbar />
          <ApiPageLayout id={id} />
        </div>
      </div>
    </div>
  );
};

const useStyles = makeStyles({
  root: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
  },
  subRoot: {
    display: "flex",
    flexDirection: "column",
    minHeight: " 100%",
    height: "100%",
  },
  minRoot: {
    display: "flex",
    flexDirection: "column",
    minHeight: " 100%",
    height: " 100%",
  },
  mainWrap: {
    display: "flex",
    flex: "1",
    backgroundColor: "#ffff",
  },

  main: {
    padding: "16px",
    overFlow: "hidden",
    height: "100%",
    flexShrink: "0",
    boxSizing: "border-box",
    display: "flex",
    width: "240px",
    flexDirection: "column",
    borderRight: "1px solid rgb(214, 217, 219)",
    alignContent: "space-around",
    transition: "width 0.1s linear 0s",
  },
});

export default DeveloperApiPage;
