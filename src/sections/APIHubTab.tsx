import React, { SyntheticEvent, useState, useEffect } from "react";
import { Tab, Tabs, Button, Tooltip } from "@mui/material";
import { makeStyles, styled } from "@mui/styles";
import { Apps, Build, CastForEducation, ChatBubble, Layers, Security, LibraryBooks, ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { MdApps, MdBuild } from "react-icons/md";

import APICard from "../components/APICard";
import { useAppSelector } from "../hooks";
import { TabPanel } from "../components";

const APIHubTab:React.FC = ({}) => {
  const classes = useStyles()
  const [tab, setTab] = useState<number>(0)
  const { apis, categories } = useAppSelector(store => store.apis)


  const handleTabChange = (e: SyntheticEvent, value: number) => setTab(value)

  
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const handleSideBarChange = () => {
    if(isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };


  return (
    <div className={classes.container}>
    
      {isOpen ? (
          <div className={classes.list}>
            <StyledTabs orientation="vertical" value={tab} onChange={handleTabChange}>
              {categories.map((category, index) => (
                <StyledTab
                  key={index}
                  label={category.name}
                  iconPosition="start"
                  icon={<Build />}
                />
              ))}
              <StyledTab label="All APIs" iconPosition="start" icon={<Apps />} />
              
            </StyledTabs>
            
            <Tooltip title="Collapse" placement="right" arrow>
              <Button id="collapseButton" onClick={handleSideBarChange}>
                <ArrowBackIos sx={{ marginRight: "-15px", color: "#071B85", width: "21px", height: "auto" }} />
              </Button>
            </Tooltip>
            
          </div>
        ) : (
          <div className={classes.list} style={{ width: "auto", }}>
            <StyledTabs orientation="vertical" value={tab} onChange={handleTabChange}>
              {categories.map((category, index) => (
                <Tooltip title={category.name} placement="right" arrow>
                  <StyledTab
                    key={index}
                    iconPosition="start"
                    icon={<Build />}
                  />
                </Tooltip>  
              ))}
              
              <Tooltip title="All APIs" placement="right" arrow>
                <StyledTab iconPosition="start" icon={<Apps />} />
              </Tooltip>

            </StyledTabs>

            <Tooltip title="Expand" placement="right" arrow>
              <Button id="expandButton" onClick={handleSideBarChange}>
                <ArrowForwardIos sx={{ marginLeft: "-15px", color: "#071B85", width: "21px", height: "auto" }} />
              </Button>
            </Tooltip>
          </div>
        )

      }
    
      <div className={classes.col} style={isOpen ? { width: "70%" } : { width: "89%" } }>
        <div>
          {categories.map((category, index) => (
            <TabPanel key={index} value={tab} index={index}>
              <>
                <div className={classes.header}>
                  <h2>{category.name}</h2>
                  <p>{category.description}</p>
                </div>
                <div className={classes.grid}>
                  {apis
                    .filter((api) => api.categoryId === category.id)
                    .map((api) => (
                      <APICard key={api.id} {...api} />
                    ))}
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
                {apis.map((api) => (
                  <APICard key={api.id} {...api} />
                ))}

              </div>
            </>
          </TabPanel>
        </div>
      </div>

      
    </div>
  )
}

const StyledTabs = styled(Tabs)({
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "flex-start",
  gap: "24px",
  "& .MuiTabs-indicator": {
    display: "none",
  },
})

const StyledTab = styled(Tab)({
  // width: "100%",
  // height: "56px",
  // display: "flex",
  // padding: "16px 28px 16px 40px",
  gap: "16px",
  "&.Mui-selected": {
    backgroundColor: "#DADDE4",
    borderLeft: "2px solid #314298",
    color: "#071B85",
    fontWeight: "bold",
    "& svg": {
      marginLeft: "-1px",
    },
  },
  "&.MuiButtonBase-root": {
    marginBottom: "24px",
    minHeight: "56px",
    display: "flex",
    justifyContent: "flex-start",
    textTransform: "capitalize",
    borderRadius: "0 8px 8px 0",
    // paddingLeft: "10px",
    fontSize: "15px",
    color: "#071B85",
  },
  "& svg": {
    color: "#071B85",
    width: "15px",
    height: "15px",
  }
})

const useStyles = makeStyles({
  container: {
    width: "auto",
    display: "flex",
    gap: "32px",
    margin: "0 0 109px 5rem",
    "@media screen and (max-width: 1024px)": {
      margin: "0 0 109px 2rem",
    },
    "@media screen and (max-width: 770px)": {

    },
    "@media screen and (max-width: 375px)": {
      margin: "0 0 50px 1rem",
    }
    
  },
  list: {
    width: "auto",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    paddingTop:"42px",
  },
  col: {
    borderLeft: "1px solid #c1c1c1",
    padding: "0 1rem 0 37px",
    width: "100%",
    height: "auto",
  },
  header: {
    // position: "fixed",
    display: "flex",
    flexDirection: "column",
    margin: "32px 0",
    color: "#071B85",
    top: 0,
    left: 0,
    "& h1": {
      marginBottom: "3px",
      fontSize: "36px",
    },
    "& p": {
      fontSize: "16px",
    },
  },
  grid: {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    padding: "0 10px 0 0",
    width: "auto",
    maxHeight: "470px",
    overflowY: "scroll",
  }
})

export default APIHubTab
