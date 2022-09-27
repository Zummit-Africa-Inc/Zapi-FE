import React from "react";
import { styled } from '@mui/material/styles';
import {
    Button,
    ButtonGroup,
    InputAdornment,
    TextField,
    Table,
    TableHead,
    TableBody,
    TableCell,
    tableCellClasses,
    TableRow
} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { makeStyles } from "@mui/styles";


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
                <SearchIcon />
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
                <Button>Paid Users(0)</Button>
                <Button>Free Users(1)</Button>
            </ButtonGroup>
        </div>
        <Table sx={{
            border:1,
            borderColor: "grey.300",
            borderRadius: "10px",
            height: "300px"
        }}>
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
    </div>
)};

export default User;

const useStyles = makeStyles({
    user: {
        // width: "calc(100% - 250px)"
    }
})