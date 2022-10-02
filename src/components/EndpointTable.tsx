import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { makeStyles } from '@mui/styles';
import { toast } from 'react-toastify';

import { useAppDispatch, useAppSelector, useFormInputs, useHttpRequest } from "../hooks";
import { removeEndpoint, editEndpoint } from "../redux/slices/userSlice";
import { EndpointProps } from "../interfaces";
import { EndpointsType } from "../types";
import { useContextProvider } from '../contexts/ContextProvider';

const core_url = import.meta.env.VITE_BASE_URL
const initialState = { id: "", name: "", route: "", method: "" } as EndpointProps

interface Props { id: string | undefined }

const CollapsibleTable:React.FC<Props> = ({id}) => {
  const { inputs, bind, select } = useFormInputs(initialState)
  const { name, route, method } = inputs
  const [isEditing, setIsEditing] = useState<number | null>(null)
  const { userApis } = useAppSelector(store => store.user)
  const api = userApis.find(api => api?.id === id)
  const { triggerRefresh } = useContextProvider()
  const dispatch = useAppDispatch()
  const classes = useStyles()
  const { error, loading, sendRequest } = useHttpRequest()
  let payload : object;
  
  const openEditing = (index: number) => {
    setIsEditing(index)
  }

  const save = async(id: string | undefined) => {
    payload = {id, name, method, route}
    const headers = { 'Content-Type': 'application/json'}
    try {
      const data = await sendRequest(`${core_url}/endpoints/${id}`, 'PATCH', JSON.stringify(payload), headers)
      if(!data || data === undefined) return
      dispatch(editEndpoint(payload))
      setIsEditing(null)
      triggerRefresh()
    } catch (error) {}
  }
  
  const deleteRoute = async(id: string | undefined) => {
    const headers = { 'Content-Type': 'application/json'}
    try {
      const data = await sendRequest(`${core_url}/endpoints/${id}`, 'DELETE', JSON.stringify(payload), headers)
      if(!data || data === undefined) return
      dispatch(removeEndpoint(id))
      triggerRefresh()
    } catch (error) {}
  }

  return (
    <>
    <TableContainer component={Paper} >
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Method</TableCell>
            <TableCell>Route</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {api?.endpoints?.map((endpoint, index) => (
            <TableRow key={index}>
              <TableCell>
                <input type="text" name="name" defaultValue={endpoint?.name} {...bind} className={classes.input} disabled={isEditing !== index} />
              </TableCell>
              <TableCell>
                <select name="method" defaultValue={endpoint?.method} {...select} className={classes.input} disabled={isEditing !== index}>
                  <option value="get">GET</option>
                  <option value="post">POST</option>
                  <option value="patch">PATCH</option>
                  <option value="delete">DELETE</option>
                </select>
              </TableCell>
              <TableCell>
                <input type="text" name="route" defaultValue={endpoint?.route.toString()} {...bind} className={classes.input} disabled={isEditing !== index} />
              </TableCell>
              <TableCell>
                {isEditing === index ? (
                  <button onClick={() => save(endpoint?.id)} className={classes.button} style={{background: "#081F4A"}}>
                    DONE
                 </button>
               ) : (
                  <button onClick={() => openEditing(index)} className={classes.button} style={{background: "#081F4A"}}>
                   EDIT
                  </button>
                )}
              </TableCell>
              <TableCell>
                <button onClick={() => deleteRoute(endpoint?.id)} className={classes.button} style={{background: "#E32C08"}}>
                  DELETE
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}

const useStyles = makeStyles({
  form: {
    display: "flex",
    alignItems: "center",
    padding: "0 1rem",
    gap: "1rem",
  },
  input: {
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
    transition: "0.5s all ease-in-out cubic-bezier(0.075, 0.82, 0.165, 1)",
    "&:disabled": {
      border: "none",
      background: "#FFF",
      color: "#000",
    }
  },
  button: {
    padding: "0.5rem 1rem",
    border: "none",
    outline: "none",
    borderRadius: "5px",
    color: "#FFF",
    cursor: "pointer",
    fontFamily: "var(--body-font)",
  }
})

export default CollapsibleTable