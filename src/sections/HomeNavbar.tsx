import React, { useState } from "react";
import { useAppSelector } from "../hooks/redux-hook";
import { Menu } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";
import { Link, useNavigate } from "react-router-dom";
import { useContextProvider } from "../contexts/ContextProvider";
import Vector from "../assets/images/Vector.png";
import ZapiHomeLogo from "../assets/images/ZapiHomeLogo.png";
import { useMediaQuery, useTheme } from "@mui/material";
import { logout } from "../redux/slices/userSlice";
import { useAppDispatch } from "../hooks/redux-hook";
import Cookies from "universal-cookie";

import { useLocation } from 'react-router-dom'; 

const HomeNavbar: React.FC = () => {
    const classes = useStyles()
    const [open, setOpen] = useState(classes.mobile)
    const theme = useTheme()
    const isMatch = useMediaQuery(theme.breakpoints.down("md"))
    const { handleClicked } = useContextProvider()
    const { isLoggedIn } = useAppSelector((state: any) => state.user);
    const dispatch = useAppDispatch();
    const navigate = useNavigate()
    const cookies = new Cookies()

    const handleClick = () => {
        if (open === classes.mobile) {
           setOpen(classes.mobileLinks)
        } else {
            setOpen(classes.mobile)
        }
    }

    const handleLogOut = () => {
        dispatch(logout())
        cookies.remove('accessToken')
        navigate("/")
    }

    const location = useLocation();

    return (
        <>
            <div className={classes.NavBar}>
                <div className={classes.logo}>
                    <a href='/'>
                    <img src={ZapiHomeLogo} alt="zapi-Home" />
                    </a>
                    <span className={classes.zapi}>Z-API</span>
                    <img className={classes.vector} src={Vector} alt="vector-img" />
                </div>
                {isMatch ?
                    <>
                        <div className={open}>
                            {(location.pathname.indexOf('pricing') != -1) ? 
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/dashboard">API hub</Link></li>
                                    <li className={classes.active}><Link to="/pricing">Pricing</Link></li>
                                    <li><Link to="/documentation">Documentation</Link></li>
                                    <li><button onClick={() => handleClicked('login')}>Login</button></li>
                                </ul>
                                :
                                (location.pathname.indexOf('documentation') != -1) ? 
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/dashboard">API hub</Link></li>
                                    <li><Link to="/pricing">Pricing</Link></li>
                                    <li className={classes.active}><Link to="/documentation">Documentation</Link></li>
                                    <li><button onClick={() => handleClicked('login')}>Login</button></li>
                                </ul>
                                :
                                <ul>
                                    <li className={classes.active}><Link to="/">Home</Link></li>
                                    <li><Link to="/dashboard">API hub</Link></li>
                                    <li><Link to="/pricing">Pricing</Link></li>
                                    <li><Link to="/documentation">Documentation</Link></li>
                                    <li><button onClick={() => handleClicked('login')}>Login</button></li>
                                </ul>
                                
                            }
                            <div className={classes.signup}><Link to="/signup">Sign up</Link></div>
                        </div>
                        <div className={classes.hamburger} onClick={handleClick}>
                            <Menu />
                        </div>
                    </>
                    :
                    <div className={classes.links}>
                        {(location.pathname.indexOf('pricing') != -1) ? 
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/dashboard">API hub</Link></li>
                                <li className={classes.active}><Link to="/pricing">Pricing</Link></li>
                                <li><Link to="/documentation">Documentation</Link></li>
                                {!isLoggedIn && <li><button onClick={() => handleClicked('login')}>Login</button></li>}  
                            </ul>
                            :
                            (location.pathname.indexOf('documentation') != -1) ? 
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/dashboard">API hub</Link></li>
                                <li><Link to="/pricing">Pricing</Link></li>
                                <li className={classes.active}><Link to="/documentation">Documentation</Link></li>
                                {!isLoggedIn && <li><button onClick={() => handleClicked('login')}>Login</button></li>}  
                            </ul>
                            :
                            <ul>
                                <li className={classes.active}><Link to="/">Home</Link></li>
                                <li><Link to="/dashboard">API hub</Link></li>
                                <li><Link to="/pricing">Pricing</Link></li>
                                <li><Link to="/documentation">Documentation</Link></li>
                                {!isLoggedIn && <li><button onClick={() => handleClicked('login')}>Login</button></li>}  
                            </ul>
                            
                        }
                        
                        {!isLoggedIn ?
                            <div className={classes.signup}><Link to="/signup">Sign up</Link></div> : 
                            <button className={classes.signup} onClick={() => handleLogOut()}>Logout</button>
                        } 
                    </div>
                }
            </div>
        </>
    )
}

export default HomeNavbar

const useStyles = makeStyles({
    NavBar: {
        position: "fixed",
        left: "0rem",
        right: "0rem",
        zIndex: 30,
        height: "112px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: "#081F4A",
        boxShadow: "0px 1px 15px rgba(7, 27, 133, 0.15)",
        padding: "0 5rem",
        "@media screen and (max-width: 1024px)": {
            padding: "1rem 2rem"
        },
        "@media screen and (max-width: 375px)": {
            padding: "1rem 1rem"
        }
    },
    logo: {
        display: "flex",
        alignItems: "center",
        gap: "1rem",
    },
    zapi: {
        color: "#FFFFFF",
        fontWeight: 700,
        fontSize: "1.5rem"
    },
    vector: {
        position: "absolute",
        left: "130px",
        top: "-2px",
        filter: "drop-shadow(0px 1px 15px rgba(0, 0, 0, 0.1))",
    },
    links: {
        display: "flex",
        gap: "1.5rem",
        "& ul": {
            display: "flex",
            alignItems: "center",
            gap: "1.5rem",
            "& li": {
                listStyle: "none",
                "& a": {
                    textDecoration: "none",
                    fontStyle: "normal",
                    fontWeight: 500,
                    fontSize: "1rem",
                    color: "#FFFFFF",
                },
                "& button": {
                    textDecoration: "none",
                    fontStyle: "normal",
                    fontWeight: 500,
                    fontSize: "1rem",
                    color: "#FFFFFF",
                    cursor: "pointer",
                    background: "transparent",
                    border: "none",
                    outline: "none",
                    fontFamily: "Space Grotesk"
                }
            }
        },
        "@media screen and (max-width: 800px)": {
            display: "none"
        }
    },
    active: {
        borderBottom: "2px solid #FFEA00"
    },
    hamburger: {
        display: "block",
        cursor: "pointer",
        fontSize: "2rem",
        color: "#FFFFFF",
        zIndex: "1000",
    },
    mobileLinks: {
        position: "absolute",
        top: "100%",
        left: 0,
        width: "100%",
        background: "#ccc",
        padding: "2rem 2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "2rem",
        "& ul": {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1.5rem",
        },
        "& li": {
            listStyle: "none",
            "& a": {
                textDecoration: "none",
                fontStyle: "normal",
                fontWeight: 500,
                fontSize: "1rem",
                color: "#000000",
            }
        },
        "& button": {
            textDecoration: "none",
            fontStyle: "normal",
            fontWeight: 500,
            fontSize: "1rem",
            cursor: "pointer",
            background: "transparent",
            border: "none",
            outline: "none",
            fontFamily: "Space Grotesk"
        }
    },
    signup: {
        borderRadius: "4px",
        padding: ".5rem 1rem",
        background: "#FFEA00",
        fontWeight: 500,
        fontSize: "1rem",
        color: "#081F4A",
        cursor: "pointer",
    },
    mobile: {
        display: "none",
        "& ul": {

        }
    }

})
