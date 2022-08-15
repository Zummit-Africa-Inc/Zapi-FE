import { makeStyles } from "@mui/styles";
import React, { FormEvent } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { Box, Button, Stack, Tooltip, Typography ,Checkbox} from "@mui/material";
import { useFormInputs } from "../hooks/form-hook";
import { PASSWORD_REGEX } from "../utils";
import { Margin } from "@mui/icons-material";


const initialState = {
  email: "",
  password: ""
}

const Login: React.FC = () => {
  const { inputs, bind } = useFormInputs(initialState)
  const { email, password } = inputs
  const navigate = useNavigate()
  const location = useLocation()

  const classes = useStyles();

//I Will rewrite this code (Taiwo Akindele).
  // const {from} = (location.state || {from:{pathname:"/"}}) as {from:{pathname:string}}
  
  const handleLogin = async(e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(inputs)
    
  }

  return (
    <>

      <div className={classes.signup}>
      <img src='/images/zapi-logo.png' alt="zapi" className={classes.logo} />
      <section className={classes.sectionOne}>
        <Typography variant='h4' className={classes.title} gutterBottom>Welcome Back!</Typography>
        <form className={classes.form} onSubmit={handleLogin}>
          <input type="email" name="email" {...bind} placeholder="Email*" /> <br />
          <input type="password" name="password" {...bind} placeholder="Password*" /> <br />
          <div className={classes.checkbox}>
            <Checkbox defaultChecked style={{
                color: "#FF5C00"
              }} sx={{ '& .MuiSvgIcon-root': { fontSize: 20 } }} />
          <Typography variant= 'subtitle2'>Keep me logged in</Typography>
          </div>
          
          <button type="submit">Login</button>
          <Typography variant='subtitle2' color='#FF5C00' mb={2}>forgot password?</Typography>
        </form>
        <Stack className={classes.socialLogin}>
          <Box className={classes.textwrap}>
            <Typography color='#081F4A' mr={1}>Dont have an account? </Typography> <Box color='#FF5C00'> Sign up</Box>
          </Box>
          <Typography className={classes.bodyText} variant='body1'>Or continue with:</Typography>
          <Button variant='text'>
            <img src='/images/Google.png' /> Google
          </Button>
          <Button variant='text'>
            <img src='/images/Github.png' /> Github
          </Button>
          <Button variant='text'>
            <img src='/images/Facebook.png' /> Facebook
          </Button>
        </Stack>
        </section>
        <section className={classes.sectionTwo}>
          <Box className={classes.topBox}>
            <Typography variant='h4' gutterBottom>
                Thousands Of <br />{''}
                APIs At Your <br />{''}
                Fingertip
            </Typography>
          </Box>
          <Box className={classes.bottomBox}>
            <Typography variant="body1">Discover APIs</Typography>
            <Typography variant="body1">Test from your browser</Typography>
            <Typography variant="body1">Connect using code snippets</Typography>
            <Typography variant="body1">Manage APIs from one dashboard</Typography>
          </Box>
        </section>
        
      </div>
    </>
  );
};

export default Login;

const useStyles = makeStyles({
  signup: {
    background: '#fff',
    display: 'flex',
    height: '100vh',
    width: '100vw',
    overflowX: 'hidden',
    '@media screen and (max-width: 1100px)': {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '2rem',
      height: '100%',
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
    width: '50vw',
    margin: '0 2rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: '2.5rem',
    color: '#081F4A'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& input': {
      width: '25rem',
      height: '3.5rem',
      padding: '1rem 1rem',
      border: '1.5px solid #081F4A',
      borderRadius: '5px',
      '@media screen and (max-width: 450px)': {
        width: '100%',
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
      '@media screen and (max-width: 450px)': {
        width: '100%',
      }
    }
  },
  checkbox:{
    display:'flex',
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginTop: '0'
  },
  check: {
    color: '#ff5c00',
    fontSize: '2px'
  },
  socialLogin: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '.5rem',
    '& button': {
      width: '15rem',
      height: '2.5rem',
      background: '#FFFFFF',
      textTransform: 'capitalize',
      border: '1px solid #081F4A',
      borderRadius: '10px',
      '@media screen and (max-width: 450px)': {
        width: '100%',
      },
      '& img': {
        borderRadius: '50%',
        height: '2rem'
      }
    }
  },
  textwrap : {
    display: 'flex',

  },
  bodyText: {
    fontWeight: 400,
    fontSize: '1.5625rem',
    color: '#081F4A',
  },
  sectionTwo: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    '@media screen and (max-width: 1200px)': {
      width: '100%',
    },
    '@media screen and (max-width: 1100px)': {
      display: 'none'
    }
  },
 
  topBox: {
    position: 'relative',
    width: '47.25rem',
    background: '#081F4A',
    borderRadius: '15px',
    '& h4': {
      color: '#fff',
      fontWeight: 800,
      fontSize: '3.675rem',
      letterSpacing: '0.17em',
      textAlign: 'center',
      padding: '2.5rem 0',
      '@media screen and (max-width: 500px)': {
        letterSpacing: '0',
        '& br': {
          display: 'none'
        }
      },
    },
  },
  bottomBox: {
    position: 'relative',
    top: '-50px',
    margin: '0 auto',
    background: '#FF5C00',
    borderRadius: '15px 15px 10px 10px',
    border: '13px solid white',
    width: '30rem',
    height: '30rem',
    '@media screen and (max-width: 1200px)': {
      width: 'auto',
    },
    '& p': {
      fontWeight: '400',
      fontSize: '2.2375rem',
      lineHeight: '2.1375rem',
      textAlign: 'center',
      paddingTop: '3rem',
      color: '#fff'
    }
  }
})