import React, { FormEvent, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Alert, Stack, Tooltip, Typography, Checkbox } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Cookies from "universal-cookie";

import { useFormInputs } from "../hooks/form-hook";
import { useHttpRequest } from "../hooks/fetch-hook";
import { EMAIL_REGEX, PASSWORD_REGEX } from "../utils";
import { GoogleIcon } from "../assets";

const initialState = { email: "", password: "" };

const Login: React.FC = () => {
  const { inputs, bind } = useFormInputs(initialState);
  const { clearError, error, loading, sendRequest } = useHttpRequest()
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const classes = useStyles();

  //I Will rewrite this code (Taiwo Akindele).
  // const {from} = (location.state || {from:{pathname:"/"}}) as {from:{pathname:string}}
  const handleLogin = async(e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const { email, password } = inputs
    if(!email || !EMAIL_REGEX.test(email)) return alert('Invalid email address')
    if(!password || !PASSWORD_REGEX.test(password)) return alert('Invalid password')
    console.log(inputs)
  }

  return (
    <>
    {error && <Alert>{error.message}</Alert>}
    <div className={classes.container}>
      <Typography variant="body1" fontSize="40px" fontWeight={400} mt={8}>Sign In</Typography>

      <p className={classes.subtitle}>
        Already have a ZAPI account? Sign in to begin exploring our API options.
      </p>

      <form onSubmit={handleLogin} className={classes.form}>
        <div className={classes.input}>
          <label htmlFor="email">Email Address</label>
          <input type="email" name="email" {...bind} placeholder="Enter you Email" />
        </div>
        <div className={classes.input}>
          <label htmlFor="email">Password</label>
          <input type="password" name="password" {...bind} placeholder="Enter a Password" />
        </div>
        <button type="submit" className={classes.button} style={{background:"#4B4B4B",color:"#FFF"}}>
          Sign In
        </button>
      </form>
      
      <Typography>OR</Typography>
      <Stack direction="column" alignItems="center" spacing={2}>
        <button className={classes.button} onClick={() => {}} style={{background: "#FFF"}}>
          <span style={{marginRight: "3rem"}}>
            <GoogleIcon />
          </span>
          Signin with Google
        </button>
      </Stack>
      <Typography variant="body1" fontSize="16px">
        Dont't have an account?
        <Link to="/signup" className={classes.link}>Sign up</Link>
      </Typography>
    </div>
    </>
  );
};

const useStyles = makeStyles({
  container: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: "#FFF",
  },
  form: {
    width: "500px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "1rem",
    "@media screen and (max-width: 768px)": {
      width: "70%",
    }
  },
  input: {
    width: "440px",
    height: "72px",
    background: "",
    display: "flex",
    flexDirection: "column",
    padding: "",
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
      fontWeight: 600,
      fontSize: "14px",
      lineHeight: "16px",
      marginBottom: "0.5rem"
    },
    "@media screen and (max-width: 768px)": {
      width: "100%",
    }
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
    }
  },
  subtitle: {
    width: "468px",
    fontSize: "20px",
    fontWeight: 400,
    margin: "16px 0 28px",
    textAlign: "center",
    "@media screen and (max-width: 500px)": {
      width: "90%"
    }
  },
  link: {
    textDecoration: "underline",
    marginLeft: "0.5rem",
  }
})

export default Login;