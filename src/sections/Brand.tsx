import React from 'react';
import { makeStyles } from '@mui/styles';
import { Typography } from '@mui/material';
import { ClassNames } from "@emotion/react";
import { Card, CardActionArea, CardMedia, CardContent, Grid} from '@mui/material'
import { Height } from '@mui/icons-material';



const Brand = () => {
    const classes = useStyles()
    return (
        <div className={classes.brand}>
            <div className={classes.brandText}>
                 <Typography  gutterBottom variant="subtitle1" sx={{ fontWeight: 400, fontSize: "1.5rem", lineHeight: "2.5rem", paddingBottom: "2rem" }}>Used and trusted by developers and brands such as:</Typography>
            </div>
            
            <Grid className={classes.area}  >
                <Grid item xs={3} >
                    <Card sx={{ maxWidth: 345 }} className={classes.card}>
                       <CardActionArea >
                            <CardContent>
                              <Typography gutterBottom variant="h5" component="div">
                                  Logo
                                </Typography>
          
                             </CardContent>
                        </CardActionArea>
                     </Card>
                </Grid >
                <Grid item xs={3}>
                    <Card sx={{ maxWidth: 345 }} className={classes.card}>
                       <CardActionArea >
                            <CardContent>
                              <Typography gutterBottom variant="h5" component="div">
                                  Logo
                                </Typography>
          
                             </CardContent>
                        </CardActionArea>
                     </Card>
                </Grid >
                <Grid  item xs={3}>
                    <Card sx={{ maxWidth: 345 }} className={classes.card}>
                       <CardActionArea >
                            <CardContent>
                              <Typography gutterBottom variant="h5" component="div">
                                  Logo
                                </Typography>
          
                             </CardContent>
                        </CardActionArea>
                     </Card>
                </Grid >
                <Grid item xs={3}>
                    <Card sx={{ maxWidth: 345 }} className={classes.card}>
                       <CardActionArea >
                            <CardContent>
                              <Typography gutterBottom variant="h5" component="div">
                                  Logo
                                </Typography>
          
                             </CardContent>
                        </CardActionArea>
                     </Card>
                </Grid >
                
            </Grid>
        </div>
    )
}

export default Brand

const useStyles = makeStyles ({
    brand: {
     backgroundColor: 'silver',
     marginTop: '3rem',
     height: '12rem'
    
   },

    brandText: {
        textAlign: "center",
        paddingTop: "2rem",
        color: "#000000",
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