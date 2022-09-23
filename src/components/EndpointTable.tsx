import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { makeStyles } from '@mui/styles';

const CollapsibleTable = () => {
  const classes = useStyles()

  const editRoute = (id: string) => {
    console.log(`editing route ${id}`)
  }
  
  const deleteRoute = (id: string) => {
    console.log(`route deleted ${id}`)
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

const mockEndpoint = [
  {id:'001', name:'Get all events', method:'GET', route:'/events/all'},
  {id:'002', name:'Get event by name', method:'GET', route:'/events/:name'},
  {id:'003', name:'Add event', method:'POST', route:'/events/add'},
  {id:'004', name:'Update event', method:'PUT', route:'/events/:id'},
  {id:'005', name:'Delete event', method:'DELETE', route:'/events/:id'},
]

const useStyles = makeStyles({
  button: {
    padding: "0.5rem 1rem",
    border: "none",
    outline: "none",
    borderRadius: "5px",
    color: "#FFF",
    cursor: "pointer",
  }
})

export default CollapsibleTable