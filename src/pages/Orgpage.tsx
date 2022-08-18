import React from "react";
import {useForm} from "react-hook-form";
import {useState} from "react";
import { ClassNames } from "@emotion/react";
import { Box, Button, Stack, Tooltip, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { alignProperty } from "@mui/material/styles/cssUtils";
import Select from 'react-select'

const Orgpage=()=>{
    const[organisationname, setOrganisationname]= useState("")

    const handleSubmit = (e:any)=>{
        e.preventDefault();
    const data = new FormData(e.target)
    };
    const classes = useStyles()

    const options = [
      {value: 'Instructor', label: 'Instructor'},
      {value: 'Administrator', label: 'Administrator'},
      {value: 'Accountant', label: 'Accountant'},
      {value: 'Auditor', label: 'Auditor'},
      {value: 'Manager', label: 'Manager'}
    ];

    const [selectedOption, setSelectedOption] = useState(null);

    return(
        
        <div className={classes.orgpage}>
            <img src = '/images/zapi-logo.png' alt ="zapi" className={classes.logo}/>
            <section className={classes.sectionOne}>
                <Typography variant='h4' className={classes.title} gutterBottom>Create Your Organisation</Typography>
                <p>Organisation accounts allow your team to manage your API both internally and externally</p>

                <form className={classes.form}>
                    <input required type='text' name='organisationname' placeholder='Organisation Name'/>
                    <p className={classes.para}>*The business name will own and control this organisation account</p>
                    
                    <input required type='text' name='organisationrole' placeholder='Organisation Role'/>
                    <p className={classes.paratwo}>*Seats can be added or removed at any time. This first 5 seats are free</p>
                </form>
                <br/>

                <Typography variant='h5' className={classes.title}>Invite teammates to your new organisation</Typography>
                <form className={classes.formTwo}>
                  <div className={classes.formThree}>
                    <div className={classes.username}>
                      <input required type='text' name='usernameoremail' placeholder='Username or Email'/>
                    </div>
                    <div >
                      <Select
                      className={classes.select}
                      defaultValue={selectedOption}
                      options={options}
                      placeholder='Role'
                     />
                     
                    </div>
                    
                  </div>
                  <div className={classes.orgrole}>
                      <input required type='text' name='Organisationrole' placeholder='Organisation Role'/>
                  </div>
                    
                </form>
                <button className={classes.button}>Confirm & Continue</button>

            </section>
         
        </div>
    )

};

export default Orgpage;


                    
                    



const useStyles = makeStyles({
    orgpage: {
      background: '#fff',
      display: 'flex',
      height: '100vh',
      width: '100vw',
      overflowX: 'hidden',
      
      
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
      margin: '0 25rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontWeight: 500,
      fontSize: '2.5rem',
      color: '#081F4A',
      
      
    },

    para: {
      marginLeft: '-13rem'
    },

    paratwo: {
      marginLeft: '-11rem'
    },
    

    form: {
      display: 'flex',
      paddingTop: '2rem',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      
      gap: '.5rem',
      '& input': {
        width: '45rem',
        height: '2.5rem',
        padding: '1rem 1rem',
        border: '1.5px solid #081F4A',
        borderRadius: '5px',
        '@media screen and (max-width: 450px)': {
          width: '100%',
        }
      },
      
    },

    formTwo: {display: 'flex',
         paddingTop: '2rem',
         flexDirection: 'column',
         alignItems: 'center',
         justifyContent: 'center',
         gap: '.5rem',
          '& input': {
         width: '15rem',
         height: '2.5rem',
         padding: '1rem 1rem',
         border: '1.5px solid #081F4A',
         borderRadius: '5px',

          '@media screen and (max-width: 450px)': {
          width: '100%',
        }
      }
    },

    formThree: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between'
    },

    username: {
      marginLeft: '-18rem'
    },

    select: {
      padding: '2rem 2rem',
      display: 'flex',
      marginTop: '-2rem',
      marginRight: '2rem',
      height: '3rem',
      
  },

    orgrole: {
      flexWrap: 'wrap',
      marginLeft: '-30rem',
      marginTop: '1rem'
    },

    button: {
        width: '15rem',
        height: '3rem',
        background: 'black',
        borderRadius: '5px',
        color: 'red',
        fontWeight: 600,
        
        fontSize: '1rem',
        cursor: 'pointer',
        marginTop: '2rem',
        marginLeft: '-30rem'
    
        
      },

})