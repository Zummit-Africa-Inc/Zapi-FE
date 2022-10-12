import React, { ChangeEvent, FormEvent, SyntheticEvent, useEffect, useState } from "react";
import { IconButton, Stack, Tab, Tabs, Typography } from "@mui/material";
import { CloseOutlined } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";

import { DevAPICard, TabPanel } from "../components";
import { useContextProvider } from "../contexts/ContextProvider";
import { useAppSelector } from "../hooks";
import { HomeNavbar } from "../sections";

const data = ["Name","Id","Desc"]

const Home:React.FC = () => {
  const classes = useStyles();
  const [tab, setTab] = useState<number>(0);
  const [queryString, setQueryString] = useState<string>("")
  const [queryParam, setQueryParam] = useState<string>("")
  const { activeMenu, screenSize, setActiveMenu, setScreenSize } = useContextProvider();
  const { apis } = useAppSelector(store => store.apis)

  useEffect(() => {
    const handleScreenResize = () => setScreenSize(innerWidth)
    window.addEventListener('resize', handleScreenResize)
    handleScreenResize()
    return () => window.removeEventListener('resize', handleScreenResize)
  },[]);

  useEffect(() => {
    screenSize <= 900 ? setActiveMenu(false) : null
  },[screenSize]);

  const handleTabSwitch = (e: SyntheticEvent, newValue: number) => setTab(newValue)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
  }

  return (
    <>
    <HomeNavbar />
    <div className={classes.container}>
      <div className={classes.title}>
        <p>Welcome to the Z-API hub</p>
        <span>Discover and connect to hundreds of APIs</span>
      </div>
      <div className={classes.main}>
        <div className={classes.box}>
          {/* {apis.map((api) => ())} */}
        </div>
        <div className={classes.grid}></div>
      </div>
    </div>
    </>
  )
};

const useStyles = makeStyles({
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "112px 0 0",
    background: "#FFF",
  },
  title: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    boxShadow: "0px 4px 4px rgba(6, 113, 224, 0.05)",
    color: "#071B85",
    "& p": {
      fontStyle: "normal",
      fontWeight: 700,
      fontSize: "36px",
      lineHeight: "46px",
      margin: "76px 0  50px",
    },
    "& span": {
      fontWeight: 400,
      fontSize: "24px",
      lineHeight: "40px",
      margin: "0 0 49px",
    }
  },
  main: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    padding: "60px 0",
  },
  grid: {
    width: "896px",
    background: "#EDF5FD",
  },
  box: {
    width: "320px",
    height: "379px",
    background: "#FFF",
    boxShadow: "0px 1px 15px rgba(6, 113, 224, 0.2)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  }
});

export default Home;