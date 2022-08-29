import React, { useState, FormEvent } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { Navbar } from "../components";
import { useFormInputs } from "../hooks/form-hook";
import { useHttpRequest } from '../hooks/fetch-hook'


import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

import OtpInput from "react-otp-input";





const Otp: React.FC = () => {
    const { loading, error, sendRequest, clearError } = useHttpRequest()
    const classes = useStyles();
    const [code, setCode] = useState("");

  const handleChange = (code: React.SetStateAction<string>) => setCode(code);

  return (
    <>

    
    <div className={classes.container}>
        <img src='/images/zapi-logo.png' alt="zapi" className={classes.logo} />
        <section className={classes.sectionOne}>
          <Typography variant='h5' className={classes.title} gutterBottom>We have sent a One Time Password to your email</Typography>
          <Typography variant='body1' className={classes.sub} gutterBottom>Please Enter OTP</Typography>

          <form className={classes.form}>
                <OtpInput
                value={code}
                onChange={handleChange}
                numInputs={6}
                separator={<span style={{ width: "8px" }}></span>}
                isInputNum={true}
                shouldAutoFocus={true}
                inputStyle={{
                border: "1px solid #081F4A",
                borderRadius: "8px",
                width: "54px",
                height: "54px",
                fontSize: "12px",
                color: "#000",
                fontWeight: "400",
                caretColor: "blue"
                }}
                focusStyle={{
                border: "1px solid #CFD3DB",
                outline: "none"
                }}
            />
                <button type="submit">Submit</button>
          </form>
          
        </section>
        
      </div>
    </>
  );
};

export default Otp;

const useStyles = makeStyles({
    container: {
      background: '#fff',
      display: 'flex',
      height: '100vh',
      width: '100vw',
      overflowX: 'hidden',
      '@media screen and (max-width: 1100px)': {
        flexDirection: 'column',
        alignItems: 'center',
        // justifyContent: 'center',
        gap: '2rem',
        // height: '100%',
      }
    },
    logo: {
      width: '100px',
      height: '100px',
      '@media screen and (max-width: 1000px)': {
        width: '50px',
        height: '50px',
      }
    },
    sectionOne: {
      width: '100vw',
      margin: '0 2rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontWeight: 500,
      fontSize: '1rem',
      color: '#081F4A',
      textAlign: 'center'
    },
    sub:{
        textAlign: 'center'
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '.5rem',
      '& input': {
        width: '30rem',
        height: '3.5rem',
        padding: '1rem 1rem',
        border: '1.5px solid #081F4A',
        borderRadius: '5px',
        '@media screen and (max-width: 450px)': {
          width: '20rem',
        }
      },
      '& button': {
        width: '20rem',
        height: '3rem',
        background: '#081F4A',
        borderRadius: '15px',
        color: '#FF5C00',
        fontWeight: 600,
        fontSize: '1rem',
        cursor: 'pointer',
        marginBottom: '2rem',
        '@media screen and (max-width: 450px)': {
          width: '100%',
        }
      }
    },
    
  })