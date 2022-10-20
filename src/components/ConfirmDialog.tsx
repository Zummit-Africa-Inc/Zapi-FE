import React, { ChangeEvent } from 'react'
import { makeStyles } from "@mui/styles";
import { Spinner } from "../assets";
import {  useHttpRequest } from "../hooks";


interface DialogProps {
  message: string
  onClick:any
  
}


const ConfirmDialog:React.FC<DialogProps>= ({message,onClick}) => {
    const classes = useStyles();
    const { loading } = useHttpRequest()

  return (
    <div className={classes.container}>
      <div className={classes.wrap}>
        <h3 style={{ color:"#111" }}>{message}</h3>
        <div className={classes.btnWrap}>
          <button onClick={() => onClick(true)} className={classes.btnYes}>{loading ? <Spinner /> : "Yes"}</button>
          <button onClick={() => onClick(false)}className={classes.btnNo}>No</button>
        </div>
      </div>
    </div>
  )
}

const useStyles = makeStyles({
    container:{
        position:"fixed",
        top:0,
        left:0,
        right:0,
        bottom:0,
        backgroundColor:"rgba(0,0,0,0.5)"
    },
    wrap:{
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center",
        position:"absolute",
        top:"50%",
        left:"50%",
        transform:"translate(-50%,-50%)",
        background:"white",
        padding:"50px"
    },
    btnWrap:{
        display:"flex",
        alignItems:"center",
        
    },
    btnYes:{
      background:"red",
      color:"white",
      padding:"10px",
      marginRight:'4px',
      border:"none",
      cursor:"pointer"
    },
    btnNo:{
      background:"green",
      color:"white",
      padding:"10px",
      marginLeft:"4px",
      border:"none",
      cursor:"pointer"
    }
})

export default ConfirmDialog