import { TextField, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector, useHttpRequest } from "../hooks";
import { getFreeApis } from "../redux/slices/freeApiSlice";
import { FREEUSEAPIDATA } from "../testdata";
import { toast } from "react-toastify";
import { Spinner } from "../assets";

// const core_url = import.meta.env.VITE_CORE_URL
const core_url = "VITE_CORE_URL";
const X_ZAPI_FREE_TOKEN = import.meta.env.VITE_FREE_REQUEST_TOKEN;

const Hero: React.FC = () => {
  const classes = useStyles();
  const [apiId, setApiId] = useState<string>("");
  const [query, setQuery] = useState<string>("");
  const [data, setData] = useState("");
  const dispatch = useAppDispatch();
  const { freeApis } = useAppSelector((store) => store.freeApis);
  const [apiName, setApiName] = useState<string>("");
  const { loading, sendRequest } = useHttpRequest();

  useEffect(() => {
    const api = freeApis.find((api) => api.id === apiId);
    if (!api) return;
    setApiName(api.name);
  }, [apiId]);

  const pathName = apiName.replace(/ /g, "").toLowerCase();

  const nameOfApi = FREEUSEAPIDATA.find((api) => api.name == pathName);

  useEffect(() => {
    if (nameOfApi) {
      setQuery(JSON.stringify(nameOfApi.samplePayload, undefined, 4));
      setData("");
    }
  }, [nameOfApi]);

  useEffect(() => {
    dispatch(getFreeApis());
  }, []);

  const headers = {
    "X-ZAPI-FREE-TOKEN": X_ZAPI_FREE_TOKEN,
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await sendRequest(
        `/subscription/free-request/${apiId}`,
        "post",
        core_url,
        JSON.parse(query),
        headers
      );
      setData(res.data);
    } catch (error) {
      if (query === null || !query) {
        toast.error("Select an API before you make a request");
      } else {
        toast.error("Request unsuccessful");
      }
    }
  };
  return (
    <div className={classes.hero}>
      <div className={classes.heroText}>
        <Typography
          gutterBottom
          variant="h1"
          sx={{
            fontFamily: "Space Grotesk",
            fontWeight: 700,
            fontSize: "2.25rem",
            lineHeight: "2.87rem",
            paddingBottom: "1.5rem",
            color: "#071B85",
            "@media screen and (max-width:400px)": {
              marginTop: "7rem",
            },
          }}>
          The Artificial Intelligence (AI) API Marketplace
        </Typography>
        <Typography
          gutterBottom
          variant="h2"
          sx={{
            padding: "0 4rem",
            fontFamily: "Space Grotesk",
            fontWeight: 400,
            fontSize: "1.5rem",
            lineHeight: "2.5rem",
            paddingBottom: "2rem",
            color: "#071B85",
            "@media screen and (max-width:600px)": {
              padding: "0rem",
              fontSize: ".9rem",
            },
          }}>
          Z-API allows you to harness the power of AI on your applications
          without stress. Use powerful AI APIs developed by genius machine
          learning engineers
        </Typography>
      </div>
      <form className={classes.form} onSubmit={handleSubmit}>
        <select
          className={classes.select}
          value={apiId}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
            setApiId(e.target.value);
          }}>
          <option value="">Select an API</option>
          {freeApis?.map((api) => (
            <option key={api.id} value={api.id}>
              {api.name}
            </option>
          ))}
        </select>
        <TextField
          type="text"
          className={classes.input}
          value={"https://zapi.com/" + pathName}
          placeholder="drowsinessdetection"
        />
        <button className={classes.send}>
          {loading ? <Spinner /> : "Send"}
        </button>
      </form>
      <div className={classes.actionBoxes}>
        <TextField
          className={classes.box}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          fullWidth
          multiline
          rows="8.5"
        />
        <TextField
          className={classes.box}
          defaultValue={data}
          fullWidth
          multiline
          rows="8.5"
        />
      </div>
    </div>
  );
};

export default Hero;

const useStyles = makeStyles({
  hero: {
    width: "100%",
    paddingTop: "10rem",
    background: "#FFFFFF",
    paddingRight: "5rem",
    paddingLeft: "5rem",
    "@media screen and (max-width: 400px)": {
      width: "80%",
      padding: "1rem .5rem",
      margin: "auto",
    },
  },
  heroText: {
    textAlign: "center",
    paddingTop: "2rem",
    "@media screen and (max-width: 950px)": {
      "& br": {
        display: "none",
      },
    },
  },
  form: {
    display: "flex",
    width: "100%",
    gap: ".5rem",
    "@media screen and (max-width: 700px)": {
      flexDirection: "column",
    },
  },
  select: {
    border: "none",
    outline: "none",
    padding: "1rem",
    borderRadius: "5px 0px 0px 5px",
    background: "rgba(100, 50, 159, 0.1)",
    cursor: "pointer",
    color: "#071B85",
    fontWeight: 500,
    fontSize: "1rem",
    fontFamily: "Space Grotesk",
  },
  input: {
    background: "rgba(19, 50, 159, 0.05)",
    borderRadius: "4px",
    flex: 1,
    border: "none",
    outline: "none",
    padding: "1rem",
    fontFamily: "Space Grotesk",
    color: "#071B85",
    "&::placeholder": {
      fontWeight: 400,
      fontSize: "1rem",
      lineHeight: "1.25rem",
      fontFamily: "Space Grotesk",
      color: "#071B85",
    },
  },
  send: {
    height: "100%",
    background: "#081F4A",
    borderRadius: "4px",
    padding: "1.12rem 2rem",
    border: "none",
    fontWeight: 500,
    fontSize: "1rem",
    cursor: "pointer",
    fontFamily: "Space Grotesk",
    color: "#FFEA00",
  },
  box: {
    background: "#FFFFFF",
    boxShadow: "0px 1px 15px rgba(6, 113, 224, 0.2)",
    borderRadius: "4px",
  },
  actionBoxes: {
    display: "flex",
    gap: "2rem",
    paddingTop: "2.5rem",
    "@media screen and (max-width: 700px)": {
      flexDirection: "column",
    },
  },
});
