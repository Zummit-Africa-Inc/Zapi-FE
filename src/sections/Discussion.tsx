import {
    TextField,
    Typography,
    InputLabel,
    MenuItem,
    FormControl,
    Select,
    SelectChangeEvent,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { SyntheticEvent, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector, useHttpRequest } from "../hooks";
import { getFreeApis } from "../redux/slices/freeApiSlice";
import { FREEUSEAPIDATA } from "../testdata";
import { APIS } from "../testdata";
import { toast } from "react-toastify";
import { Add } from "@mui/icons-material";
import { useContextProvider } from "../contexts/ContextProvider";
import { Spinner } from "../assets";
import caretDown from "../assets/images/caret-down.png";


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
        <div className={classes.container}>
            <div className={classes.discussion_tab}>

                <div className={classes.header}>
                    <h2>Discussions</h2>
                </div>
                <div>
                    <button
                        className={classes.newDiscussion}
                        onClick={() => handleClicked("addapi")}
                        style={{ height: "46px" }}>
                        <Add /> <Typography>New Discussion</Typography>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Discussion;

const useStyles = makeStyles({
    container: {
        width: "auto",
        display: "flex",
        gap: "32px",
        margin: "0 0 109px 5rem",
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
});
