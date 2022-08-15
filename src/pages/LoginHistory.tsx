import React, {useEffect} from "react";
import { useContextProvider } from "../contexts/ContextProvider";
import {
    Box,
    Grid,
    List,
    Link,
    ListItem,
    Stack,
    Toolbar,
    Typography,
} from "@mui/material";
import { Navbar } from "../components";
import { makeStyles } from "@mui/styles";
import { LOGINHISTORIES } from "../testdata";

const LoginHistory: React.FC = () => {
    const classes = useStyles();
    const { setActiveMenu, screenSize, setScreenSize } = useContextProvider();

    useEffect(() => {
        const handleScreenResize = () => setScreenSize(innerWidth)
        window.addEventListener('resize', handleScreenResize)
        handleScreenResize()
        return () => window.removeEventListener('resize', handleScreenResize)
      },[]);

    useEffect(() => {
    screenSize <= 900 ? setActiveMenu(false) : null
    },[screenSize]);

    return (
        <>
            <Navbar />
            <Box mx={4}>
                <Typography variant="h4" style={{ fontWeight: "bold" }}>
                    Settings
                </Typography>
                <Typography variant="h6">Login History</Typography>
                <Stack>
                    <Toolbar
                        style={{ color: "white", backgroundColor: "hsla(219, 80%, 16%, 0.7)" }}
                    >
                        <Grid container>
                            <Grid item xs={12} md={5}>
                                <Typography variant="h6">Date & Time</Typography>
                            </Grid>
                            <Grid item xs={0} md={7}>
                                <Typography variant="h6">Your Location</Typography>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </Stack>
                <Stack>
                    <Grid container>
                        <Grid item xs={12} md={3}>
                            <div className={classes.root}>
                                <List className={classes.list}>
                                    {LOGINHISTORIES.map((loginHistory, index) => (
                                        <Link key={index}>
                                            <ListItem>
                                                {loginHistory}
                                            </ListItem>
                                        </Link>
                                    ))}
                                </List>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={9}>
                            <div className={classes.mapResponsive}>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253701.1045643507!2d3.7748941499999997!3d6.5115886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf75df5c74367%3A0x6a7e7df9d6c1cd4a!2sLekki!5e0!3m2!1sen!2sng!4v1660168484705!5m2!1sen!2sng" width="600" height="450" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </Grid>
                    </Grid>
                </Stack>
            </Box>
        </>
    );
};


const useStyles = makeStyles({

    root: {
        width: "100%",
        height: "max-content",
        // display: "flex",
        flexDirection: "column",
        alignItems: "center",
        // justifyContent: "center",
        background: "transparent",
        textAlign: "center",
        padding: "0 0.25rem",

    },
    list: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textDecoration: "none",
        backgroundColor: " hsla(219, 80%, 16%, 0.3)",
        "& a": {
            textDecoration: "none",
            cursor: "pointer",
        },
        "& li": {
            color: "white",
            transititon: "1s all ease",
            alignItems: "center",
            textAlign: "center",
            textTransform: "capitalize",
            "&:hover": {
                // color: "var(--color-secondary)",
                transform: "translateX(-8px)",
            }
        },
    },
    mapResponsive: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        paddingBottom: "56.25%",
        position: "relative",
        height: "0",
        "& iframe": {
            // left: "0",
            top: "0",
            height: "100%",
            width: "80%",
            position: "absolute",
        },
    },
});

export default LoginHistory;