import React from "react";
import { Typography, List } from "@mui/material";
import { makeStyles,  } from '@mui/styles';
import { ClassNames } from "@emotion/react";
import { Divider, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';


const MarketPlace = () => {
    const classes = useStyles()

    return (
        <div>
            <div className={classes.head} >
                 <Typography  gutterBottom variant="subtitle1" sx={{ fontWeight: 600, fontSize: "2.5rem", lineHeight: "2.5rem", paddingBottom: "2rem", marginTop: "3rem" }}>Explore the marketplace </Typography>          
                 <Typography  gutterBottom variant="subtitle1" sx={{ fontWeight: 400, fontSize: "1.5rem", lineHeight: "2.5rem", paddingBottom: "2rem", marginTop: "-2rem" }}>Production ready, fast, scalable and reliable APIs for your</Typography> 
                 <Typography  gutterBottom variant="subtitle1" sx={{ fontWeight: 400, fontSize: "1.5rem", lineHeight: "2.5rem", paddingBottom: "2rem", marginTop: "-3rem" }}>A.I deployments.</Typography>           
            </div>
            <div className={classes.list}>
                <Grid container>
                   <Grid item xs>
                        <h1>Safety</h1>
                        <p className={classes.para}>A few of our safety related APIs:</p>
                        <ul className={classes.listA}>
                           <li>Drowsiness detection</li>
                           <li>Drowsiness detection</li>
                           <li>Drowsiness detection</li>
                           <li>Drowsiness detection</li>
                           <li>Drowsiness detection</li>
                           <li>Drowsiness detection</li>
                        </ul>
                   </Grid>
                       
                   <Grid item xs>
                        <h1>Safety</h1>
                        <p className={classes.para}>A few of our safety related APIs:</p>
                        <ul className={classes.listA}>
                           <li>Drowsiness detection</li>
                           <li>Drowsiness detection</li>
                           <li>Drowsiness detection</li>
                           <li>Drowsiness detection</li>
                           <li>Drowsiness detection</li>
                           <li>Drowsiness detection</li>
                        </ul>
                   </Grid>
                   
                   <br/>
                   <Grid item xs>
                        <h1>Safety</h1>
                        <p className={classes.para}>A few of our safety related APIs:</p>
                        <ul className={classes.listA}>
                           <li>Drowsiness detection</li>
                           <li>Drowsiness detection</li>
                           <li>Drowsiness detection</li>
                           <li>Drowsiness detection</li>
                           <li>Drowsiness detection</li>
                           <li>Drowsiness detection</li>
                        </ul>
                   </Grid>
                </Grid>
                
            </div>
            <button className={classes.button}>Explore the marketplace</button>
                
           
        </div>
        
        


        
        

    )
};

export default MarketPlace

const useStyles = makeStyles ({
    head: {
        textAlign: 'center',
        color: '#00308F'


    },
    para:{
        marginTop: '0.5rem',
        color: '#00308F'
    },
    list: {
        display: 'flex',
        justifyContent: 'space-evenly',
        marginLeft: '8rem',
        color: '#00308F'
    },

   listA: {
       marginTop: '1rem',
       lineHeight: '2rem'
       
       
   },

   divider: {
       marginLeft: '3rem'
       
   },

   button: {
        backgroundColor: '#002D62',
        height: '3rem',
        width: '12rem',
        margin: '2rem 34rem',
        border: 'none',
        color: '#FFFF00'
        
        
   }
})
    


   