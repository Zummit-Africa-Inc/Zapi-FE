import React from "react";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import FeedbackOutlinedIcon from '@mui/icons-material/FeedbackOutlined';

const Feedback = ({handleOpen} : any) => {
    return (
    <Box sx={feedback}>
      <Button onClick={handleOpen}>
        <FeedbackOutlinedIcon fontSize="large" sx={{fontSize: "4em", background: "white", borderRadius: "30%"}}/>
      </Button>
    </Box>
    )
}

export default Feedback;

const feedback = {
    position: "fixed",
    bottom: "1%",
    right: "-1%",
    "@media screen and (max-width: 400px)": {
      position: "fixed",
      bottom: "1%",
      right: "1%",
    },
  }