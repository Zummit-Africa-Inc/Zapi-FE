import React from 'react'
import { Typography } from "@mui/material";
import { makeStyles } from '@mui/styles'
import { StackedLineChart, TimerOutlined, Check } from "@mui/icons-material";

import { useAppSelector } from "../hooks";
import { APIType } from "../types";

interface Props {
    api: APIType
}

const APIDesc:React.FC<Props> = ({api}) => {
    const { categories } = useAppSelector(store => store.apis)
    const classes = useStyles();

    const category = categories.find((category) => category.id === api.categoryId)

    return (
        <div className={classes.root}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px", padding: "0 20px 15px 0", borderBottom: "1px solid #d1d1d1" }}>
                <div>
                    <h2>{api.name}</h2>
                    <p style={{ lineHeight: "1px", fontSize: "13px", color: "#515D99" }}>
                        Category: {category?.name}
                    </p>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", gap: "1rem", }}>
                    <div className={classes.item}>
                        <div className={classes.subItem}>
                            <p className={classes.itemHeader}>Popularity</p>
                            <StackedLineChart sx={{ width: "19px" }} className={classes.itemIcon} />
                        </div>
                        <p className={classes.itemTitle}>{api.popularity}/10</p>
                    </div>
                    <div className={classes.item}>
                        <div className={classes.subItem}>
                            <p className={classes.itemHeader}>Latency</p>
                            <TimerOutlined sx={{ width: "19px" }} className={classes.itemIcon} />
                        </div>
                        <p className={classes.itemTitle}>{api.latency}ms</p>
                    </div>
                    <div className={classes.item}>
                        <div className={classes.subItem}>
                            <p className={classes.itemHeader}>Service level</p>
                            <Check sx={{ width: "19px" }} className={classes.itemIcon} />
                        </div>
                        <p className={classes.itemTitle}>{api.service_level}%</p>
                    </div>
                </div>
            </div>
            <p className={classes.description}>{api.description}</p>
            <Typography sx={{margin:"24px 0 0",fontSize:"21px",fontWeight:"bold",color:"#515D99"}}>Base URL</Typography>
            <p className={classes.description}>{api.base_url}</p>
            <Typography sx={{margin:"24px 0 0",fontSize:"21px",fontWeight:"bold",color:"#515D99"}}>Website</Typography>
            <p className={classes.description}>
                Website: {api.api_website ? <a href={`${api.api_website}`} target="_blank" rel="noreferrer">{api.api_website}</a> : "Website not specified"}
            </p>
            <Typography sx={{margin:"24px 0 0",fontSize:"21px",fontWeight:"bold",color:"#515D99"}}>Documentation</Typography>
            <p className={classes.description}>{api.read_me ? api.read_me : "ReadMe file not attached"}</p>
        </div>
    )
}

const useStyles = makeStyles({
    root:{
        display: 'flex',
        flexDirection: 'column',
        marginBottom: "15px",
        padding: "130px 5rem 50px 5rem",
        lineHeight: "41px",
        width: '100%',
        minHeight: "500px",
        "& h2": {
            marginBottom: "5px",
            fontSize: "26px",
            color: "#071B85",
        },
    },
    item: {
        display: "flex",
        flexDirection: "column",
        width: "100px",
        height: "65px"
    },
    subItem: {
        display: "flex", 
        flexDirection: "row",
        alignItems: "center",
        gap: ".3rem"
    },
    itemHeader: {
        fontSize: "12px",
        fontWeight: "bold",
        color: "#071B85",
    },
    itemIcon: {
        color: "#515D99",
    },
    itemTitle: {
        fontSize: "20px",
        color: "#515D99",
        lineHeight: "0px",
    },
    description: {
        display: "flex",
        alignItems: "center",
        fontSize: "15px",
        lineHeight: "26px",
        color: "#071B85",
        gap: "0.5rem",
    }
})


export default APIDesc;
