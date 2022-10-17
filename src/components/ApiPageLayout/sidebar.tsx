import React, { useState } from 'react'
import { makeStyles } from '@mui/styles'
import { NavLink } from 'react-router-dom';
import { Tab, Tabs, Typography } from '@mui/material';
import { MdMenu, MdMenuOpen } from "react-icons/md";
import { FiChevronsLeft } from "react-icons/fi";

import { DEVELOPERSLINKS } from '../../testdata';

const Sidebar: React.FC = () => {
    const classes = useStyles();
    // const [isOpen, setIsOpen] = useState<boolean>(true)

    // const handleCollapse = () => setIsOpen(!isOpen)

    return (
        <div className={classes.container}>
        <div className={classes.sidebar}>
                <div className={classes.sidebarLinks}>
                    {DEVELOPERSLINKS.map((link, i) => (
                        <NavLink key={i} to={link.link} className={classes.link} style={({ isActive }) => (
                            isActive ? {
                                color: "#FFF",
                                background: "#9999CC",
                                borderRadius: "15px"
                            }
                            :{}
                        )}>
                            {link.image}
                            <Typography>{link.text}</Typography>
                        </NavLink>
                        // <Tabs key={i} className={classes.link}>
                        //     <Tab icon={link.image} iconPosition="start" component={NavLink} to={link.link} label={link.text} />
                        // </Tabs>
                    ))}
                </div>
            </div>
            {/* <div className={classes.collapse} onClick={handleCollapse}>
                <FiChevronsLeft />
                {isOpen === true ? <Typography sx={{ fontSize: "16px" }}>Collapse Sidebar</Typography> : <Typography sx={{ fontSize: "16px" }}>Open Sidebar</Typography>}
            </div> */}
        </div>
    )
}

const useStyles = makeStyles({
    container: {
        display: "flex",
        flexDirection: "column",
        position: "fixed",
        marginTop: "70px"
    },
    sidebar: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "2rem 2rem",
        width: "250px",
        height: "100vh",
        borderRight: "1px solid #000",
        "@media screen and (max-width: 1024px)": {
            display: "none",
        },
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
        gap: ".5rem",
        cursor: "pointer"
    },
    hide: {
        display: "none"
    },
    active: {
        color: "#000FFF",
        background: "#000999"
    }
})

export default Sidebar
