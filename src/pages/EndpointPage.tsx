import { Button, IconButton, Typography } from "@mui/material"
import { InputSearch } from "../components"
import { makeStyles } from "@mui/styles"

//styles
import { Add } from "@mui/icons-material"


const EndpointPage: React.FC = () => {
    const classes = useStyles()
    return (
        <>
            <div className="topSection">
                <div className="page-heading">
                    <Typography>Endpoints</Typography>
                </div>
                <div className="page-subHeading">
                    <Typography>Changes made to the endpoints will be reflected in the Hub.</Typography>
                </div>
                <div className="page-description">
                    <Typography>Add and define your API endpoints.</Typography>
                </div>
                <div className={classes.pageActions}>
                    <div className={classes.searchContainer}>
                        <InputSearch className={classes.searchEndpoints} type="text" name="queryString" placeholder="Search Endpoints" />
                    </div>
                    <div className={classes.pageButtons}>
                        <div className={classes.createButton}>
                            <IconButton sx={{pointerEvents: "none"}}>
                                <Add sx={{ fontSize: "1rem", color: "rgb(139, 246, 236)", backgroundColor: "#fff", borderRadius: "50%", border: "2px solid rgb(149, 236, 236)"}} />
                                <Typography sx={{fontWeight: 600, marginLeft: ".5rem"}}>Create Endpoint</Typography>
                            </IconButton>
                        </div>
                        <div className="delete-button">
                            <Button disabled variant="contained" sx={{backgroundColor: "red", color: "#000"}}>Delete</Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EndpointPage

const useStyles = makeStyles({
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
        gap: "1rem"
    },
    createButton: {
        cursor: "pointer",
    }
})