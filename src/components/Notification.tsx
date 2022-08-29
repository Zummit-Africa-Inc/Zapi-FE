import React, { useRef, useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import {Badge, Button,Menu,MenuItem} from '@mui/material';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';



interface INotificationProps {
    socket: any;
};

const Notification: React.FC<INotificationProps> = ({ socket }) => {
    const classes = useStyles();
    const [notifications, setNotifications] = useState<string[]>([]);
    const [open, setOpen] = useState<any>(false);


    useEffect(() => {
        if (socket.connected) {
            socket.on("getNotification", (data: any) => {
                setNotifications([...notifications, data])
            })
            console.log(notifications);
        } else {
            console.log("socket is not connected");
        }
    }, [socket]);


    const displayNotification = ({ type }: any) => {
        let action;

        if (type === 1) {
            action = "newSubscription";
        } else if (type === 2) {
            action = "newSubscription";
        }
        else if (type === 3) {
            action = "apiHosted";
        }
        else {
            action = "apiDown";
        }
        return (
            <span className={classes.notification}>{`Notification: ${action}`}</span>
        )
    }

    const handleRead = () => {
        setNotifications([]);
        setOpen(false);
    }

    return (
        <>
            <div>
                <Badge badgeContent={notifications.length} color="primary">
                    <NotificationsNoneIcon color="action" onClick={() => setOpen(!open)} />
                </Badge>
                {open && (
                    <div className={classes.notifications}>
                            {notifications.length > 0 ?
                        <>
                                {notifications.map((n: any) => displayNotification)}
                                <span className={classes.nButton} onClick={handleRead}>Mark as read</span>
                        </>
                                : 
                                <span className={classes.notification}>No new notification</span>
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
        width: '10rem',
        height: '3rem',
        borderRadius: '15px',
        textAlign: 'center',
        paddingTop: '15px',
        alignItems: 'center',
        fontWeight: 600,
        fontSize: '1rem',
        cursor: 'pointer',
        '@media screen and (max-width: 450px)': {
          width: '100%',
        }
    },
    notifications: {
        position: 'absolute',
        top: '50px',
        right: '-2.5rem',
        backgroundColor: 'white',
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
