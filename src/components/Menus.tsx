import React, {useState, useEffect} from "react"
import { Link, useNavigate } from "react-router-dom";
import { Avatar, Fade, Menu, MenuItem, Button, Paper, Stack, Typography } from "@mui/material"
import {HelpOutline, AppsRounded, DeveloperBoardRounded} from "@mui/icons-material"
import { blueGrey } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import { makeStyles } from "@mui/styles";
import { io } from "socket.io-client";
import Cookies from "universal-cookie";


import { ZapiDash, ZapiApps, ZapiHelp, ZapiArrow} from "../assets"
import { useAppDispatch, useAppSelector } from "../hooks/redux-hook";
import { getUserApis, logout } from "../redux/slices/userSlice";
import Notification from './Notification';
interface MenuProps {
    id?: string
};

const Menus: React.FC<MenuProps> = () => {
    const classes = useStyles()
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [anchorE2, setAnchorE2] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const isAvatarOpen = Boolean(anchorE2);
    const [socket, setSocket] = useState<any>("");
    
    const dispatch = useAppDispatch();
    const navigate = useNavigate()
    const cookies = new Cookies()
    const { userApis } = useAppSelector(store => store.user)
    
    useEffect(() => { 
        setSocket(io(import.meta.env.VITE_SOCKET_URL));
      }, []);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleClose2 = () => {
        setAnchorE2(null)
    }
    
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
        {userApis.map((api, index) => (
            <MenuItem key={index}>
                <Link to={`/developer/api/${api.id}`}>
                    {api.name}
                </Link>
            </MenuItem>
        ))}
        </Menu>
        <Stack direction="row" alignItems="center" justifyContent="center" spacing={2}>
            <DeveloperBoardRounded/>
            <AppsRounded/>
            <HelpOutline />
          <Notification socket={socket}/>
        </Stack>
          
        <Button aria-controls={isAvatarOpen ? 'avatar-menu' : undefined} aria-haspopup="true" aria-expanded={isAvatarOpen ? 'true' : undefined} onClick={handleAvatarClick}>
            <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                variant="dot"
            >
                <Avatar  sx={{ bgcolor: blueGrey[500] }} alt='zapi-pic' />
            </StyledBadge>
        </Button>
        <Menu anchorEl={anchorE2} open={isAvatarOpen} onClose={handleClose2} TransitionComponent={Fade}>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
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
        width:'450px',
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

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: 'ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
  }));

export default Menus
