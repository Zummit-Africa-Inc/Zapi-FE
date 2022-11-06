import React, { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Cookies from "universal-cookie";
import { toast } from "react-toastify";
import {
    TextField,
    Typography,
    InputLabel,
    MenuItem,
    FormControl,
    Select,
    SelectChangeEvent,
    Link,
    Box,
    Stack
} from "@mui/material";

import { makeStyles } from "@mui/styles";
import { HomeNavbar, Footer, APIDesc, Endpoints } from "../sections";
import { useHttpRequest } from "../hooks";
import ZapiHomeLogo from "../assets/images/ZapiHomeLogo.png";
import { Fallback, Discussion } from "../components";
import { APIType, ChildrenDiscussionType, DiscussionType, EndpointsType } from "../types";
import ReactGA from "react-ga4";

const core_url = "VITE_CORE_URL";

interface Props {
    childDiscussion: Array<ChildrenDiscussionType> | null
}
const SingleDiscussionPage: React.FC<Props> = ({ childDiscussion }) => {
    const { error, loading, sendRequest } = useHttpRequest();
    const [discussions, setDiscussions] = useState<Array<DiscussionType> | null>(null)
    const navigate = useNavigate();
    const classes = useStyles()
    const cookies = new Cookies();
    const { id } = useParams();
    ReactGA.send({ hitType: "pageview", page: "/discussion/id" });

    const getApiData = async (apiId: string | undefined) => {
        if (!apiId) return
        const headers = {
            'Content-Type': "application/json",
            'X-Zapi-Auth_Token': `Bearer ${cookies.get("accessToken")}`
        }
        try {
            const apiDiscussion = await sendRequest(`/discussion/${apiId}`, "get", core_url, {}, headers)

            const [discussions] = await Promise.all([apiDiscussion])
            if (discussions === undefined) console.log("No Child discussion for under this discussion")
            console.log({ discussions })
            setDiscussions(discussions.data)
        } catch (error) { }
    }

    console.log(childDiscussion);
    console.log(discussions);
    const memoizedApiCall = useMemo(() => (getApiData(id)), [])

    useEffect(() => { memoizedApiCall }, [])

    if (loading) return <Fallback />

    return (
        <>

            <>
                <HomeNavbar />
                <div className={classes.root}>
                    {/* <p className={classes.description}>{api.description}</p>
            <Typography sx={{margin:"24px 0 0",fontSize:"21px",fontWeight:"bold",color:"#515D99"}}>Base URL</Typography>
            <p className={classes.description}>{api.base_url}</p>
            <Typography sx={{margin:"24px 0 0",fontSize:"21px",fontWeight:"bold",color:"#515D99"}}>Website</Typography>
            <p className={classes.description}>
                Website: {api.api_website ? <a href={`${api.api_website}`} target="_blank" rel="noreferrer">{api.api_website}</a> : "Website not specified"}
            </p>
            <Typography sx={{margin:"24px 0 0",fontSize:"21px",fontWeight:"bold",color:"#515D99"}}>Documentation</Typography>
            <p className={classes.description}>{api.read_me ? api.read_me : "ReadMe file not attached"}</p> */}
                    {/* {discussions ?
                        (
                            <div className={classes.discussions_container}>
                                    <Box
                                        sx={{
                                            width: '90%',
                                            height: 'auto',
                                            borderRadius: 0,
                                            backgroundColor: '#F8F9F9',
                                        }}
                                    >
                                        {discussion && discussion.length !== 0 ?
                                            (
                                                <div>
                                                    {discussion?.map((discussion, index) => (
                                                        <>
                                                            <div className={classes.discussion_thread} key={index}>
                                                                <div className={classes.discussion_row}>
                                                                    <img src={ZapiHomeLogo} alt="zapi-Home" />
                                                                    <div className={classes.discussion_column}>
                                                                        <Typography variant="body2" fontWeight={400}>{discussion.title}</Typography>
                                                                        <Typography variant="body1" fontWeight={500}><Link sx={{ textDecoration: 'none', color: "#071b85" }} href={`/discussion/${discussion.id}`} >{discussion?.body}</Link></Typography>
                                                                        <Typography variant="body2" fontWeight={400}>{discussion?.createdOn?.toLocaleString()}</Typography>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <hr />
                                                        </>
                                                    ))}
                                                </div>
                                            ) : (
                                                <div style={{ width: '100%', backgroundColor: '#ffffff', padding: '4rem 0' }}>
                                                    <Typography variant="h5" >
                                                        There are no Children Discussions in this API.
                                                    </Typography>
                                                </div>
                                            )}
                                    </Box>
                            </div>
                        ) :
                        ( */}
                    <div className={classes.discussions_container}>
                        {discussions && discussions.length !== 0 ?
                            (
                        <Box
                            sx={{
                                width: '90%',
                                height: 'auto',
                                borderRadius: 0,
                                backgroundColor: '#F8F9F9',
                            }}
                        >
                                    <div>
                                        {discussions?.map((discussion, index) => (
                                            <>
                                                <div className={classes.discussion_thread} key={index}>
                                                    <div className={classes.discussion_row}>
                                                        <img src={ZapiHomeLogo} alt="zapi-Home" />
                                                        <div className={classes.discussion_column}>
                                                            <Typography variant="body2" fontWeight={400}>{discussion.title}</Typography>
                                                            <Typography variant="body1" fontWeight={500}><Link sx={{ textDecoration: 'none', color: "#071b85" }} href={`/discussion/${discussion.id}`} >{discussion?.body}</Link></Typography>
                                                            <Typography variant="body2" fontWeight={400}>{discussion?.createdOn?.toLocaleString()}</Typography>
                                                        </div>
                                                    </div>
                                                </div>
                                                <hr />
                                            </>
                                        ))}
                                    </div>
                                        </Box>
                                ) : (
                                    <>
                                    <div className={classes.discussions_container}>
                                        <Box
                                            sx={{
                                                width: '90%',
                                                height: 'auto',
                                                borderRadius: 0,
                                                backgroundColor: '#F8F9F9',
                                            }}
                                        >
                                            <div className={classes.discussion_thread}>
                                                <div className={classes.discussion_row}>
                                                    <img src={ZapiHomeLogo} alt="zapi-Home" />
                                                    <div className={classes.discussion_column}>
                                                        <Typography variant="body2" fontWeight={400}>User24</Typography>
                                                        <Typography variant="body1" fontWeight={500}><Link sx={{ textDecoration: 'none', color: "#071b85" }} href="/" >A Comment or Discussion about Text Summarizer</Link></Typography>
                                                        <Typography variant="body2" fontWeight={400}>5 hours ago</Typography>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr />
                                            

                                            {childDiscussion && childDiscussion?.length !== 0 ?
                                                                (
                                                                    <p className={classes.discussion_thread} style={{color:'black'}} >{childDiscussion?.map((disc, index) => (
                                                                        <p>{ disc.body}</p>
                                                                        ))}</p>
                                                                        )
                                                                        :
                                                                        (
                                                                            <>
                                                    <div  style={{padding:'2rem'}}>
                                                <div className={classes.discussion_row}>
                                                    <img src={ZapiHomeLogo} alt="zapi-Home" />
                                                    <div className={classes.discussion_column}>
                                                        <Typography variant="body2" fontWeight={400}>User24</Typography>
                                                        <Typography variant="body1" fontWeight={500}><Link sx={{ textDecoration: 'none', color: "#071b85" }} href="/" >A Comment or Discussion about Text Summarizer</Link></Typography>
                                                        <Typography variant="body2" fontWeight={400}>5 hours ago</Typography>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr />
                                                </>
                                                                )
                                                            }
                                                            </Box>
                                                        </div>
                                    </>
                                )}
                    </div>
                    {/* //     )
                    // } */}
                </div>
                <Footer />
            </>
        </>
    )
}


export default SingleDiscussionPage;
const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        marginBottom: "15px",
        padding: "130px 5rem 50px 5rem",
        lineHeight: "41px",
        width: '100%',
        minHeight: "647px",
        "& h2": {
            marginBottom: "5px",
            fontSize: "26px",
            color: "#071B85",
        },
        // height: "auto",
        // padding: "1rem 2rem 0",
    },
    discussions_container: {
        width: "100%",
        // margin: "0 5rem 0 10rem",
        height: 'auto',
        display: 'flex',
        justifyContent: "center",
        marginBottom: '3rem'
    },

    discussion_thread: {
        background: "#F9FAFB",
        // border:'1px solid #071B85',
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        // gap: "3rem",
        justifyContent: "start",
        color: "#071B85",
        padding: "16px",
    },

    discussion_column: {
        display: "flex",
        justifyContent: "start",
        alignItems: "flex-start",
        flexDirection: "column",
        // gap: "5px",
        flexWrap: "wrap",
        color: "#071B85",
    },
    discussion_row: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        gap: "35px",
        flexWrap: "wrap",
        color: "#071B85",
        paddingLeft: '2rem',
    },
    description: {
        display: "flex",
        alignItems: "center",
        fontSize: "15px",
        lineHeight: "26px",
        color: "#071B85",
        gap: "0.5rem",
    }
});