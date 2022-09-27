import React from 'react'
import { makeStyles } from '@mui/styles'
import { Switch } from '@mui/material'

import ZapiHomeLogo from "../assets/images/zp.svg";
import Vector from "../assets/images/Vector.png";

const ComingSoon:React.FC = () => {
    const classes = useStyles();
    const [isSwitch, setIsSwitch] = React.useState(false);


    const switchTheme = () => {
        if(isSwitch) {
            setIsSwitch(false);
        } else {
            setIsSwitch(true);
        }
    };


  return (
    <>
        {
            isSwitch ? 
            <>
                <div className={classes.root}>
                    <div className={classes.navbar}>
                        <div className={classes.logo}>
                            <a href='/'>
                                <img src={ZapiHomeLogo} alt="zapi-Home" className={classes.zapiLogo} />
                            </a>
                            <span className={classes.zapi}>Z-API</span>
                            <img className={classes.vector} src={Vector} alt="vector-img" />

                        </div>
                        
                        <Switch 
                            color='info'
                            onChange={switchTheme}
                        />
                    </div>

                    <div className={classes.comingSoonContainer}>
                        <h1 className={classes.header}>COMING SOON</h1>
                        <p className={classes.paragraph}>Use powerful AI APIs developed by genius machine learning engineers.</p>
                        <form action="" method="post" className={classes.inputContainer}>
                            <input type="email" className={classes.input} placeholder="Please enter your email" />
                            <button type="submit" className={classes.button}>NotifyMe</button>
                        </form>

                    </div>

                    <div className={classes.link_container}>
                        <a href="http://" target="_blank" rel="noopener noreferrer" className={classes.link}>Facebook</a>/
                        <a href="http://" target="_blank" rel="noopener noreferrer" className={classes.link}>Instagram</a>/
                        <a href="http://" target="_blank" rel="noopener noreferrer" className={classes.link}>Linkedin</a>
                    </div>
                </div>
            </>
            :
            <>
                <div className={classes.root} style={{ backgroundColor: '#fff', color: '#202124' }}>
                    <div className={classes.navbar}>
                        <div className={classes.logo}>
                            <a href='/'>
                                <img src={ZapiHomeLogo} alt="zapi-Home" className={classes.zapiLogo} />
                            </a>
                            <span className={classes.zapi} style={{ color: '#202124' }}>Z-API</span>
                            <img className={classes.vector} src={Vector} alt="vector-img" />

                        </div>
                        
                        <Switch 
                            color='info'
                            onChange={switchTheme}
                        />
                    </div>

                    <div className={classes.comingSoonContainer}>
                        <h1 className={classes.header} style={{ color: '#202124' }}>COMING SOON</h1>
                        <p className={classes.paragraph} style={{ color: '#202124' }}>Use powerful AI APIs developed by genius machine learning engineers.</p>
                        <form action="" method="post" className={classes.inputContainer} style={{ backgroundColor: '#fff', border: '2px solid #202124', padding: '5px', }}>
                            <input type="email" className={classes.input} style={{ color: '#202124' }} placeholder="Please enter your email" />
                            <button type="submit" className={classes.button} style={{ backgroundColor: '#202124', color: '#fff' }}>NotifyMe</button>
                        </form>

                    </div>

                    <div className={classes.link_container}>
                        <a href="http://" target="_blank" rel="noopener noreferrer" className={classes.link}>Facebook</a>/
                        <a href="http://" target="_blank" rel="noopener noreferrer" className={classes.link}>Instagram</a>/
                        <a href="http://" target="_blank" rel="noopener noreferrer" className={classes.link}>Linkedin</a>
                    </div>
                </div>
            </>

        }
    </>
  )
}

const useStyles = makeStyles({
    root:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '35px 50px',
        backgroundColor: '#202124',
        color: '#dddee1',
        textAlign: 'center',
        height: '100vh',
        "@media screen and (max-width: 600px)": {
            padding: '35px',
        },
    },
    navbar: {
        display: "flex",
        justifyContent: 'space-between',
        alignItems: "center",
    },
    logo: {
        display: "flex",
        alignItems: "center",
        gap: "1rem",
    },
    zapiLogo: {
        "@media screen and (max-width: 700px)": {
            width: '95%'
        },
        "@media screen and (max-width: 600px)": {
            width: '85%'
        }
    },
    zapi: {
        color: "#dddee1",
        fontWeight: 700,
        fontSize: "1.5rem",
        "@media screen and (max-width: 700px)": {
            fontSize: "1.4rem"
        },
        "@media screen and (max-width: 600px)": {
            fontSize: "1.3rem"
        }
    },
    vector: {
        position: "absolute",
        left: "130px",
        top: "-2px",
        filter: "drop-shadow(0px 1px 15px rgba(0, 0, 0, 0.1))",
        "@media screen and (max-width: 700px)": {
            width: '40%'
        }
    },
    comingSoonContainer:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '20px',
        "@media screen and (max-width: 700px)": {
            gap: '18px',
        }
    },
    header:{
        fontSize: '72px',
        fontWeight: 'bolder',
        "@media screen and (max-width: 700px)": {
            fontSize: '67px',
        },
        "@media screen and (max-width: 600px)": {
            fontSize: "55px"
        }
    },
    paragraph:{
        fontSize: '14px',
        textAlign: 'center',
        width:'400px',
        "@media screen and (max-width: 700px)": {
            width:'80%',
        },
    },
    inputContainer:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#292929',
        borderRadius: '5px',
        padding: '7px',
        width: '400px',
        height: 'auto',
        "@media screen and (max-width: 700px)": {
            width: '80%',
        },
    },
    input:{
        outline: 'unset',
        background: 'unset',
        border: 'unset',
        padding: '0px 15px',
        color: '#dddee1',
        width:'100%',
        "@media screen and (max-width: 700px)": {
            fontSize: '13px',
        },
        "@media screen and (max-width: 600px)": {
            fontSize: '12px',
        },
    },
    button:{
        outline: 'unset',
        border: 'unset',
        backgroundColor: '#fff',
        borderRadius: '3px',
        padding: '10px 23px',
        fontWeight: 'bold',
        color: '#202124',
        "@media screen and (max-width: 700px)": {
            fontSize: '13px',
        },
        "@media screen and (max-width: 600px)": {
            fontSize: '12px',
        },
    },
    link_container:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        color: '#737373',
        fontSize: '14px',
        "@media screen and (max-width: 700px)": {
            fontSize: '13px',
        },
        "@media screen and (max-width: 600px)": {
            fontSize: '12px',
        },
    },
    link:{
        color: '#737373',
    },
    
})


export default ComingSoon
