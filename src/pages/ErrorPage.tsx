import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@mui/styles'
import { FiAlertCircle } from 'react-icons/fi'

interface IErrorType { error?: any }

const ErrorPage:React.FC<IErrorType> = ({error}) => {
    const classes = useStyles()

  return (
    <div className={classes.container}>
        <div className={classes.wrapper}>
            <FiAlertCircle className={classes.icon} />
            <h3 className={classes.textError}>Error 404</h3>
            <p>The page you requested was not found.</p>
        </div>
        <Link to='/'>&larr; Go back to Homepage</Link>
    </div>
  )
}

const useStyles = makeStyles({
    container: {
        width: "100vw",
        height: "100vh",
        display: "grid",
        placeItems: "center",
    },
    wrapper: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "2rem",
        padding: "0 2rem",
        "& p": {
            fontSize: "2rem",
            color: "red",
        }
    },
    icon: {
        fontSize: "12rem",
        color: "red",
    },
    textError: {
        color: "#333",
        fontSize: "35px"
    }
})

export default ErrorPage