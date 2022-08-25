import React from 'react';
import { makeStyles } from '@mui/styles';
import { Typography } from '@mui/material';
import { ClassNames } from "@emotion/react";
import { Card, CardActionArea, CardMedia, CardContent, Grid} from '@mui/material'
import { Height } from '@mui/icons-material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify, faSlack, faDropbox, } from '@fortawesome/free-brands-svg-icons'





const Brand = () => {
    const classes = useStyles()
    
    return (
        <div className={classes.brand}>
          <div className={classes.logo}>
            <div className={classes.brandText}>
                 <Typography  gutterBottom variant="subtitle1" sx={{ fontWeight: 400, fontSize: "1.5rem", lineHeight: "2.5rem", paddingBottom: "2rem" }}>Used and trusted by developers and brands such as:</Typography>
            </div>
              
            <div className={classes.brandlogo}>
               <Typography gutterBottom variant="subtitle1" sx={{ fontWeight: 600, fontSize: "2rem", lineHeight: "2.5rem", paddingBottom: "2rem", color: "#0000FF" }}>coinbase</Typography>
               <div className={classes.logoname}>
                 <FontAwesomeIcon className={classes.icon} icon={faSpotify}></FontAwesomeIcon>
                 <Typography  gutterBottom variant="subtitle1" sx={{ marginLeft: "0.5rem", fontWeight: 600, fontSize: "2rem", lineHeight: "2.5rem", paddingBottom: "2rem", color: "#32CD32"}}>Spotify</Typography>
               </div>
               
               <div className={classes.logoname}>
                  <FontAwesomeIcon className={classes.icontwo} icon={faSlack}></FontAwesomeIcon>
                  <Typography gutterBottom variant="subtitle1" sx={{ marginLeft: "0.5rem", fontWeight: 600, fontSize: "2rem", lineHeight: "2.5rem", paddingBottom: "2rem" }}>Slack</Typography>
               </div>

               <div className={classes.logoname}>
                  <FontAwesomeIcon  className={classes.iconthree} icon={faDropbox}></FontAwesomeIcon>
                  <Typography  gutterBottom variant="subtitle1" sx={{ marginLeft: "0.5rem", fontWeight: 600, fontSize: "2rem", lineHeight: "2.5rem", paddingBottom: "2rem" }}>Dropbox</Typography>
               </div>
               
               <Typography gutterBottom variant="subtitle1" sx={{ fontWeight: 600, fontSize: "2rem", lineHeight: "2.5rem", paddingBottom: "2rem" }}>Webflow</Typography>
               <Typography gutterBottom variant="subtitle1" sx={{ fontWeight: 600, fontSize: "2rem", lineHeight: "2.5rem", paddingBottom: "2rem", color: "#1E90FF" }}>zoom</Typography>
            </div>  
            
          </div>
        </div>
    )
}

export default Brand

const useStyles = makeStyles ({
    brand: {
     backgroundColor: '#F0F8FF',
     marginTop: '3rem',
     height: '12rem',
   },

    logo: {
      backgroundColor: 'silver',
      height: ' 9rem',
      width: '80rem',
      marginLeft: '3rem',
      alignItems: 'center',   
    },

    brandlogo: {
        display: 'flex',
        justifyContent: 'space-evenly',
        marginTop: '-2rem'
    },

    icon: {
      width: '3rem',
      height: '3rem',
      color: '#32CD32'
    },
    icontwo: {
      width: '3rem',
      height: '3rem',
      color: '#DAA520'
    },

    iconthree: {
      width: '3rem',
      height: '3rem',
      color: '#0000FF'
    },

    logoname: {
      display: 'flex'
    },

    brandText: {
        textAlign: "center",
        paddingTop: "2rem",
        color: "#00308F",
        "@media screen and (max-width: 950px)": {
          "& br": {
            display: "none"
          },
        }
    },

    area: {
        display: 'flex',
        padding: '4rem 4rem',
        marginTop: '-8rem'
    },

    card: {
      width: '13rem',
      height: '3rem',
      margin: '3rem',
      

    },
})