import React, { SetStateAction, useState } from 'react'
import { makeStyles } from "@mui/styles";

import { useAppDispatch, useAppSelector, useHttpRequest } from "../hooks";
import { removeEndpoint, getUserApis } from "../redux/slices/userSlice";
import { Spinner } from "../assets";
import Cookies from 'universal-cookie';

interface DialogProps {
  id: string
  message: string
  onClose: () => SetStateAction<boolean>
}

const core_url = "VITE_CORE_URL"

const ConfirmDialog:React.FC<DialogProps>= ({id, message, onClose}) => {
  const { error, loading, sendRequest } = useHttpRequest()
  const dispatch = useAppDispatch();
  const classes = useStyles();
  let payload : object;
  const cookies = new Cookies();
  const profileId = cookies.get("profileId");

  const deleteEndpoint = async(id: any ) =>{
    console.log(id)
    const headers = { 'Content-Type': 'application/json'}
    try {
      const data = await sendRequest(`/endpoints/${id}`, 'del', core_url, payload, headers)
      if(!data || data === undefined) return
      dispatch(removeEndpoint(id))
      dispatch(getUserApis(profileId))
    } catch (error) {}
  }

  return (
    <div className={classes.backdrop}>
      <div className={classes.container}>
        <h3 style={{ color:"#111" }}>{message}</h3>
        <div className={classes.row}>
          <button type="button" onClick={() => onClose()} className={classes.button} style={{background: "#081F"}}>
            cancel
          </button>
          <button type="button" onClick={deleteEndpoint} className={classes.button} style={{background: "#E32C08"}}>
            {loading ? <Spinner /> : "confirm"}
          </button>
        </div>
      </div>
    </div>
  )
}

const useStyles = makeStyles({
  backdrop: {
    width: "100vw",
    height: "100vh",
    display: "grid",
    placeItems: "center",
    position: "fixed",
    top: 0,
    left: 0,
    background: "rgba(225, 225, 225, 0.3)",
    backdropFilter: "blur(2px)",
    zIndex: 70,
  },
  container:{
    width: "300px",
    display: "flex",
    flexDirection: "column",
    background: "#FFF",
    borderRadius: "4px",
    padding: "1.5rem 1rem",
  },
  row:{
    width: "100%",
    display:"flex",
    alignItems:"center",
    justifyContent:"space-between",
    margin: "0.75rem 0",
  },
  button: {
    padding: "0.5rem 1rem",
    border: "none",
    outline: "none",
    borderRadius: "5px",
    color: "#FFF",
    cursor: "pointer",
    fontFamily: "var(--body-font)",
  }
})

export default ConfirmDialog