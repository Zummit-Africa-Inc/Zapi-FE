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
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { SyntheticEvent, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector, useHttpRequest } from "../hooks";
import { getFreeApis } from "../redux/slices/freeApiSlice";
import ZapiHomeLogo from "../assets/images/ZapiHomeLogo.png";
import { APIS } from "../testdata";
import { Add } from "@mui/icons-material";
import { useContextProvider } from "../contexts/ContextProvider";


// const core_url = import.meta.env.VITE_CORE_URL
const core_url = "VITE_CORE_URL";
const X_ZAPI_FREE_TOKEN = import.meta.env.VITE_FREE_REQUEST_TOKEN;

const Discussion: React.FC = () => {
    const id = useParams().id
    const classes = useStyles()
    const [tab, setTab] = useState<number>(0)
    const api = APIS.find(api => api.id === id)
    const { handleClicked } = useContextProvider();
    const { apis, categories } = useAppSelector(store => store.apis)

    // const [apiId, setApiId] = useState<string>("");
    // const [query, setQuery] = useState<string>("");
    // const [data, setData] = useState("");
    // const dispatch = useAppDispatch();
    // const { freeApis } = useAppSelector((store) => store.freeApis);
    // const [apiName, setApiName] = useState<string>("");
    // const { loading, sendRequest } = useHttpRequest();

    // const handleChange = (event: SelectChangeEvent) => {
    //   setApiId(event.target.value);
    // };

    // const headers = {
    //   "X-ZAPI-FREE-TOKEN": X_ZAPI_FREE_TOKEN,
    // };
    // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    //   e.preventDefault();
    //   try {
    //     const res = await sendRequest(
    //       `/subscription/free-request/${apiId}`,
    //       "post",
    //       core_url,
    //       JSON.parse(query),
    //       headers
    //     );
    //     setData(res.data);
    //   } catch (error) {
    //     if (query === null || !query) {
    //       toast.error("Select an API before you make a request");
    //     } else {
    //       toast.error("Request unsuccessful");
    //     }
    //   }
    // };
    // const isValidJsonString = (query: string) => {
    //   if (!(query && typeof query === "string")) {
    //     return false;
    //   }

    //   try {
    //     JSON.parse(query);
    //     return true;
    //   } catch (error) {
    //     return false;
    //   }
    // };

    return (
        <div className={classes.main}>
            <div className={classes.container}>
                <div className={classes.discussion_tab}>

                    <div className={classes.header}>
                        <h2>Discussions</h2>
                    </div>
                    <div>
                        <button
                            className={classes.newDiscussion}
                            onClick={() => handleClicked("addDiscussion")}
                            style={{ height: "46px" }}>
                            <Add /> <Typography>New Discussion</Typography>
                        </button>
                    </div>
                </div>
            </div>

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
                                <Typography variant="body1" fontWeight={500}><Link sx={{textDecoration:'none', color:"#071b85"}} href="/" >A Comment or Discussion about Text Summarizer</Link></Typography>
                                <Typography variant="body2" fontWeight={400}>5 hours ago</Typography>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className={classes.discussion_thread}>
                        <div className={classes.discussion_row}>
                            <img src={ZapiHomeLogo} alt="zapi-Home" />
                            <div className={classes.discussion_column}>
                                <Typography variant="body2" fontWeight={400}>User24</Typography>
                                <Typography variant="body1" fontWeight={500}><Link sx={{textDecoration:'none', color:"#071b85"}} href="/" >A Comment or Discussion about Text Summarizer</Link></Typography>
                                <Typography variant="body2" fontWeight={400}>5 hours ago</Typography>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className={classes.discussion_thread}>
                        <div className={classes.discussion_row}>
                            <img src={ZapiHomeLogo} alt="zapi-Home" />
                            <div className={classes.discussion_column}>
                                <Typography variant="body2" fontWeight={400}>User24</Typography>
                                <Typography variant="body1" fontWeight={500}><Link sx={{textDecoration:'none', color:"#071b85"}} href="/" >A Comment or Discussion about Text Summarizer</Link></Typography>
                                <Typography variant="body2" fontWeight={400}>5 hours ago</Typography>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className={classes.discussion_thread}>
                        <div className={classes.discussion_row}>
                            <img src={ZapiHomeLogo} alt="zapi-Home" />
                            <div className={classes.discussion_column}>
                                <Typography variant="body2" fontWeight={400}>User24</Typography>
                                <Typography variant="body1" fontWeight={500}><Link sx={{textDecoration:'none', color:"#071b85"}} href="/" >A Comment or Discussion about Text Summarizer</Link></Typography>
                                <Typography variant="body2" fontWeight={400}>5 hours ago</Typography>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className={classes.discussion_thread}>
                        <div className={classes.discussion_row}>
                            <img src={ZapiHomeLogo} alt="zapi-Home" />
                            <div className={classes.discussion_column}>
                                <Typography variant="body2" fontWeight={400}>User24</Typography>
                                <Typography variant="body1" fontWeight={500}><Link sx={{textDecoration:'none', color:"#071b85"}} href="/" >A Comment or Discussion about Text Summarizer</Link></Typography>
                                <Typography variant="body2" fontWeight={400}>5 hours ago</Typography>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className={classes.discussion_thread}>
                        <div className={classes.discussion_row}>
                            <img src={ZapiHomeLogo} alt="zapi-Home" />
                            <div className={classes.discussion_column}>
                                <Typography variant="body2" fontWeight={400}>User24</Typography>
                                <Typography variant="body1" fontWeight={500}><Link sx={{textDecoration:'none', color:"#071b85"}} href="/" >A Comment or Discussion about Text Summarizer</Link></Typography>
                                <Typography variant="body2" fontWeight={400}>5 hours ago</Typography>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className={classes.discussion_thread}>
                        <div className={classes.discussion_row}>
                            <img src={ZapiHomeLogo} alt="zapi-Home" />
                            <div className={classes.discussion_column}>
                                <Typography variant="body2" fontWeight={400}>User24</Typography>
                                <Typography variant="body1" fontWeight={500}><Link sx={{textDecoration:'none', color:"#071b85"}} href="/" >A Comment or Discussion about Text Summarizer</Link></Typography>
                                <Typography variant="body2" fontWeight={400}>5 hours ago</Typography>
                            </div>
                        </div>
                    </div>
                    <hr />
                </Box>

            </div>
        </div>
    );
};

export default Discussion;

const useStyles = makeStyles({
    main: {
        // marginTop:'5rem',
        height: "auto",
        padding: "1rem 2rem 0",
    },
    container: {
        width: "auto",
        display: "flex",
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
        height:'auto',
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
        paddingLeft:'2rem',
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
