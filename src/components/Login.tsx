import React, { FormEvent, useEffect } from "react";
import { Alert, Stack, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";
import { toast }  from "react-toastify";

import { useContextProvider } from "../contexts/ContextProvider";
import { useFormInputs, useHttpRequest } from "../hooks";
import { EMAIL_REGEX, PASSWORD_REGEX } from "../utils";
import { login } from "../redux/slices/userSlice";
import { Fallback } from "../components";
import { GoogleIcon } from "../assets";


const initialState = {email: "",password: ""};
const url = import.meta.env.VITE_IDENTITY_URL;

const Login: React.FC = () => {
  const { deviceInfo, deviceLocation, deviceIP, handleUnclicked } = useContextProvider();
  const { clearError, error, loading, sendRequest } = useHttpRequest();
  const { inputs, bind } = useFormInputs(initialState);
  const dispatch = useDispatch();
  const classes = useStyles();
  const cookies = new Cookies();

  //I Will rewrite this code (Taiwo Akindele).
  // const {from} = (location.state || {from:{pathname:"/"}}) as {from:{pathname:string}}
  const handleLogin = async(e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { email, password } = inputs;
    if(!email || !EMAIL_REGEX.test(email)) return alert('Invalid email address');
    if(!password || !PASSWORD_REGEX.test(password)) return toast.error('Invalid password');
    const payload = { email, password, userInfo: {
        login_time: deviceLocation.time,
        country: { lat: deviceLocation.lat, lon: deviceLocation.lon },
        deviceIP,
        browser_name: deviceInfo.browserName,
        os_name: deviceInfo.osName,
      }
    };
    console.log(payload)
    try {
      const data = await sendRequest(`${url}/auth/signin`, 'POST', JSON.stringify(payload));
      if(!data || data === undefined) return;
      const { data: {access, email, fullName, profileId, refresh, userId}} = data;
      const user = { email, fullName };
      dispatch(login(user));
      cookies.set('accessToken', access);
      cookies.set('refreshToken', refresh);
      cookies.set('profileId', profileId);
      cookies.set('userId', userId);
      return () => handleUnclicked('login')
    } catch (error) {};
  };

  return (
    <>
    {error && <Alert onClose={clearError}>{error.message}</Alert>}
    {loading && <Fallback />}
    <div className={classes.container} onClick={() => handleUnclicked('login')}>
      <div className={classes.main} onClick={(e) => e.stopPropagation()}>
        <Typography variant="body1" fontSize="40px" fontWeight={400}>Sign In</Typography>

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
            {loading ? 'loading' : 'Sign In'}
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
        <Typography variant="body1" fontSize="16px">
          Dont't have an account?
          <Link to="/signup" className={classes.link} onClick={() => handleUnclicked('login')}>
            Sign up
          </Link>
        </Typography>
      </div>
    </div>
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
    top: 0,
    left: 0,
    background: "rgba(225, 225, 225, 0.3)",
    backdropFilter: "blur(2px)",
    zIndex: 50,
  },
  main: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: "#FFF",
    padding: "1rem 2rem",
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
    margin: "12px 0 24px",
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