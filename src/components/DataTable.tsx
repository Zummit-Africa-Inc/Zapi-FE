import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TableSortLabel, TablePagination } from '@mui/material';
import React, { useState } from 'react';
import { makeStyles } from "@mui/styles"

interface TableProps {
  Heading: Array<string>
  Rows: Array<any>
}

const DataTable: React.FC<TableProps> = ({Heading, Rows}) => {
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(5);
  const classes = useStyles();

    const Keys = Object.keys(Rows[0])
    const result = [...Rows.map(obj => Keys.map(key => obj[key]))];

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  
  return (
    <div className='datatable'>
      <TableContainer component={Paper} className="table">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead className={classes.head}>
            <TableRow>{Heading.map((heading) => (
                <TableCell className="tableCell" key={heading}>{heading}</TableCell>
            ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {result.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, i) => (
              <TableRow key={i}>{Object.values(row).map((m, i) => (
                <TableCell className="tableCell" key={i}>{m}</TableCell>
              ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {Rows && 
      <TablePagination
      rowsPerPageOptions={[5, 10, 100]}
      component="div"
      count={Rows.length}
      rowsPerPage={rowsPerPage}
      page={page}
      onPageChange={handleChangePage}
      onRowsPerPageChange={handleChangeRowsPerPage}
      />
    }
    </div>
  )
}

const useStyles = makeStyles({
  head:{
    "&.MuiTableHead-root":{
      backgroundColor:'rgba(0, 0, 0, 0.38)'
    }
  }
})

export default DataTable