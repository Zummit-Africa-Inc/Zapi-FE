import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { makeStyles } from '@mui/styles';

import { mockEndpoint } from './mockdata' // test API

const CollapsibleTable:React.FC = () => {
  const classes = useStyles()

  const editRoute = (id: string) => {
    console.log(`editing route with id ${id}`)
  }
  
  const deleteRoute = (id: string) => {
    console.log(`deleting route with id ${id}`)
  }

  return (
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
          {mockEndpoint.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.method}</TableCell>
              <TableCell>{item.route}</TableCell>
              <TableCell>
                <button onClick={() => editRoute(item.id)} className={classes.button} style={{background: "#081F4A"}}>
                  EDIT
                </button>
              </TableCell>
              <TableCell>
                <button onClick={() => deleteRoute(item.id)} className={classes.button} style={{background: "#E32C08"}}>
                  DELETE
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

const useStyles = makeStyles({
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