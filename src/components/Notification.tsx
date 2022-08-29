import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux'
import { makeStyles } from "@mui/styles";
import { Badge, Button, Menu, MenuItem } from '@mui/material';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { io } from 'socket.io-client';
import { USER } from "../testdata";


interface INotificationProps {
    socket: any;
};


const Notification: React.FC<INotificationProps> = ({ socket }) => {
    const classes = useStyles();
    const [notifications, setNotifications] = useState<string[]>([]);
    const [open, setOpen] = useState<any>(false);
    const profileId = USER.map(user => {
        { user.profileId }
    });

    socket = io('http://localhost:3000');
    useEffect(() => {
        socket.on(`newSubscription_${profileId}`, (data: any) => {
            console.log(data);
            setNotifications([...notifications, data])
        })
        console.log(notifications);
        socket.on(`unSubscription_${profileId}`, (data: any) => {
            console.log(data);
            setNotifications([...notifications, data])
        })
        console.log(notifications);
        socket.on(`apiHosted_${profileId}`, (data: any) => {
            console.log(data);
            setNotifications([...notifications, data])
        })
        console.log(notifications);
        socket.on(`approfileIdown_${profileId}`, (data: any) => {
            console.log(data);
            setNotifications([...notifications, data])
        })
        console.log(notifications);
    }, [socket]);


    const displayNotification = ({ type }: any) => {
        let action;

        if (type === 1) {
            action = "newSubscription";
            return (
                <span className={classes.notification}>{'Someone UnSubscribed from your api'}</span>
            )
        } else if (type === 2) {
            action = "unSubscription";
            return (
                <span className={classes.notification}>{'Someone UnSubscribed from your api'}</span>
            )
        }
        else if (type === 3) {
            action = "apiHosted";
            return (
                <span className={classes.notification}>{'Your Api has been Hosted'}</span>
            )
        }
        else {
            action = "apiDown";
            return (
                <span className={classes.notification}>{'Your Api is down'}</span>
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
                                <span className={classes.nButton} onClick={handleRead}>Mark as read</span>
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
    }

})

export default Notification;