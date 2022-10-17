import { makeStyles } from "@mui/styles";
import { TableBody, TableHead, TableCell, TableRow, Typography, Table, Button } from '@mui/material';
import { useAppSelector } from '../hooks'
import { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';
import { Link } from "react-router-dom";
import { MdContentCopy } from "react-icons/md";

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

const Subscription: React.FC = () => {
    const { subscribedApis } = useAppSelector(store => store.user)
    const classes = useStyles();
    return (
        <div>
            {subscribedApis.length !== 0 ?
                <div className={classes.subTable}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>Name</StyledTableCell>
                                <StyledTableCell>Token</StyledTableCell>
                                <StyledTableCell></StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {subscribedApis?.map((api, index) => (
                                <StyledTableRow key={index}>
                                    <StyledTableCell>
                                        {api.name}
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        {api.token.slice(0, 25) +  "..."} <Button onClick={() => navigator.clipboard.writeText(api.token)}><MdContentCopy /></Button>
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        <Link to="#" className={classes.Link}>View</Link>
                                    </StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
                :
                <div className={classes.addApiDesc}>
                    <Typography gutterBottom variant="subtitle1" sx=
                        {{
                            color: "#000000", fontFamily: "Space Grotesk", fontWeight: 700, fontSize: "18px",
                            lineHeight: "30px", textAlign: "center", marginTop: "116px"
                        }}>
                        You have not subscribed to any API Project
                    </Typography>
                    <Typography gutterBottom variant="subtitle1" sx={{
                        color: "#000000", fontFamily: "Space Grotesk", fontStyle: "normal", fontWeight: 400,
                        fontSize: "16px", lineHeight: "30px", textAlign: "center", marginTop: "16px"
                    }}>Visit the Hub to subscribe to an API
                    </Typography>
                </div>}
        </div>
    )
}

export default Subscription

const useStyles = makeStyles({
    subTable: {
       margin: "2rem 0",
       padding: "0 112px"
    },
    Link: {
        padding: "10px",
        borderRadius: "5px",
        background: "#058A04",
        color: "#fff",
        pointer: "cursor"
    },
    addApiDesc: {
        marginTop: "20px",
        paddingBottom: "80px",
        height: "calc(100vh - 315px)"
    },
})