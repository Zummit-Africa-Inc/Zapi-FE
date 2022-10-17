import React from "react";
import { styled } from '@mui/material/styles';
import { Button, ButtonGroup, InputAdornment, TextField, Table, TableContainer, TableHead, TableBody, TableCell, tableCellClasses, TableRow } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { MdSearch } from "react-icons/md";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.action.hover,
        color: theme.palette.common.black,
    }
}));

const User = () => {
    const classes = useStyles()
    
    return (
    <div className={classes.user}>
        <div style={{ display: 'flex', alignItems: "center", justifyContent: "flex-end" }}>
            <TextField
                InputProps={{
            startAdornment: (
                <InputAdornment position="start">
                <MdSearch />
                </InputAdornment>
            ),
            }}
                style={{ padding: "10px" }}
                id="outlined-size-small"
                placeholder="search username"
                size="small" />
            <ButtonGroup
                sx={{
                    height: "40px",
                    "& button:focus" : {backgroundColor: "grey.300"}
                }}>
                <Button sx={{lineHeight: 1}}>Paid Users(0)</Button>
                <Button sx={{lineHeight: 1}}>Free Users(1)</Button>
            </ButtonGroup>
        </div>
        <TableContainer className={classes.tableContainer}>
        <Table sx={{
            border:1,
            borderColor: "grey.300",
            borderRadius: "10px",
            height: "300px",
        }}
        stickyHeader>
            <TableHead>
                <TableRow>
                    <StyledTableCell><strong>Username</strong></StyledTableCell>
                    <StyledTableCell align="right"><strong>status</strong></StyledTableCell>
                    <StyledTableCell align="right"><strong>Name</strong></StyledTableCell>
                    <StyledTableCell align="right"><strong>Date Subscribed</strong></StyledTableCell>
                    <StyledTableCell align="right"><strong>Plan Name</strong></StyledTableCell>
                    <StyledTableCell align="right"><strong>Total paid</strong></StyledTableCell>
                    <StyledTableCell align="right"><strong>Last Active</strong></StyledTableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                <tr>
                    <td>No users to display</td>
                </tr>
            </TableBody>
        </Table>
        </TableContainer>
    </div>
)};

export default User;

const useStyles = makeStyles({
    user: {
        // width: "calc(100% - 250px)"
    },
    tableContainer: {
        ['@media (max-width:450px)']:{
            maxWidth:'320px'
        }
    }
})