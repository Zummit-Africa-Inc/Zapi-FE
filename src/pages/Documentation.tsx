import React, { useState, SyntheticEvent } from 'react'
import { makeStyles, styled } from '@mui/styles'

import { HomeNavbar, Footer } from '../sections';
import ReactGA from "react-ga4";

import { Tab, Tabs, Typography, Link } from "@mui/material";
import { Login, HomeRounded, Signpost, Directions } from "@mui/icons-material";
import TabPanel from "../components/TabPanel";

import apihub from "../assets/images/apihub.png";
import signup from "../assets/images/signup.png";
import otp from "../assets/images/otp.png";

const CustomTab = styled(Tab)({
	"&.MuiTab-root": {
		display: "flex",
		flexDirection: "row",
        justifyContent: "flex-start",
		alignItems: "center",
        paddingLeft: "35px",
		fontSize: "14px",
	},
	"&.Mui-selected": {
		// backgroundColor: "#d1d1d1",
        // paddingLeft: "45px",
        fontWeight: "bold",

	},
    "& svg": {
        width: "22px",
    },
});


const Documentation:React.FC = () => {
    ReactGA.send({ hitType: "pageview", page: "/documentation" });
    
    const [tab, setTab] = useState<number>(0);
    const classes = useStyles();

    const handleTabChange = (e: SyntheticEvent, newValue: number) => {
        setTab(newValue);
    };

    return (
        <>
            <HomeNavbar />
            
            <div className={classes.root}>
                
                <div className={classes.header}>
                    <h1>ZAPI Documentation</h1>
                    <p>Welcome to the ZAPI docs. You'll find comprehensive guides and documentation to help you start working with ZAPI as quickly as possible, as well as support if you get stuck.</p>
                </div>

                <div style={{ 
                    display: "flex",
                    flexDirection: "row",
                    gap: "2.5rem",
                    marginTop: "50px",
                    // borderTop: "1px solid #d1d1d1",
                    padding: "30px 5rem 5rem 3rem",
                }}>
                    
                    <Tabs
                        style={{
                            display: "fixed",
                            borderRight: "1px solid #d1d1d1",
                            width: "70%",
                            maxWidth: "270px",
                            maxHeight: "80vh",
                            overflowX: "scroll",
                        }}
                        value={tab}
                        indicatorColor="primary"
                        orientation="vertical"
                        onChange={handleTabChange}
                    >
                        <CustomTab 
                            icon={<HomeRounded />}
                            iconPosition="start"
                            label="Overview" 
                        />
                        
                        <CustomTab 
                            icon={<Signpost />}
                            iconPosition="start"
                            label="Sign-Up" 
                        />
                        
                        <CustomTab 
                            icon={<Directions />}
                            iconPosition="start"
                            label="Getting Started" 
                        />
                    </Tabs>


                    <div style={{ 
                        display: "fixed",
                        height: "80vh",
                        overflowX: "scroll",
                        overflowY: "unset",
                    }}>
                            
                        <TabPanel value={tab} index={0}>
                            <Typography sx={{ marginBottom: "8px", fontSize: "30px", fontWeight: "bold", color: "#071B85"}}>Overview</Typography>
                            <Typography sx={{ marginBottom: "20px", fontSize: "16px", color: "#3e4fa7", width: "100%" }}>Welcome to the world's largest Artificial Intelligence API hub.</Typography>
                            <img src={apihub} alt="api-hub-page" width="80%" style={{ marginBottom: "30px", border: "1px solid #c1c1c1", borderRadius: "3px" }} />
                            <Typography sx={{ marginBottom: "20px", fontSize: "16px", color: "#3e4fa7", width: "90%" }}>
                                ZAPI is used by developers to find, test, and connect to thousands of APIs — all with a single API key and dashboard. <br /> <br />
                                Find the APIs that you need for your project, embed the API into your app, and track usage of all your APIs through a single dashboard. If you create an API, use ZAPI to make it available to other developers who are already using the ZAPI.
                            </Typography>
                        </TabPanel>

                        <TabPanel value={tab} index={1}>
                            <Typography sx={{ marginBottom: "30px", fontSize: "30px", fontWeight: "bold", color: "#071B85"}}>Sign-Up</Typography>
                            <Typography sx={{ marginBottom: "10px", fontSize: "20px", fontWeight: "bold", color: "#071B85", width: "100%" }}>How to create a ZAPI account</Typography>
                            <Typography sx={{ marginBottom: "20px", fontSize: "16px", color: "#3e4fa7", width: "90%" }}>
                                Create a ZAPI account by filling out the sign-up form on the ZAPI home page, or by clicking the sign-up button in the top right corner. You can create an account using your email address, or by connecting an existing Google account.
                            </Typography>
                            
                            <img src={signup} alt="sign-up-page" width="80%" style={{ marginBottom: "30px", border: "1px solid #c1c1c1", borderRadius: "3px" }} />

                            <Typography sx={{ marginBottom: "10px", fontSize: "20px", fontWeight: "bold", color: "#071B85", width: "100%" }}>Validating your email address</Typography>
                            <img src={otp} alt="otp-page" width="80%" style={{ marginBottom: "30px", border: "1px solid #c1c1c1", borderRadius: "3px" }} />
                            <Typography sx={{ marginBottom: "20px", fontSize: "16px", color: "#3e4fa7", width: "90%" }}>
                            To validate your account, a six digit code will be sent to the provided email address. You can enter the code on the verification screen to finalize your account registration.
                            </Typography>
                        </TabPanel>

                        <TabPanel value={tab} index={2}>
                            <Typography sx={{ marginBottom: "8px", fontSize: "30px", fontWeight: "bold", color: "#071B85"}}>Getting Started</Typography>
                            <Typography sx={{ marginBottom: "30px", fontSize: "16px", color: "#3e4fa7", width: "100%" }}>Learn how to use the ZAPI to make your first API call and quickly integrate APIs into your application.</Typography>

                            <Typography sx={{ marginBottom: "10px", fontSize: "20px", fontWeight: "bold", color: "#071B85", width: "100%" }}>
                                Sign up for a free ZAPI account
                            </Typography>

                            <Typography sx={{ marginBottom: "30px", fontSize: "16px", color: "#3e4fa7", width: "90%" }}>
                                You begin by signing up for a free ZAPI account, assuming you don't already have one. An account is required to test APIs, integrate them into your application, and track analytics. Sign up from the <a href="/">ZAPI home page</a> by clicking the Sign Up button in the top right.
                            </Typography>

                            <Typography sx={{ marginBottom: "10px", fontSize: "20px", fontWeight: "bold", color: "#071B85", width: "100%" }}>
                                Discover the API(s) that work best for your application
                            </Typography>

                            <Typography sx={{ marginBottom: "20px", fontSize: "16px", color: "#3e4fa7", width: "90%" }}>
                                The first thing you'll want to do is locate an API that you want to use. Let's find a translation API for this example. To get started, you can enter 'translation' in the search bar, which will return the top results for your search term.
                            </Typography>
                            
                            <img src={apihub} alt="api-hub-page" width="80%" style={{ marginBottom: "30px", border: "1px solid #c1c1c1", borderRadius: "3px" }} />

                            <Typography sx={{ marginBottom: "50px", fontSize: "16px", color: "#3e4fa7", width: "90%" }}>
                                If you are just getting started with your project or don't know exactly what you are looking for, consider browsing the categories and collections of APIs on the homepage for some inspiration.
                            </Typography>
                            
                            <Typography sx={{ marginBottom: "10px", fontSize: "20px", fontWeight: "bold", color: "#071B85", width: "100%" }}>
                                API listing overview
                            </Typography>
                            
                            <Typography sx={{ marginBottom: "20px", fontSize: "16px", color: "#3e4fa7", width: "90%" }}>
                                Once you select your API, you are brought to the Endpoints tab of the API listing page. The Endpoints tab includes most of the information needed to get started with the API. It includes navigation, a list of endpoints, documentation of the currently selected endpoint, and code snippets to help you get started with your coding. The code snippets are available in many different programming languages.
                            </Typography>

                            <img src={apihub} alt="api-hub-page" width="80%" style={{ marginBottom: "30px", border: "1px solid #c1c1c1", borderRadius: "3px" }} />

                        </TabPanel>

                    </div>
                </div>

            </div>

            <Footer />
        </>
    )
}

const useStyles = makeStyles({
    root:{
        height: "auto",
    },
    header: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "170px 1rem 90px 1rem",
        backgroundColor: "#d1d1d1",
        backgroundImage: "url('../../images/Clouds.svg')",
        width: "100%",
        opacity: .98,
        "& h1": {
            marginBottom: "5px",
            fontSize: "42px",
            textAlign: "center",
            color: "#fff",
        },
        "& p": {
            textAlign: "center",
            fontSize: "15px",
            color: "#fff",
            width: "55%"
        }
    }

});

export default Documentation;
