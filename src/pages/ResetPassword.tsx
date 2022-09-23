import React, { useState, FormEvent, useEffect} from 'react';
import { makeStyles } from "@mui/styles";

import ZapiHomeLogo from "../assets/images/ZapiHomeLogo.png"
import { Typography } from "@mui/material";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

import { PASSWORD_REGEX, MATCH_CHECKER }from "../utils"
import { toast }  from "react-toastify";


const identity_url = import.meta.env.VITE_IDENTITY_URL;


const ResetPassword: React.FC = () => {
  const navigate = useNavigate();

    const classes = useStyles();
    const [password, setPassword] = useState<string>("");
    const [passwordConfirm, setPasswordConfirm] = useState<string>("");
    const param = useParams();


    const handleSubmit = async(e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if( !password || !passwordConfirm) return toast.error('Please fill all fields')
      if(!PASSWORD_REGEX.test(password)) return toast.error('Password is not strong enough')
      if(!MATCH_CHECKER(password, passwordConfirm)) return toast.error('Passwords do not match')
      const userData = { password: password }
    try{
      const url = `${identity_url}/auth/reset`;
      const res = await axios.post(url, userData);
      toast.success(res.data.message);
      setTimeout(() => {
        navigate("/");  
      }, 5000);

    } catch (error: any){
      if (error.request.status === 400) {
        return toast.error(error.response.data.message);
      } else {
        return toast.error(error.message)
      }
    }

    }

  return (
    <>
     <div className={classes.container}>
     <img src={ZapiHomeLogo} alt="zapi" className={classes.logo} />
     <section className={classes.sectionOne}>
     <Typography variant='h4' className={classes.title} gutterBottom>Reset Password</Typography>

        <form  className={classes.form} onSubmit={handleSubmit}>
            <div className={classes.input}>
                <label htmlFor="password">Enter New Password</label>
                <input type="password" name="password" value={password} required onChange={(e)=>setPassword(e.target.value)} placeholder="Enter a Password" />
            </div>
            <div className={classes.input}>
                <label htmlFor="confirm_password">Confirm New Password</label>
                <input type="password" name="confirm_password" value={passwordConfirm} required onChange={(e)=>setPasswordConfirm(e.target.value)}  placeholder="Re-enter the Password" />
            </div>
            
            <button type="submit" className={classes.button} style={{background:"#4B4B4B",color:"#FFF"}} >
                PROCEED
            </button>
        </form>
    </section>
     </div></>
  )
}

export default ResetPassword;

const useStyles = makeStyles({
    container: {
      background: '#f5f5f5',
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
        width: '70px',
        height: '70px',
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
    form: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1rem",
        "@media screen and (max-width: 768px)": {
          width: "80%",
        }
      },
      title: {
        fontWeight: 500,
        fontSize: '1rem',
        color: '#081F4A'
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
        margin: "1rem 0 2rem",
        padding: "0 1rem",
        "@media screen and (max-width: 768px)": {
          width: "100%",
        }
      },
});