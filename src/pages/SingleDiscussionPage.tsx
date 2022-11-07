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
import { StackedLineChart, TimerOutlined, Check } from "@mui/icons-material";

import { makeStyles } from "@mui/styles";
import { HomeNavbar, Footer, APIDesc, Endpoints } from "../sections";
import { useHttpRequest, useAppSelector } from "../hooks";
import ZapiHomeLogo from "../assets/images/ZapiHomeLogo.png";
import { Fallback, Discussion, ChildrenDiscussions } from "../components";
import { APIType, ChildrenDiscussionType, DiscussionType, EndpointsType } from "../types";
import ReactGA from "react-ga4";

const core_url = "VITE_CORE_URL";

const SingleDiscussionPage: React.FC = () => {
    const { error, loading, sendRequest } = useHttpRequest();
    // const [api, setApi] = useState<APIType | null>(null)
    const [discussions, setdiscussions] = useState<Array<DiscussionType> | null>(null)
    const navigate = useNavigate();
    const classes = useStyles()
    const cookies = new Cookies();
    const { id } = useParams();
    ReactGA.send({ hitType: "pageview", page: "/discussion/id" });

    const getApiNestedDiscussionData = async (discussionId: string | undefined) => {
        if (!discussionId) return
        const headers = {
            'Content-Type': "application/json",
            'X-Zapi-Auth_Token': `Bearer ${cookies.get("accessToken")}`
        }
        try {
            const apiNestedDiscussion = await sendRequest(`/discussion/api/${discussionId}`, "get", core_url, {}, headers)

            const [discussions] = await Promise.all([apiNestedDiscussion])
            if (discussions === undefined) console.log("No Child discussion for under this discussion")
            console.log({discussions})
            setdiscussions(discussions.data)
        } catch (error) { }
    }

    const memoizedApiCall = useMemo(() => (getApiNestedDiscussionData(id)), [])

    useEffect(() => { memoizedApiCall }, [])

    if (loading) return <Fallback />

    return (
        <>

            {discussions ? (
            <>
                <HomeNavbar />
                <ChildrenDiscussions discussions={discussions} />
                <Footer />
            </>
            ) : (
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
        // background: "#F9FAFB",
        // border:'1px solid #071B85',
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        // gap: "3rem",
        justifyContent: "start",
        color: "#071B85",
        padding: "32px",
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
        maxWidth: '100%',
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
    description: {
        display: "flex",
        alignItems: "center",
        fontSize: "15px",
        lineHeight: "26px",
        color: "#071B85",
        gap: "0.5rem",
    },
    item: {
        display: "flex",
        flexDirection: "column",
        width: "100px",
        height: "65px"
    },
    subItem: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: ".3rem"
    },
    itemHeader: {
        fontSize: "12px",
        fontWeight: "bold",
        color: "#071B85",
    },
    itemIcon: {
        color: "#515D99",
    },
    itemTitle: {
        fontSize: "20px",
        color: "#515D99",
        lineHeight: "0px",
    },

});