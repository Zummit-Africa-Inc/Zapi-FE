import React, { SyntheticEvent, useState } from "react";
import { Tab, Tabs } from "@mui/material";
import { makeStyles, styled } from "@mui/styles";
import { MdApps, MdBuild } from "react-icons/md";

import NewAPICard from "../components/NewAPICard";
import { useAppSelector } from "../hooks";
import { TabPanel } from "../components";

const APIHubTab:React.FC = ({}) => {
  const classes = useStyles()
  const [tab, setTab] = useState<number>(0)
  const { apis, categories } = useAppSelector(store => store.apis)

  const handleTabChange = (e: SyntheticEvent, value: number) => setTab(value)

  return (
    <div className={classes.container}>
      <div className={classes.list}>
        <StyledTabs orientation="vertical" value={tab} onChange={handleTabChange}>
          {categories.map((category, index) =>  <StyledTab key={index} label={category.name} iconPosition="start" icon={<MdBuild />} />)}
          <StyledTab label="All APIs" iconPosition="start" icon={<MdApps />} />
        </StyledTabs>
      </div>
      <div className={classes.col}>
        <div>
          {categories.map((category, index) => (
            <TabPanel key={index} value={tab} index={index}>
              <>
              <div className={classes.header}>
                <h2>{category.name}</h2>
                <p>{category.description}</p>
              </div>
              <div className={classes.grid}>
                {apis.filter((api => api.categoryId === category.id)).map((api) => <NewAPICard key={api.id} {...api} />)}
              </div>
              </>
            </TabPanel>
          ))}
          <TabPanel value={tab} index={categories.length}>
            <>
            <div className={classes.header}>
              <h2>All APIs</h2>
              <p>List of all public APIs on ZAPI</p>
            </div>
            <div className={classes.grid}>
              {apis.map((api) => <NewAPICard key={api.id} {...api} />)}
            </div>
            </>
          </TabPanel>
        </div>
      </div>
    </div>
  )
}

const StyledTabs = styled(Tabs)({
  width: "320px",
  display: "flex",
  alignItems: "flex-start",
  "& .MuiTabs-indicator": {
    display: "none",
  },
})

const StyledTab = styled(Tab)({
  width: "100%",
  height: "56px",
  display: "flex",
  padding: "16px 28px 16px 40px",
  gap: "16px",
  "&.Mui-selected": {
    background: "#98CDFE",
  },
  "&.MuiButtonBase-root": {
    minHeight: "56px",
    display: "flex",
    justifyContent: "flex-start",
    textTransform: "capitalize",
    borderRadius: "8px 0px 0px 8px",
    padding: "0 0 0 40px"
  },
  "& svg": {
    width: "24px",
    height: "24px",
  }
})

const useStyles = makeStyles({
  container: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 0 236px",
  },
  list: {
    width: "320px",
    height: "1289px",
    display: "flex",
    background: "#EDF5FD",
    boxShadow: "0px 1px 15px rgba(6, 113, 224, 0.2)",
    padding:"28px 0 0",
  },
  col: {
    width: "896px",
    height: "1289px",
    background: "#C5E2FC",
    padding: "0 1rem",
  },
  header: {
    display: "flex",
    flexDirection: "column",
    margin: "32px 0",
    color: "#081F4A",
    positon: "fixed",
    top: 0,
    left: 0,
  },
  grid: {
    width: "100%",
    height: "1150px",
    display: "flex",
    flexWrap: "wrap",
    gap: "1rem",
    padding: "1rem 0",
    overflowY: "scroll",
  }
})

export default APIHubTab