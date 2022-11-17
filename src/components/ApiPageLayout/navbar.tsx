import React, { SyntheticEvent, useState } from "react";
import { Paper, Tab, Tabs, Typography } from "@mui/material";
import { makeStyles, styled } from "@mui/styles";
import { Link } from "react-router-dom";

import {
  SettingsPage,
  Analytics,
  Community,
  EndpointTab,
  GatewayTab,
  GeneralTab,
  Monetize,
  TabPanel,
} from "../";

const CustomTab = styled(Tab)({
  "&.MuiTab-root": {
    textTransform: "none",
  },
});

interface Props {
  id: string | undefined;
}

const Navbar: React.FC<Props> = ({ id }) => {
  const classes = useStyles();
  const [tab, setTab] = useState<number>(0);

  const handleTabChange = (e: SyntheticEvent, newValue: number) => {
    setTab(newValue);
  };

  return (
    <div className={classes.navbar}>
      <>
        <Tabs
          variant="fullWidth"
          className={classes.tabs}
          value={tab}
          onChange={handleTabChange}>
          <Tab label="General" />
          <Tab label="Endpoints" />
          <Tab label="Gateway" />
          <Tab label="Community" />
          <Tab label="Analytics" />
          <Tab label="Settings" />
        </Tabs>
        <div className={classes.tabpanel}>
          <TabPanel value={tab} index={0}>
            <GeneralTab />
          </TabPanel>
          <TabPanel value={tab} index={1}>
            <EndpointTab id={`${id}`} />
          </TabPanel>
          <TabPanel value={tab} index={2}>
            <GatewayTab />
          </TabPanel>
          <TabPanel value={tab} index={3}>
            <Community />
          </TabPanel>
          <TabPanel value={tab} index={4}>
            <Analytics />
          </TabPanel>
          <TabPanel value={tab} index={5}>
            <SettingsPage />
          </TabPanel>
        </div>
      </>
    </div>
  );
};

export default Navbar;

const useStyles = makeStyles({
  paper: {
    width: "950px",
    marginTop: "20px",
  },
  navbar: {
    marginLeft: "250px",
    paddingTop: "1rem",
    paddingBottom: "1rem",
    paddingLeft: "2rem",
    paddingRight: "6rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100vw",
    height: "45px",
    "@media screen and (max-width: 1024px)": {
      marginLeft: "0",
      paddingLeft: "0",
    },
  },
  tabpanel: {
    overflowY: "scroll",
    position: "absolute",
    top: "15%",
  },
  tabs: {
    position: "fixed",
    top: "4.3rem",
    zIndex: 5,
    width: "calc(100% - 300px)",
    background: "#FFFF",
    "@media screen and (max-width: 1024px)": {
      width: "100%",
      fontSize: "1.5rem",
    },
  },
});
