import React from 'react'
import { makeStyles } from '@mui/styles';
import HomeNavbar from '../sections/HomeNavbar/HomeNavbar';
import { useNavigate} from "react-router-dom";
import { Theme } from '@mui/material/styles';

interface Details {
  title?: string,
  description?: string
}

function ErrorPageComponent({title = 'Opps', description='An error just occured'}:Details) {
  const classes = useStyles();
  const navigate = useNavigate();
  return (
      <>
       <HomeNavbar />
    <div className={classes.main}>
      <h2 className={classes.title}> {title}</h2> 
      <p className={classes.description}>{description} </p>
      <div className={classes.btn}>
      <button className={classes.back} onClick={() => navigate(-1)}> Go Back </button>
      <button className={classes.home} onClick={() => navigate('/') }>Home </button>
      </div>
      </div>
      
      </>
  )
}

const useStyles = makeStyles((theme: Theme ) => (
  {
    main:{
     display:'flex',
     flexDirection:'column',
     justifyContent:'center',
     alignItems:'center',
     alignContent:'center',
     height:'90vh',
     maxWidth:'60%',
     margin: '0px auto',
     gap:'1rem'
    },
    btn:{
  display:'flex',
  gap:4,
  '& button':{
    padding : 4,
    paddingLeft:'20px',
    paddingRight: '20px',
    cursor:'pointer',
    borderRadius:'5px',
    fontSize:'16px',
    [theme.breakpoints.down('md')]:{
      paddingLeft: '10px', 
      paddingRight: '10px',
      fontSize:'10px',
    }
  }
    },
    home:{
      backgroundColor:'#081F4A',
      color:'#FFF',
    },
    back:{
      color: '#081F4A',
      backgroundColor:'#FFF'
    },
    title:{
      fontSize:'34px',
      [theme.breakpoints.down('sm')]:{
        fontSize:'14px',
      }
    },
    description:{
      fontSize:'14px',
      [theme.breakpoints.down('sm')]:{
        fontSize:'10px'
      }
    }
  }
))

export default ErrorPageComponent