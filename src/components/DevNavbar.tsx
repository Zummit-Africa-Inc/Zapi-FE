import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { Link } from 'react-router-dom';

import  Menus  from "../components/Menus";
import { ZapiDevLogo, ZapiWidget } from '../assets'

import { Menu } from "@mui/icons-material";
import { useAppDispatch } from "../hooks/redux-hook";
import { logout } from "../redux/slices/userSlice";
import Cookies from "universal-cookie";

import { ZapiArrow } from '../assets';
import { Avatar, Fade, MenuItem, Button, Paper, Stack, Typography } from '@mui/material'

const DevNavbar: React.FC = () => {
    const classes = useStyles()
    const [isOpen, setIsOpen] = useState(false);
    const [isShow, setIsShow] = useState(false);

    
    const handleClick = () => {
        if(isOpen) {
            setIsOpen(false);
        } else {
            setIsOpen(true);
        }
    }

    const dispatch = useAppDispatch();
    const navigate = useNavigate()
    const cookies = new Cookies()
    
    const handleLogout = async () => {
        await setIsOpen(true);
        dispatch(logout())
        cookies.remove('accessToken')
        navigate("/")
    };

    const handleProjectList = () => {
        if(isShow) {
            setIsShow(false);
        } else {
            setIsShow(true);
        }
    };
  
  return (
    <>
        <div className={classes.NavBar}>
            <div className={classes.logo}>
                <Link to="/dashboard">
                <img src={ZapiDevLogo} alt='Zapi-dev' />
                </Link>
                <span className={classes.zapi}>Z-API</span>
            </div>

            <div className={classes.widget}>
                <img src={ZapiWidget} alt='Zapi-widget' />
                <Link to='/developer/dashboard' className={classes.api}>API Projects</Link>
            </div>
            
            
            <div className={classes.menus}>
                <Menus />
            </div>

            <div className={classes.hamburger} onClick={handleClick}>
                <Menu />
            </div>
            
        </div>

        <div>
            {isOpen ?
                <>
                    <div className={classes.responsiveMenu}>
                        <Button className={classes.allProjects} onClick={handleProjectList}>
                            All Projects<img src={ZapiArrow} alt='zapi-arrow' style={{ color:'#00000', marginLeft:'0.4rem' }}/>
                        </Button>
                        
                        {isShow ?
                            <div className={classes.projectListContainer}>
                                <Button className={classes.projectListItems}>Zapi</Button>
                                <Button className={classes.projectListItems}>Zummit Academy</Button>
                                <Button className={classes.projectListItems}>Zapi Tools</Button>
                            </div>
                            :
                            <></>
                        }
                        <div>Developer Board</div>
                        <div>Apps</div>
                        <div>Help</div>
                        <div>Notification</div>
                        <button className={classes.logout} onClick={handleLogout}>Logout</button>
                    </div>
                
                </>
                :
                <></>
            }
            
        </div>
    </>
  )
}

const useStyles = makeStyles({
    NavBar: {
        position: "fixed",
        top: "0",
        left:'0rem',
        right:'0rem',
        zIndex: 30,
        width:'100%',
        display: 'flex',
        alignItems: 'center',
        padding: '24px 112px',
        flexDirection: 'row',
        justifyContent:'space-between',
        background:'#C4C4C4',
        height:  '70px',
        fontFamily:'Space Grotesk',
        "@media screen and (max-width: 1024px)": {
            padding: "1rem 2rem"
        },
        "@media screen and (max-width: 500px)": {
            padding: "1rem 1rem"
        }
    },
    logo:{
        display:'flex',
        alignItems:'center',
        gap:'1rem',
        "@media screen and (max-width: 900px)": {
            scale: .9
        }
    },
    zapi:{
        fontWeight:'700',
        fontSize: '24px',
        lineHeight:'30px',
        color:'#000000',
        alignItems:'center',
        display:'flex',
        "@media screen and (max-width: 900px)": {
            scale: .9
        }
    },
    widget:{
        color:'#1C1B1F',
        gap:'1rem',
        display:'flex',
        alignItems:'center',
        marginLeft: '200px',
        "@media screen and (max-width: 900px)": {
            marginLeft: '-10%',
            scale: .9
        }
    },
    api:{
        fontWeight:'400',
        fontSize:'16px',
        textDecoration:'none',
        color:'#000000'
    },

    icons:{
        alignItems:'center',
        display:'flex',
        justifyContent:'space-between',
        width:"inherit"
    },
    menus: {
        "@media screen and (max-width: 900px)": {
            display: "none"
        }
    },
    hamburger: {
        cursor: "pointer",
        fontSize: "2rem",
        color: "#000",
        zIndex: "1000",
        display: "none",
        "@media screen and (max-width: 900px)": {
            display: "block"
        }
    },
    responsiveMenu: {
        position: "fixed",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop:  '70px',
        backgroundColor: "#fff",
        padding: "6rem",
        fontSize: "17px",
        lineHeight: "2.5rem",
        width: "100%",
        height: "100%",
        zIndex: "1000",
        "@media screen and (max-width: 900px)": {
            display: "flex"
        },
        "@media screen and (min-width: 900px)": {
            display: "none"
        },
        "@media screen and (max-width: 500px)": {
            padding: "4rem",
        },
    },
    allProjects: {
        "&.MuiButton-text": {
            fontWeight: "normal",
            color: "#000"
          },
        "&.MuiButton-root": {
            textTransform: 'none',
            fontSize:'17px',
            width: "150px"
        }
    },
    projectListContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: "10px",
        textAlign: "center",
        lineHeight: "2rem",
        width: "100%",
    },
    projectListItems: {
        "&.MuiButton-text": {
            fontWeight: "normal",
            color: "#000"
          },
        "&.MuiButton-root": {
            textTransform: 'none',
            fontSize: "15px",
            color: "#909090",
            width: "150px"
        }
    },
    logout: {
        border: "unset",
        marginTop: "10px",
        backgroundColor: "#000",
        width: "150px"
    },
    
})
export default DevNavbar
