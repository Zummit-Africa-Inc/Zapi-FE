import React from "react";
import { Box, IconButton, Stack, Toolbar, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { AccountCircleOutlined, InsertDriveFileOutlined, NotificationsOutlined } from "@mui/icons-material";

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
});

export default Navbar;