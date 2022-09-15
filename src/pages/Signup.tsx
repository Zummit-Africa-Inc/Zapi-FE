import React, { FormEvent, useEffect, useState } from "react";
import { Stack, Typography, } from "@mui/material";
import { makeStyles } from '@mui/styles';
import { toast }  from "react-toastify";

import { EMAIL_REGEX, PASSWORD_REGEX, MATCH_CHECKER }from "../utils"
import { useContextProvider } from "../contexts/ContextProvider"
import { useFormInputs, useHttpRequest } from "../hooks";
import { Fallback } from "../components";
import { HomeNavbar } from '../sections';
import { GoogleIcon } from "../assets";

const initialState = { fullName: "", email: "", password: "", confirm_password: "", terms: false };
const url = import.meta.env.VITE_IDENTITY_URL;

const Signup:React.FC = () => {
  const classes = useStyles();
  const { inputs, bind, toggle } = useFormInputs(initialState);
  const { fullName, email, password, confirm_password, terms } = inputs;
  const { clearError, error, loading, sendRequest } = useHttpRequest();
  const { handleClicked } = useContextProvider();
  const [message, setMessage] = useState<string>("")

  const handleSubmit = async(e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if(!fullName || !email || !password || !confirm_password) return toast.error('Please fill all fields')
    if(!EMAIL_REGEX.test(email)) return toast.error('Email is invalid')
    if(!PASSWORD_REGEX.test(password)) return toast.error('Password is not strong enough')
    if(!MATCH_CHECKER(password, confirm_password)) return toast.error('Passwords do not match')
    if(!terms) return toast.error('Please read and accept the T&Cs before you can proceed')
    const headers = { 'Content-Type': 'application/json' }
    const payload = { fullName, email, password }
    try {
      const data = await sendRequest(`${url}/zapi-identity/auth/signup`, 'POST', JSON.stringify(payload), headers)
      setMessage(data?.data)
    } catch (error) {};
  };

  useEffect(() => {
    {error && toast.error(`${error}`)}
  },[error])

  useEffect(() => {
    {message && toast.success(`${message}`)}
  },[message])
  
  return (
    <>
    {loading && <Fallback />}
    <HomeNavbar />
    <div className={classes.container}>
      <div className={classes.main} onClick={(e) => e.stopPropagation()}>
        <Typography variant="body1" fontSize="40px" fontWeight={400}>
          Create a Free Account
        </Typography>

        <p className={classes.subtitle}>
          Complete this form to register on ZAPI and start exploring our API options 
        </p>

        <form onSubmit={handleSubmit} className={classes.form}>
          <div className={classes.input}>
            <label htmlFor="fullName">Full Name</label>
            <input type="text" name="fullName" {...bind} placeholder="Enter your full name" />
          </div>
          <div className={classes.input}>
            <label htmlFor="email">Email Address</label>
            <input type="email" name="email" {...bind} placeholder="Enter your email" />
          </div>
          <div className={classes.input}>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" {...bind} placeholder="Enter a Password" />
          </div>
          <div className={classes.input}>
            <label htmlFor="confirm_password">Confirm Password</label>
            <input type="password" name="confirm_password" {...bind} placeholder="Re-enter the Password" />
          </div>
          <div className={classes.check_input}>
            <input type="checkbox" name="terms" {...toggle} />
            <label htmlFor="terms">I agree to ZAPI’s terms and conditions and privacy policy.</label>
          </div>
          <button type="submit" className={classes.button} style={{background:"#4B4B4B",color:"#FFF"}} disabled={loading}>
            {loading ? 'loading' : 'Signup'}
          </button>
        </form>
        
        <Typography>OR</Typography>
        <Stack direction="column" alignItems="center" spacing={2}>
          <button type="button" className={classes.button} onClick={() => {}} style={{background: "#FFF"}}>
            <span style={{marginRight: "3rem"}}>
              <GoogleIcon />
            </span>
            Signin with Google
          </button>
        </Stack>
        <Typography variant="body1" fontSize="16px" alignSelf="flex-start">
          Already have an account?
          <span className={classes.link} onClick={() => handleClicked("login")}>
            Sign in
          </span>
        </Typography>
      </div>
    </div>
    </>
  )
}

const useStyles = makeStyles({
  container: {
    width: "100%",
    height: "100%",
    display: "grid",
    placeItems: "center",
    background: "#FFF",
  },
  main: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "10rem",
  },
  form: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "1rem",
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
  check_input: {
    width: "90%",
    display: "flex",
    alignItems: "flex-start",
    "& input": {
      width: "16px",
      height: "16px",
      flex: "none",
      order: 0,
      flexGrow: 0,
      margin: "0.25rem 1rem 0 0",
      cursor: "pointer",
    },
    "& label": {
      fontWeight: 400,
      fontSize: "16px",
      color: "#000",
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
    margin: "1rem 0 2rem",
    padding: "0 1rem",
    "@media screen and (max-width: 768px)": {
      width: "100%",
    }
  },
  subtitle: {
    maxWidth: "468px",
    fontSize: "20px",
    fontWeight: 400,
    margin: "12px 0 24px",
    textAlign: "center",
    "@media screen and (max-width: 500px)": {
      width: "90%"
    }
  },
  link: {
    textDecoration: "underline",
    marginLeft: "0.5rem",
    cursor: "pointer",
  }
})

export default Signup