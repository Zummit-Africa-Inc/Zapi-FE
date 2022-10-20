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
        alignItems: "center",
        marginBottom: "68px",
        paddingTop: "176px",
        lineHeight: "60px",
        textAlign: "center",
        width: '100%',
        height: "auto",
        boxShadow: "0px 4px 4px rgba(6, 113, 224, 0.05)",
        "& h1": {
            fontSize: "36px",
            color: "#071B85"
        },
        "& p": {
            fontSize: "24px",
            color: "#071B85",
            margin: "0 0 68px",
            "@media screen and (max-width: 500px)": {
                lineHeight: "40px",
            },
        },
    },
})


export default APIHubHeader;