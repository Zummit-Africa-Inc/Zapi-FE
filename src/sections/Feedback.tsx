import React from "react";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import MessageIcon from '@mui/icons-material/Message';

const Feedback = ({handleOpen} : any) => {
    return (
    <Box sx={feedback}>
      <Button onClick={handleOpen}>
        <Typography marginRight={0.5} fontWeight="600">Feedback</Typography>
        <MessageIcon fontSize="medium"/>
      </Button>
    </Box>
    )
}

export default Feedback;

const feedback = {
    position: "fixed",
    bottom: "1%",
    right: "1%",
    background: "yellow",
    "@media screen and (max-width: 400px)": {
      position: "fixed",
      bottom: "1%",
      right: "1%",
    },
  }