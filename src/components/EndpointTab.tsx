import React, { FormEvent, useState } from "react";
import { Paper, Stack, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { toast } from "react-toastify";

import { EndpointTable } from "./";
import { useAppDispatch, useAppSelector, useFormInputs } from "../hooks";
import { addEndpoint } from "../redux/slices/endpointSlice";

const initialState = { name: '', route: '', method: 'GET' }

const EndpointTab: React.FC = () => {
    const { inputs, bind, select } = useFormInputs(initialState)
    const [isAdding, setIsAdding] = useState<boolean>(false)
    const { name, route, method } = inputs
    const dispatch = useAppDispatch()
    const classes = useStyles()

    const toggleState = () => setIsAdding(prev => !prev)

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()

        if(!name || !route) return toast.error("Please add a name and route")
        const payload = { id: Math.random().toFixed(10).toString(), name, route, method }
        // * there will be a post and background get request whenever a new endpoint is added
        dispatch(addEndpoint(payload))
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
                            <option value="GET">GET</option>
                            <option value="POST">POST</option>
                            <option value="PUT">PUT</option>
                            <option value="DELETE">DELETE</option>
                        </select>
                        <input type="text" name="route" {...bind} className={classes.inputs} placeholder="Route" />
                        <button type="submit" className={classes.button} style={{background: "#058A04",}}>
                            Add
                        </button>
                    </Stack>
                </form>
                )}
            <EndpointTable />
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
