import React, { useState, SyntheticEvent } from "react";
import { makeStyles } from "@mui/styles";
import { Typography, Box, Button } from "@mui/material";
import { Peach } from "../assets";
import { useHttpRequest } from "../hooks";
import { toast } from "react-toastify";
import { Spinner } from "../assets";
import { EMAIL_REGEX } from "../utils";

const core_url = "VITE_CORE_URL";

const ContactUs: React.FC = () => {
  const classes = useStyles();
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [body, setBody] = useState<string>("");
  const [load, setLoad] = useState(false);
  const { error, loading, sendRequest } = useHttpRequest();
  const isValid = name && email && body;

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    if (!EMAIL_REGEX.test(email))
      return toast.error("Please input a valid email");
    setLoad(true);
    const payload = { name, email, body };
    const headers = { "Content-Type": "application/json" };
    try {
      const data = await sendRequest(
        "/feedback/create",
        "post",
        core_url,
        payload,
        headers
      );
      if (!data) return;
      const { message } = data;
      setLoad(false);
      toast.success(`${message}`);
      setName("");
      setEmail("");
      setBody("");
    } catch (error) {
      setLoad(false);
      toast.error("Could not create your feedback");
    }
  };
  return (
    <>
      <Box className={classes.root}>
        <Box className={classes.contactContainer}>
          <Box className={classes.formContainer}>
            <Typography variant="h3">Message Us</Typography>
            <form className={classes.contactForm}>
              <input
                type="text"
                id="standard-basic"
                value={name}
                placeholder="Your Name"
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="email"
                id="standard-basic"
                value={email}
                placeholder="Enter Your Email..."
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <textarea
                value={body}
                cols={30}
                rows={10}
                placeholder="Write Message Here..."
                onChange={(e) => setBody(e.target.value)}
                required
              />
              <Button
                sx={{
                  background: "#EDF5FD",
                  color: "black",
                }}
                disableElevation
                disableFocusRipple
                disabled={!isValid}
                onClick={handleSubmit}>
                {load ? <Spinner /> : "Submit"}
              </Button>
            </form>
          </Box>

          <Box className={classes.image}>
            <img src={Peach} width={450} />
          </Box>
        </Box>
      </Box>
    </>
  );
};

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "#fff",
    background: "#EDF5FD",
    "@media screen and (max-width: 700px)": {
      gridTemplateColumns: "1fr",
      gap: "1rem",
      height: "100%",
      width: "auto",
    },
  },
  contactContainer: {
    maxWidth: "960px",
    margin: "auto",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "1.5rem",
    background: "#363953",
    borderRadius: "0.5rem",
    overflow: "hidden",
    "@media screen and (max-width: 964px)": {
      margin: "0 auto",
      width: "90%",
    },
    "@media screen and (max-width: 700px)": {
      gridTemplateColumns: "1fr",
      gap: "1rem",
      marginTop: "20rem !important%",
    },
  },
  formContainer: {
    padding: "20px",
    "& h3": {
      fontSize: "1.2rem",
      fontWeight: "600",
      marginBottom: "1rem",
    },
  },
  contactForm: {
    display: "grid",
    rowGap: "1rem",
    "& input": {
      width: "100%",
      border: "none",
      outline: "none",
      background: "#2c2f48",
      padding: "10px",
      fontSize: "0.9rem",
      color: "#fff",
      borderRadius: "0.4rem",
    },
    "& textarea": {
      resize: "none",
      height: "200px",
      width: "100%",
      border: "none",
      outline: "none",
      background: "#2c2f48",
      padding: "10px",
      fontSize: "0.9rem",
      color: "#fff",
      borderRadius: "0.4rem",
    },
    "@media screen and (max-width: 964px)": {
      width: "130%",
    },
    "@media screen and (max-width: 700px)": {
      width: "max-content",
    },
  },
  image: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItem: "center",
    justifyContent: "center",
    padding: "1rem",
  },
});

export default ContactUs;
