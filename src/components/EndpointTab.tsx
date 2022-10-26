import React, { FormEvent, useEffect, useState } from "react";
import { IconButton, Paper, Stack, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { toast } from "react-toastify";
import { Add, Remove } from "@mui/icons-material";
import Cookies from "universal-cookie";

import { useAppDispatch, useFormInputs, useHttpRequest } from "../hooks";
import { addEndpoint, getUserApis } from "../redux/slices/userSlice";
import { Spinner } from "../assets";
import EndpointTable from "./EndpointTable";

const core_url = "VITE_CORE_URL"
const initialState = {  name: "", route: "", method: "get", description: "", headers: "", requestBody: "", queryParams: "" }
interface Props { id: string | undefined }

const EndpointTab: React.FC<Props> = ({id}) => {
    const { inputs, bind, select } = useFormInputs(initialState);
    const [isAdding, setIsAdding] = useState<boolean>(false);
    const [isOptionsOpen, setIsOptionsOpen] = useState<boolean>(false);
    const { error, loading, sendRequest } = useHttpRequest();
    const { name, route, method, description, headers, requestBody, queryParams } = inputs;
    const dispatch = useAppDispatch();
    const classes = useStyles();
    const cookies = new Cookies();
    const profileId = cookies.get("profileId");

    const [headersArray, setHeadersArray] = useState<Array<string>>([]);
    const [requestBodyArray, setRequestBodyArray] = useState<Array<string>>([]);
    const [queryParamsArray, setQueryParamsArray] = useState<Array<string>>([]);

    const addHeaders = (data: string) => {
        if(!data) return toast.error("Add a valid string")
        if(headersArray.includes(data)) return toast.error("Duplicate values")
        setHeadersArray(prevHeaders => [...prevHeaders, data])
    }

    const removeHeader = (data: string) => setHeadersArray(current => current.filter(header => header !== data))

    const addRequestBody = (data: string) => {
        if(!data) return toast.error("Add a valid string")
        if(requestBodyArray.includes(data)) return toast.error("Duplicate values")
        setRequestBodyArray(reqBody => [...reqBody, data])
    }

    const removeRequestBody = (data: string) => setRequestBodyArray(current => current.filter(reqBody => reqBody !== data))

    const addQueryParams = (data: string) => {
        if(!data) return toast.error("Add a valid string")
        if(queryParamsArray.includes(data)) return toast.error("Duplicate values")
        setQueryParamsArray(param => [...param, data])
    }

    const removeQueryParams = (data: string) => setQueryParamsArray(current => current.filter(param => param !== data))

    const toggleAdding = () => {
        setHeadersArray([])
        setRequestBodyArray([])
        setQueryParamsArray([])
        setIsAdding(prev => !prev)
    }
    const toggleOptions = () => setIsOptionsOpen(prev => !prev)
    
    const handleSubmit = async(e: FormEvent) => {
        e.preventDefault()
        
        if(!name || !route) return toast.error("Please add a name and route")
        const payload = { name, route, method, description, headers: headersArray, requestBody: requestBodyArray, queryParams: queryParamsArray }
        const headers = { 'Content-Type': 'application/json' }
        try {
            const data = await sendRequest(`/endpoints/new/${id}`, 'post', core_url, payload, headers)
            if(!data || data === undefined) return
            dispatch(addEndpoint(payload))
            const { message } = data;
            toast.success(`${message}`);
        } catch (error) {}
        setIsAdding(false);
        setHeadersArray([])
        setRequestBodyArray([])
        setQueryParamsArray([])
        dispatch(getUserApis(profileId));
    }

    useEffect(() => {
        error && toast.error(`${error.message}`)
    },[error])

    return (
        <Paper elevation={1} className={classes.paper}>
            <Stack direction="column" mb={8}>
            <div>
                <Typography variant="body1" fontSize="20px" fontWeight={800}>API Definition</Typography>
            </div>
            <div className={classes.pageSubHeading}>
                <Typography variant="subtitle2" width="auto" fontWeight={400}>When publishing an API to the ZapiAPI Hub, you can either manually edit endpoint definitions, use a specification file.</Typography>
            </div>
            <Typography variant="body1" fontSize="24px" color="#081F4A" fontWeight={500} mt={2}>Endpoints</Typography>
            <Typography variant="body1" fontSize="16px" fontWeight={400} mb={1}>Changes made to the endpoints will be reflected in the Hub.</Typography>
            <div className={classes.pageDescription}>
                <Typography>Add and define your API endpoints.</Typography>
            </div>
            {/* Add Endpoint */}
            <div className={classes.pageActions}>
                <div className={classes.inputs}>
                    <input type="text" name="search" placeholder="Search..." />
                </div>
                <div>
                    <button onClick={toggleAdding} className={classes.button} style={{background: isAdding ? "#E32C08" : "#058A04"}}>
                        {isAdding ? 'Cancel' : 'Add Endpoint'}
                    </button>
                </div>
            </div>
            </Stack>
            {isAdding && (
                <form onSubmit={handleSubmit}>
                    <Stack direction="row" alignItems="center" spacing={4} mt={4} mb={2}>
                        <div className={classes.inputs}>
                            <input type="text" name="name" {...bind} placeholder="Name" />
                        </div>
                        <div className={classes.inputs}>
                            <select name="method" {...select}>
                                <option value="get">GET</option>
                                <option value="post">POST</option>
                                <option value="patch">PATCH</option>
                                <option value="delete">DELETE</option>
                            </select>
                        </div>
                        <div className={classes.inputs}>
                            <input type="text" name="route" {...bind} placeholder="Route" />
                        </div>
                        <button type="submit" className={classes.button} style={{background: "#058A04"}}>
                            {loading ? <Spinner /> : "ADD"}
                        </button>
                        <IconButton onClick={toggleOptions}>
                            {isOptionsOpen ? <Remove /> : <Add />}
                        </IconButton>
                    </Stack>
                    {(isOptionsOpen || method === "post") && (
                        <>
                        <Stack direction="row" alignItems="center" spacing={4}>
                            <div className={classes.inputs}>
                                <input type="text" name="headers" {...bind} placeholder="Headers" />
                                <button type="button" onClick={() => addHeaders(headers)}><Add /></button>
                            </div>
                            <div className={classes.inputs}>
                                <input type="text" name="requestBody" {...bind} placeholder="Request  body" />
                                <button type="button" onClick={() => addRequestBody(requestBody)}><Add /></button>
                            </div>
                            <div className={classes.inputs}>
                                <input type="text" name="queryParams" {...bind} placeholder="Query params" />
                                <button type="button" onClick={() => addQueryParams(queryParams)}><Add /></button>
                            </div>
                        </Stack>
                        <Stack mt={2} mb={2}>
                            <div className={classes.inputs}>
                                <textarea name="description" {...bind} placeholder="Description" />
                            </div>
                        </Stack>
                        </>
                    )}
                </form>
                )}
                {isAdding && (isOptionsOpen || method === "post") && (
                    <Stack direction="column" spacing={1} my={2}>
                        <ul className={classes.list}>
                            Headers: {headersArray.length > 0 && headersArray.map((header, index) => <li key={index}>
                                {header} <button onClick={() => removeHeader(header)}><Remove /></button>
                            </li>)}
                        </ul>
                        <ul className={classes.list}>
                            Request Body: {requestBodyArray.length >  0 && requestBodyArray.map((req, index) => <li key={index}>
                                {req} <button onClick={() => removeRequestBody(req)}><Remove /></button>
                            </li>)}
                        </ul>
                        <ul className={classes.list}>
                            Query Params: {queryParamsArray.length > 0 && queryParamsArray.map((param, index) => <li key={index}>
                                {param} <button onClick={() => removeQueryParams(param)}><Remove /></button>
                            </li>)}
                        </ul>
                    </Stack>
                )}
            <EndpointTable id={`${id}`} />
        </Paper>
    )
}

export default EndpointTab

const useStyles = makeStyles({
    paper: {
        width: "100%",
        minWidth: "890px",
        marginTop: "20px",
        padding: "2rem 2rem",
    },
    pageSubHeading: {
        paddingBottom: "1rem"
    },
    pageDescription: {
        paddingBottom: "1rem"
    },
    pageActions: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
    },
    inputs: {
        width: "max-content",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "4px",
        border: "1px solid #999",
        outline: "none",
        fontSize: "14px",
        lineHeight: "24px",
        fontFamily: "var(--body-font)",
        "& input": {
            width: "100%",
            height: "40px",
            border: "none",
            outline: "none",
            borderRadius: "4px",
            padding: "0 0.5rem",
        },
        "& select": {
            width: "100px",
            height: "40px",
            border: "none",
            outline: "none",
            borderRadius: "4px",
        },
        "& textarea": {
            resize: "none",
            width: "300px",
            height: "100px",
            borderRadius: "4px",
            border: "none",
            outline: "none",
            padding: "0.5rem",
        },
        "& button": {
            width: "60px",
            height: "40px",
            background: "#081F4A",
            color: "#FFF",
            border: "none",
            borderRadius: "0 4px 4px 0",
        }
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
        "& disabled": {
            background: "#E0E0E0",
            color: "#484848",
        }
    },
    list: {
        display: "flex",
        gap: "0.5rem",
        listStyle: "none",
        color: "#081F4A",
        fontSize: "14px",
        "& li": {
            display: "flex",
            alignItems: "center",
            gap: "0.25rem",
            background: "#C4C4C4",
            color: "#081F4A",
            padding: "1px 3px",
            borderRadius: "2px",
        },
        "& button": {
            width: "",
            height: "15px",
            background: "#C4C4C4",
            color: "#081F4A",
            border: "none",
            padding: 0,
            "& svg": {
                fontSize: "0.75rem",
            }
        }
    }
})
