import React from "react";
import { Typography, List } from "@mui/material";
import { makeStyles,  } from '@mui/styles';
import { ClassNames } from "@emotion/react";
import { styled } from '@mui/material/styles';


const MarketPlace = () => {
    const classes = useStyles()

    return (
        <div>
            <div className={classes.head} >
                 <Typography  gutterBottom variant="subtitle1" sx={{ color: "#071B85", fontFamily: "Space Grotesk", fontWeight: 700, fontSize: "36px", lineHeight: "45.94px", textAlign:"center", marginTop: "116px" }}>Explore the marketplace </Typography>                
            </div>
            <div className={classes.paragraph}>
                <Typography  gutterBottom variant="subtitle1" sx={{ color: "#071B85", fontFamily: "Space Grotesk", fontStyle: "normal", fontWeight: 400, fontSize: "24px", lineHeight: "40px",  textAlign: "center", marginTop: "28px" }}>Production ready, fast, scalable and reliable APIs for your A.I deployments.</Typography> 
            </div>

            <div className={classes.column}>
             <div>
                <div className={classes.Type1}>
                    <Typography  gutterBottom variant="subtitle1" sx={{ color: "#071B85", fontFamily: "Space Grotesk", fontStyle: "normal", fontWeight: 700, fontSize: "24px", lineHeight: "30.62px", textAlign: "center"}}>Safety</Typography>
                </div>
                <div className={classes.Type2}>
                    <Typography gutterBottom variant="subtitle1" sx={{ color: "#071B85", fontFamily: "Space Grotesk", fontStyle: "normal", fontWeight: 400, fontSize: "20px", lineHeight: "26px" }}>A few of our safety related APIs:</Typography>
                </div>
                <div className={classes.Type3}>
                    <img className={classes.frame} src= "images/frame.svg"/>
                    <div className={classes.Type3a}>
                        <Typography gutterBottom variant="subtitle1" sx={{ color: "#071B85", fontFamily: "Space Grotesk", fontStyle: "normal", fontWeight: 400, fontSize: "20px", lineHeight: "25.52px" }}>Drowsiness detection</Typography>
                    </div>   
                </div>
                <div className={classes.Type4}>
                    <img className={classes.frame} src= "images/frame.svg"/>
                    <div className={classes.Type4a}>
                        <Typography gutterBottom variant="subtitle1" sx={{ color: "#071B85", fontFamily: "Space Grotesk", fontStyle: "normal", fontWeight: 400, fontSize: "20px", lineHeight: "25.52px" }}>Drowsiness detection</Typography>
                    </div>   
                </div>
                <div className={classes.Type4}>
                    <img className={classes.frame} src= "images/frame.svg"/>
                    <div className={classes.Type4a}>
                        <Typography gutterBottom variant="subtitle1" sx={{ color: "#071B85", fontFamily: "Space Grotesk", fontStyle: "normal", fontWeight: 400, fontSize: "20px", lineHeight: "25.52px" }}>Drowsiness detection</Typography>
                    </div>   
                </div>
                <div className={classes.Type4}>
                    <img className={classes.frame} src= "images/frame.svg"/>
                    <div className={classes.Type4a}>
                        <Typography gutterBottom variant="subtitle1" sx={{ color: "#071B85", fontFamily: "Space Grotesk", fontStyle: "normal", fontWeight: 400, fontSize: "20px", lineHeight: "25.52px" }}>Drowsiness detection</Typography>
                    </div>   
                </div>
              </div>
            
              <div className={classes.divider}>
                <div className={classes.Vr}></div>
              </div>
              
              <div className={classes.container}>
                <div className={classes.Type1}>
                    <Typography  gutterBottom variant="subtitle1" sx={{ color: "#071B85", fontFamily: "Space Grotesk", fontStyle: "normal", fontWeight: 700, fontSize: "24px", lineHeight: "30.62px", textAlign: "center"}}>Safety</Typography>
                </div>
                <div className={classes.Type2}>
                    <Typography gutterBottom variant="subtitle1" sx={{ color: "#071B85", fontFamily: "Space Grotesk", fontStyle: "normal", fontWeight: 400, fontSize: "20px", lineHeight: "26px" }}>A few of our safety related APIs:</Typography>
                </div>
                <div className={classes.Type3}>
                    <img className={classes.frame} src= "images/frame.svg"/>
                    <div className={classes.Type3a}>
                        <Typography gutterBottom variant="subtitle1" sx={{ color: "#071B85", fontFamily: "Space Grotesk", fontStyle: "normal", fontWeight: 400, fontSize: "20px", lineHeight: "25.52px" }}>Drowsiness detection</Typography>
                    </div>   
                </div>
                <div className={classes.Type4}>
                    <img className={classes.frame} src= "images/frame.svg"/>
                    <div className={classes.Type4a}>
                        <Typography gutterBottom variant="subtitle1" sx={{ color: "#071B85", fontFamily: "Space Grotesk", fontStyle: "normal", fontWeight: 400, fontSize: "20px", lineHeight: "25.52px" }}>Drowsiness detection</Typography>
                    </div>   
                </div>
                <div className={classes.Type4}>
                    <img className={classes.frame} src= "images/frame.svg"/>
                    <div className={classes.Type4a}>
                        <Typography gutterBottom variant="subtitle1" sx={{ color: "#071B85", fontFamily: "Space Grotesk", fontStyle: "normal", fontWeight: 400, fontSize: "20px", lineHeight: "25.52px" }}>Drowsiness detection</Typography>
                    </div>   
                </div>
                <div className={classes.Type4}>
                    <img className={classes.frame} src= "images/frame.svg"/>
                    <div className={classes.Type4a}>
                        <Typography gutterBottom variant="subtitle1" sx={{ color: "#071B85", fontFamily: "Space Grotesk", fontStyle: "normal", fontWeight: 400, fontSize: "20px", lineHeight: "25.52px" }}>Drowsiness detection</Typography>
                    </div>   
                </div>
              </div>

              <div className={classes.containerHr}>
                <div className={classes.hr}></div>
              </div>
                          
              <div >
                <div className={classes.Type1}>
                    <Typography  gutterBottom variant="subtitle1" sx={{ color: "#071B85", fontFamily: "Space Grotesk", fontStyle: "normal", fontWeight: 700, fontSize: "24px", lineHeight: "30.62px", textAlign: "center"}}>Safety</Typography>
                </div>
                <div className={classes.Type2}>
                    <Typography gutterBottom variant="subtitle1" sx={{ color: "#071B85", fontFamily: "Space Grotesk", fontStyle: "normal", fontWeight: 400, fontSize: "20px", lineHeight: "26px" }}>A few of our safety related APIs:</Typography>
                </div>
                <div className={classes.Type3}>
                    <img className={classes.frame} src= "images/frame.svg"/>
                    <div className={classes.Type3a}>
                        <Typography gutterBottom variant="subtitle1" sx={{ color: "#071B85", fontFamily: "Space Grotesk", fontStyle: "normal", fontWeight: 400, fontSize: "20px", lineHeight: "25.52px" }}>Drowsiness detection</Typography>
                    </div>   
                </div>
                <div className={classes.Type4}>
                    <img className={classes.frame} src= "images/frame.svg"/>
                    <div className={classes.Type4a}>
                        <Typography gutterBottom variant="subtitle1" sx={{ color: "#071B85", fontFamily: "Space Grotesk", fontStyle: "normal", fontWeight: 400, fontSize: "20px", lineHeight: "25.52px" }}>Drowsiness detection</Typography>
                    </div>   
                </div>
                <div className={classes.Type4}>
                    <img className={classes.frame} src= "images/frame.svg"/>
                    <div className={classes.Type4a}>
                        <Typography gutterBottom variant="subtitle1" sx={{ color: "#071B85", fontFamily: "Space Grotesk", fontStyle: "normal", fontWeight: 400, fontSize: "20px", lineHeight: "25.52px" }}>Drowsiness detection</Typography>
                    </div>   
                </div>
                <div className={classes.Type4}>
                    <img className={classes.frame} src= "images/frame.svg"/>
                    <div className={classes.Type4a}>
                        <Typography gutterBottom variant="subtitle1" sx={{ color: "#071B85", fontFamily: "Space Grotesk", fontStyle: "normal", fontWeight: 400, fontSize: "20px", lineHeight: "25.52px" }}>Drowsiness detection</Typography>
                    </div>   
                </div>
            </div>

            </div>
            
            <div className={classes.explore}>
                <div>
                    <button className={classes.button}>
                        <div className={classes.buttonOne}>
                           <Typography>Explore the marketplace</Typography> 
                           <img  className={classes.arrow} src="images/arrow.svg"/>
                        </div> 
                    </button>
                </div>
            </div>
        </div>    

    )
};

export default MarketPlace

const useStyles = makeStyles ({
    head: {
        width: 'hug (425px)',
        height: 'hug (46px)',
        top: '16px',
        left: '16px',
    },

    paragraph: {
        width: '661px',
        height: '80px',
        top: '8px',
        left: '8px',
        marginLeft: '387px',
        font: 'Space Grotesk'
    },

    column: {
        display: 'flex'
    },

    Type1: {
        width: '77px',
        height: '31px',
        alignItems: 'center',
        display: 'flex',
        marginTop: '72px',
        marginLeft: '136px'
    },

    Type2: {
        width: '308px',
        height: '26px',
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        marginLeft: '136px'
    },

    Type3: {
        display: 'flex',
        gap: '12px',
        marginTop: '36px',
        marginLeft: '136px'
    },

    frame: {
        width: '40px',
        height: '40px',
        radius: '100px',
        marginTop: '36px'
    },

    Type3a: {
        width: '210px',
        height: '26px',
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        marginTop: '43px'   
    },

    Type4: {
        display: 'flex',
        gap: '12px',
        marginTop: '24px',
        marginLeft: '136px'
    },

    Type4a: {
        width: '210px',
        height: '26px',
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        marginTop: '38px'
    },

    divider: {
        position: 'absolute',
        paddingLeft: '500px'
    },

    Vr: {
        height: '500px',
        width: '0px',
        color: 'black',
        borderLeft: '1px solid silver',
        marginTop: '50px',

    },

    list: {
        display: 'flex',
        justifyContent: 'space-evenly',
        marginLeft: '188px',
        color: '#00308F',
        marginTop: '72px'
    },

    container: {
        marginLeft: '-30px'
    },

   explore: {
    display: 'flex',
    gap: '15px'
   },

   button: {
        backgroundColor: '#081F4A',
        height: '60px',
        width: '277px',
        marginLeft: '582px',
        marginTop: '135px',
        border: 'none',
        color: '#FFEA00',
        fontFamily: 'space Grotesk',
        fontWeight: '500',
        fontSize: '16px',
        lineHeight: '20.42px',
        Top: '20px',
        left: '24px',
        align: 'center',
        alignItems: 'center',        
   },

   buttonOne: {
    display: 'flex',
    gap: '24px',
    marginLeft: '24px',   
   },
   
   arrow: {
    width: '13px',
    height: '13px',
    top: '23px',
    background: '#081F4A',
   },

   containerHr: {
    position: 'absolute',
    paddingLeft: '-10px'  
   },

   hr: {
    height: '500px',
    width: '0px',
    borderRight: '1px solid silver',
    marginTop: '50px',
    paddingLeft: '940px'  
   }

})
    


   