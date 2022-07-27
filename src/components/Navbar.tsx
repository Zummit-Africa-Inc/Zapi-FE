import React from "react";
import { AppBar, IconButton, Stack, Toolbar } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { AccountCircleOutlined, AddCircleOutline, NotificationsOutlined } from "@mui/icons-material";

const Navbar: React.FC = () => {
  const classes = useStyles()

  return (
    <AppBar className={classes.root} color="transparent">
      <Toolbar className={classes.toolbar}>
        <div className={classes.logoWrapper}>
          <img src="/images/zapi-logo.png" alt="zapi-logo" className={classes.logo} />
        </div>

        <Stack className={classes.div}>
          <Stack direction="row" alignItems="center" justifyContent="center" spacing={2} mb={1}>
            <IconButton color="primary">
              <AddCircleOutline />
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
    </AppBar>
  )
};

const useStyles = makeStyles({
  root: {
    position: "static",
    top: 0,
    left: 0,
    width: "100%",
    background: "#FFF",
    padding: 0,
    boxShadow: "0px"
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
  }
})

export default Navbar;