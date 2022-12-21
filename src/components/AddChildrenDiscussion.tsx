import React, { FormEvent, useState, useEffect } from "react";
import { Typography, Box, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Cookies from "universal-cookie";
import { toast } from "react-toastify";

import { useContextProvider } from "../contexts/ContextProvider";
import { useAppDispatch, useFormInputs, useHttpRequest } from "../hooks";
import { Fallback } from ".";
import { addChildrenDiscussion } from "../redux/slices/apiSlice";
import ReactGA from "react-ga4";
import { getUserApis } from "../redux/slices/userSlice";
import ChoiceButton from "./ChoiceButton";

const core_url = "VITE_CORE_URL";
const initialState = {
  title: "",
  discussion: "",
};

const AddChildrenDiscussion: React.FC = () => {
  const { loading, error, sendRequest, clearError } = useHttpRequest();
  const { inputs, bind } = useFormInputs(initialState);
  const [isAdding, setIsAdding] = useState<boolean>(false);
  const { body } = inputs;
  const { handleUnclicked } = useContextProvider();
  const classes = useStyles();
  const cookies = new Cookies();
  const profile_id = cookies.get("profileId");
  const dispatch = useAppDispatch();

  ReactGA.send({ hitType: "pageview", page: "/api/id" });
  const toggleAdding = () => {
    setIsAdding((prev) => !prev);
  };

  const discussionId = JSON.parse(localStorage.getItem("discussion_id") || "");
  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const api_id = JSON.parse(localStorage.getItem("api_id") || "");

    if (!body) return toast.error("Please fill all fields");
    // const api_id = id;
    const headers = { "Content-Type": "application/json" };
    const payload = { body, profile_id, api_id };
    try {
      const data = await sendRequest(
        `/discussion/comment/${discussionId}/${profile_id}`,
        "post",
        core_url,
        payload,
        headers
      );
      console.log(data);
      if (!data || data === null) return;
      // dispatch(addChildrenDiscussion(payload));
      const { message } = data;
      toast.success(`${message}`);
    } catch (err) {
      console.log(err);
    }
    // dispatch(getApisDiscussion(id));
    handleUnclicked();
    dispatch(getUserApis(profile_id));
  };

  useEffect(() => {
    {
      error && toast.error(`${error}`);
    }
  }, [error]);

  return (
    <>
      {loading && <Fallback />}
      <Box
        className={classes.container}
        onClick={() => handleUnclicked("addDiscussion")}>
        <Box className={classes.main} onClick={(e) => e.stopPropagation()}>
          <Typography
            variant="body1"
            fontSize="24px"
            lineHeight="30px"
            fontWeight={700}
            mb={3}>
            Add New Discussion
          </Typography>
          <form className={classes.form}>
            <Box className={classes.input}>
              <label>Discussion</label>
              <input
                type="text"
                name="body"
                {...bind}
                placeholder="Add Discussion"
              />
            </Box>
            <Box
              style={{
                gap: "1rem",
                display: "flex",
                flexDirection: "row",
                marginLeft: "auto",
              }}>
              <ChoiceButton
                border="1px solid rgb(214, 217, 219)"
                acceptColor="#FFF"
                rejectColor="#FFF"
                onAccept={handleSubmit}
                onReject={() => handleUnclicked("addDiscussion")}
                radius="5px"
                acceptText="Post Discussion"
                rejectText="Cancel"
                acceptBackgroundColor="#26c340"
                rejectBackgroundColor="#e73e39"
                padding="15px 25px"
                outline="none"
                visible={true}
              />
            </Box>
          </form>
        </Box>
      </Box>
    </>
  );
};

const useStyles = makeStyles({
  container: {
    width: "100vw",
    height: "100vh",
    display: "grid",
    placeItems: "center",
    position: "fixed",
    overflow: "scroll",
    top: 0,
    left: 0,
    background: "rgba(225, 225, 225, 0.3)",
    backdropFilter: "blur(2px)",
    zIndex: 50,
  },
  main: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    background: "#FFF",
    borderRadius: "8px",
    padding: "40px 40px",
    marginTop: "110px",
    boxShadow: "2px 2px 7px 3px #CECECE",
  },
  form: {
    width: "500px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "1rem",
    "@media screen and (max-width: 768px)": {
      width: "70%",
    },
  },
  input: {
    width: "500px",
    height: "72px",
    background: "",
    display: "flex",
    flexDirection: "column",
    "& input": {
      width: "100%",
      height: "52px",
      borderRadius: "4px",
      border: "1px solid #999",
      outline: "none",
      padding: "12px 16px 8px 12px",
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: "24px",
    },
    "& label": {
      fontWeight: 500,
      fontSize: "16px",
      lineHeight: "16px",
      marginBottom: "3px",
    },
    "@media screen and (max-width: 768px)": {
      width: "100%",
    },
  },
  link: {
    textDecoration: "underline",
    marginLeft: "0.5rem",
  },
  Boxider: {
    width: "100%",
    height: "1px",
    background: "Grey",
    marginTop: "10px",
    marginBottom: "20px",
  },
});

export default AddChildrenDiscussion;
