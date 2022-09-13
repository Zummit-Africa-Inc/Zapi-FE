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
            <div>
                <Menus className={classes.items}/>
            
            </div>
        </div>
    </>
  )
}

const useStyles = makeStyles({
    NavBar: {
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
        height:  '96px',
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
        alignItems:'center'
    },
    api:{
        fontWeight:'400',
        fontSize:'16px',
        textDecoration:'none',
        color:'#000000'
    },
    items:{
        alignItems:'center',
        display:'flex',
        width:'350px',
        gap:'2rem'
    },
    icons:{
        alignItems:'center',
        display:'flex',
        justifyContent:'space-between',
        width:"inherit"
    },
    
})
export default DevNavbar