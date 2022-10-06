import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TableSortLabel, TablePagination } from '@mui/material';
import { styled } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/TableCell';
import React, { useState } from 'react';


interface TableProps {
  Heading: Array<any>
  Rows?: Array<any>
}


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



const DataTable: React.FC<TableProps> = ({Heading, Rows}) => {
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(5);
  const result = []

  if (Rows) {
    const Keys = Object.keys(Rows[0])
    const Result = [...Rows.map(obj => Keys.map(key => obj[key]))];
    result.push(...Result)
  }

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
            {result ? 
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>{Heading.map((heading) => (
                <StyledTableCell className="tableCell" key={heading}>{heading}</StyledTableCell>
            ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {result.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, i) => (
              <StyledTableRow key={i}>{Object.values(row).map((m, i) => (
                <StyledTableCell className="tableCell" key={i}>{m}</StyledTableCell>
                ))}
                </StyledTableRow>
                ))}
          </TableBody>
        </Table>
            :
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>{Heading.map((heading) => (
                  <StyledTableCell className="tableCell" key={heading}>{heading}</StyledTableCell>
              ))}
              </TableRow>
            </TableHead>
          </Table>
          }
      </TableContainer>
      {Rows ? 
      <TablePagination
      rowsPerPageOptions={[5, 10, 100]}
      component="div"
      count={Rows.length}
      rowsPerPage={rowsPerPage}
      page={page}
      onPageChange={handleChangePage}
      onRowsPerPageChange={handleChangeRowsPerPage}
      />
      :
      null
    }
    </div>
  )
}

export default DataTable