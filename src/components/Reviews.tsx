import React, { useCallback, useState } from "react";
import { Box, Stack, Typography} from "@mui/material";
import { makeStyles } from "@mui/styles";

import { ReviewType } from "../types";

interface Props {
    reviews: Array<ReviewType>
}

const Reviews:React.FC<Props> = ({reviews}) => {
    const classes = useStyles();

    return (
        <Box className={classes.container}>
            <Typography sx={{fontSize:"21px",fontWeight:500,color:"#081F4A"}}>Reviews</Typography>
        </Box>
    )
};

const useStyles = makeStyles({
    container: {
        width: "100%",
        padding: "1rem 2rem 0",
    }
});

export default Reviews