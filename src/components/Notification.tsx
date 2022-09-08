import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux'
import { makeStyles } from "@mui/styles";
import { Badge, Button, Menu, MenuItem } from '@mui/material';
import { Link } from "react-router-dom";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { io } from 'socket.io-client';
import { USER } from "../testdata";
import { IsAny } from "@reduxjs/toolkit/dist/tsHelpers";

interface INotificationProps {
    socket: string | any;
};


const Notification: React.FC<INotificationProps> = ({ socket }) => {
    const classes = useStyles();
    const [notifications, setNotifications] = useState<string[]>([]);
    const [open, setOpen] = useState<boolean>(false);
    const [user] = USER;

    // const profileId = USER.map(user => {
    //     { user.profileId }
    // });

    socket = io(import.meta.env.VITE_SOCKET_URL);
    useEffect(() => {
        if(socket.connected){
            socket.on(`newSubscription_${user.profileId}`, (data: any) => {
                setNotifications([...notifications, data])
            })
            socket.on(`unSubscription_${user.profileId}`, (data: any) => {
                setNotifications([...notifications, data])
            })
            socket.on(`apiHosted_${user.profileId}`, (data: any) => {
                setNotifications([...notifications, data])
            })
            socket.on(`apiDown_${user.profileId}`, (data: any) => {
                setNotifications([...notifications, data])
            })
        }
        else {
            socket.on("connect_error", () => {
              });
        }
    }, [socket]);


    const displayNotification = ( type : number) => {
        let action;

        if (type === 1) {
            action = "newSubscription";
            return (
                <span className={classes.notification}><Link to="/">{'Someone UnSubscribed from your api'}</Link></span>
            )
        } else if (type === 2) {
            action = "unSubscription";
            return (
                <span className={classes.notification}><Link to="/">{'Someone UnSubscribed from your api'}</Link></span>
            )
        }
        else if (type === 3) {
            action = "apiHosted";
            return (
                <span className={classes.notification}><Link to="/">{'Your Api has been Hosted'}</Link></span>
            )
        }
        else {
            action = "apiDown";
            return (
                <span className={classes.notification}><Link to="/">{'Your Api is down'}</Link></span>
            )
        }
    }

    const handleRead = () => {
        setNotifications([]);
        setOpen(false);
    }

    return (
        <>
            <div>
                {notifications.length > 0 ?
                    <Badge badgeContent={notifications.length} color="error">
                        <NotificationsNoneIcon color="action" onClick={() => setOpen(!open)} />
                    </Badge>
                    : <NotificationsNoneIcon color="action" onClick={() => setOpen(!open)} />
                }
                {open && (
                    <div className={classes.notifications}>
                        {notifications.length > 0 ?
                            <>
                                {notifications.map((n: any) => displayNotification(n))}
                                <span className={classes.nButton} style={{ background: "#081F4A", color:"#FF5C00" }} onClick={handleRead}>Mark as read</span>
                            </>
                            :
                            <>
                                <span className={classes.notification}>No new notification</span>
                            </>
                        }
                    </div>
                )}
            </div>
        </>
    );
};


const useStyles = makeStyles({
    notification: {
        padding: '5px',
        width: '25rem',
        height: '3rem',
        bordeBottom: '5px solid black',
        borderRadius: '15px',
        textAlign: 'center',
        paddingTop: '15px',
        alignItems: 'center',
        fontWeight: 600,
        fontSize: '1rem',
        cursor: 'default',
        '@media screen and (max-width: 450px)': {
            width: '100%',
        }
    },
    notifications: {
        position: 'absolute',
        top: '50px',
        right: '-2.5rem',
        backgroundColor: '#F3F4F6',
        color: 'black',
        fontWeight: '300',
        display: 'flex',
        flexDirection: 'column',
        padding: '10px',
    },
    nButton: {
        width: '10rem',
        height: '3rem',
        background: '#081F4A',
        borderRadius: '15px',
        textAlign: 'center',
        paddingTop: '15px',
        color: '#FF5C00',
        alignItems: 'center',
        fontWeight: 600,
        fontSize: '1rem',
        cursor: 'pointer',
        marginTop: '10px',
        '@media screen and (max-width: 450px)': {
            width: '100%',
        }
    },
    button: {
        width: "440px",
        height: "52px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "4px",
        fontSize: "16px",
        fontWeight: 400,
        lineHeight: "16px",
        cursor: "pointer",
        margin: "2rem 0",
        padding: "0 1rem",
        "@media screen and (max-width: 768px)": {
            width: "100%",
        }
    }

})

export default Notification;