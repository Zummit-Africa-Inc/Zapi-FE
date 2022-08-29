import React from 'react';
import { makeStyles } from '@mui/styles';
import { Typography } from '@mui/material';
import { ClassNames } from "@emotion/react";
import { Height } from '@mui/icons-material';


const Brand = () => {
    const classes = useStyles()
    
    return (
      <div className={classes.brand}>
          <div className={classes.logo}>
            <div className={classes.brandText}>
                 <Typography  gutterBottom variant="subtitle1" sx={{ fontStyle: 'normal', fontColor: '#071B85', fontFamily: 'Space Grotesk', fontWeight: 500, fontSize: "24px", lineHeight: "30px" }}>Used and trusted by developers and brands such as:</Typography>
            </div>
              
            <div className={classes.brandlogo}>
               <div className={classes.coinbase}>
                 <img  src="images/coinbase.svg "/>
               </div>
               
               <div className={classes.logoname}>
                 <img className={classes.spotify} src="images/spotify.svg"/>
               </div>
               
                <div className={classes.slackdiv}>
                   <div className={classes.slacklogo}>
                    <div className={classes.slackUpper}>
                      <img className={classes.slack1} src="images/slack1.svg"/>
                      <img className={classes.slack2} src="images/slack2.svg"/>
                    </div>
                    <div className={classes.slackLower}>
                      <img className={classes.slack3} src="images/slack3.svg"/>
                      <img className={classes.slack4} src="images/slack4.svg"/>
                    </div>
                   </div>
                  
                   <img className={classes.slack} src="images/slack.svg"/>
                </div>

               <div className={classes.dropboxlogo}>
                  <img className={classes.dropboxx} src="images/dropboxx.svg"/>
                  <img className={classes.dropbox} src="images/dropbox.svg"/>
               </div>
               
               <img  className={classes.webflow} src="images/webflow.svg"/>
               <img  className={classes.zoom} src="images/zoom.svg"/>
            </div>  
            
          </div>
        </div>

      
    )
  }      
export default Brand

const useStyles = makeStyles ({
  brand: {
    width: '1440px',
    height: '398px',
    left: '0px',
    top: '902px',
   background: '#EDF5FD',
   padding: '80px,0px',
   alignItems: 'center',
   justifyContent: 'center',
   flexDirection: 'column',
   display: 'flex'
   
 },
 
  logo: {
    width: '1216px',
    height: '238px',
    background: '#F9FAFB', 
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: '16px',
    justifyContent: 'space-evenly',
    padding: '48px, 64px',
    gap: '64px',
    
  },
 
  brandlogo: {
      display: 'flex',
      justifyContent: 'space-evenly',
      gap: '65px'
      
  },
  brandText: {
    height: '30px',
    width: '611px',
    display: 'flex',
    alignItems: 'center',
    flex: 'none',
    color: '#071B85',
    order: '0',
    flexGrow: '0'

  },

  coinbase: {
    width: '134.35px',
    height: '24px',
    top: '10px'
  },
  
  logoname: {
    display: 'flex'
  },
 
  spotify: {
    width: '140.04px',
    height: '42px',
  },

  slackdiv: {
    gap: '18px',
    display: 'flex'
  },

  slacklogo: {
    justifyContent: 'space-between'
  },

  slackUpper: {
    width: '13.97px',
    height: '14px',
    top: '24.7px',
    display: 'flex',
    bottom: '19.37%'

  },

  slack1: {
    height: '14px',
    width: '13.97px'

  },
  slack2: {
    width: '13.97px',
    height: '14px'
  },
  
  slackLower: {
    width: '13.97px',
    height: '14px',
    top: '24.7px',
    display: 'flex',
    bottom: '19.37%'
  },
  slack3: {
    
    left: '0%',
    right: '88.45%',
    top: '51.47%',
    bottom: '19.37%'
  },

  slack4: {
    
    left: '0%',
    right: '88.45%',
    top: '51.47%',
    bottom: '19.37%'
  },

  slack: {
    height: '25.34px',
    width: '82.79px'
  },

  dropboxlogo: {
    gap: '10px',
    justifyContent: 'space-between',
    display: 'flex'
  },

  dropboxx: {
    width: '37.66px',
    height: '32px'
  },

  dropbox: {
    width: '117.17px',
    height: '27.19px',
  },

  webflow: {
    width: '115.45px',
    height: '29px'
  },

  zoom: {
    height: '22px',
    width: '97.9px',
    top: '14px',
    right: '0.1%',
    bottom: '25%',
  }
    
})