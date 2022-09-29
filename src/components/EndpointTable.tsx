import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, {tableCellClasses} from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TablePagination  from "@mui/material/TablePagination";
import Paper from '@mui/material/Paper';
import { makeStyles } from '@mui/styles';
import { styled } from "@mui/material";

import { mockEndpoint } from './mockdata' // test API

const CollapsibleTable:React.FC = () => {

 const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };






const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));



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
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell>Method</StyledTableCell>
            <StyledTableCell>Route</StyledTableCell>
            <StyledTableCell></StyledTableCell>
            <StyledTableCell></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {mockEndpoint.map((item) => (
            <StyledTableRow key={item.id}>
              <StyledTableCell>{item.name}</StyledTableCell>
              <StyledTableCell>{item.method}</StyledTableCell>
              <StyledTableCell>{item.route}</StyledTableCell>
              <StyledTableCell>
                <button onClick={() => editRoute(item.id)} className={classes.button} style={{background: "#081F4A"}}>
                  EDIT
                </button>
              </StyledTableCell>
              <StyledTableCell>
                <button onClick={() => deleteRoute(item.id)} className={classes.button} style={{background: "#E32C08"}}>
                  DELETE
                </button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[5, 15, 30]}
        component="div"
        count={mockEndpoint.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
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