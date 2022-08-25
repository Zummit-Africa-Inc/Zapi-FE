import React from 'react';
import { makeStyles } from '@mui/styles';
import { Typography } from '@mui/material';
import { ClassNames } from "@emotion/react";
import { Card, CardActionArea, CardMedia, CardContent, Grid} from '@mui/material'
import { Height } from '@mui/icons-material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';



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