import { useFormInputs } from "../hooks/form-hook"
import { FormEvent } from "react";
import { PASSWORD_REGEX } from "../utils";
import { useHttpRequest } from '../hooks/fetch-hook'
import { Box, Button, Stack, Tooltip, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const initialState = {
  fullName: '',
  email: '',
  password: ''
}

const Signup:React.FC = () => {
  const { inputs, bind } = useFormInputs(initialState)
  const { fullName, email, password } = inputs
  const { loading, error, sendRequest, clearError } = useHttpRequest()
  const classes = useStyles()

  const handleSignup = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(inputs)
    try {
      // const data = await sendRequest(inputs)
      // console.log(data)
    } catch (err: any) { alert(err.message)}
  }
  return (
    <>
      <div className={classes.signup}>
        <img src='/images/zapi-logo.png' alt="zapi" className={classes.logo} />
        <section className={classes.sectionOne}>
          <Typography variant='h4' className={classes.title} gutterBottom>Create Account</Typography>
          <form className={classes.form} onSubmit={handleSignup}>
            <input required type='text' name='fullName' {...bind} placeholder='Full Name' />
            <input required type="email" name="email" {...bind} placeholder="Email" />
            <Tooltip title='Password must between 8 - 20 characters and must include a capital letter, a small letter, a number and a special characters'>
            <input required type="password" name="password" {...bind} placeholder="Password" />
            </Tooltip>
            {!fullName || !email || !password || !PASSWORD_REGEX.test(password) 
            ?  
            (<button className={classes.btn} type="submit">Sign Up</button>)
            :
            <button className={classes.submitBtn} type="submit">Sign Up</button>
          }
          </form>
          <Stack className={classes.socialLogin}>
            <Typography className={classes.bodyText} variant='body1'>or Sign in with:</Typography>
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
            <img src="/images/Ellipses.png" alt="Ellipses" />
            <Typography variant="body1">Discover APIs</Typography>
            <Typography variant="body1">Test from your browser</Typography>
            <Typography variant="body1">Connect using code snippets</Typography>
            <Typography variant="body1">Manage APIs from one dashboard</Typography>
          </Box>
        </section>
      </div>
    </>
  )
}

export default Signup


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
    justifyContent: 'center',
    gap: '.5rem',
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
  },
  submitBtn: {
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
  },
  btn: {
    width: '20rem',
    height: '3rem',
    borderRadius: '15px',
    color: '#FF5C00',
    fontWeight: 600,
    fontSize: '1rem',
    cursor: 'pointer',
    marginBottom: '2rem',
    '@media screen and (max-width: 450px)': {
      width: '100%',
    }
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
    }
  },
  topBox: {
    position: 'relative',
    width: '47.25rem',
    height: '22.6875rem',
    background: '#081F4A',
    borderRadius: '15px',
    '@media screen and (max-width: 1200px)': {
      width: 'auto',
      height: 'auto',
      padding: '0 0.5rem'
    },

    '& h4': {
      color: '#fff',
      fontWeight: 800,
      fontSize: '3.875rem',
      letterSpacing: '0.17em',
      textAlign: 'center',
      padding: '3rem 0',
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
    margin: '0 auto',
    background: '#FF5C00',
    borderRadius: '15px 15px 10px 10px',
    width: '30rem',
    height: '30rem',
    '@media screen and (max-width: 1200px)': {
      width: 'auto',
    },
    '& img': {
      width: '30rem',
      height: '6rem',
      position: 'absolute',
      top: '-3rem',
      '@media screen and (max-width: 1200px)': {
       display: 'none'
      },
    },
    '& p': {
      fontWeight: '400',
      fontSize: '2.4375rem',
      lineHeight: '2.9375rem',
      textAlign: 'center',
      paddingTop: '3rem',
      color: '#fff'
    }
  }
})