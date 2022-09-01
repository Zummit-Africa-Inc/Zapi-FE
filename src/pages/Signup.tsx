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