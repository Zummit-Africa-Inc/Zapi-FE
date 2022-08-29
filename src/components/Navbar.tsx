
import React, {useState, useEffect} from "react";
import { IconButton, Stack, Typography } from "@mui/material";

import { makeStyles } from "@mui/styles";
import { AccountCircleOutlined, InsertDriveFileOutlined, NotificationsOutlined } from "@mui/icons-material";


import { useContextProvider } from "../contexts/ContextProvider";
import Notification from './Notification';
import { io } from 'socket.io-client';

interface INavProps {
  title?: string
  subtitle?: string
};

const Navbar: React.FC<INavProps> = () => {
  const classes = useStyles();

  const [socket, setSocket] = useState<any>("");
  const { activeMenu, isLoggedIn, screenSize, setActiveMenu } = useContextProvider()

  const toggleSidebar = () => {
    activeMenu ? setActiveMenu(false) : setActiveMenu(true)
  }

  useEffect(() => { 
    setSocket(io("https://localhost:5000"));
  }, []);
<<<<<<< HEAD
<<<<<<< HEAD
  
=======


>>>>>>> 07142e2aba58570af61299db6fd07c9988ca351f
=======
  
>>>>>>> parent of 7c577cf (finished notification design)
  return (
  <Toolbar className={classes.toolbar}>
        <Box className={classes.logoWrapper}>
          <img src="/images/zapi-logo.png" alt="zapi-logo" className={classes.logo} />

        </div>

        <Stack className={classes.div}>
          {/* {isLoggedIn ?  */}
            <Stack direction="row" alignItems="center" justifyContent="center" spacing={1} mb={1}>
              <IconButton color="primary">
                <AddCircleOutline />
              </IconButton>
              <IconButton color="primary">
                <Notification socket={socket}/>
              </IconButton>
              <IconButton color="primary">
                <AccountCircleOutlined />
              </IconButton>
              <div className={classes.drawerButton}>
                <IconButton onClick={toggleSidebar}>
                  {activeMenu ? <CloseOutlined /> : <MenuOutlined />}
                </IconButton>
              </div>
            </Stack>
             {/* : 
             <Stack mb={screenSize < 900 ? 1 : 6}>
               <div className={classes.drawerButton}>
                 <IconButton onClick={toggleSidebar}>
                   {activeMenu ? <CloseOutlined /> : <MenuOutlined />}
                 </IconButton>
               </div>
             </Stack>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> parent of 7c577cf (finished notification design)
             } */}
        </Stack>
      </div>
=======
             }
>>>>>>> 07142e2aba58570af61299db6fd07c9988ca351f

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