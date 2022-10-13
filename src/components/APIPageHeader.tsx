import React from "react";
import { makeStyles } from "@mui/styles";

import { APIHeaderProps } from "../interfaces";

const APIPageHeader:React.FC<APIHeaderProps> = ({id, name, base_url, description, logo_url, status, rating, service_level, latency}) => {
    const classes = useStyles()
    
  return (
    <div className={classes.container}>
        <div className={classes.row}>
            <div className={classes.imageWrapper}>
                <img src={logo_url} alt={name} />
            </div>
            <div className={classes.col}>
                <h2>{name}</h2>
                <p>{description}</p>
                <a href={base_url} target="_blank" rel="noreferrer">{base_url}</a>
            </div>
        </div>
        <div className={classes.row}>
            <span>Status: {status}</span>
            <span>Rating: {rating}/10</span>
            <span>Service Level: {service_level}%</span>
            <span>Latency: {latency}ms</span>
        </div>
    </div>
  )
}

const useStyles = makeStyles({
    container: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        padding: "1rem",
        color: "#081F4A",
        "& h2": {
            fontSize: "2rem",
            fontWeight: 700,
            margin: "0.25rem 0",
        },
        "& p": {            
            fontSize: "1.2rem",
            fontWeight: 500,
        },
        "& a": {
            fontSize: "0.8rem",
            color: "#845EC2",
            cursor: "pointer",
            transition: "0.5s all ease",
            "&:hover": {
                color: "#E32C08",
            }
        }
    },
    row: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        color: "#081F4A",
        margin: "1rem 0",
        "& span": {
            fontSize: "1rem",
            textTransform: "capitalize",
        }
    },
    col: {
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem",
    },
    imageWrapper: {
        width: "150px",
        height: "150px",
        border: "thin solid #081F4A",
        "& img": {
            width: "100%",
            height: "100%",
            objectFit: "cover",
        }
    }
})

export default APIPageHeader