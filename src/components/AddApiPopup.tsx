import React, { FormEvent, useEffect } from "react";
import { Typography, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, MenuItem } from "@mui/material";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { makeStyles } from "@mui/styles";
import Cookies from "universal-cookie";
import { toast } from "react-toastify";

import { useContextProvider } from "../contexts/ContextProvider";
import { useAppSelector, useFormInputs, useHttpRequest } from "../hooks";
import { Fallback } from "../components";

// const core_url = import.meta.env.VITE_CORE_URL
const core_url = "VITE_CORE_URL";

const initialState = {
  name: "",
  description: "",
  base_url: "",
  categoryId: "",
};

const AddApiPopup: React.FC = () => {
  const { loading, error, sendRequest, clearError } = useHttpRequest();
  const { inputs, bind, select } = useFormInputs(initialState);
  const { name, description, base_url, categoryId } = inputs;
  const { handleUnclicked } = useContextProvider();
  const classes = useStyles();
  const { apis } = useAppSelector((store) => store.apis);
  const cookies = new Cookies();
  const profileId = cookies.get("profileId");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name || !description || !base_url || !categoryId)
      return toast.error("Please fill all fields");
    const payload = { name, description, base_url, categoryId };
    const headers = { "Content-Type": "application/json" };
    try {
      const data = await sendRequest(
        `/api/new/${profileId}`,
        "post",
        core_url,
        payload,
        headers
      );
      if (!data || data === null) return;
      setTimeout(() => {
        window.location.reload();
      }, 1000);
      const { message } = data;
      toast.success(`${message}`);
    } catch (err) {
      console.log(err);
    }
    handleUnclicked();
  };

  useEffect(() => {
    {error && toast.error(`${error}`)}
  },[error])

  return (
    <>
      {loading && <Fallback />}
      <div
        className={classes.container}
        onClick={() => handleUnclicked("addapi")}>
        <div className={classes.main} onClick={(e) => e.stopPropagation()}>
          <Typography
            variant="body1"
            fontSize="24px"
            lineHeight="30px"
            fontWeight={700}
            mb={3}>
            Add API Project
          </Typography>
          <form className={classes.form} onSubmit={handleSubmit}>
            <div className={classes.input}>
              <label>Name</label>
              <input
                type="text"
                name="name"
                {...bind}
                placeholder="Add API Name"
              />
            </div>
            <div className={classes.input}>
              <label>Description</label>
              <input
                type="text"
                name="description"
                {...bind}
                placeholder="Add API Description"
              />
            </div>
            <div className={classes.input}>
              <label>Category</label>
              <FormControl className={classes.input}>
                <Select
                  name="categoryId"
                  value={categoryId}
                  displayEmpty
                  inputProps={{ "aria-label": "Category" }}
                  {...select}>
                  {apis.map((item) => (
                    <MenuItem key={item.id} value={item.id}>
                      {item.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
            <div className={classes.input}>
              <label>Base Url</label>
              <input
                type="text"
                name="base_url"
                {...bind}
                placeholder="Add Base Url"
              />
            </div>
            <div
              style={{
                gap: "40px",
                display: "flex",
                flexDirection: "row",
                marginLeft: "auto",
              }}>
              <button
                type="button"
                className={classes.cancelBtn}
                onClick={() => handleUnclicked("addapi")}>
                Cancel
              </button>
              <button type="submit" className={classes.addBtn}>
                Add API Project
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

const categories = [
  "Advertising",
  "Sports",
  "Data Analysis",
  "Artificial Intelligence",
  "Business",
  "Finances",
];

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
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: "8px 16px",
    gap: "16px",
    fontFamily: "inherit",
    height: "46px",
    cursor: "pointer",
    background: "offwhite",
    color: "#1D1D1D",
    border: "1px solid #1D1D1D",
    borderRadius: "8px",
  },
  addBtn: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: "8px 14px",
    gap: "16px",
    height: "46px",
    background: "#1D1D1D",
    fontFamily: "inherit",
    color: "white",
    borderRadius: "8px",
    textAlign: "center",
    margin: "0 auto",
    cursor: "pointer",
  },
});

export default AddApiPopup;
