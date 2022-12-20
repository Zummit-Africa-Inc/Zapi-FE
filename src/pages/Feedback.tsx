import React, { SyntheticEvent, useState, useEffect } from 'react'
import { makeStyles, styled } from '@mui/styles'

import { HomeNavbar, Footer } from '../sections';
import ReactGA from "react-ga4";
import { toast } from "react-toastify";
import { useAppSelector, useHttpRequest } from "../hooks";
import { ChatRounded } from "@mui/icons-material";

import { Typography, Box, Button } from "@mui/material";
import FeedbackCard from "../components/FeedbackCard";

const core_url = "VITE_CORE_URL";

const Feedback:React.FC = () => {
    ReactGA.send({ hitType: "pageview", page: "/feedback" });
    
    const [tab, setTab] = useState<number>(0);
    const classes = useStyles();

    
    const { error, loading, sendRequest } = useHttpRequest();
    const [feedbacks, setFeedbacks] = useState<any>([]);

    const headers = {
        "Content-Type": "application/json",
    };

    const handleRequest = async () => {
        try {
            const res = await sendRequest(
                `/feedback`,
                "get",
                core_url,
                undefined,
                headers
            );
            setFeedbacks(res);
        } catch (error) {}
    };
    useEffect(() => {
        handleRequest();
    }, []);

    useEffect(() => {
        error && toast.error(`${error}`);
    }, [error]);
    
    return (
        <>
            <HomeNavbar />
            <Box className={classes.root}>
                <Box sx={{ 
                    marginTop: "10px",
                    padding: "30px 5rem 5rem",
                    width: "100%",
                    "@media screen and (max-width: 1024px)": {
                        marginTop: "10px",
                        padding: "30px 2rem 5rem .5rem",
                        
                    },
                    "@media screen and (max-width: 375px)": {
                        
                    },
                }}>
                    


                    <Box sx={{ 
                        "& h1": {
                            marginBottom: "8px", 
                            fontSize: "32px", 
                            fontWeight: "bold", 
                            color: "#071B85",
                                    
                            "@media screen and (max-width: 1024px)": {
                                marginBottom: "2px", 
                                fontSize: "24px", 
                                
                            },
                            "@media screen and (max-width: 375px)": {
                                
                            },
                        },
                        "& h3": {
                            marginBottom: "10px", 
                            fontSize: "17px", 
                            fontWeight: "bold", 
                            color: "#071B85", 
                            width: "100%",
                                    
                            "@media screen and (max-width: 1024px)": {
                                fontSize: "16px", 
                                
                            },
                            "@media screen and (max-width: 375px)": {
                                
                            },
                        },
                        "& p": {
                            marginBottom: "20px", 
                            fontSize: "15px", 
                            color: "#3e4fa7", 
                            width: "88%",
                                    
                            "@media screen and (max-width: 1024px)": {
                                fontSize: "14px", 
                                
                            },
                            "@media screen and (max-width: 375px)": {
                                
                            },
                        },
                        "& img": {
                            marginBottom: "30px", 
                            border: "1px solid #c1c1c1", 
                            borderRadius: "3px",
                            width: "80%",
                        },
                    }}>
                        
                        <Typography style={{ margin: "0 0 -9px 1px", fontSize: "11px" }}>admin&gt;</Typography>
                        <Typography component="h1">Feedback</Typography>

                        {/* <Box sx={{
                            display: "flex",
                            flexDirection: "row",
                            gap: ".5rem",
                            "& button": {
                                border: "1px solid #3e4fa7",
                                borderRadius: "5px",
                                padding: "3px 10px",
                                fontSize: "10px",
                                color: "#3e4fa7",
                                width: "auto",
                                height: "100%"
                            },
                            "#active": {
                                backgroundColor: "#e1e1e1",
                                border: "1px solid #071B85",
                                color: "#071B85",
                            }
                        }}>
                            <Button id="active">Recent</Button>
                            <Button>Today</Button>
                            <Button>A Week Ago</Button>
                            <Button>A Month Ago</Button>
                            <Button>All</Button>
                        </Box> */}

                        <Box sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "1.3rem",
                            marginTop: "30px"

                        }}>
                            { feedbacks.length != 0 ? (
                                <>
                                    {feedbacks.data?.map((feed: any) => (
                                        <FeedbackCard key={feed.id} {...feed} />
                                    ))}
                                </>

                            ) : (
                                <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", marginTop: "110px", width: "100%" }}>
                                    <ChatRounded sx={{ fontSize: "32px", color: "#264276", }} />
                                    <Typography sx={{fontSize:"18px", textAlign: "center",color:"#515D99"}}>No Feedback Yet.</Typography>
                                </Box>
                            )

                            }

                        </Box>

                    </Box>
                </Box>

            </Box>

            <Footer />
        </>
    )
}

const useStyles = makeStyles({
    root:{
        paddingTop: "5rem",
        height: "auto",
    },

});

export default Feedback;
