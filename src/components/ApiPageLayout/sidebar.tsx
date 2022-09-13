import React from 'react'
import { makeStyles } from '@mui/styles'
import { NavLink } from 'react-router-dom';

import KeyboardDoubleArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowLeftOutlined';
import { Tab, Tabs, Typography } from '@mui/material';
import { DEVELOPERSLINKS } from '../../testdata';

const Sidebar: React.FC = () => {
    const classes = useStyles();

    return (
        <div className={classes.sidebar}>
            <div className={classes.sidebarLinks}>
                {DEVELOPERSLINKS.map((link, i) => (
                    <NavLink key={i} to={link.link} className={classes.link} style={({isActive}) => (
                        isActive ? {
                            color: "#FFF",
                            background: "#9999CC",
                            borderRadius: "15px"
                        }
                        : 
                        {}
                    )}>
                        {link.image}
                        <Typography>{link.text}</Typography>
                    </NavLink>
                    // <Tabs key={i} className={classes.link}>
                    //     <Tab icon={link.image} iconPosition="start" component={NavLink} to={link.link} label={link.text} />
                    // </Tabs>
                ))}
            </div>
            <div className={classes.collapse}>
                <KeyboardDoubleArrowLeftOutlinedIcon />
                <Typography>Collapse Sidebar</Typography>
            </div>
        </div>
    )
}

const useStyles = makeStyles({
    sidebar: {
        position: "sticky",
        top: "0rem",
        left:'0rem',
        right:'0rem',
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "2rem 2rem",
        width: "300px",
        height: "calc(100vh - 98px)",
        borderRight: "1px solid #000"
    },
    sidebarLinks: {
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
    },
    link: {
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        color: "#000000",
        padding: "10px",
        "&:hover": {
                            background: "#CCC",
                            borderRadius: "15px"
        }
    },
    collapse: {
        display: "flex",
        alignItems: "center",
        gap: "1rem"
    },
    active: {
        color: "#000FFF",
        background: "#000999"
    }
})

export default Sidebar