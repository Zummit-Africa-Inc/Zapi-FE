import React from 'react'
import { makeStyles } from "@mui/styles";
import { Avatar, Fade, Menu, MenuItem, Button, Typography } from '@mui/material'

import { ZapiDash, ZapiApps, ZapiHelp, ZapiArrow, ZapiPic } from '../assets'

const Menus: React.FC = () => {
    const classes = useStyles()
    const [anchorE2, setAnchorE2] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const isAvatarOpen = Boolean(anchorE2);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    
    
    const handleAvatarClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorE2(event.currentTarget);
    };

    const handleAvatarClose = () => {
        setAnchorE2(null);
    };

  return (
     <div className={classes.items}>
        <Button className={classes.root} id="fade-button" aria-controls={open ? 'fade-menu' : undefined} aria-haspopup="true" aria-expanded={open ? 'true' : undefined} onClick={handleClick}>
            All Projects<img src={ZapiArrow} alt='zapi-arrow' style={{ color:'#00000', marginLeft:'0.4rem' }}/>
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
          
        <Button id="avatar-button" aria-controls={isAvatarOpen ? 'avatar-menu' : undefined} aria-haspopup="true" aria-expanded={isAvatarOpen ? 'true' : undefined} onClick={handleAvatarClick}>
            <Avatar src={ZapiPic} alt='zapi-pic' />
        </Button>
        <Menu id="avatar-menu" MenuListProps={{ 'aria-labelledby': 'avatar-button', }} anchorEl={anchorE2} open={isAvatarOpen} onClose={handleAvatarClose} TransitionComponent={Fade}>
            <MenuItem onClick={handleAvatarClose}>LOGOUT</MenuItem>
        </Menu>
          
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
        "&.MuiButton-text": {
            color: "black"
          },
        "&.MuiButton-root": {
            textTransform: 'none',
            fontSize:'16px',
        }
    }
})

export default Menus
