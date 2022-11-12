import {
  Stack,
  Typography,
  Button,
  TextField,
  TextareaAutosize,
} from "@mui/material";
import { EditOutlined } from "@mui/icons-material";
import { SyntheticEvent, useEffect, useState } from "react";
import DevNavbar from "../DevNavbar";
import { useAppDispatch, useAppSelector, useHttpRequest } from "../../hooks";
import Cookies from "universal-cookie";
import { makeStyles } from "@mui/styles";
import { getUserProfile } from "../../redux/slices/userSlice";

const core_url = "VITE_CORE_URL";

const ProfileHeader = () => {
  const [edit, setEdit] = useState<boolean>(false);
  const { user } = useAppSelector((store) => store.user);
  const classes = useStyles();
  const [image, setImage] = useState<string | Blob | any>();
  const [previewURL, setPreviewURL] = useState<string | ArrayBuffer | null>(
    null
  );
  const { loading, error, sendRequest } = useHttpRequest();
  const dispatch = useAppDispatch();
  console.log(user);

  useEffect(() => {
    dispatch(getUserProfile());
  }, []);
  const handleChange = (e: any) => {
    setImage(e.target.files[0]);
    const fileReader = new FileReader();
    fileReader.onload = () => setPreviewURL(fileReader.result);
    fileReader.readAsDataURL(e.target.files[0]);
  };

  const handleCancel = (e: SyntheticEvent) => {
    e.preventDefault();
    setEdit(false);
    setPreviewURL(null);
  };

  const handleImageUpload = async (e: SyntheticEvent) => {
    e.preventDefault();
    const headers = { "Content-Type": "application/json" };
    const formData = new FormData();
    formData.append("image", image);
    try {
      const data = await sendRequest(
        `/profile/profile-image/${user.profileId}`,
        "post",
        core_url,
        formData,
        headers
      );
      console.log("data", data);
    } catch (error) {}
  };

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
                    onClick={handleImageUpload}
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
                  <img src={user.picture ? user.picture : null} alt="" />
                  <input type="file" onChange={(e) => handleChange(e)} />
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
                onClick={handleCancel}
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
              }}>
              <img src={user.picture} alt="" />
            </Stack>
            <Stack spacing={1} sx={{ width: "70%" }}>
              <Typography>
                {user.fullName ? user.fullName : "fullName"}
              </Typography>
              <Stack direction="row" spacing={2}>
                <Typography>
                  {user.position ? user.position : "position"}
                </Typography>
                <Typography>
                  @{user.organization ? user.organization : "organization"}
                </Typography>
              </Stack>
              <Typography>{user.country ? user.country : "country"}</Typography>
              <Typography>{user.bio ? user.bio : "Bio"}</Typography>
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
    "& img": {
      width: "100%",
      height: "100%",
      objectFit: "cover",
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
