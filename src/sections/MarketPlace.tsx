import React from "react";
import { Typography, List } from "@mui/material";
import { makeStyles,  } from '@mui/styles';
import { ClassNames } from "@emotion/react";


const MarketPlace = () => {
    const classes = useStyles()

    return (
        <div className={classes.head}>
             <Typography  gutterBottom variant="subtitle1" sx={{ fontWeight: 600, fontSize: "2.5rem", lineHeight: "2.5rem", paddingBottom: "2rem", marginTop: "3rem" }}>Explore the marketplace </Typography>          
             <Typography  gutterBottom variant="subtitle1" sx={{ fontWeight: 400, fontSize: "1.5rem", lineHeight: "2.5rem", paddingBottom: "2rem", marginTop: "-2rem" }}>Production ready, fast, scalable and reliable APIs for your A.I deployments</Typography>           
        </div>
        
        


        
        

    )
};

export default MarketPlace

const useStyles = makeStyles ({
    head: {
        textAlign: 'center'

    },
    
    
})