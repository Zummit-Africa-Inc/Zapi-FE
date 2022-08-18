import { Typography } from "@mui/material"
import { makeStyles } from "@mui/styles"

//images
import ZapiHomeLogo from "../assets/images/ZapiHomeLogo.png"

const HomeNavbar: React.FC = () => {
    const classes = useStyles()
  return (
    <div className={classes.NavBar}>
        <div className={classes.logo}>
            <img src={ZapiHomeLogo} alt="zapi-Home" />
            <span className={classes.zapi}>Z-API</span>
        </div>
        <div className={classes.links}>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">API hub</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Documentation</a></li>
                <li><a href="#">Login</a></li>
                <li><a href="#">Sign up</a></li>
            </ul>
        </div>
    </div>
  )
}

export default HomeNavbar

const useStyles = makeStyles({
    NavBar: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "1rem 5rem"
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
                    "&:focus": {
                        borderBottom: "2px solid #000"
                    }
                }
            }
        }
    }

})