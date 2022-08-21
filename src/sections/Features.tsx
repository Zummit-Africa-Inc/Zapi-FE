import { Typography } from '@mui/material'
import React from 'react'
import { makeStyles } from "@mui/styles"

//image
import AddTask from "../assets/images/add_task.png"


const Features: React.FC = () => {
    const classes = useStyles()

  return (
    <>
        <main>
            <div className={classes.feature}>
                <Typography gutterBottom variant='h4'sx={{ fontWeight: 700, fontSize:'36px', lineHeight: "45.94px", fontFamily: 'Space Grotesk', }}>Features to give your business a head start.</Typography>
            </div>
            <div>
             <div className={classes.wrapper}>
                <div className={classes.columns}>
                    <div className={classes.column}>
                        <div className={classes.img}>
                            <img src={AddTask} alt="Add_Task" />
                            <Typography gutterBottom variant='h5' sx={{ fontWeight: 700, fontSize:'24px', lineHeight: "30.62px" }}>Cost effective</Typography>
                        </div>
                        <Typography gutterBottom variant='h6' sx={{ fontSize:'16px', lineHeight:'20,42px', fontWeight: 400 }}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt </Typography>
                    </div>
                    <div className={classes.column}>
                        <div className={classes.img}>
                            <img src={AddTask} alt="Add_Task" />
                            <Typography gutterBottom variant='h5' sx={{ fontWeight: 700, fontSize:'24px', lineHeight: "30.62px" }}>Cost effective</Typography>
                        </div>
                        <Typography gutterBottom variant='h6' sx={{ fontSize:'16px', lineHeight:'20,42px', fontWeight: 400 }}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt </Typography>
                    </div>
                    <div className={classes.column}>
                        <div className={classes.img}>
                            <img src={AddTask} alt="Add_Task" />
                            <Typography gutterBottom variant='h5' sx={{ fontWeight: 700, fontSize:'24px', lineHeight: "30.62px" }}>Cost effective</Typography>
                        </div>
                        <Typography gutterBottom variant='h6' sx={{ fontSize:'16px', lineHeight:'20,42px', fontWeight: 400 }}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt </Typography>
                    </div>
                    <div className={classes.column}>
                        <div className={classes.img}>
                            <img src={AddTask} alt="Add_Task" />
                            <Typography gutterBottom variant='h5' sx={{ fontWeight: 700, fontSize:'24px', lineHeight: "30.62px" }}>Cost effective</Typography>
                        </div>
                        <Typography gutterBottom variant='h6' sx={{ fontSize:'16px', lineHeight:'20,42px', fontWeight: 400 }}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt </Typography>
                    </div>
                </div>
             </div>
            </div>
        </main>
    </>
  )
}

const useStyles = makeStyles({
    feature:{
        textAlign:'center',
        alignItem: 'center',
        marginTop:"8rem"      
    },
    img:{
        "& img":{
            width: '29.33px',
            height: '26.67px',
        },
        display: "flex",
        gap:'1.5rem',
    },
    wrapper:{
        padding: "24px 48px 56px 32px",
        fontFamily: 'Space Grotesk',
    },
    column:{
        width:"calc(50% - 30px)",
        backgroundColor:'#F5F5F5',
        margin: "0 15px 30px",
        padding: "20px",
        borderRadius:"16px",
        boxSizing:"border-box",
        "@media screen and (max-width: 800px)": {
            width:'100%'
        }
    },
    columns:{
        display:'flex',
        flexWrap:'wrap',

    }
})

export default Features