import React, { useCallback, useState } from "react";
import { Card, Box, Stack, Typography} from "@mui/material";
import { makeStyles } from "@mui/styles";

import { ReviewType } from "../types";

interface Props {
    reviews: Array<ReviewType>
}

const Reviews:React.FC<Props> = ({reviews}) => {
    const classes = useStyles();

    return (
        <Box className={classes.container}>
            <Box className={classes.wrapper}>
                <Typography sx={{fontSize:"21px",fontWeight:500,color:"#081F4A"}}>Reviews</Typography>
            </Box>
            <Box className={classes.list}>
                {reviews.length !== 0 ? 
                (<>
                <Typography sx={{fontSize:"21px",color:"#081F4A"}}>Reviews go here.</Typography>
                </>):(
                    <Box>
                        <Typography sx={{fontSize:"21px",color:"#081F4A"}}>No reviews on the API yet.</Typography>
                    </Box>
                )}
            </Box>
        </Box>
    )
};

const useStyles = makeStyles({
    container: {
        width: "100%",
        padding: "1rem 2rem 0",
    },
    wrapper: {
        width: "100%",
        padding: "0 2rem",
    },
    list: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
    },
    card: {},
});

export default Reviews