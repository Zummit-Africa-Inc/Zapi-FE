import React, { SyntheticEvent, useState, useEffect,FormEvent } from "react";
import { Tab, Tabs, Button, Tooltip } from "@mui/material";
import { makeStyles, styled } from "@mui/styles";
import { Apps, Build, School, ChatBubble, Layers, Security, LibraryBooks, SportsFootball, AirplanemodeActive, AttachMoney, DataArray, ArrowBackIos, ArrowForwardIos, Science, MusicNote, FormatColorText, Cloud, Lightbulb } from "@mui/icons-material";
import { MdApps, MdBuild } from "react-icons/md";

import APICard from "../components/APICard";
import { useAppDispatch,useAppSelector,useHttpRequest } from "../hooks";
import { ApiHubTabPanel } from "../components";


interface Props {
  categoryId:string
}

const APIHubTab:React.FC<Props> = () => {
  const classes = useStyles()
  const [tab, setTab] = useState<number>(0)
  const [categoryId, setCategoryId] = useState<string>("")
  const [categoryAPIS, setCategoryAPIS] = useState<Array<any>>([])
  // const [categoryId, setCategoryId] = useState<String>("");
  const dispatch = useAppDispatch();
  const { apis, categories } = useAppSelector(store => store.apis)
  const { error, loading, sendRequest } = useHttpRequest();
  const core_url = import.meta.env.VITE_CORE_URL;

  
  
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [isSlide, setIsSlide] = useState<boolean>(true);
  const payload = {}
  const handleSideBarChange = () => {
    if(isOpen) {
      if(isSlide)
        setIsOpen(false);
    } else {
      if(isSlide)
      setIsOpen(true);
    }
  };

  const handleSelector = async (e: FormEvent) => {
    categories.map(category => category.categoryId);
    e.preventDefault();
    const headers = {
      "Content-Type": "application/json",
    };
    try {
      const data = await sendRequest(
        `/categories/${categoryId}/apis`,
        "get",
        core_url,
        payload,
        headers
        );
        if (!data.success) return;
        // dispatch(editAPI(payload));
        // navigate("/developer/dashboard");
      } catch (error) {}
    }
    
    const handleTabChange = (e: SyntheticEvent, value: number) => { 
      setTab(value)
    }
    window.addEventListener("resize", () => {
      if(window.innerWidth <= 580) {
        setIsOpen(false);
        setIsSlide(false);
      } else {
        setIsOpen(false);
        setIsSlide(true);
      }
    })

  let icons: any = {
    "Popular": <LibraryBooks />,
    "Safety": <Layers/>,
    "Security": <Security/>,
    "Customer Service": <ChatBubble/>,
    "General": <Lightbulb/>,
    "Sports": <SportsFootball/>,
    "Travel": <AirplanemodeActive/>,
    "Finance": <AttachMoney/>,
    "Educational": <School/>,
    "Data": <DataArray/>,
    "Science": <Science/>,
    "Music": <MusicNote/>,
    "Tools": <Build/>,
    "Text analysis": <FormatColorText/>,
    "Weather": <Cloud/>,
    "All APIs": <Apps/>,
  }

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
                  icon={icons[category.name]}
                />
              ))}

              <StyledTab label="All APIs" iconPosition="start" icon={icons["All APIs"]} />
              
            </StyledTabs>
            
            <Tooltip title="Collapse" placement="right" arrow>
              <Button id="collapseButton" onClick={handleSideBarChange}>
                <ArrowBackIos sx={{ color: "#071B85", width: "18px", height: "auto" }} />
              </Button>
            </Tooltip>
            
          </div>
        ) : (
          <div className={classes.list} style={{ display: "flex", alignItems: "center", width: "auto", }}>
            <StyledTabs orientation="vertical" value={tab} onChange={handleTabChange}>
              {categories.map((category, index) => (
                <Tooltip title={category.name} placement="right" arrow>
                  <StyledTab
                    key={index}
                    iconPosition="start"
                    icon={icons[category.name]}
                    />
                </Tooltip>  
              ))}
              
              
              <Tooltip title="All APIs" placement="right" arrow>
                <StyledTab iconPosition="start" icon={<Apps />} />
              </Tooltip>

            </StyledTabs>

            <Tooltip title="Expand" placement="right" arrow>
              {isSlide ? (
                <Button id="expandButton" onClick={handleSideBarChange} sx={{width: "100%"}}>
                  <ArrowForwardIos sx={{ marginLeft: "12px", color: "#071B85", width: "18px", height: "auto" }} />
                </Button>

                ) : (
                  <></>
                )

              }
            </Tooltip>
          </div>
        )

      }
    
      <div className={classes.col} style={isOpen ? { width: "70%" } : { width: "89%" } }>
        <div>
          {categories.map((category, index) => (
            <ApiHubTabPanel key={index} value={tab} index={index} categoryId={category.id}>
              <>
                <div className={classes.header}>
                  <h2>{category.name}</h2>
                  <p>{category.description}</p>
                </div>
                <div className={classes.grid}>
                  {apis
                    
                    .map((api) => (
                      <APICard key={api.id} {...api} />
                    ))}
                </div>
              </>
            </ApiHubTabPanel>
          ))}
          <ApiHubTabPanel categoryId={categoryId} value={tab} index={categories.length}>
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
          </ApiHubTabPanel>
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
  "@media screen and (max-width: 400px)": {
    width: "50px",
  },
})

const StyledTab = styled(Tab)({
  gap: "16px",
  "&.Mui-selected": {
    backgroundColor: "#DADDE4",
    borderLeft: "2px solid #314298",
    color: "#071B85",
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
    textAlign: "left",
    borderRadius: "0 8px 8px 0",
    paddingLeft: "40px",
    fontSize: "15px",
    color: "#071B85",
    "@media screen and (max-width: 990px)": {
      fontSize: "13px",
    },
    "@media screen and (max-width: 820px)": {
      fontSize: "12px",
    },
    "@media screen and (max-width: 500px)": {
      justifyContent: "center",
      minHeight: "40px",
      padding: "0",
    },
    "@media screen and (max-width: 400px)": {
      justifyContent: "flex-start",
      paddingLeft: "18px"
    },
    
  },
  "& svg": {
    color: "#071B85",
    width: "22px",
    height: "22px",
    "@media screen and (max-width: 990px)": {
      width: "20px",
      height: "20px",
    },
    "@media screen and (max-width: 820px)": {
      width: "18px",
      height: "18px",
    },
    "@media screen and (max-width: 400px)": {
      width: "16px",
      height: "16px",
    },
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
    "@media screen and (max-width: 900px)": {
      
    },
    "@media screen and (max-width: 820px)": {
      gap: "22px",
      
    },
    "@media screen and (max-width: 770px)": {

    },
    "@media screen and (max-width: 375px)": {
      margin: "0 0 50px 1rem",
    }
    
  },
  list: {
    width: "320px",
    height: "auto",
    // maxHeight: "470px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    backgroundColor: "#fff",
    paddingTop:"42px",
    overflowY: "scroll",
    "@media screen and (max-width: 500px)": {
      width: "100%",
    },
  },
  col: {
    borderLeft: "1px solid #c1c1c1",
    padding: "0 1rem 0 37px",
    width: "100%",
    height: "auto",
    "@media screen and (max-width: 900px)": {

    },
    "@media screen and (max-width: 820px)": {
      padding: "0 1rem 0 22px",
      
    },
    "@media screen and (max-width: 500px)": {
      border: "unset",
      padding: "0 1rem 0 0",
      
    },
  },
  header: {
    display: "flex",
    flexDirection: "column",
    margin: "32px 0",
    color: "#071B85",
    top: 0,
    left: 0,
    "& h2": {
      marginBottom: "3px",
      fontSize: "22px",
      "@media screen and (max-width: 820px)": {
        fontSize: "20px",
      },
    },
    "& p": {
      fontSize: "14px",
      "@media screen and (max-width: 820px)": {
        fontSize: "12px",
      },
    },
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gridTemplateRows: "240px",
    // flexWrap: "wrap",
    gap: "20px",
    marginLeft: "-11px",
    padding: "0 10px 0 0",
    width: "auto",
    height: "1250px",
    overflowY: "scroll",
    overflowX: "hidden",
    "@media screen and (max-width: 820px)": {
      gap: "0",
    },
    "@media screen and (max-width: 430px)": {
      margin: "-20px"
    },
  }
})

export default APIHubTab
