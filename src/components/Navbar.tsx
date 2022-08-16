import React from "react";
import { Box, IconButton, Stack, Toolbar, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { AccountCircleOutlined, AddCircleOutline, CloseOutlined, InsertDriveFileOutlined, MenuOutlined, NotificationsOutlined } from "@mui/icons-material";

import { useContextProvider } from "../contexts/ContextProvider";
interface INavProps {
  title?: string
  subtitle?: string
};

const Navbar: React.FC<INavProps> = () => {
  const classes = useStyles();


 

  return (
  <Toolbar className={classes.toolbar}>
        <Box className={classes.logoWrapper}>
          <img src="/images/zapi-logo.png" alt="zapi-logo" className={classes.logo} />
        </Box>
        <Stack className={classes.bar}>
          <Stack direction="row" alignItems="center" justifyContent="center" spacing={2} mb={1}>
            <IconButton color="primary">
               <InsertDriveFileOutlined />
            </IconButton>
            <IconButton color="primary">
              <NotificationsOutlined />
            </IconButton>
            <IconButton color="primary">
              <AccountCircleOutlined />
            </IconButton>
          </Stack>
        </Stack>
      </Toolbar>   
  )
  };

const useStyles = makeStyles({
   toolbar: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    background: "#FFF",
    padding: 0,
    },
    bar: {
    width: "98%",
    alignItems: "flex-end",
    borderBottom: "2px solid var(--color-primary)",
    },
    logoWrapper : {
    width: "80px",
    display: "grid",
    placeItems: "center",
    margin: "10px",
  },
  logo: {
    width: "100%",
    objectFit: "contain",
  },
  // root: {
  //   position: "static",
  //   top: 0,
  //   left: 0,
  //   width: "100%",
  //   background: "#FFF",
  // },
  // toolbar: {
  //   width: "100%",
  //   display: "flex",
  //   alignItems: "center",
  //   justifyContent: "space-between",
  //   background: "#FFF",
  //   padding: 0,
  // },
  // div: {
  //   width: "90%",
  //   alignItems: "flex-end",
  //   borderBottom: "2px solid var(--color-primary)",
  // },
  // logoWrapper : {
  //   width: "5rem",
  //   display: "grid",
  //   placeItems: "center",
  //   margin: "0.25rem",
  // },
  // logo: {
  //   width: "100%",
  //   objectFit: "contain",
  // },
  // heading: {
  //   display: "grid",
  //   placeItems: "center",
  //   textAlign: "center",
  //   padding: "0 1rem",
  // },
  // drawerButton: {
  //   display: "none",
  //   "@media screen and (max-width: 900px)": {
  //     display: "block"
  //   }
  // }
});

export default Navbar;