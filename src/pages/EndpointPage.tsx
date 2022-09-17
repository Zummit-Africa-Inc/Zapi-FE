import { Button, IconButton, Typography } from "@mui/material"
import { DataTable, InputSearch, Navbar } from "../components"
import { makeStyles } from "@mui/styles"

//styles
import { Add } from "@mui/icons-material"
import { TABLEHEADING, TABLEROWS } from "../testdata"
import { Link } from "react-router-dom"


const EndpointPage: React.FC = () => {
    const classes = useStyles()
    return (
        <>
        <Navbar />
            <div className={classes.topSection}>
                <div className={classes.pageHeading}>
                    <Typography variant="h5">Endpoints</Typography>
                </div>
                <div className={classes.pageSubHeading}>
                    <Typography>Changes made to the endpoints will be reflected in the Hub.</Typography>
                </div>
                <div className={classes.pageDescription}>
                    <Typography>Add and define your API endpoints.</Typography>
                </div>
                <div className={classes.pageActions}>
                    <div className={classes.searchContainer}>
                        <InputSearch className={classes.searchEndpoints} type="text" name="queryString" placeholder="Search Endpoints" />
                    </div>
                    <div className={classes.pageButtons}>
                            <Link to="/add-endpoint" className={classes.createButton}>
                                <Add sx={{ fontSize: "1rem", color: "rgb(139, 246, 236)", backgroundColor: "#fff", borderRadius: "50%", border: "2px solid rgb(149, 236, 236)"}} />
                                <Typography sx={{fontWeight: 600, marginLeft: ".5rem"}}>Create Endpoint</Typography>
                            </Link>
                        <div className="delete-button">
                            <Button disabled variant="contained" sx={{backgroundColor: "red", color: "#000"}}>Delete</Button>
                        </div>
                    </div>
                </div>
            </div>
             {/* Table goes here */}
             <DataTable Heading={TABLEHEADING} Rows={TABLEROWS} />
        </>
    )
}

export default EndpointPage

const useStyles = makeStyles({
    topSection: {
        padding: "2rem 5rem",
        // marginTop: "300px"
    },
    pageHeading: {
        padding: "1rem 0",
        fontSize: "2rem",
        fontWeight: 500,
        color: "rgb(40, 65, 206)"
    },
    pageSubHeading: {
        paddingBottom: "1rem"
    },
    pageDescription: {
        paddingBottom: "1rem"
    },
    pageActions: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
    },
    searchContainer: {
        background: "#fff",
        padding: ".2rem 0",
        border: "1px solid #ccc",
        width: "300px",
        "&:hover": {
            border: "1px solid rgb(139, 236, 236)"
        }
    },
    searchEndpoints: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "& input": {
            border: "none",
            outline: "none",
            width: "300px",
            paddingLeft: "1rem",
            fontSize: ".8rem",
            fontFamily: "var(--body-font)",
        }
    },
    pageButtons: {
        display: "flex",
        alignItems: "center",
        gap: "1rem",
    },
    createButton: {
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        color: "#000"
    }
})



// import { makeStyles } from "@mui/styles"


// const EndpointPage: React.FC = () => {
//     const classes = useStyles()
//     return (
//         <div>
//             Endpoints lets go
//         </div>
//     )
// }

// export default EndpointPage

// const useStyles = makeStyles({
 
// })



