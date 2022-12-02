import React from "react";
import { styled } from '@mui/material/styles';
import {
    Button,
    ButtonGroup,
    InputAdornment,
    TextField,
    Table,
    TableContainer,
    TableHead,
    TableBody,
    TableCell,
    tableCellClasses,
    TableRow,
    Box
} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { makeStyles } from "@mui/styles";
import { DataTable } from ".";


const header = ["Username", "Status", "Name", "Date Subscribed", "Plan Name", "Total paid", "Last Active"];
const row = [{
  user: (<>No users to display</>)
}];

const User = () => {
    const classes = useStyles()
    
    return (
    <Box className={classes.user}>
        <Box style={{ display: 'flex', alignItems: "center", justifyContent: "flex-end" }}>
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
                <Button sx={{lineHeight: 1}}>Paid Users(0)</Button>
                <Button sx={{lineHeight: 1}}>Free Users(1)</Button>
            </ButtonGroup>
        </Box>

        <DataTable Heading={header} Rows={row} />
        
    </Box>
)};

export default User;

const useStyles = makeStyles({
    user: {
        // width: "calc(100% - 250px)"
    },
    root:{
        "& .MuiTableCell-head": {
            color: "white",
            backgroundColor: "#081f4A"
        }
    },
    tableContainer: {
        ['@media (max-width:450px)']:{
            maxWidth:'320px'
        }
    }
})
