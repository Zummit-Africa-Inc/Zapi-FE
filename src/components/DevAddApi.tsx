import React, { ChangeEvent, FormEvent, SyntheticEvent, useState } from "react";
import { makeStyles, styled } from "@mui/styles";
import InputSearch from "./InputSearch";
import { Tab, Tabs, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import { useContextProvider } from "../contexts/ContextProvider";
import TabPanel from "./TabPanel";
import APILayout from "./APILayout";
import Subscription from "./Subscription";
import { Grade, Loyalty } from "@mui/icons-material";

const CustomTabs = styled(Tabs)({
  "& .MuiTabs-indicator": {
    display: "none",
  },
});

const CustomTab = styled(Tab)({
  width: "190px",
  "&.MuiTab-wrapper": {
    height: "45px",
  },
  "&.Mui-selected": {
    backgroundColor: "#081f4A",
    borderRadius: "10px",
    color: "white !important",
  },
});

const DevAddApi: React.FC = () => {
  const [queryString, setQueryString] = useState<string>("");
  const { handleClicked } = useContextProvider();
  const [tab, setTab] = useState<number>(0);
  const classes = useStyles();

  const handleTabChange = (e: SyntheticEvent, newValue: number) => {
    setTab(newValue);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className={classes.bodyColor}>
      <div className={classes.body}>
        <div className={classes.switch1}>
          <div className={classes.widget1}>
            <form onSubmit={handleSubmit} className={classes.search}>
              <InputSearch
                className={classes.formControl}
                type="text"
                name="queryString"
                value={queryString}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setQueryString(e.target.value)
                }
                placeholder="Search API Projects"
              />
            </form>
          </div>
          <div className={classes.widget2}>
            <CustomTabs
              sx={{
                height: "46px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "10px",
                background: "white",
                color: "black",
              }}
              value={tab}
              indicatorColor="primary"
              textColor="inherit"
              onChange={handleTabChange}>
              <CustomTab
                icon={<Grade />}
                iconPosition="start"
                label="My APIS"
              />
              <CustomTab
                icon={<Loyalty />}
                iconPosition="start"
                label="Subscriptions"
              />
            </CustomTabs>
          </div>
          <div>
            <button
              className={classes.button}
              onClick={() => handleClicked("addapi")}
              style={{ height: "46px" }}>
              <AddIcon /> <Typography>Add API Project</Typography>
            </button>
          </div>
        </div>

        <div className={classes.switch2}>
          <div className={classes.widget1}>
            <form onSubmit={handleSubmit} className={classes.search}>
              <InputSearch
                className={classes.formControl}
                type="text"
                name="queryString"
                value={queryString}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setQueryString(e.target.value)
                }
                placeholder="Search API Projects"
              />
            </form>
          </div>
          <div>
            <button
              className={classes.button}
              onClick={() => handleClicked("addapi")}
              style={{ height: "46px" }}>
              <AddIcon /> <Typography>Add API Project</Typography>
            </button>
          </div>
          <div className={classes.widget2}>
            <CustomTabs
              sx={{
                height: "46px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "10px",
              }}
              value={tab}
              onChange={handleTabChange}>
              <CustomTab
                icon={<Grade />}
                iconPosition="start"
                label="My APIS"
              />
              <CustomTab
                icon={<Loyalty />}
                iconPosition="start"
                label="Subscriptions"
              />
            </CustomTabs>
          </div>
        </div>
      </div>
      <div>
        <TabPanel value={tab} index={0}>
          <APILayout />
        </TabPanel>
        <TabPanel value={tab} index={1}>
          <Subscription />
        </TabPanel>
      </div>
    </div>
  );
};

const useStyles = makeStyles({
  body: {
    zIndex: 30,
    width: "100%",
    marginTop: "6rem",
    marginBottom: "2rem",
    background: "white",
    fontFamily: "Space Grotesk",
  },
  bodyColor: {
    background: "#fff",
    padding: "0 3rem",
    height: "auto",
  },
  widget1: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
  },
  switch1: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "1rem",

    "@media screen and (max-width: 920px)": {
      display: "flex",
      flexDirection: "column",
      margin: "3rem 0",
    },
  },
  switch2: {
    display: "none",
  },
  widget2: {
    border: "1px solid whitesmoke",
    borderRadius: "10px",
  },
  rightText: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "8px 16px",
    margin: "-35px 30px",
    width: "130px",
    height: "46px",
    background: "#d8d8d8",
    borderTop: "1px solid #8C8C8C",
    borderBottom: "1px solid #8C8C8C",
    borderRight: "1px solid #8C8C8C",
    borderRadius: "0px 8px 8px 0px",
  },
  search: {
    // width: "149px",
    height: "30px",
    fontFamily: "Space Grotesk",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "30px",
    display: "flex",
    alignItems: "center",
    color: "#d1d1d1",
    backgroundColor: "#fff",
  },
  formControl: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: "8px 64px 8px 16px",
    gap: "16px",
    width: "250px",
    height: "46px",
    background: "#E1E1E2",
    borderRadius: "8px",
    "& input": {
      width: 250,
      height: "100%",
      outline: "none",
      border: "none",
      backgroundColor: "rgba(255, 255, 255, 0)",
    },
    "& select": {
      width: 100,
      height: "100%",
      outline: "none",
      border: "none",
    },
    "& ::placeHolder": {
      fontFamily: "Space Grotesk",
    },
  },
  button: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: "8px 16px",
    gap: "16px",
    width: "190px",
    lineHeight: "46px",
    background: "#eaefff",
    borderRadius: "12px",
    cursor: "pointer",
    color: "#0e93ff",
    border: "none",
    fontWeight: "500",
    fontSize: "16px",
    "&:hover": {
      color: "#f5f5ff",
      background: "#003780",
      transition: "ease-in-out all 0.3s",
    },
  },
});

export default DevAddApi;
