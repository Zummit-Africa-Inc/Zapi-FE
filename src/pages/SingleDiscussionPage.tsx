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
import { Add } from "@mui/icons-material";
import { StackedLineChart, TimerOutlined, Check } from "@mui/icons-material";

import { makeStyles } from "@mui/styles";
import { HomeNavbar, Footer, APIDesc, Endpoints } from "../sections";
import { useHttpRequest, useAppSelector } from "../hooks";
import ZapiHomeLogo from "../assets/images/ZapiHomeLogo.png";
import { useContextProvider } from "../contexts/ContextProvider";
import { Fallback, Discussion, ChildrenDiscussions } from "../components";
import { APIType, ChildrenDiscussionType, DiscussionType, EndpointsType } from "../types";
import ReactGA from "react-ga4";

const core_url = "VITE_CORE_URL";

const SingleDiscussionPage: React.FC = () => {
    const { error, loading, sendRequest } = useHttpRequest();
    // const [api, setApi] = useState<APIType | null>(null)
    const [discussion, setDiscussion] = useState<DiscussionType | null>(null)
    const [discussions, setDiscussions] = useState<Array<ChildrenDiscussionType> | null>(null)
    const navigate = useNavigate();
    const classes = useStyles()
    const cookies = new Cookies();
    const { id } = useParams();
    const { handleClicked } = useContextProvider();
    ReactGA.send({ hitType: "pageview", page: "/discussion/id" });

    const api_id = JSON.parse(localStorage.getItem("api_id") || '');
    console.log(api_id)

    const getApiNestedDiscussionData = async (apiId: string | undefined,discussionId: string | undefined) => {
        if (!discussionId) return
        const headers = {
            'Content-Type': "application/json",
            'X-Zapi-Auth_Token': `Bearer ${cookies.get("accessToken")}`
        }
        try {
            const apiDiscussion = await sendRequest(`/discussion/api/${apiId}`, "get", core_url, {}, headers)
            const apiNestedDiscussion = await sendRequest(`/discussion/${discussionId}`, "get", core_url, {}, headers)
            const [discussion,discussions] = await Promise.all([apiDiscussion,apiNestedDiscussion])
            if(discussion === undefined || discussions === undefined) console.log("No discussion for now")
            console.log({ discussion,discussions})
            setDiscussion(discussion.data)
            setDiscussions(Object.values(discussions.data.comments))
            console.log(discussion.data)
            console.log(discussions.data.discussion.comments)
            localStorage.setItem("discussion_id", JSON.stringify(id));
        } catch (error) { }
    }

    const memoizedApiCall = useMemo(() => (getApiNestedDiscussionData(api_id,id)), [])

    useEffect(() => { memoizedApiCall }, [])
    // localStorage.setItem("discussion_id", JSON.stringify("8e59870b-e954-4373-bc0d-52e9df1c643e"));



    if (loading) return <Fallback />

    return (
        <>

            {discussions && (
                <>
                    <HomeNavbar />
                    <ChildrenDiscussions discussions={discussions} />
                    <Footer />
                </>
            )
            }
        </>
    )
}


export default SingleDiscussionPage;
const useStyles = makeStyles({
    main: {
        // marginTop:'5rem',
        height: "auto",
        padding: "1rem 2rem 0",
    },
    container: {
        width: "auto",
        display: "flex",
        paddingTop: "5rem",
        justifyContent: "center",
        gap: "32px",
        // margin: "0 0 0 5rem",
        "@media screen and (max-width: 1024px)": {
            margin: "0 0 109px 2rem",
        },
        "@media screen and (max-width: 900px)": {

        },
        "@media screen and (max-width: 820px)": {
            gap: "22px",

        },
        "@media screen and (max-width: 770px)": {

        },
        "@media screen and (max-width: 375px)": {
            margin: "0 0 50px 1rem",
        }

    },
    discussion_tab: {
        display: "flex",
        width: "90%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "1rem",
        "@media screen and (max-width: 1024px)": {
            flexDirection: "column",
        },
    },
    header: {
        display: "flex",
        flexDirection: "column",
        margin: "32px 0",
        color: "#071B85",
        top: 0,
        left: 0,
        "& h2": {
            marginBottom: "3px",
            fontSize: "22px",
            "@media screen and (max-width: 820px)": {
                fontSize: "20px",
            },
        },
        "& p": {
            fontSize: "14px",
            "@media screen and (max-width: 820px)": {
                fontSize: "12px",
            },
        },
    },
    newDiscussion: {

        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        padding: "8px 16px",
        gap: "16px",
        width: "200px",
        lineHeight: "46px",
        background: "#071B85",
        borderRadius: "8px",
        cursor: "pointer",
        color: "#FFFFFF",
        border: "none",
        fontWeight: "500",
        fontSize: "16px",
        "@media screen and (max-width: 1024px)": {
            marginBottom: "1rem",
            width: "385px",
        },
        "@media screen and (max-width: 500px)": {
            // width: "100%",
        },
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

    discussion_nested_thread: {
        // background: "#F9FAFB",
        // border:'1px solid #071B85',
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        position: 'relative',
        left: '30',
        // gap: "3rem",
        justifyContent: "start",
        color: "#071B85",
        paddingLeft: "2rem",
        borderRadius: "15px",
        // border: '1px solid #071B85',
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
    nested_discussion_column: {
        display: "flex",
        justifyContent: "start",
        alignItems: "flex-start",
        flexDirection: "column",
        width: '100%',
        // gap: "5px",
        flexWrap: "wrap",
        color: "#071B85",
        padding: "1rem",
        borderRadius: "5px",
        // border: '1px solid #071B85',
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
    nested_discussion_row: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        maxWidth: '100%',
        flexDirection: "row",
        gap: "15px",
        // flexWrap: "wrap",
        color: "#071B85",
        paddingLeft: '2rem',

    },
    brandText: {
        display: "flex",
        alignItems: "center",
        color: "#071B85",
    },
    hr: {
        backgroundColor: '#071B85',
        color: "#071B85",
    },
});
// const useStyles = makeStyles({
//     root: {
//         display: 'flex',
//         flexDirection: 'column',
//         marginBottom: "15px",
//         padding: "130px 5rem 50px 5rem",
//         lineHeight: "41px",
//         width: '100%',
//         minHeight: "647px",
//         "& h2": {
//             marginBottom: "5px",
//             fontSize: "26px",
//             color: "#071B85",
//         },
//     },
//     discussions_container: {
//         width: "100%",
//         height: 'auto',
//         display: 'flex',
//         justifyContent: "center",
//         marginBottom: '3rem'
//     },

//     discussion_thread: {
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "flex-start",
//         justifyContent: "start",
//         color: "#071B85",
//         padding: "32px",
//     },
//     discussion_nested_thread: {
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "flex-start",
//         position: 'relative',
//         left: '30',
//         justifyContent: "start",
//         color: "#071B85",
//         paddingLeft: "2rem",
//         borderRadius: "15px",
//     },

//     discussion_column: {
//         display: "flex",
//         justifyContent: "start",
//         alignItems: "flex-start",
//         flexDirection: "column",
//         flexWrap: "wrap",
//         color: "#071B85",
//     },
//     nested_discussion_column: {
//         display: "flex",
//         justifyContent: "start",
//         alignItems: "flex-start",
//         flexDirection: "column",
//         maxWidth: '100%',
//         // gap: "5px",
//         flexWrap: "wrap",
//         color: "#071B85",
//         padding: "1rem",
//         borderRadius: "5px",
//     },
//     discussion_row: {
//         display: "flex",
//         justifyContent: "space-between",
//         alignItems: "center",
//         flexDirection: "row",
//         gap: "35px",
//         flexWrap: "wrap",
//         color: "#071B85",
//         paddingLeft: '2rem',

//     },
//     nested_discussion_row: {
//         display: "flex",
//         justifyContent: "space-between",
//         alignItems: "center",
//         maxWidth: '100%',
//         flexDirection: "row",
//         gap: "15px",
//         // flexWrap: "wrap",
//         color: "#071B85",
//         paddingLeft: '2rem',

//     },
//     description: {
//         display: "flex",
//         alignItems: "center",
//         fontSize: "15px",
//         lineHeight: "26px",
//         color: "#071B85",
//         gap: "0.5rem",
//     },
//     item: {
//         display: "flex",
//         flexDirection: "column",
//         width: "100px",
//         height: "65px"
//     },
//     subItem: {
//         display: "flex",
//         flexDirection: "row",
//         alignItems: "center",
//         gap: ".3rem"
//     },
//     itemHeader: {
//         fontSize: "12px",
//         fontWeight: "bold",
//         color: "#071B85",
//     },
//     itemIcon: {
//         color: "#515D99",
//     },
//     itemTitle: {
//         fontSize: "20px",
//         color: "#515D99",
//         lineHeight: "0px",
//     },

// });