import React from "react";
import { makeStyles } from "@mui/styles";
import { blue } from '@mui/material/colors';
import { Avatar, CardHeader, IconButton, Paper, Box, Card, CardContent, Typography } from "@mui/material";
import { Animation, MoreVertRounded } from "@mui/icons-material";
import { Link } from "react-router-dom";


interface CardProps {
    id: string
    name: string
    description: string
};

const DevAPICard: React.FC<CardProps> = ({id,name,description}) => {
    const classes = useStyles();

   
    return (
        <Link to={`/api/${id}`}>
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
                                {name || '👋 Onboarding Project'}
                            </Typography>
                            <Typography variant="body2" sx={{ mb: 2 }}>
                                {description || 'This project is created by the onboarding process ' }
                            </Typography>
                        </CardContent>
                        <Typography sx={{ margin: 1.5, marginLeft: 2.5 }} color="text.secondary">
                            Updated
                        </Typography>
                    </React.Fragment>
                </Card>
            </Box>
        </Paper>
        </Link>
    );
};


const useStyles = makeStyles({
   
});

export default DevAPICard;



