import React from "react";
import { makeStyles } from "@mui/styles";
import { blue } from '@mui/material/colors';
import { Avatar, CardHeader, IconButton, Paper, Box, Card, CardContent, Typography, Menu, MenuItem, Fade } from "@mui/material";
import { Animation, MoreVertRounded } from "@mui/icons-material";
import { Link } from "react-router-dom";


interface CardProps {
    id: string
    name: string
    description: string
};

const DevAPICard: React.FC<CardProps> = ({id,name,description}) => {
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Paper className={classes.paper} sx={{ width: "420px"}}>
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
                            <IconButton aria-label="settings" id="menuButton" aria-controls={open ? 'cardMenu' : undefined} aria-haspopup="true" aria-expanded={open ? 'true' : undefined} onClick={handleClick}>
                                <MoreVertRounded />
                            </IconButton>
                            }
                        />

                        <Menu id="cardMenu" MenuListProps={{ 'aria-labelledby': 'menuButton', }} anchorEl={anchorEl} open={open} onClose={handleClose} TransitionComponent={Fade}>
                            <MenuItem>Delete</MenuItem>
                        </Menu>
                        
                        <Link to={`/developer/api/${id}`}>
                            <Typography variant="h5" component="div" sx={{  fontSize: "18px", fontWeight: "500", mb: 1 }}>
                                {name || '👋 Onboarding Project'}
                            </Typography>
                            <Typography variant="body2" sx={{ mb: 2 }}>
                                {description || 'This project is created by the onboarding process ' }
                            </Typography>
                        </Link>
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
    paper: {
        "@media screen and (max-width: 500px)": {
            scale: .87
        },
        "@media screen and (max-width: 400px)": {
            scale: .78
        },
        "@media screen and (max-width: 375px)": {
            scale: .75
            
        }

    }
});

export default DevAPICard;
