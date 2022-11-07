import {
    TextField,
    Typography,
    InputLabel,
    MenuItem,
    FormControl,
    Select,
    SelectChangeEvent,
    Link,
    Box,
    Stack
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { FormEvent, SyntheticEvent, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector, useHttpRequest, useFormInputs } from "../hooks";
import ZapiHomeLogo from "../assets/images/ZapiHomeLogo.png";
import Cookies from "universal-cookie";
import { toast } from "react-toastify";

import { Add } from "@mui/icons-material";
import { useContextProvider } from "../contexts/ContextProvider";
import { Fallback } from ".";
import { DiscussionType } from "../types";
import { addChildrenDiscussion, getApisChildrenDiscussion } from "../redux/slices/apiSlice";

const core_url = import.meta.env.VITE_CORE_URL

const initialState = {
    body: "",
};
const AddChildrenDiscussion: React.FC = () => {
    const { loading, error, sendRequest, clearError } = useHttpRequest();
    const classes = useStyles()
    const cookies = new Cookies();
    const profile_id = cookies.get("profileId");
    const [isAdding, setIsAdding] = useState<boolean>(false);
    const { inputs, bind } = useFormInputs(initialState);
    const { body } = inputs;
    const { handleUnclicked } = useContextProvider();
    const [tab, setTab] = useState<number>(0)
    const { handleClicked } = useContextProvider();
    const { triggerRefresh } = useContextProvider();
    const dispatch = useAppDispatch();


    const toggleAdding = () => {
        setIsAdding((prev) => !prev);
    };
    
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!body)
            return toast.error("Please fill all fields");
        const discussion_id = "5e6d7b74-c208-4026-9601-857b10ca3ecc";
        const payload = { body, profile_id, discussion_id };
        const headers = { "Content-Type": "application/json" };
        try {
            const data = await sendRequest(
                `/discussion/${discussion_id}/${profile_id}`,
                "post",
                core_url,
                payload,
                headers
            );
            console.log(data);
            if (!data || data === null) return;
            dispatch(addChildrenDiscussion(payload));
            triggerRefresh();
            const { message } = data;
            toast.success(`${message}`);
        } catch (err) {
            console.log(err);
        }
        // dispatch(getApisDiscussion(id));
        handleUnclicked();
    };


    return (
        <>
        {loading && <Fallback />}
        <div
          className={classes.container}
          onClick={() => handleUnclicked("addDiscussion")}>
          <div className={classes.main} onClick={(e) => e.stopPropagation()}>
            <Typography
              variant="body1"
              fontSize="24px"
              lineHeight="30px"
              fontWeight={700}
              mb={3}>
              Add New Discussion
            </Typography>
            <form className={classes.form} onSubmit={handleSubmit}>
              <div className={classes.input}>
                <label>Discussion</label>
                <input
                  type="text"
                  name="body"
                  {...bind}
                  placeholder="Add Discussion"
                />
              </div>
              <div
                style={{
                  gap: "1rem",
                  display: "flex",
                  flexDirection: "row",
                  marginLeft: "auto",
                }}>
                <button onClick={toggleAdding} type="submit" className={classes.addBtn}>
                  Post Discussion
                </button>
                <button
                  type="button"
                  className={classes.cancelBtn}
                  onClick={() => handleUnclicked("addDiscussion")}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </>
    )
}

export default AddChildrenDiscussion;


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
    button: {
      width: "440px",
      height: "52px",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "4px",
      fontSize: "16px",
      fontWeight: 400,
      lineHeight: "16px",
      cursor: "pointer",
      margin: "2rem 0",
      padding: "0 1rem",
      "@media screen and (max-width: 768px)": {
        width: "100%",
      },
    },
    link: {
      textDecoration: "underline",
      marginLeft: "0.5rem",
    },
    divider: {
      width: "100%",
      height: "1px",
      background: "Grey",
      marginTop: "10px",
      marginBottom: "20px",
    },
    cancelBtn: {
      outline: "none",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      padding: "8px 16px",
      gap: "16px",
      fontFamily: "inherit",
      height: "46px",
      cursor: "pointer",
      background: "red",
      color: "white",
      border: "none",
      borderRadius: "4px",
    },
    addBtn: {
      outline: "none",
      border: "none",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      padding: "8px 14px",
      gap: "16px",
      height: "46px",
      background: "#081F4A",
      fontFamily: "inherit",
      color: "white",
      borderRadius: "4px",
      textAlign: "center",
      margin: "0 auto",
      cursor: "pointer",
    },
  });
