import React, { useState, useEffect } from "react";
import { Stack, Typography, Button, Box } from "@mui/material";
import Cookies from "universal-cookie";
import { makeStyles } from '@mui/styles'
import { StackedLineChart, TimerOutlined, Check, BookmarkAddedOutlined, BookmarkRemove, BookmarkAddOutlined } from "@mui/icons-material";
import { useAppDispatch, useAppSelector, useHttpRequest } from "../hooks";
import { toast } from "react-toastify";
import Rating from "../components/Rating";
import { APIType } from "../types";
import { getSubscribedApis } from "../redux/slices/userSlice";
import { getApis } from "../redux/slices/apiSlice";
import { useContextProvider } from "../contexts/ContextProvider";

const core_url = "VITE_CORE_URL";

interface Props {
    api: APIType
}

const APIDesc: React.FC<Props> = ({ api }) => {
    const { error, loading, sendRequest } = useHttpRequest();
    const { categories } = useAppSelector(store => store.apis);
    const [isRatingOpen, setIsRatingOpen] = useState<boolean>(false)
    const { subscribedApis } = useAppSelector((store) => store.user);
    const [isSubscribed, setIsSubscribed] = useState<boolean>(false);
    const cookies = new Cookies();
    const profileId = cookies.get("profileId");
    const accessToken = cookies.get("accessToken");
    const classes = useStyles();
    const dispatch = useAppDispatch();
    const { handleClicked } = useContextProvider();

    const category = categories.find((category) => category.id === api.categoryId);


    useEffect(() => {
        subscribedApis.forEach((api) => {
            if (api.apiId === api.id) return setIsSubscribed(true);
        });
    }, []);

    const handleSubscription = async () => {
        const headers = {
            "Content-Type": "application/json",
            "X-Zapi-Auth-Token": `Bearer ${accessToken}`,
        };

        if (!isSubscribed) {
            try {
                const data = await sendRequest(
                    `/subscription/subscribe/${api.id}`,
                    "post",
                    core_url,
                    undefined,
                    headers,
                    { profileId }
                );
                if (!data || data === undefined) return;
                const { message } = data;
                toast.success(`${message}`);
                setIsSubscribed(true);
            } catch (error) { }
        } else {
            try {
                const data = await sendRequest(
                    `/subscription/unsubscribe/${api.id}`,
                    "post",
                    core_url,
                    undefined,
                    headers,
                    { profileId }
                );
                if (!data || data == undefined) return;
                const { message } = data;
                setIsSubscribed(false);
                toast.success(`${message}`);
            } catch (error) { }
        }
        dispatch(getApis());
        dispatch(getSubscribedApis(profileId));
    };

    useEffect(() => {
        error && toast.error(`${error}`);
    }, [error]);

    let subscribedButtonStyles = isSubscribed ? { backgroundColor: "#F5F5F5", color: "#000000", borderRadius: "5px" } : { backgroundColor: "#081F4A", color: "#FFFFFF", borderRadius: "5px" };
    return (
        <>
            {isRatingOpen && <Rating apiId={api.id} onClose={() => setIsRatingOpen(false)} />}
            <Box className={classes.root}>
                <Box style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px", padding: "0 20px 15px 0", borderBottom: "1px solid #d1d1d1" }}>
                    <Box>
                        <Typography variant="h2">{api.name}</Typography>
                        <Box className={classes.row}>
                            <p style={{ lineHeight: "1px", fontSize: "13px", color: "#515D99" }}>
                                <>by: {api.createdBy || "unknown"}</>
                            </p>
                            <hr />
                            <p style={{ lineHeight: "1px", fontSize: "13px", color: "#515D99" }}>
                                <>created on: {api.createdOn && new Date(api.createdOn).toDateString()}</>
                            </p>
                            <hr />
                            <p style={{ lineHeight: "1px", fontSize: "13px", color: "#515D99" }}>{category?.name}</p>
                        </Box>
                    </Box>
                    <Box style={{ display: "flex", justifyContent: "space-between", gap: "1rem", }}>
                        <Box className={classes.item}>
                            <Box className={classes.subItem}>
                                <p className={classes.itemHeader}>Popularity</p>
                                <StackedLineChart sx={{ width: "19px" }} className={classes.itemIcon} />
                            </Box>
                            <p className={classes.itemTitle}>{api.popularity}/10</p>
                        </Box>
                        <Box className={classes.item}>
                            <Box className={classes.subItem}>
                                <p className={classes.itemHeader}>Latency</p>
                                <TimerOutlined sx={{ width: "19px" }} className={classes.itemIcon} />
                            </Box>
                            <p className={classes.itemTitle}>{api.latency}ms</p>
                        </Box>
                        <Box className={classes.item}>
                            <Box className={classes.subItem}>
                                <p className={classes.itemHeader}>Service level</p>
                                <Check sx={{ width: "19px" }} className={classes.itemIcon} />
                            </Box>
                            <p className={classes.itemTitle}>{api.service_level}%</p>
                        </Box>
                    </Box>
                </Box>
                <Stack direction="row" spacing={4} justifyContent={"end"} alignItems={"center"}>
                    <p className={classes.description}>{api.description}</p>
                    <Box>
                        <Button variant="outlined"
                            sx={{ backgroundColor: "#081F4A", color: "#fff", borderRadius: "5px" }}
                            onClick={() => setIsRatingOpen(true)}
                        >
                            rate
                        </Button>
                    </Box>
                    <Box>
                        <Button
                            endIcon={isSubscribed ? <BookmarkRemove /> : <BookmarkAddOutlined />}
                            variant={isSubscribed ? "contained" : "outlined"}
                            sx={subscribedButtonStyles}
                            onClick={accessToken ? handleSubscription : () => handleClicked("login")}
                        >
                            {isSubscribed ? "Unsubscribe" : "Subscribe"}
                        </Button>
                    </Box>
                </Stack>
                {/* <Typography sx={{margin:"24px 0 0",fontSize:"21px",fontWeight:"bold",color:"#515D99"}}>Base URL</Typography>
            <p className={classes.description}>{api.base_url || "null"}</p> */}
                <Typography sx={{ margin: "24px 0 0", fontSize: "21px", fontWeight: "bold", color: "#515D99" }}>Website</Typography>
                <p className={classes.description}>
                    Website: {api.api_website ? <a href={`${api.api_website}`} target="_blank" rel="noreferrer">{api.api_website}</a> : "Website not specified"}
                </p>
                <Typography sx={{ margin: "24px 0 0", fontSize: "21px", fontWeight: "bold", color: "#515D99" }}>Documentation</Typography>
                <p className={classes.description}>{api.read_me ? api.read_me : "ReadMe file not attached"}</p>
            </Box>
        </>
    )
}

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        marginBottom: "15px",
        padding: "130px 5rem 50px 5rem",
        lineHeight: "41px",
        width: '100%',
        minHeight: "500px",
        "& h2": {
            marginBottom: "5px",
            fontSize: "26px",
            color: "#071B85",
        },
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
    description: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        fontSize: "15px",
        lineHeight: "26px",
        color: "#071B85",
        gap: "0.5rem",
    },
    button: {
        display: "flex",
        alignItems: "center",
        gap: "0.25rem",
        color: "#FFF",
        padding: "6px 16px",
        borderRadius: "5px",
        border: "none",
        outline: "none",
        fontSize: "0.875rem",
        fontWeight: 500,
        lineHeight: 1.75,
        textTransform: "uppercase",
        fontFamily: "var(--body-font)",
        transition: "0.5s all ease-in-out cubic-bezier(0.075, 0.82, 0.165, 1)",
        cursor: "pointer",
        background: "#081F4A",
    },
    row: {
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        "& hr": {
            background: "E32C08",
            width: "1px",
            height: "15px",
        },
        "& p": {
            textTransform: "capitalize",
        }
    }
});

export default APIDesc;
