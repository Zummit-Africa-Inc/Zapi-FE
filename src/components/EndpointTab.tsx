import { Button, IconButton, Paper, Typography } from "@mui/material"
import { EndpointTable, InputSearch } from "."
import { makeStyles } from "@mui/styles"


//styles
import { Add } from "@mui/icons-material"
import { Link } from "react-router-dom"


const EndpointTab: React.FC = () => {
    const classes = useStyles()
    return (
        <>
        <Paper elevation={1} className={classes.paper}>
            <div className={classes.container}>
                    {/* Api Definition */}
                    <div>
                        <Typography variant="body1" fontSize="20px" fontWeight={800}>API Definition</Typography>
                    </div>
                    <div className={classes.pageSubHeading}>
                        <Typography variant="subtitle2" width="650px" fontWeight={400}>When publishing an API to the ZapiAPI Hub, you can either manually edit endpoint definitions, use a specification file.</Typography>
                    </div>
                    {/* Endpoints */}
                    <Typography variant="body1" fontSize="24px" color="rgb(123, 123, 194)" fontWeight={500} mt={2}>Endpoints</Typography>
                    <Typography variant="body1" fontSize="16px" fontWeight={400} mb={1}>Changes made to the endpoints will be reflected in the Hub.</Typography>

                    <div className={classes.pageDescription}>
                        <Typography>Add and define your API endpoints.</Typography>
                    </div>
                    <div className={classes.pageActions}>
                        <div className={classes.searchContainer}>
                            <InputSearch className={classes.searchEndpoints} type="text" name="queryString" placeholder="Search Endpoints" />
                        </div>
                        <div className={classes.pageButtons}>
                                <Link to="/create-endpoint" className={classes.createButton}>
                                    <Add sx={{ fontSize: "1rem", color: "rgb(139, 246, 236)", backgroundColor: "#fff", borderRadius: "50%", border: "2px solid rgb(149, 236, 236)"}} />
                                    <Typography sx={{fontWeight: 600, marginLeft: ".5rem"}}>Create Endpoint</Typography>
                                </Link>
                            <div className="delete-button">
                                <Button disabled variant="contained" sx={{backgroundColor: "red", color: "#000"}}>Delete</Button>
                            </div>
                        </div>
                    </div><br/><br/>
                    
                    {/* EndpointTable */}
                    <EndpointTable />
            </div>
        </Paper>
           
        </>
    )
}

export default EndpointTab

const useStyles = makeStyles({
    paper: {
        width: "950px",
        marginTop: "20px"
    },
    container: {
        padding: "2rem 2rem",
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
        color: "grey",
        padding: ".2rem .4rem",
        border: "1px solid #ccc",
        borderRadius: "3px",
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