import React, { useEffect } from "react";
import { useContextProvider } from "../contexts/ContextProvider";
import { Typography, Stack } from '@mui/material';
import { useAppSelector } from '../hooks';
import { Navbar } from "../components";
import { makeStyles } from "@mui/styles";
import { Link } from 'react-router-dom';

const Notifications: React.FC = () => {
    const { notifications } = useAppSelector(store => store.notifications);
    const classes = useStyles();
    const { setActiveMenu, screenSize, setScreenSize } = useContextProvider();
    const [data] = notifications;
    
    

    useEffect(() => {
        const handleScreenResize = () => setScreenSize(innerWidth)
        window.addEventListener('resize', handleScreenResize)
        handleScreenResize()
        return () => window.removeEventListener('resize', handleScreenResize)
    }, []);

    useEffect(() => {
        screenSize <= 900 ? setActiveMenu(false) : null
    }, [screenSize]);

    const displayNotification = () => {
        let action;

        if (data.content === "newSubscription") {
            action = "newSubscription";
            return (
                <>
                    <span className={classes.notification}>{`Someone Subscribed To your api - ${data.createdOn?.toLocaleString} `}</span>
                </>
            )
        } else if (data.content === "unSubscription") {
            action = "unSubscription";
            return (
                <>
                    <span className={classes.notification}>{`Someone UnSubscribed from your api - ${data.createdOn?.toLocaleString()} `}</span>
                </>
            )
        }
        else if (data.content === "apiHosted") {
            action = "apiHosted";
            return (
                <>
                    <span className={classes.notification}>{`Your Api has been Hosted - ${data.createdOn?.toLocaleString()} `}</span>
                </>
            )
        }
        else if (data.content === "apiDown") {
            action = "apiDown";
            return (
                <>
                    <span className={classes.notification}>{`Your Api is down - ${data.createdOn?.toLocaleString()} `}</span>
                </>
            )
        }
    }

    return (
        <>
            <Navbar />
            <div>
                {notifications.length !== 0 ?
                    <div className={classes.notificationCard}>
                        <Typography gutterBottom variant="h4">View All Notifications</Typography>
                        <Stack
                        justifyContent="center"
                        alignItems="center" 
                        sx={{ width: '100vw'}}
                        >
                       
                            
                            {notifications.map(() => displayNotification())}
                       </Stack>
                    </div>
                    :
                    <div className={classes.noNotification}>
                        <Typography gutterBottom variant="subtitle1" sx=
                            {{
                                color: "#000000", fontFamily: "Space Grotesk", fontWeight: 700, fontSize: "18px",
                                lineHeight: "30px", textAlign: "center", marginTop: "116px"
                            }}>
                            You do no have any old notifications
                        </Typography>
                        <Typography gutterBottom variant="subtitle1" sx={{
                            color: "#000000", fontFamily: "Space Grotesk", fontStyle: "normal", fontWeight: 400,
                            fontSize: "16px", lineHeight: "30px", textAlign: "center", marginTop: "16px"
                        }}><Link to="/">Go Back</Link>
                        </Typography>
                    </div>}
            </div>
        </>
    );
};


const useStyles = makeStyles({
    noNotification: {
        marginTop: "200px",
        alignItems:'center',
        paddingBottom: "80px",
        height: "calc(100vh - 315px)"
    },
    notification: {
        // width: "100vw",
        alignItems: 'center',
        justifyContent: "center",
        padding: "20px",
        
    },
    notificationCard: {
        height: "calc(100vh - 715px)",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "1.5rem",
        flexWrap: "wrap",
    }
})

export default Notifications;

