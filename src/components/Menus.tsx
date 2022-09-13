import React from 'react'
import { makeStyles } from "@mui/styles";
import { Avatar, Fade, Menu, MenuItem, Button, Typography } from '@mui/material'

//images
import { ZapiDash, ZapiApps, ZapiHelp, ZapiArrow, ZapiPic } from '../assets'


const Menus: React.FC = () => {
    const classes = useStyles()
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };



  return (
     <div className={classes.items}>
            <Button  id="fade-button" aria-controls={open ? 'fade-menu' : undefined} aria-haspopup="true" aria-expanded={open ? 'true' : undefined} onClick={handleClick}>
                <div className={classes.root}>All Projects</div><img src={ZapiArrow} alt='zapi-arrow' style={{ color:'#00000', marginLeft:'0.4rem' }}/>
            </Button>
            <Menu id="fade-menu" MenuListProps={{ 'aria-labelledby': 'fade-button', }} anchorEl={anchorEl} open={open} onClose={handleClose} TransitionComponent={Fade}>
                <MenuItem onClick={handleClose}>Zapi</MenuItem>
                <MenuItem onClick={handleClose}>Zummit Academy</MenuItem>
                <MenuItem onClick={handleClose}>Zapi Tools</MenuItem>
            </Menu>
            <div className={classes.icons}>
                <img src={ZapiDash} alt='zapi-board' style={{ color:'#00000' }}/>
                <img src={ZapiApps} alt='zapi-apps' style={{ color:'#00000' }}/>
                <img src={ZapiHelp} alt='zapi-help' style={{ color:'#00000' }}/>
            </div>
               
                    <Avatar src={ZapiPic} alt='zapi-pic' />
                
            </div>

  )
}

const useStyles = makeStyles({
   
    icons:{
        alignItems:'center',
        display:'flex',
        justifyContent:'space-between',
        width:"inherit"
    },
    items:{
        alignItems:'center',
        display:'flex',
        width:'350px',
        gap:'2rem'
    },

    root:{
        width:'450px',
        textTransform: 'none',
        fontSize:'16px',
        color: '#00000',
    }
})

export default Menus