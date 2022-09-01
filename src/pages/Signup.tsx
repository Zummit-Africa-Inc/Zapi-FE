// import { useFormInputs } from "../hooks/form-hook"
// import { FormEvent } from "react";
// import { PASSWORD_REGEX } from "../utils";
// import { useHttpRequest } from '../hooks/fetch-hook'
// import { Box, Button, Stack, Tooltip, Typography } from "@mui/material";
// import { makeStyles } from "@mui/styles";

// const initialState = {
//   fullName: '',
//   email: '',
//   password: ''
// }

// const Signup:React.FC = () => {
//   const { inputs, bind } = useFormInputs(initialState)
//   const { fullName, email, password } = inputs
//   const { loading, error, sendRequest, clearError } = useHttpRequest()
//   const classes = useStyles()

//   const handleSignup = async (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault()
//     console.log(inputs)
//     try {
//       const data = await sendRequest(inputs)
//       console.log(data)
//     } catch (err) { alert(error)}
//   }
//   return (
//     <>
//       <div className={classes.signup}>
//         <img src='/images/zapi-logo.png' alt="zapi" className={classes.logo} />
//         <section className={classes.sectionOne}>
//           <Typography variant='h4' className={classes.title} gutterBottom>Create Account</Typography>
//           <form className={classes.form} onSubmit={handleSignup}>
//             <input required type='text' name='fullName' {...bind} placeholder='Full Name' />
//             <input required type="email" name="email" {...bind} placeholder="Email" />
//             <Tooltip title='Password must between 8 - 20 characters and must include a capital letter, a small letter, a number and a special characters'>
//             <input required type="password" name="password" {...bind} placeholder="Password" />
//             </Tooltip>
//             <button type="submit" disabled={!fullName || !email || !password || !PASSWORD_REGEX.test(password)}>Sign Up</button>
//           </form>
//           <Stack className={classes.socialLogin}>
//             <Typography className={classes.bodyText} variant='body1'>or Sign in with:</Typography>
//             <Button variant='text'>
//               <img src='/images/Google.png' /> Google
//             </Button>
//             <Button variant='text'>
//               <img src='/images/Github.png' /> Github
//             </Button>
//             <Button variant='text'>
//               <img src='/images/Facebook.png' /> Facebook
//             </Button>
//           </Stack>
//         </section>
//         <section className={classes.sectionTwo}>
//           <Box className={classes.topBox}>
//             <Typography variant='h4' gutterBottom>
//               Thousands Of <br />{''}
//               APIs At Your <br />{''}
//               Fingertip
//             </Typography>
//           </Box>
//           <Box className={classes.bottomBox}>
//             <img src="/images/Ellipses.png" alt="Ellipses" />
//             <Typography variant="body1">Discover APIs</Typography>
//             <Typography variant="body1">Test from your browser</Typography>
//             <Typography variant="body1">Connect using code snippets</Typography>
//             <Typography variant="body1">Manage APIs from one dashboard</Typography>
//           </Box>
//         </section>
//       </div>
//     </>
//   )
// }

// export default Signup


// const useStyles = makeStyles({
//   signup: {
//     background: '#fff',
//     display: 'flex',
//     height: '100vh',
//     width: '100vw',
//     overflowX: 'hidden',
//     '@media screen and (max-width: 1100px)': {
//       flexDirection: 'column',
//       alignItems: 'center',
//       justifyContent: 'center',
//       gap: '2rem',
//       height: '100%',
//     }
//   },
//   logo: {
//     width: '100px',
//     height: '100px',
//     '@media screen and (max-width: 1000px)': {
//       width: '50px',
//       height: '50px',
//     }
//   },
//   sectionOne: {
//     width: '50vw',
//     margin: '0 2rem',
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   title: {
//     fontWeight: 500,
//     fontSize: '2.5rem',
//     color: '#081F4A'
//   },
//   form: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'center',
//     gap: '.5rem',
//     '& input': {
//       width: '25rem',
//       height: '3.5rem',
//       padding: '1rem 1rem',
//       border: '1.5px solid #081F4A',
//       borderRadius: '5px',
//       '@media screen and (max-width: 450px)': {
//         width: '100%',
//       }
//     },
//     '& button': {
//       width: '20rem',
//       height: '3rem',
//       background: '#081F4A',
//       borderRadius: '15px',
//       color: '#FF5C00',
//       fontWeight: 600,
//       fontSize: '1rem',
//       cursor: 'pointer',
//       marginBottom: '2rem',
//       '@media screen and (max-width: 450px)': {
//         width: '100%',
//       }
//     }
//   },
//   socialLogin: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'center',
//     gap: '.5rem',
//     '& button': {
//       width: '15rem',
//       height: '2.5rem',
//       background: '#FFFFFF',
//       textTransform: 'capitalize',
//       border: '1px solid #081F4A',
//       borderRadius: '10px',
//       '@media screen and (max-width: 450px)': {
//         width: '100%',
//       },
//       '& img': {
//         borderRadius: '50%',
//         height: '2rem'
//       }
//     }
//   },
//   bodyText: {
//     fontWeight: 400,
//     fontSize: '1.5625rem',
//     color: '#081F4A',
//   },
//   sectionTwo: {
//     height: '100vh',
//     display: 'flex',
//     flexDirection: 'column',
//     '@media screen and (max-width: 1200px)': {
//       width: '100%',
//     }
//   },
//   topBox: {
//     position: 'relative',
//     width: '47.25rem',
//     height: '22.6875rem',
//     background: '#081F4A',
//     borderRadius: '15px',
//     '@media screen and (max-width: 1200px)': {
//       width: 'auto',
//       height: 'auto',
//       padding: '0 0.5rem'
//     },

//     '& h4': {
//       color: '#fff',
//       fontWeight: 800,
//       fontSize: '3.875rem',
//       letterSpacing: '0.17em',
//       textAlign: 'center',
//       padding: '3rem 0',
//       '@media screen and (max-width: 500px)': {
//         letterSpacing: '0',
//         '& br': {
//           display: 'none'
//         }
//       },
//     },
//   },
//   bottomBox: {
//     position: 'relative',
//     margin: '0 auto',
//     background: '#FF5C00',
//     borderRadius: '15px 15px 10px 10px',
//     width: '30rem',
//     height: '30rem',
//     '@media screen and (max-width: 1200px)': {
//       width: 'auto',
//     },
//     '& img': {
//       width: '30rem',
//       height: '6rem',
//       position: 'absolute',
//       top: '-3rem',
//       '@media screen and (max-width: 1200px)': {
//        display: 'none'
//       },
//     },
//     '& p': {
//       fontWeight: '400',
//       fontSize: '2.4375rem',
//       lineHeight: '2.9375rem',
//       textAlign: 'center',
//       paddingTop: '3rem',
//       color: '#fff'
//     }
//   }
// })

import React, { useState } from 'react'
import { Box, Typography, Button, Theme } from "@mui/material"
import * as Yup from 'yup'
import { Link } from 'react-router-dom';
import {HomeNavbar} from '../sections';
import {
  Formik,
  Form,
  Field,
} from 'formik';
import { makeStyles } from '@mui/styles';
import googleicon from "../assets/images/googleicon.svg"

const useStyles = makeStyles((theme: Theme) =>({
  input: {
    padding: '10px',
    borderRadius: '5px',
    width: '100%'
  },
  form: {
    display: 'flex',
    gap: '10px',
    flexDirection: 'column',
    marginTop: '120px',
    width: '50%',
    alignItems: 'stretch',
    [theme.breakpoints.down("sm")]: {
      width:'80%'
    }
  },
  term: {
    fontSize: '14px',
    [theme.breakpoints.down("sm")]: {
      fontSize:'10px'
    }
  },
  google: {
    float: 'left'
  },
  signin:{
    display: 'flex',
    gap: '10px',
    flexDirection: 'column',
    marginTop:'10px',
    width: '50%',
    alignItems: 'stretch',
    [theme.breakpoints.down("sm")]: {
      width:'80%'
    }
  }
}))


const ValidationSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().min(8).required(),
  confirmPassword: Yup.string().label('confirm_password').required().oneOf([Yup.ref('password'), null], 'Password must match'),
  terms: Yup.bool().required().oneOf([true], 'You need to accept the terms and conditions')
})

interface ISignUpForm {
  password: string
  confirmPassword: string
  email: string,
  terms: boolean
}

const initialValues: ISignUpForm = {
  email: '',
  password: '',
  confirmPassword: '',
  terms: false
}



function Signup() {
  const [message, setMessage] = useState('')

  const classes = useStyles()


  return (
    <>
      <HomeNavbar />
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width:{xs:'100%',sm:'100%',lg:'70%' ,md:'70%'}, mx: {md:'auto', } }}>
        <Formik
          initialValues={initialValues}
          onSubmit={(values, actions) => {
            console.log(values)
          }}
          validationSchema={ValidationSchema}
        >
          {({ errors, touched }) => (
            <Form className={classes.form}>
              <h2>{message} </h2>
              <Typography variant='h5' sx={{ textAlign: 'center', fontSize:{xs:'18px', sm:'18px', md:'28px', lg:'32px'} }}> Create a Free Account</Typography>
              <Typography sx={{ textAlign: 'center' }}> Complete this form to register on ZAPI and start exploring our API options </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>

                <label htmlFor="email"> Email</label>
                <Field className={classes.input} id="email" name="email" placeholder="Enter your Email" />
                {errors.email && touched.email ? <Typography sx={{ color: 'red' }}> {errors.email} </Typography> : null}
              </Box>

              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <label htmlFor="password"> Password</label>
                <Field type='password' className={classes.input} id="password" name="password" placeholder="Enter Password" />
                {errors.password && touched.password ? <Typography sx={{ color: 'red' }}> {errors.password} </Typography> : null}
              </Box>

              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <label htmlFor="confirm_password"> Confirm Password</label>
                <Field type='password' className={classes.input} id="confirmPassword" name="confirmPassword" placeholder="Confirm Password" />
                {errors.confirmPassword && touched.confirmPassword ? <Typography sx={{ color: 'red' }}> {errors.confirmPassword} </Typography> : null}
              </Box>

              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
                <Field type='checkbox' name='terms' />
                <label htmlFor='terms'> <span className={classes.term}> I agree to ZAPI’s terms and conditions and privacy policy.</span> </label>
              </Box>
              {errors.terms && touched.terms ? <Typography sx={{ color: 'red' }}> {errors.terms} </Typography> : null}
              <Button type="submit" variant="contained" sx={{ backgroundColor: '#4B4B4B', color: '#FFF', textTransform: 'none' }}> Create my account </Button>
            </Form>
          )}
        </Formik>
        <Typography variant='h6' sx={{ mt: 2 }}> OR </Typography>
        <Box className={classes.signin}>
          <Button onClick={() => alert('Google signup')} variant="outlined" sx={{ textTransform: 'none', display: 'flex', gap: {md:'7rem',lg:'7rem'}, justifyContent: 'start' }} ><span className={classes.google}> <img src={googleicon} alt="Google icon" /> </span> Sign up with Google</Button>
          <Typography> Already have an account? <Link to="/login"> Sign In</Link> </Typography>
        </Box>
      </Box>
    </>
  )
}

export default Signup