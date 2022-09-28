import React, {useState, useEffect} from 'react'
import { makeStyles } from "@mui/styles";
import { Avatar, Fade, Menu, MenuItem, Button, Typography } from '@mui/material'
import Notification from './Notification';
import { io } from 'socket.io-client';
import {HelpOutline, AppsRounded, DeveloperBoardRounded} from '@mui/icons-material'

import { ZapiDash, ZapiApps, ZapiHelp, ZapiArrow, ZapiPic } from '../assets'


import { useNavigate } from "react-router-dom";
import { logout } from "../redux/slices/userSlice";
import { useAppDispatch } from "../hooks/redux-hook";
import Cookies from "universal-cookie";


const Menus: React.FC = () => {
    const classes = useStyles()
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [anchorE2, setAnchorE2] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const isAvatarOpen = Boolean(anchorE2);
    const [socket, setSocket] = useState<any>("");
    
    const dispatch = useAppDispatch();
    const navigate = useNavigate()
    const cookies = new Cookies()
    
    useEffect(() => { 
        setSocket(io(import.meta.env.VITE_SOCKET_URL));
      }, []);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    
    
    const handleAvatarClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorE2(event.currentTarget);
    };

    const handleLogout = async () => {
        await setAnchorE2(null)
        dispatch(logout())
        cookies.remove('accessToken')
        navigate("/")
    };

  return (
     <div className={classes.items}>
        <Button className={classes.root} id="fade-button" aria-controls={open ? 'fade-menu' : undefined} aria-haspopup="true" aria-expanded={open ? 'true' : undefined} onClick={handleClick}>
            All Projects<img src={ZapiArrow} alt='zapi-arrow' style={{ color:'#00000', marginLeft:'0.4rem' }}/>
        </Button>
        <Menu id="fade-menu" MenuListProps={{ 'aria-labelledby': 'fade-button', }} anchorEl={anchorEl} open={open} onClose={handleClose} TransitionComponent={Fade}>
            <MenuItem onClick={handleClose}>Zapi</MenuItem>
            <MenuItem onClick={handleClose}>Zummit Academy</MenuItem>
            <MenuItem onClick={handleClose}>Zapi Tools</MenuItem>
        </Menu>
        <div className={classes.icons}>
            <DeveloperBoardRounded/>
            <AppsRounded/>
            <HelpOutline />
          <Notification socket={socket}/>
        </div>
          
        <Button id="avatar-button" aria-controls={isAvatarOpen ? 'avatar-menu' : undefined} aria-haspopup="true" aria-expanded={isAvatarOpen ? 'true' : undefined} onClick={handleAvatarClick}>
            <Avatar src={ZapiPic} alt='zapi-pic' />
        </Button>
        <Menu id="avatar-menu" MenuListProps={{ 'aria-labelledby': 'avatar-button', }} anchorEl={anchorE2} open={isAvatarOpen} onClose={handleLogout} TransitionComponent={Fade}>
            <MenuItem onClick={handleLogout}>LOGOUT</MenuItem>
        </Menu>
    </div>
  )
}

const useStyles = makeStyles({
    icons:{
        alignItems:'center',
        display:'flex',
        justifyContent:'space-between',
        width:"inherit"
    },
    items:{
        alignItems:'center',
        display:'flex',
        width:'350px',
        gap:'2rem'
    },
    root:{
        width:'450px',
        "&.MuiButton-text": {
            color: "black"
          },
        "&.MuiButton-root": {
            textTransform: 'none',
            fontSize:'16px',
        }
    }
})

export default Menus
