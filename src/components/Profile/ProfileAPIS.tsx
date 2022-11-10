import { Box, Tab, Tabs } from "@mui/material";
import { styled, makeStyles } from "@mui/styles";
import React from "react";
import TabPanel from "../TabPanel";

const ProfileAPIS = () => {
  const [tabIndex, setTabIndex] = React.useState(0);
  const classes = useStyles();

  const StyledTabs = styled(Tabs)({
    width: "100%",
    "&.MuiTabs-indicator": {
      display: "none",
    },
  });

  const StyledTab = styled(Tab)({
    "&.MuiTab-root": {
      border: "1px solid #e9e9e9",
      "&:not(:first-of-type)": {
        marginLeft: -1,
      },
      background: "#f7f7f7",
      opacity: 1,
      textTransform: "capitalize",
    },
    "&.Mui-selected": {
      borderBottom: 0,
      background: "#ffffff",
      "& $wrapper": {
        opacity: 1,
      },
    },
    "&.MuiTab-wrapped": {
      opacity: 0.7,
    },
  });
  return (
    <div className={classes.root}>
      <Box className={classes.container}>
        <StyledTabs
          value={tabIndex}
          variant="fullWidth"
          TabIndicatorProps={{ style: { background: "none" } }}
          onChange={(e, index) => setTabIndex(index)}>
          <StyledTab label={"Published APIs (4)"} />
          <StyledTab label={"Following APIs (0)"} />
          <StyledTab label={"Followed By (2)"} />
          <StyledTab label={"Following (0)"} />
        </StyledTabs>
      </Box>
      <div>
        <TabPanel value={tabIndex} index={0}>
          Published APIs
        </TabPanel>
        <TabPanel value={tabIndex} index={1}>
          Following APIs
        </TabPanel>
        <TabPanel value={tabIndex} index={2}>
          Followed By
        </TabPanel>
        <TabPanel value={tabIndex} index={3}>
          Following
        </TabPanel>
      </div>
    </div>
  );
};

export default ProfileAPIS;

const useStyles = makeStyles({
  root: {
    height: "50vh",
  },
  container: {
    width: "100vw",
  },
});
