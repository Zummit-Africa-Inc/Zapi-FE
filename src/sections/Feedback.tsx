import React from "react";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import FeedbackOutlinedIcon from '@mui/icons-material/FeedbackOutlined';

const Feedback = ({handleOpen} : any) => {
    return (    
        <FeedbackOutlinedIcon onClick={handleOpen} fontSize="small" sx={{ fontSize: 25, background: "white", borderRadius: "50%", color: "#081F4A" }} />
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