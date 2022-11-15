import React, { FormEvent, useEffect, useState } from "react";
import { Box, Paper, Stack, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { MoreVert } from "@mui/icons-material";
import Cookies from "universal-cookie";
import { toast } from "react-toastify";

import { APIType, EndpointsType } from "../types";
import { useFormInputs, useHttpRequest } from "../hooks";

interface Props {
    id: string | undefined
}

const colors: any = {
    "success": "#22EF48",
    "pending": "#E6BA36",
    "failed": "#E64F36",
}

const initialState = { testName: "", endpointName: "" }

const Tests:React.FC<Props> = ({id}) => {
    const [endpoints, setEndpoints] = useState<Array<EndpointsType>>([]);
    const [creatingTest, setCreatingTest] = useState<boolean>(false);
    const {inputs, bind, select} = useFormInputs(initialState);
    const {error, loading, sendRequest} = useHttpRequest();
    const [api, setApi] = useState<Array<APIType>>([]);
    const cookies = new Cookies();
    const { testName, endpointName } = inputs;
    const classes= useStyles();

    const fetchApiData = async(apiId: string | undefined): Promise<any> => {
        const headers = {
            'Content-Type': "application/json",
            'X-Zapi-Auth-Token': `Bearer ${cookies.get("accessToken")}`
        };
        try {
            const apiData = await sendRequest(`/api/findOne/${apiId}`, "get", "VITE_CORE_URL", {}, headers);
            const endpointsData = await sendRequest(`/endpoints/${apiId}`, "get", "VITE_CORE_URL", {}, headers);

            const [api, endpoints] = await Promise.all([apiData, endpointsData]);
            if(api === undefined || endpoints === undefined) return
            setApi(api.data);
            setEndpoints(endpoints.data);
        } catch (error) {}
    };

    const addTest = async(e: FormEvent) => {
        e.preventDefault()
        if(!testName) return toast.error("Test name cannot be empty")
        const headers = {
            'Content-type': "application/json",
            'X-Zapi-Auth-Token': `Bearer ${cookies.get("accessToken")}`
        };
        const payload = {testName}
        console.log(payload)
        try {
            const data = await sendRequest(``, "get", "VITE_CORE_URL", payload, headers)
            if(data === undefined) return
        } catch (error) {}
    };
    
    const handleCreating = () => creatingTest ? setCreatingTest(false) : setCreatingTest(true)
    
    useEffect(() => {
        fetchApiData(id)
    },[])

  return (
    <Paper className={classes.paper}>
        <Stack width="100%" direction="row" alignItems="center" justifyContent="space-between" mt={2} mb={4}>
            <div className={classes.inputs}>
                <input type="text" name="search" placeholder="Search tests" />
            </div>
            <button onClick={handleCreating} className={classes.button}>
                {creatingTest ? "Canel" : "Create Test"}
            </button>
        </Stack>
        {creatingTest && (
            <form onSubmit={addTest}>
                <Stack width="100%" direction="row" alignItems="center" spacing={2} my={2}>
                    <div className={classes.inputs}>
                        <input type="text" name="testName" {...bind} placeholder="Test name" />
                    </div>
                    <div className={classes.inputs}>
                        <button type="submit" style={{background: "#22EF48"}}>add</button>
                    </div>
                </Stack>
            </form>
        )}
        <Table>
            <TableHead className={classes.head}>
                <TableRow>
                    <TableCell className={classes.cell}>Name</TableCell>
                    <TableCell className={classes.cell}>Status</TableCell>
                    <TableCell className={classes.cell}>Last Executed</TableCell>
                    <TableCell className={classes.cell}>Schedule</TableCell>
                    <TableCell className={classes.cell}>Actions</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                    <TableCell>Test name</TableCell>
                    <TableCell>Unknown</TableCell>
                    <TableCell>N/A</TableCell>
                    <TableCell>None</TableCell>
                    <TableCell><MoreVert /></TableCell>
                </TableRow>
            </TableBody>
        </Table>
    </Paper>
  )
};

const useStyles = makeStyles({
    paper: {
        padding: "1rem 0.5rem",
    },
    inputs: {
        width: "max-content",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "14px",
        lineHeight: "24px",
        fontFamily: "var(--body-font)",
        "& input": {
          width: "100%",
          height: "40px",
          padding: "0 0.5rem",
          borderRadius: "4px",
          border: "1px solid #999",
          outline: "none",
        },
        "& select": {
            minWidth: "100px",
            height: "40px",
            borderRadius: "4px",
            border: "1px solid #999",
            outline: "none",
          },
          "& textarea": {
            resize: "none",
            width: "300px",
            height: "100px",
            borderRadius: "4px",
            border: "1px solid #999",
            outline: "none",
            padding: "0.5rem",
          },
          "& button": {
            width: "60px",
            height: "40px",
            background: "#081F4A",
            color: "#FFF",
            border: "none",
            borderRadius: "4px",
            textTransform: "uppercase",
          },
          "& input[type=checkbox]": {
            width: "15px",
            height: "15px",
          },
    },
    button: {
        display: "flex",
        alignItems: "center",
        gap: "0.25rem",
        background: "#081F4A",
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
        cursor: "pointer",
        "& disabled": {
          background: "#E0E0E0",
          color: "#484848",
        },
    },
    head: {
        "&.MuiTableHead-root": {
            background: "#081F4A",
        },
    },
    cell: {
        "&.MuiTableCell-root": {
            color: "#FFF",
            fontWeight: 500,
            fontSize: "16px",
        }
    }
});

export default Tests