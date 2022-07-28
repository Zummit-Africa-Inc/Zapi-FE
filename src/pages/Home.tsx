import React, { FormEvent, SyntheticEvent, useEffect, useState } from "react";
import { IconButton, Stack, Tab, Tabs, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { CloseOutlined } from "@mui/icons-material";

import { APICard, Navbar, Sidebar, TabPanel } from "../components";
import { useContextProvider } from "../contexts/ContextProvider";
import { APIS } from "../testdata";

const Home:React.FC = () => {
  const classes = useStyles();
  const [tab, setTab] = useState<number>(0);
  const { activeMenu, screenSize, setActiveMenu, setScreenSize } = useContextProvider();

  useEffect(() => {
    const handleScreenResize = () => setScreenSize(innerWidth)
    window.addEventListener('resize', handleScreenResize)
    handleScreenResize()
    return () => window.removeEventListener('resize', handleScreenResize)
  },[]);

  useEffect(() => {
    screenSize <= 900 ? setActiveMenu(false) : null
  },[screenSize]);

  const handleTabSwitch = (e: SyntheticEvent, newValue: number) => {
    setTab(newValue)
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
  }

  return (
    <React.Fragment>
      {/* This is still experimental at the moment it might be moved to App.tsx */}
      {/* This is the drawer itself */}
      <div className={classes.drawer} style={{left: activeMenu ? 0 : "-100%"}}>
        <Stack width="100%" direction="row" alignItems="flex-end" justifyContent="space-between" p={2}>
          <div>
            <img src="/images/zapi-logo.png" alt="zapi-logo" style={{width:30}} />
          </div>
          <IconButton onClick={() => setActiveMenu(false)}>
            <CloseOutlined />
          </IconButton>
        </Stack>
        <Sidebar />
      </div>
      <Navbar title="Welcome to the ZAPI Hub" subtitle="Here you will find our Collection of APIs for developers" />
      <div className={classes.App}>

        {/* section for search */}
        <form onSubmit={handleSubmit} className={classes.search}>
        </form>
        <div className={classes.root}>
          <div className={classes.sidebar}>
            <Sidebar />
          </div>
          <div className={classes.main}>
            <Stack>
              <Tabs value={tab} onChange={handleTabSwitch}>
                <Tab label="Recommended APIs" />
                <Tab label="Popular APIs" />
                <Tab label="Free APIs" />
              </Tabs>
              <Stack mt={2}>
                <TabPanel value={tab} index={0}>
                  <Typography variant="subtitle2" mb={2}>
                    APIS curated by Z-API and recommended  based on functionality offered, performance and support
                  </Typography>
                  <div style={{width:"100%",height:"60vh",display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"center",gap:"1.5rem",overflowY:"scroll",padding:"0.5rem 0"}}>
                    {APIS.map((api) => (
                      <APICard key={api.id} {...api} />
                    ))}
                  </div>
                </TabPanel>
                <TabPanel value={tab} index={1}>
                  <Typography variant="subtitle2" mb={2}>
                    APIs that are popular and frequently used on Z-API.
                  </Typography>
                </TabPanel>
                <TabPanel value={tab} index={2}>
                  <Typography variant="subtitle2" mb={2}>
                    If you're new to Z-API, this collection is a great place to start exploring APIs that are free to test, specifically updated for 2022.
                  </Typography>
                </TabPanel>
              </Stack>
            </Stack>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
};

const useStyles = makeStyles({
  App: {
    height: "83vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    "@media screen and (max-width: 768px)": {
      height: "auto",
    }
  },
  root: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "row",
  },
  search: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "2rem",
    margin: "2rem 0",
    "@media screen and (max-width: 768px)": {
      flexDirection: "column-reverse",
      gap: "1rem",
    }
  },
  sidebar: {
    width: "20%",
    "@media screen and (max-width: 900px)": {
      display: "none",
    }
  },
  main: {
    width: "80%",
    flexGrow: 1,
    background: "#FFF",
  },
  drawer: {
    width: 300,
    height: "100vh",
    background: "#FFF",
    position: "absolute",
    top: 0,
    zIndex: 5,
    borderRight: "1px solid var(--color-primary)",
    transition: "1s all ease"
  },
  formControl: {
    width: 400,
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    background: "#FFF",
    borderRadius: 5,
    padding: "0.25rem 1rem",
    "& input": {
      border: "none",
      outline: "none",
      fontSize: "1rem",
      padding: "0.25rem",
      width: "100%",
      height: 40,
    },
    "& select": {
      border: "none",
      outline: "none",
      fontSize: "1rem",
      padding: "0.25rem",
      width: "100%",
      height: 40,
    },
    "@media screen and (max-width: 768px)": {
      width: "100%",
    },
  }
});

export default Home;