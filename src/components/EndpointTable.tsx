import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import Checkbox from '@mui/material/Checkbox';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Link } from 'react-router-dom';

function createData(
  name: string,
  methodname: number | any,
  actionedit: number | any,
  actioncopy: number | any,
  actionmoveto: number | any,
  price: number | any,
) {
  return {
    name,
    methodname,
    actionedit,
    actioncopy,
    actionmoveto,
    price,
    history: [
      {
        group: 'Get Categories',
        method: 'GET',
      },
      {
        group: 'Get Product in Category',
        method: 'GET',
      },
    ],
  };
}

function Row(props: { row: ReturnType<typeof createData> }) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
          <Checkbox
            color="primary"
            inputProps={{
              'aria-label': 'select all',
            }}
          />
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="right">{row.methodname}</TableCell>
        <TableCell align="right">{row.actionedit}</TableCell>
        <TableCell align="right">{row.actioncopy}</TableCell>
        <TableCell align="right">{row.actionmoveto}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell></TableCell>
                    <TableCell>Group</TableCell>
                    <TableCell align="right">Method</TableCell>
                    <TableCell align="right">Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow>
                      <TableCell component="th" scope="row">
                        <Checkbox
                          color="primary"
                          inputProps={{
                            'aria-label': 'select all',
                          }}
                        />
                      </TableCell>
                      <TableCell>{historyRow.group}</TableCell>
                      <TableCell align="right" sx={{color: 'green'}}>{historyRow.method}</TableCell>
                      <TableCell align="right">
                        <Link to="#">
                          Edit
                        </Link>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

const rows = [
  createData('Catalog', '', 'Edit', 'Copy', 'Move to', ''),
  createData('Order', '', 'Edit', 'Copy', 'Move to', ''),
  createData('Authentication', '', 'Edit', 'Copy', 'Move to', ''),
  createData('Catalog', '', 'Edit', 'Copy', 'Move to', ''),
  createData('Auth', '', 'Edit', 'Copy', 'Move to', ''),
];

export default function CollapsibleTable() {
  return (
    <TableContainer component={Paper} >
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell >Group</TableCell>
            <TableCell align="right">Method</TableCell>
            <TableCell align="right">Action</TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
