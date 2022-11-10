import {
  Stack,
  Typography,
  Button,
  TextField,
  TextareaAutosize,
} from "@mui/material";
import { EditOutlined } from "@mui/icons-material";
import { useState } from "react";

const ProfileHeader = () => {
  const [edit, setEdit] = useState<boolean>(false);
  return (
    <Stack sx={{ height: "50vh" }}>
      <Stack direction="row" spacing={3}>
        {edit ? (
          <>
            <Stack
              sx={{
                height: "200px",
                width: "200px",
                background: "#F0F0F0",
              }}>
              <Button
                sx={{
                  background: "rgb(74, 149, 237)",
                  "&:hover": {
                    backgroundColor: "rgb(74, 149, 237)",
                  },
                }}
                startIcon={<EditOutlined />}>
                {" "}
                Edit
              </Button>
            </Stack>
            <Stack spacing={1} sx={{ width: "50%" }}>
              <TextField label="name" variant="outlined" />
              <Stack direction="row" spacing={2}>
                <TextField label="position" variant="outlined" />
                <TextField label="organization" variant="outlined" />
              </Stack>
              <TextField label="Country" variant="outlined" />
              <TextField label="Bio" variant="outlined" />
            </Stack>
            <Stack spacing={2}>
              <Button
                sx={{
                  background: "rgb(74, 149, 237)",
                  "&:hover": {
                    backgroundColor: "rgb(74, 149, 237)",
                  },
                }}>
                {" "}
                Save
              </Button>
              <Button
                onClick={() => setEdit(false)}
                sx={{
                  background: "#F0F0F0",
                  "&:hover": {
                    backgroundColor: "#F0F0F0",
                  },
                }}>
                {" "}
                Cancel
              </Button>
            </Stack>
          </>
        ) : (
          <>
            <Stack
              sx={{
                height: "200px",
                width: "200px",
                background: "#F0F0F0",
              }}></Stack>
            <Stack spacing={1}>
              <Typography>taiwoAkindele</Typography>
              <Stack direction="row" spacing={2}>
                <Typography>junior dev</Typography>
                <Typography>@ Zummit</Typography>
              </Stack>
              <Typography>Nigeria</Typography>
              <Typography>
                Budding Front End Developer. Currently learning JavaScript. I am
                open to suggestions on how to learn better.
              </Typography>
            </Stack>
            <Button
              onClick={() => setEdit(true)}
              sx={{
                background: "rgb(74, 149, 237)",
                "&:hover": {
                  backgroundColor: "rgb(74, 149, 237)",
                },
              }}
              startIcon={<EditOutlined />}>
              {" "}
              Edit
            </Button>
          </>
        )}
      </Stack>
    </Stack>
  );
};

export default ProfileHeader;
