import React, { FormEvent, useState } from "react";
import { Paper, Stack, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { toast } from "react-toastify";

import { useAppDispatch, useAppSelector, useFormInputs, useHttpRequest } from "../hooks";
import { addEndpoint } from "../redux/slices/userSlice";
// import { EndpointsType } from "../types";
import { Spinner } from "../assets";
import { EndpointTable } from "./";
import { useContextProvider } from "../contexts/ContextProvider";

const core_url = import.meta.env.VITE_BASE_URL
const initialState = { name: '', route: '', method: 'get', description: "", headers: [], requestBody: [] }
interface Props { id: string | undefined }

const EndpointTab: React.FC<Props> = ({id}) => {
    const { inputs, bind, select } = useFormInputs(initialState)
    const { userApis } = useAppSelector(store => store.user)
    const [isAdding, setIsAdding] = useState<boolean>(false)
    const { error, loading, sendRequest } = useHttpRequest()
    const { name, route, method, description, headers, requestBody } = inputs
    const { triggerRefresh } = useContextProvider()
    const dispatch = useAppDispatch()
    const classes = useStyles()

    const toggleState = () => setIsAdding(prev => !prev)
    
    const handleSubmit = async(e: FormEvent) => {
        e.preventDefault()
        
        if(!name || !route) return toast.error("Please add a name and route")
        const payload = { name, route, method, description, headers, requestBody }
        const req_headers = { 'Content-Type': 'application/json' }
        try {
            const data = await sendRequest(`${core_url}/endpoints/new/${id}`, 'POST', JSON.stringify(payload), req_headers)
            if(!data || data === undefined) return
            dispatch(addEndpoint(data?.data))
            triggerRefresh()
        } catch (error) {}
        setIsAdding(false)
    }

    return (
        <Paper elevation={1} className={classes.paper}>
            <Stack direction="column" mb={8}>
            <div>
                <Typography variant="body1" fontSize="20px" fontWeight={800}>API Definition</Typography>
            </div>
            <div className={classes.pageSubHeading}>
                <Typography variant="subtitle2" width="650px" fontWeight={400}>When publishing an API to the ZapiAPI Hub, you can either manually edit endpoint definitions, use a specification file.</Typography>
            </div>
            <Typography variant="body1" fontSize="24px" color="rgb(123, 123, 194)" fontWeight={500} mt={2}>Endpoints</Typography>
            <Typography variant="body1" fontSize="16px" fontWeight={400} mb={1}>Changes made to the endpoints will be reflected in the Hub.</Typography>
            <div className={classes.pageDescription}>
                <Typography>Add and define your API endpoints.</Typography>
            </div>
            <div className={classes.pageActions}>
                <input type="text" name="search" className={classes.inputs} placeholder="Search..." />
                <div>
                    <button onClick={toggleState} className={classes.button} style={{background: isAdding ? "#E32C08" : "#058A04",}}>
                        {isAdding ? 'Cancel' : 'Create Endpoint'}
                    </button>
                </div>
            </div>
            </Stack>
            {isAdding && (
                <form onSubmit={handleSubmit}>
                    <Stack direction="row" alignItems="center" spacing={4} my={4}>
                        <input type="text" name="name" {...bind} className={classes.inputs} placeholder="Name" />
                        <select name="method" {...select} className={classes.inputs}>
                            <option value="get">GET</option>
                            <option value="post">POST</option>
                            <option value="patch">PATCH</option>
                            <option value="delete">DELETE</option>
                        </select>
                        <input type="text" name="route" {...bind} className={classes.inputs} placeholder="Route" />
                        <button type="submit" className={classes.button} style={{background: "#058A04",}}>
                            {loading ? <Spinner /> : "ADD"}
                        </button>
                    </Stack>
                </form>
                )}
            <EndpointTable id={`${id}`} />
        </Paper>
    )
}

export default EndpointTab

const useStyles = makeStyles({
    paper: {
        width: "950px",
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
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "40px",
        borderRadius: "4px",
        border: "1px solid #999",
        outline: "none",
        padding: "0 0.5rem",
        fontWeight: 400,
        fontSize: "14px",
        lineHeight: "24px",
        fontFamily: "var(--body-font)",
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
})
