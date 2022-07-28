import React from "react";
import { IconButton, Stack, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { AccountCircleOutlined, AddCircleOutline, CloseOutlined, MenuOutlined, NotificationsOutlined } from "@mui/icons-material";

import { useContextProvider } from "../contexts/ContextProvider";
interface INavProps {
  title?: string
  subtitle?: string
};

const Navbar: React.FC<INavProps> = ({title,subtitle}) => {
  const classes = useStyles();
  const { activeMenu, isLoggedIn, screenSize, setActiveMenu } = useContextProvider()

  const toggleSidebar = () => {
    activeMenu ? setActiveMenu(false) : setActiveMenu(true)
  }

  return (
    <nav className={classes.root}>
      <div className={classes.toolbar}>
        <div className={classes.logoWrapper}>
          <img src="/images/zapi-logo.png" alt="zapi-logo" className={classes.logo} />
        </div>

        <Stack className={classes.div}>
          {isLoggedIn ? 
            <Stack direction="row" alignItems="center" justifyContent="center" spacing={1} mb={1}>
              <IconButton color="primary">
                <AddCircleOutline />
              </IconButton>
              <IconButton color="primary">
                <NotificationsOutlined />
              </IconButton>
              <IconButton color="primary">
                <AccountCircleOutlined />
              </IconButton>
              <div className={classes.drawerButton}>
                <IconButton onClick={toggleSidebar}>
                  {activeMenu ? <CloseOutlined /> : <MenuOutlined />}
                </IconButton>
              </div>
            </Stack> : 
            <Stack mb={screenSize < 900 ? 1 : 6}>
              <div className={classes.drawerButton}>
                <IconButton onClick={toggleSidebar}>
                  {activeMenu ? <CloseOutlined /> : <MenuOutlined />}
                </IconButton>
              </div>
            </Stack>}
        </Stack>
      </div>

      <div className={classes.heading}>
        <Typography variant="h4" color="primary">
          {title}
        </Typography>
        <Typography variant="subtitle1" color="primary">
          {subtitle}
        </Typography>
      </div>
    </nav>
  )
};

const useStyles = makeStyles({
  root: {
    position: "static",
    top: 0,
    left: 0,
    width: "100%",
    background: "#FFF",
  },
  toolbar: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    background: "#FFF",
    padding: 0,
  },
  div: {
    width: "90%",
    alignItems: "flex-end",
    borderBottom: "2px solid var(--color-primary)",
  },
  logoWrapper : {
    width: "5rem",
    display: "grid",
    placeItems: "center",
    margin: "0.25rem",
  },
  logo: {
    width: "100%",
    objectFit: "contain",
  },
  heading: {
    display: "grid",
    placeItems: "center",
    textAlign: "center",
    padding: "0 1rem",
  },
  drawerButton: {
    display: "none",
    "@media screen and (max-width: 900px)": {
      display: "block"
    }
  }
});

export default Navbar;