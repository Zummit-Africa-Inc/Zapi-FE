import React from 'react'
import { makeStyles } from '@mui/styles'
import { StackedLineChart, TimerOutlined, Check } from "@mui/icons-material";


const APIDesc:React.FC = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px", padding: "0 20px 15px 0", borderBottom: "1px solid #d1d1d1" }}>
                <div>
                    <h2>Text Summarizer API</h2>
                    <p style={{ lineHeight: "1px", fontSize: "13px", color: "#515D99" }}>API Category</p>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", gap: "1rem", }}>
                    <div className={classes.item}>
                        <div className={classes.subItem}>
                            <p className={classes.itemHeader}>Popularity</p>
                            <StackedLineChart sx={{ width: "19px" }} className={classes.itemIcon} />
                        </div>
                        <p className={classes.itemTitle}>10/10</p>
                    </div>
                    <div className={classes.item}>
                        <div className={classes.subItem}>
                            <p className={classes.itemHeader}>Latency</p>
                            <TimerOutlined sx={{ width: "19px" }} className={classes.itemIcon} />
                        </div>
                        <p className={classes.itemTitle}>0ms</p>
                    </div>
                    <div className={classes.item}>
                        <div className={classes.subItem}>
                            <p className={classes.itemHeader}>Service level</p>
                            <Check sx={{ width: "19px" }} className={classes.itemIcon} />
                        </div>
                        <p className={classes.itemTitle}>100%</p>
                    </div>
                </div>
            </div>
            <p className={classes.description}>
                The Text Summarizer API consectetur adipiscing elit. Ut sit amet magna a nisi malesuada semper. Nunc ultricies, odio et facilisis mollis, velit erat tincidunt leo, nec finibus quam eros ut velit. Nunc vel viverra purus. Vivamus condimentum luctus risus vel efficitur. Suspendisse consequat ligula quis velit ultrices convallis
            </p>
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
        height: "auto",
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
        fontSize: "15px",
        lineHeight: "26px",
        color: "#071B85",
    }
})


export default APIDesc;
