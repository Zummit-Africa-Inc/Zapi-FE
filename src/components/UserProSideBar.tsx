import React from 'react'
import { makeStyles } from '@mui/styles';
import { Avatar, Stack, Typography } from '@mui/material'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import SettingsIcon from '@mui/icons-material/Settings'



interface UserProp {
    id : string,
    email : string,
    fullName : string,
    userName : string,
    image?: string
}

const UserProSideBar:React.FC<UserProp> = ({email,fullName,userName,image}) => {
    const classes = useStyles();
    

    return(
        <>
            <div className={classes.sidebar}>
                <Stack style={{ margin: '2rem' }}>
                    <Avatar src={image} alt='Dummy-image'  sx={{ width: 150, height: 150 }} /> 
                </Stack>
                <Typography variant='h5' style={{ fontSize: '1rem', fontWeight: 'bold'}} >
                    { fullName }
                </Typography>
                <Typography variant='h5' style={{ fontSize: '1rem'}} >
                    { userName }
                </Typography>
                <Typography variant='h5' style={{ fontSize: '1rem'}} >
                    { email }
                </Typography>
            
                <Stack className={classes.note}>
                    <Stack direction='row' spacing={2}>
                        <NotificationsNoneIcon />
                        <Typography variant='h6' > Notifications</Typography>
                    </Stack>
                    <Stack direction='row' spacing={2}>
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
        height: '100% !important',
        backgroundColor: 'rgba(8, 31, 74, 0.7)',
        color: '#ffffff',
        fontSize: '0.2rem',
        padding: "0 0.25rem",
        
        
    },

    note:{
        margin: '6rem',
        alignSelf: 'flex-end'
    }


})

export default UserProSideBar