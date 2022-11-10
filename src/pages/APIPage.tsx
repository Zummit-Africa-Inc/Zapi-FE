import React, { SyntheticEvent, useState } from "react";
import { useParams } from "react-router-dom";
import { Avatar, Tab, Tabs } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { AccessTimeOutlined, DoneOutlined, TrendingUpOutlined } from "@mui/icons-material";

import { Navbar, TabPanel, SplitView } from "../components";
import { APIS } from "../testdata";
import {HomeNavbar,Footer} from '../sections';
import {Discussion} from '../components';

const APIPage: React.FC = () => {
  const id = useParams().id
  const classes = useStyles()
  const [tab, setTab] = useState<number>(0)
  const api = APIS.find(api => api.id === id)

  const handleChange = (e: SyntheticEvent, newValue: number) => setTab(newValue)

  return (
    <div className={classes.apiPage}>
      <HomeNavbar />
      <div className={classes.container}>
        <div className={classes.flex}>
          <div><Avatar src={api?.image} variant="square" />{api?.name}</div>
          <div>Popularity {api?.popularity}/10</div>
          <div>Service Level {api?.service_level}%</div>
          <div>Latency {api?.latency}ms</div>
        </div>
        <div className={classes.tabs}>
          <Tabs value={tab} onChange={handleChange}>
            <Tab label="Documentations" />
            <Tab label="About" />
            <Tab label="Tutorials" />
            <Tab label="Discussions" />
            <Tab label="Pricing" />
          </Tabs>
        </div>
        <div className={classes.tabpanel}>
          <TabPanel index={0} value={tab}>
            <div className={classes.content}>
              <h4>{api?.name} Documentation</h4>
              <p>{api?.description}</p>
              <SplitView />
            </div>
          </TabPanel>
          <TabPanel index={1} value={tab}>
            <div className={classes.content}>
              <p>About</p>
            </div>
          </TabPanel>
          <TabPanel index={2} value={tab}>
            <div className={classes.content}>
              <p>Tutorials</p>
            </div>
          </TabPanel>
          <TabPanel index={3} value={tab}>
            <div className={classes.content}>
              <p>Discussions</p>
            </div>
          </TabPanel>
          <TabPanel index={4} value={tab}>
            <div className={classes.content}>
              <p>Pricing</p>
            </div>
          </TabPanel>
        </div>
      </div>
      <Discussion/>
      <Footer />
    </div>
  )
}

const useStyles = makeStyles({
  apiPage: {
    height: "100%",
    width: "100%",
    fontFamily: "Space Grotesk, sans-serif",
    background: "#fff",
  },
  container: {
    width: "100%",
    display: "grid",
    placeItems: "center",
    padding: "1rem 2rem 0",
    background: "#FFF",
  },
  flex: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    "& div": {
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
      fontSize: "1.5rem",
    }
  },
  tabs: {
    width: "100%",
    display: "grid",
    placeItems: "center",
    background: "#CECECE",
    margin: "2rem 0 0",
    "& button": {
      textTransform: "capitalize",
      fontSize: "1rem"
    },
  },
  tabpanel: {
    width: "100%",
    height: "100%",
    minHeight: "67vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: "#FFF",
    margin: "0.5rem 0",
  },
  content: {
    width: "100%",
    textAlign: "left",
    "& h4": {
      letterSpacing: "1px",
      margin: "1rem 0"
    }
  }
})

export default APIPage