import React, { useState, SyntheticEvent } from 'react'
import { makeStyles, styled } from '@mui/styles'

import { HomeNavbar, Footer } from '../sections';
import ReactGA from "react-ga4";

import { Tab, Tabs, Typography } from "@mui/material";
import { HomeRounded, Signpost, BookmarkAdd, BuildCircle, SendRounded, ManageAccounts } from "@mui/icons-material";
import TabPanel from "../components/TabPanel";
import { Link } from 'react-router-dom';

import apihub from "../assets/images/apihub.png";
import apihubbox from "../assets/images/apihubbox.png";
import signup from "../assets/images/signup.png";
import otp from "../assets/images/otp.png";
import login2 from "../assets/images/login2.png";
import subscriptions1 from "../assets/images/subscriptions1.png";
import subscriptions2 from "../assets/images/subscriptions2.png";

const CustomTab = styled(Tab)({
	"&.MuiTab-root": {
		display: "flex",
		flexDirection: "row",
        justifyContent: "flex-start",
		alignItems: "center",
        gap: ".3rem",
        paddingLeft: "35px",
		fontSize: "13px",
	},
	"&.Mui-selected": {
		backgroundColor: "#d1d1d1",
        paddingLeft: "45px",
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
                            label="00. Overview" 
                        />
                        
                        <CustomTab 
                            icon={<Signpost />}
                            iconPosition="start"
                            label="01. Sign-Up" 
                        />

                        <CustomTab 
                            icon={<BookmarkAdd />}
                            iconPosition="start"
                            label="02. Subscribe" 
                        />

                        <CustomTab 
                            icon={<BuildCircle />}
                            iconPosition="start"
                            label="03. Access Token" 
                        />
                        
                        <CustomTab 
                            icon={<SendRounded />}
                            iconPosition="start"
                            label="04. Send Requests" 
                        />
                    </Tabs>


                    <div style={{ 
                        display: "fixed",
                        width: "100%",
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
                                Create a ZAPI account by filling out the sign-up form on the <Link to='/signup'>Sign-up page</Link>. You can create an account using your email address, or by connecting an existing Google account.
                            </Typography>
                            
                            <img src={signup} alt="sign-up-page" width="80%" style={{ marginBottom: "30px", border: "1px solid #c1c1c1", borderRadius: "3px" }} />

                            <Typography sx={{ marginBottom: "10px", fontSize: "20px", fontWeight: "bold", color: "#071B85", width: "100%" }}>Validating your email address</Typography>
                            <Typography sx={{ marginBottom: "20px", fontSize: "16px", color: "#3e4fa7", width: "90%" }}>
                                To validate your account, a six digit code will be sent to the provided email address. You can enter the code on the verification screen to finalize your account registration.
                            </Typography>
                            <img src={otp} alt="otp-page" width="80%" style={{ marginBottom: "30px", border: "1px solid #c1c1c1", borderRadius: "3px" }} />
                            
                        </TabPanel>


                        <TabPanel value={tab} index={2}>
                            <Typography sx={{ marginBottom: "30px", fontSize: "30px", fontWeight: "bold", color: "#071B85"}}>Subscribe</Typography>
                            <Typography sx={{ marginBottom: "10px", fontSize: "20px", fontWeight: "bold", color: "#071B85", width: "100%" }}>
                                Discover the API(s) that work best for your application
                            </Typography>

                            <Typography sx={{ marginBottom: "20px", fontSize: "16px", color: "#3e4fa7", width: "90%" }}>
                                Steps: <br />
                                01. Go to <Link to='/api-hub'>API Hub page</Link> <br />
                                02. Locate an API that you want to use <br />
                                03. Click on the top right icon of the card to subscribe to the API.
                            </Typography>

                            <img src={apihubbox} alt="api-hub-page" width="80%" style={{ marginBottom: "30px", border: "1px solid #c1c1c1", borderRadius: "3px" }} />

                        </TabPanel>

                        
                        <TabPanel value={tab} index={3}>
                            <Typography sx={{ marginBottom: "30px", fontSize: "30px", fontWeight: "bold", color: "#071B85"}}>Access Token</Typography>
                            <Typography sx={{ marginBottom: "10px", fontSize: "20px", fontWeight: "bold", color: "#071B85", width: "100%" }}>
                                Getting access token
                            </Typography>

                            <Typography sx={{ marginBottom: "20px", fontSize: "16px", color: "#3e4fa7", width: "90%" }}>
                                Steps: <br />
                                01. Sign in by Clicking the Login button on the top right corner of the screen and add your credentials.
                            </Typography>
                            <img src={login2} alt="login" width="80%" style={{ marginBottom: "30px", border: "1px solid #c1c1c1", borderRadius: "3px" }} />

                            
                            <Typography sx={{ marginBottom: "20px", fontSize: "16px", color: "#3e4fa7", width: "90%" }}>
                                02. Locate Subscription tab on the <Link to='/developer/dashboard'>Dashboard page</Link> then click it.
                            </Typography>
                            <img src={subscriptions1} alt="subscriptions" width="80%" style={{ marginBottom: "30px", border: "1px solid #c1c1c1", borderRadius: "3px" }} />

                            
                            <Typography sx={{ marginBottom: "20px", fontSize: "16px", color: "#3e4fa7", width: "90%" }}>
                                03. Click the copy icon to copy the token.
                            </Typography>

                            <img src={subscriptions2} alt="subscriptions" width="80%" style={{ marginBottom: "30px", border: "1px solid #c1c1c1", borderRadius: "3px" }} />


                        </TabPanel>

                        
                        <TabPanel value={tab} index={4}>
                            <Typography sx={{ marginBottom: "30px", fontSize: "30px", fontWeight: "bold", color: "#071B85"}}>Send Requests</Typography>
                            
                            <Typography sx={{ marginBottom: "20px", fontSize: "16px", color: "#3e4fa7", width: "90%" }}>
                                The first thing you'll want to do is locate an API that you want to use and click the icon on the top right corner of the card to subscribe to the API.
                            </Typography>

                            <img src={apihubbox} alt="api-hub-page" width="80%" style={{ marginBottom: "30px", border: "1px solid #c1c1c1", borderRadius: "3px" }} />

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
