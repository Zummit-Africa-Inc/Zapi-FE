import React from 'react'
import { makeStyles } from '@mui/styles'

const APIHubHeader:React.FC = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <h1>Welcome to the Z-API hub</h1>
            <p>Discover and connect to hundreds of APIs</p>
        </div>
    )
}

const useStyles = makeStyles({
    root:{
        display: 'flex',
        flexDirection: 'column',
        marginBottom: "46px",
        backgroundColor: "#F3F3F3",
        backgroundImage: "url(../Images/endless-constellation.svg)",
        padding: "236px 5rem 50px 5rem",
        lineHeight: "46px",
        boxShadow: "0px 4px 4px rgba(6, 113, 224, 0.05)",
        width: '100%',
        height: "auto",
        opacity: .98,
        "& h1": {
            fontSize: "45px",
            color: "#fff",
            "@media screen and (max-width: 900px)": {
                fontSize: "36px",
            },
        },
        "& p": {
            fontSize: "18px",
            color: "#fff",
            margin: "0 0 68px",
            "@media screen and (max-width: 900px)": {
                fontSize: "15px",
            },
            "@media screen and (max-width: 500px)": {
                lineHeight: "40px",
            },
            "@media screen and (max-width: 375px)": {
                lineHeight: "20px",
            },
        },
        "@media screen and (max-width: 1024px)": {
            padding: "236px 2rem 50px 2rem",
        },
        "@media screen and (max-width: 900px)": {
            lineHeight: "40px",
        },
        "@media screen and (max-width: 700px)": {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center"
        },
    },
})


export default APIHubHeader;
