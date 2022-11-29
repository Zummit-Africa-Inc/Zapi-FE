import React, { SyntheticEvent, useState, useEffect } from "react";
import { Tab, Tabs, Button, Tooltip, Box } from "@mui/material";
import { makeStyles, styled } from "@mui/styles";
import { toast } from "react-toastify";
import {
  Apps,
  Build,
  School,
  ChatBubble,
  Layers,
  Security,
  LibraryBooks,
  SportsFootball,
  AirplanemodeActive,
  AttachMoney,
  DataArray,
  ArrowBackIos,
  ArrowForwardIos,
  Science,
  MusicNote,
  FormatColorText,
  Cloud,
  Lightbulb,
} from "@mui/icons-material";
import APICard from "../components/APICard";
import { useAppSelector, useHttpRequest } from "../hooks";
import { TabPanel, Fallback } from "../components";

const default_url = import.meta.env.VITE_DEFAULT_CATEGORY_ID;

const core_url = "VITE_CORE_URL";
const APIHubTab: React.FC = () => {
  const classes = useStyles();
  const [tab, setTab] = useState<any>();
  const [categoryId, setCategoryId] = useState<string>(default_url);
  const { categories } = useAppSelector((store) => store.apis);
  const { error, loading, sendRequest } = useHttpRequest();
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [isSlide, setIsSlide] = useState<boolean>(true);
  const [categoryApis, setCategoryApis] = useState<any>([]);
  const [value, setValue] = useState(0);
  const [APIs, setAPIs] = useState<any>([]);
  const handleSideBarChange = () => {
    if (isOpen) {
      if (isSlide) setIsOpen(false);
    } else {
      if (isSlide) setIsOpen(true);
    }
  };

  const handleTabChange = (e: SyntheticEvent, value: any) => {
    setCategoryId(value);
  };

  const headers = {
    "Content-Type": "application/json",
  };

  const handleSelector = async (id: any) => {
    if (categoryId === null || undefined) return;
    try {
      const res = await sendRequest(
        `/categories/${id}/apis`,
        "get",
        core_url,
        undefined,
        headers
      );
      setCategoryApis(res);
    } catch (error) {}
  };
  useEffect(() => {
    handleSelector(categoryId);
  }, [categoryId]);

  useEffect(() => {
    error && toast.error(`${error}`);
  }, [error]);

  window.addEventListener("resize", () => {
    if (window.innerWidth <= 580) {
      setIsOpen(false);
      setIsSlide(false);
    } else {
      setIsOpen(false);
      setIsSlide(true);
    }
  });

  let icons: any = {
    Popular: <LibraryBooks />,
    Safety: <Layers />,
    Security: <Security />,
    "Customer Service": <ChatBubble />,
    General: <Lightbulb />,
    Sports: <SportsFootball />,
    Travel: <AirplanemodeActive />,
    Finance: <AttachMoney />,
    Educational: <School />,
    Data: <DataArray />,
    Science: <Science />,
    Music: <MusicNote />,
    Tools: <Build />,
    "Text analysis": <FormatColorText />,
    Weather: <Cloud />,
    All: <Apps />,
  };

  return (
    <Box className={classes.container}>
      {loading && <Fallback />}
      {isOpen ? (
        <Box className={classes.list}>
          <StyledTabs
            orientation="vertical"
            value={categoryId}
            onChange={handleTabChange}>
            {categories.map((category, index) => (
              <StyledTab
                key={category.id}
                label={category.name}
                value={category.id}
                iconPosition="start"
                icon={icons[category.name]}
              />
            ))}
          </StyledTabs>

          <Tooltip title="Collapse" placement="right" arrow>
            <Button id="collapseButton" onClick={handleSideBarChange}>
              <ArrowBackIos
                sx={{ color: "#071B85", width: "18px", height: "auto" }}
              />
            </Button>
          </Tooltip>
        </Box>
      ) : (
        <div
          className={classes.list}
          style={{ display: "flex", alignItems: "center", width: "auto" }}>
          <StyledTabs
            orientation="vertical"
            value={categoryId}
            onChange={handleTabChange}>
            {categories.map((category, index) => (
              <Tooltip
                key={index}
                title={category.name}
                placement="right"
                arrow>
                <StyledTab
                  key={index}
                  iconPosition="start"
                  icon={icons[category.name]}
                  value={category.id}
                />
              </Tooltip>
            ))}
          </StyledTabs>

          <Tooltip title="Expand" placement="right" arrow>
            {isSlide ? (
              <Button
                id="expandButton"
                onClick={handleSideBarChange}
                sx={{ width: "100%" }}>
                <ArrowForwardIos
                  sx={{
                    marginLeft: "12px",
                    color: "#071B85",
                    width: "18px",
                    height: "auto",
                  }}
                />
              </Button>
            ) : (
              <></>
            )}
          </Tooltip>
        </div>
      )}

      <div
        className={classes.col}
        style={isOpen ? { width: "100%" } : { width: "89%" }}>
        <div>
          {categories.map((category: any, index: number) => (
            <TabPanel key={index} value={category.id} index={categoryId}>
              <>
                <div className={classes.header}>
                  <h2>{category.name}</h2>
                  <p>{category.description}</p>
                </div>
                <div className={classes.grid}>
                  {categoryApis?.map((api: any) => (
                    <APICard key={api.id} {...api} />
                  ))}
                </div>
              </>
            </TabPanel>
          ))}
        </div>
      </div>
    </Box>
  );
};

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
});

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
      paddingLeft: "18px",
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
  },
});

const useStyles = makeStyles({
  container: {
    width: "auto",
    display: "flex",
    gap: "16px",
    margin: "0 0 109px 1rem",
    "@media screen and (max-width: 1024px)": {
      margin: "0 0 109px 1rem",
    },
    "@media screen and (max-width: 900px)": {},
    "@media screen and (max-width: 820px)": {
      gap: "22px",
    },
    "@media screen and (max-width: 770px)": {},
    "@media screen and (max-width: 375px)": {
      margin: "0 0 50px 1rem",
    },
  },
  list: {
    width: "250px",
    height: "auto",
    // maxHeight: "470px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    backgroundColor: "#fff",
    paddingTop: "0px",
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
    "@media screen and (max-width: 900px)": {},
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
    marginBottom: "20px",
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
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gridTemplateRows: "260px",
    gap: "15px",
    marginLeft: "-11px",
    padding: "0 10px 0 0",
    width: "100%",
    height: "100%",
    overflowY: "scroll",
    overflowX: "hidden",
    "@media screen and (max-width: 912px)": {
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      margin: "-20px",
    },
  },
});

export default APIHubTab;
