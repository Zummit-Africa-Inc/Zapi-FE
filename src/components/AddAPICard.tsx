import React from "react";
import { makeStyles } from "@mui/styles";
import { blue } from '@mui/material/colors';
import { Avatar, CardHeader, IconButton, Paper, Box, Card, CardContent, Typography } from "@mui/material";
import { Animation, MoreVertRounded } from "@mui/icons-material";




const AddAPICard: React.FC = () => {
    const classes = useStyles();
   
    return (
        <Paper sx={{ width: "420px"}}>
            <Box sx={{ width: "420px"}}>
                <Card variant="outlined">
                    <React.Fragment>
                        <CardContent>
                            <CardHeader
                                avatar={
                                <Avatar sx={{ bgcolor: blue[500], mb: 1, mr: 5, ml: -2 }}>
                                    <Animation />
                                </Avatar>
                                }
                                action={
                                <IconButton aria-label="settings">
                                    <MoreVertRounded />
                                </IconButton>
                                }
                            />
                            <Typography variant="h5" component="div" sx={{  fontSize: "18px", fontWeight: "500", mb: 1 }}>
                                👋 Onboarding Project
                            </Typography>
                            <Typography variant="body2" sx={{ mb: 2 }}>
                                This project is created by the onboarding process
                            </Typography>
                        </CardContent>
                        <Typography sx={{ margin: 1.5, marginLeft: 2.5 }} color="text.secondary">
                            Updated
                        </Typography>
                    </React.Fragment>
                </Card>
            </Box>
        </Paper>
    );
};


const useStyles = makeStyles({
   
});

export default AddAPICard;



