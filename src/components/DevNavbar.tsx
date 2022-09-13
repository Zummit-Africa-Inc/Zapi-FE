import React from 'react'
import { makeStyles } from "@mui/styles";
import { Link } from 'react-router-dom';

import  Menus  from "../components/Menus";

//images
import { ZapiDevLogo, ZapiWidget } from '../assets'

const DevNavbar: React.FC = () => {
    const classes = useStyles()
  
    
    

  return (
    <>
        <div className={classes.NavBar}>
            <div className={classes.logo}>
                <img src={ZapiDevLogo} alt='Zapi-dev' />
                <span className={classes.zapi}>Z-API</span>
            </div>

            <div className={classes.widget}>
                <img src={ZapiWidget} alt='Zapi-widget' />
                <Link to='#' className={classes.api}>API Projects</Link>
            </div>

                <Menus />
        </div>
    </>
  )
}

const useStyles = makeStyles({
    NavBar: {
        position: "sticky",
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
        height:  '90px',
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