import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux'
import { makeStyles } from "@mui/styles";
import { Badge, Button, IconButton, Menu, MenuItem } from '@mui/material';
import { Link } from "react-router-dom";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { io } from 'socket.io-client';
import { USER } from "../testdata";

interface INotificationProps {
    socket: string | any;
};


const Notification: React.FC<INotificationProps> = ({ socket }) => {
    const classes = useStyles();
    const [notifications, setNotifications] = useState<string[]>([]);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    // const [open, setOpen] = useState<boolean>(false);
    const [user] = USER;

    // const profileId = USER.map(user => {
    //     { user.profileId }
    // });

    socket = io("http://3.87.119.169:5000");
    useEffect(() => {
        socket.on(`newSubscription_b77dc7ec-74df-4fa5-ba32-b50fede35785`, (data: any) => {
            console.log(data);
            setNotifications([...notifications, data]);
        })
        console.log(notifications);
        socket.on(`unSubscription_b77dc7ec-74df-4fa5-ba32-b50fede35785`, (data: any) => {
            setNotifications([...notifications, data])
            console.log(data);
        })
        socket.on(`apiHosted_b77dc7ec-74df-4fa5-ba32-b50fede35785`, (data: any) => {
            setNotifications([...notifications, data])
            console.log(data);
        })
        socket.on(`apiDown_b77dc7ec-74df-4fa5-ba32-b50fede35785`, (data: any) => {
            setNotifications([...notifications, data])
            console.log(data);
        })
    }, [socket]);


    const displayNotification = (type: number) => {
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
        setAnchorEl(null);
    }

    return (
        <>
            <div>
                {notifications.length > 0 ?
                    <Badge badgeContent={notifications.length} color="error">
                        <span onClick={handleClick}
                            aria-controls={open ? 'account-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}>
                            <NotificationsNoneIcon color="action" />
                        </span>
                    </Badge>
                    :
                    <span onClick={handleClick}
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}>
                        <NotificationsNoneIcon color="action" />
                    </span>
                }
                {open && (
                    <div className={classes.notifications}>
                        {notifications.length > 0 ?
                            <>
                                <Menu
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}
                                    onClick={handleClose}
                                    PaperProps={{
                                        sx: {
                                            overflow: 'visible',
                                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                            mt: 1.5,
                                            '& .MuiAvatar-root': {
                                                width: 32,
                                                height: 32,
                                                ml: -0.5,
                                                mr: 1,
                                            },
                                            '&:before': {
                                                content: '""',
                                                display: 'block',
                                                position: 'absolute',
                                                top: 0,
                                                right: 14,
                                                width: 10,
                                                height: 10,
                                                bgcolor: 'background.paper',
                                                transform: 'translateY(-50%) rotate(45deg)',
                                                zIndex: 0,
                                            },
                                        },
                                    }}
                                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                >
                                    <MenuItem>
                                        {notifications.map((n: any) => displayNotification(n))}
                                    </MenuItem>
                                </Menu>
                                <span className={classes.nButton} style={{ background: "#081F4A", color: "#FF5C00" }} onClick={handleRead}>Mark as read</span>
                            </>
                            :
                            <>
                                <Menu
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}
                                    onClick={handleClose}
                                    PaperProps={{
                                        sx: {
                                            overflow: 'visible',
                                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                            mt: 1.5,
                                            '& .MuiAvatar-root': {
                                                width: 32,
                                                height: 32,
                                                ml: -0.5,
                                                mr: 1,
                                            },
                                            '&:before': {
                                                content: '""',
                                                display: 'block',
                                                position: 'absolute',
                                                top: 0,
                                                right: 14,
                                                width: 10,
                                                height: 10,
                                                bgcolor: 'background.paper',
                                                transform: 'translateY(-50%) rotate(45deg)',
                                                zIndex: 0,
                                            },
                                        },
                                    }}
                                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                >
                                    <MenuItem>

                                        <span className={classes.notification}>No new notification</span>
                                    </MenuItem>
                                </Menu>


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
            width: '10rem',
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
        zIndex: "9999",
    },
    nButton: {
        width: '100%',
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
        '@media screen and (max-width: 750px)': {
            width: '100%',
        }
    },

})

export default Notification;