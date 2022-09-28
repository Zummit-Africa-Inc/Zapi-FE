import React from "react";
import { makeStyles } from "@mui/styles";
import { blue } from '@mui/material/colors';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Avatar, Paper, Stack } from "@mui/material";
import { AccountTree, Animation } from "@mui/icons-material";


const AddAPICard: React.FC = () => {
    const classes = useStyles();
   
    return (
        <Paper sx={{ width: "420px"}}>
            <Box sx={{ width: "420px"}}>
                <Card variant="outlined">
                    <React.Fragment>
                        <CardContent>
                        <Stack direction="row" spacing={2}>
                            <Avatar sx={{ bgcolor: blue[500], mb: 1 }}>
                                <Animation />
                            </Avatar>
                        </Stack>
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
    // root: {
    //     width: 300,
    //     height: 320,
    //     padding: "1rem 0.5rem",
    // },
    // span: {
    //     display: "flex",
    //     alignItems: "center",
    //     justifyContent: "center",
    //     gap: "0.5rem",
    // },
    // card: {
    //     transition: "0.2s all ease-in-out",
    //     "&:hover": {
    //         transform: "scale(1.03)",
    //     }
    // }
});

export default AddAPICard;



