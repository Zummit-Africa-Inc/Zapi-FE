import { Stack, Typography } from "@mui/material";
import React from "react";

const Discussion = () => {
  return (
    <Stack sx={{ height: "100%" }}>
      <Typography
        variant="h4"
        sx={{ borderBottom: "1px solid #000000", width: "100%" }}>
        Discussions
      </Typography>
      <Stack>
        <Typography
          variant="body1"
          sx={{ color: "#000", textAlign: "center", margin: "2rem 0" }}>
          This user has posted no discussions yet
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Discussion;
