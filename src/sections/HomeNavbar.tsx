import { Menu } from "@mui/icons-material"
import { makeStyles } from "@mui/styles"
import { useState } from "react"
import { Link } from "react-router-dom"

import "./HomeNavbar.css"

//images
import ZapiHomeLogo from "../assets/images/ZapiHomeLogo.png"

const HomeNavbar: React.FC = () => {
    const classes = useStyles()
    const [style, setStyle] = useState("mobileLinks")

    const handleClick = () => {
        if (style === "mobileLinks") {
            setStyle("showMobileLinks")
        } else {
            setStyle("mobileLinks")
        }
    }
    return (
        <>
            <div className={classes.NavBar}>
                <div className={classes.logo}>
                    <img src={ZapiHomeLogo} alt="zapi-Home" />
                    <span className={classes.zapi}>Z-API</span>
                </div>
                <div className={classes.links}>
                    <ul>
                        <li className={classes.active}><Link to="/">Home</Link></li>
                        <li><Link to="/dashbord">API hub</Link></li>
                        <li><Link to="#">Pricing</Link></li>
                        <li><Link to="#">Documentation</Link></li>
                        <li><Link to="/login">Login</Link></li>
                        <li className={classes.signup}><Link to="/signup">Sign up</Link></li>
                    </ul>
                </div>
                <div className={classes.hamburger} onClick={handleClick}>
                    <Menu />
                </div>
            </div>
            <div className={style}>
                <ul className={classes.mobileLinks}>
                    <li className={classes.active}><Link to="/">Home</Link></li>
                    <li><Link to="/dashboard">API hub</Link></li>
                    <li><Link to="#">Pricing</Link></li>
                    <li><Link to="#">Documentation</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li className={classes.signup}><Link to="/signup">Sign up</Link></li>
                </ul>
            </div>
        </>
    )
}

export default HomeNavbar

const useStyles = makeStyles({
    NavBar: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "1rem 5rem",
        "@media screen and (max-width: 1000px)": {
            padding: "1rem 2rem"
        },
        "@media screen and (max-width: 300px)": {
            padding: "1rem 1rem"
        }
    },
    logo: {
        display: "flex",
        alignItems: "center",
        gap: "1rem"
    },
    zapi: {
        color: "#000000",
        fontWeight: 700,
        fontSize: "1.5rem"
    },
    links: {
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
                    color: "#000000",
                }
            }
        },
        "@media screen and (max-width: 800px)": {
            display: "none"
        }
    },
    active: {
        borderBottom: "2px solid #000"
    },
    hamburger: {
        display: "none",
        cursor: "pointer",
        fontSize: "2rem",
        "@media screen and (max-width: 800px)": {
            display: "block",
        }
    },
    mobileLinks: {
        background: "#ccc",
        padding: "2rem 0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1.5rem",
        "& li": {
            listStyle: "none",
            "& a": {
                textDecoration: "none",
                fontStyle: "normal",
                fontWeight: 500,
                fontSize: "1rem",
                color: "#000000",
            }
        }
    },
    signup: {
        borderRadius: "4px",
        padding: ".5rem 1rem",
        background: "#C4C4C4",
    }

})