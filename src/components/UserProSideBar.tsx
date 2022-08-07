import React from 'react'
import { makeStyles } from '@mui/styles';
import { Avatar, Stack, Typography } from '@mui/material'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import SettingsIcon from '@mui/icons-material/Settings'



const UserProSideBar:React.FC = ( ) => {
    const classes = useStyles();


    return(
        <>
            <div className={classes.sidebar}>
                <Stack direction='column'>
                    <Stack style={{ alignItems: 'center'}}>
                        <Avatar alt='Dummy-image'  sx={{ width: 150, height: 150 }} /> 
                    </Stack>
                    <Stack spacing={2} style={{ alignItems: 'center'}}>
                        <Typography variant='h5' style={{ fontSize: '1rem', fontWeight: 'bold'}} >
                        Dummy Name
                        </Typography>
                        <Typography variant='h5' style={{ fontSize: '1rem'}} >
                        @Dummy21
                        </Typography>
                        <Typography variant='h5' style={{ fontSize: '1rem'}} >
                        Dummyname@gmail.com
                        </Typography>
                    </Stack>
                    <Stack direction='row' style={{ marginTop: '7rem', marginLeft: '1rem' }}>
                        <NotificationsNoneIcon />
                        <Typography variant='h6' style={{ marginLeft: '1rem' }}> Notifications</Typography>
                    </Stack>
                    <Stack direction='row' style={{ marginTop: '1rem', marginLeft: '1rem' }}>
                        <SettingsIcon />
                        <Typography variant='h6' style={{ marginLeft: '1rem' }}> Settings</Typography>
                    </Stack>
                </Stack>

            </div>
        
        </>
    )
};

const useStyles = makeStyles({
    sidebar: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyItems: 'center',
        marginLeft: '0.2rem',
        border: '2px',
        borderRadius: '20px',
        width: '100%',
        height:'800px',
        backgroundColor: 'rgba(8, 31, 74, 0.7)',
        color: '#ffffff',
        fontSize: '0.2rem',
        padding: "0 0.25rem",
    },


})

export default UserProSideBar