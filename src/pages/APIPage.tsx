import React, { SyntheticEvent, useState } from "react";
import { useParams } from "react-router-dom";
import { Tab, Tabs } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { AccessTimeOutlined, DoneOutlined, TrendingUpOutlined } from "@mui/icons-material";

import { TabPanel } from "../components";
import { useAppSelector } from "../hooks";
import { Footer, HomeNavbar } from "../sections";
import APIPageHeader from "../components/APIPageHeader";
import APIPageEndpoints from "../components/APIPageEndpoints";

const APIPage: React.FC = () => {
  const { id } = useParams()
  const classes = useStyles()
  const [tab, setTab] = useState<number>(0)
  const [endpoints, setendpoints] = useState<Array<any>>([])
  const { apis } = useAppSelector(store => store.apis)
  const api = apis.find(api => api.id === id)
  if(api?.endpoints) setendpoints(api.endpoints)

  const handleTabChange = (e: SyntheticEvent, newValue: number) => setTab(newValue)

  return (
    <>
    <HomeNavbar />
    <div className={classes.container}>
      <APIPageHeader {...api} />
      <div className={classes.wrapper}>
        <Tabs value={tab} onChange={handleTabChange} className={classes.tabs}>
          <Tab label="Pricing" />
          <Tab label="Endpoints" />
          <Tab label="Documentation" />
          <Tab label="Tutorials" />
        </Tabs>
        <div className={classes.tabpanel}>
          <TabPanel value={tab} index={0}>
            Pricing
          </TabPanel>
          <TabPanel value={tab} index={1}>
            <APIPageEndpoints endpoints={endpoints} />
          </TabPanel>
          <TabPanel value={tab} index={2}>
            Documentation
          </TabPanel>
          <TabPanel value={tab} index={3}>
            Tutorials
          </TabPanel>
        </div>
      </div>
    </div>
    <Footer />
    </>
  )
}

const useStyles = makeStyles({
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    padding: "112px 0 0",
    background: "#FFF",
  },
  wrapper: {
    width: "100%",
    height: "100%",
    minHeight: "67vh",
    background: "#EDF5FD",
  },
  tabs: {
    width: "100%",
    margin: "0 0 1rem",
  },
  tabpanel: {}
})

export default APIPage