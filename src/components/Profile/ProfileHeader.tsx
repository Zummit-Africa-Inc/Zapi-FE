import {
  Stack,
  Typography,
  Button,
  TextField,
  TextareaAutosize,
} from "@mui/material";
import { EditOutlined } from "@mui/icons-material";
import { useState } from "react";
import DevNavbar from "../DevNavbar";
import { useAppSelector, useHttpRequest } from "../../hooks";
import Cookies from "universal-cookie";
import { makeStyles } from "@mui/styles";

const core_url = "VITE_CORE_URL";

const ProfileHeader = () => {
  const [edit, setEdit] = useState<boolean>(false);
  const { user } = useAppSelector((store) => store.user);
  const classes = useStyles();
  const [image, setImage] = useState<File>();
  const [previewURL, setPreviewURL] = useState<string | ArrayBuffer | null>(
    null
  );
  const cookies = new Cookies();
  // const accessToken = cookies.get("accessToken");
  // console.log(accessToken);
  const { loading, error, sendRequest } = useHttpRequest();

  const handleChange = (e: any) => {
    setImage(e.target.files[0]);
    const fileReader = new FileReader();
    fileReader.onload = () => setPreviewURL(fileReader.result);
    fileReader.readAsDataURL(e.target.files[0]);
  };

  // const profile = async () => {
  //   const headers = { "Content-Type": "application/json" };
  //   try {
  //     const data = await sendRequest(
  //       `/profile/${user.profileId}`,
  //       "get",
  //       core_url,
  //       undefined,
  //       headers
  //     );
  //     console.log("data", data);
  //   } catch (error) {}
  // };

  // profile();
  return (
    <Stack sx={{ margin: "120px 40px 40px 40px", width: "100vw" }}>
      <DevNavbar />
      <Stack direction="row" spacing={3}>
        {edit ? (
          <>
            <Stack
              spacing={2}
              sx={{
                height: "250px",
                width: "200px",
                overflow: "hidden",
              }}>
              {previewURL ? (
                <Stack className={classes.preview}>
                  <img src={`${previewURL}`} alt="" />
                  <Button
                    sx={{
                      background: "rgb(74, 149, 237)",
                      "&:hover": {
                        backgroundColor: "rgb(74, 149, 237)",
                      },
                    }}>
                    Upload
                  </Button>
                </Stack>
              ) : (
                <Stack className={classes.image}>
                  <input type="file" onChange={(e) => handleChange(e)} />
                  {/* <Button>Edit</Button> */}
                </Stack>
              )}
            </Stack>
            <Stack spacing={1} sx={{ width: "70%" }}>
              <TextField
                sx={{ width: "200px" }}
                label="name"
                variant="outlined"
              />
              <Stack direction="row" spacing={2}>
                <TextField label="position" variant="outlined" />
                <TextField label="organization" variant="outlined" />
              </Stack>
              <TextField
                sx={{ width: "200px" }}
                label="Country"
                variant="outlined"
              />
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
            <Stack spacing={1} sx={{ width: "70%" }}>
              <Typography>{user.fullName}</Typography>
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

const useStyles = makeStyles({
  preview: {
    width: "100%",
    height: "100%",
    position: "relative",
    "& img": {
      width: "100%",
      height: "80%",
      objectFit: "cover",
    },
  },
  image: {
    width: "100%",
    height: "100%",
    position: "relative",
    background: "#F0F0F0",
    "& input": {
      width: "100%",
      height: "100%",
      display: "hidden",
      position: "absolute",
      top: -35,
      left: 0,
      cursor: "pointer",
    },
    "& button": {
      width: "2rem",
      height: "2rem",
      // display: "grid",
      placeItems: "center",
      // borderRadius: "50%",
      border: "none",
      position: "absolute",
      top: 5,
      left: 5,
      background: "rgb(74, 149, 237)",
      color: "#081F4A",
      fontSize: "0.75rem",
      cursor: "pointer",
      "&:hover": {
        backgroundColor: "rgb(74, 149, 237)",
      },
    },
  },
});
