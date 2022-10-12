import React, { useEffect } from 'react'
import { makeStyles } from "@mui/styles";
import { Link } from 'react-router-dom';
import { IconButton } from "@mui/material";
import { FiMenu, FiX } from "react-icons/fi"

import { useContextProvider } from '../contexts/ContextProvider';
import { ZapiDevLogo, ZapiWidget } from '../assets';
import  Menus  from "../components/Menus";

const DevNavbar: React.FC = () => {
    const { screenSize, setScreenSize } = useContextProvider()
    const classes = useStyles()

    useEffect(() => {
        const handleScreenResize = () => setScreenSize(innerWidth)
        addEventListener("resize", handleScreenResize)
        handleScreenResize()
        return () => removeEventListener("resize", handleScreenResize)
    },[])
  
  return (
    <div className={classes.NavBar}>
        <div className={classes.logo}>
            <Link to="/dashboard">
            <img src={ZapiDevLogo} alt='Zapi-dev' />
            </Link>
            <span className={classes.zapi}>Z-API</span>
        </div>
        {screenSize > 768 &&
        <div className={classes.widget}>
            <img src={ZapiWidget} alt='Zapi-widget' />
            <Link to='/developer/dashboard' className={classes.api}>API Projects</Link>
        </div>}
        {screenSize <= 900 ? <Menu /> : <Menus />}
    </div>
  )
}

const Menu:React.FC = () => {
    const { activeMenu, setActiveMenu } = useContextProvider()
    const toggle = () => setActiveMenu((prev: boolean) => !prev)
    return activeMenu ?
    <IconButton onClick={() => toggle()}>
        <FiX />
    </IconButton> :
    <IconButton onClick={() => toggle()}>
        <FiMenu />
    </IconButton>
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
        "@media screen and (max-width: 375px)": {
            padding: "1rem 1rem"
        }
    },
    logo:{
        display:'flex',
        alignItems:'center',
        gap:'1rem'
    },
    zapi:{
        fontWeight:'700',
        fontSize: '24px',
        lineHeight:'30px',
        color:'#000000',
        alignItems:'center',
        display:'flex'
    },
    widget:{
        color:'#1C1B1F',
        gap:'1rem',
        display:'flex',
        alignItems:'center',
        marginLeft: '200px'
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
})
export default DevNavbar