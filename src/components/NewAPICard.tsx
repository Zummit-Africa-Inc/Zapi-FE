import React, { useEffect } from "react";
import { Card } from "@mui/material";
import { makeStyles, styled } from '@mui/styles';
import Cookies from "universal-cookie";
import { toast } from "react-toastify";

import { useAppDispatch, useAppSelector, useHttpRequest } from "../hooks";
import { getApiCategories, getApis } from "../redux/slices/apiSlice";
import { CardProps } from "../interfaces";
import { Spinner } from "../assets";

const core_url = "VITE_CORE_URL"

const NewAPICard:React.FC<CardProps> = ({id, name, description, rating, latency}) => {
    const { error, loading, sendRequest } = useHttpRequest();
    const { subscribedApis } = useAppSelector(store => store.user);
    const isSubscribed = subscribedApis.find(api => api.id === id);
    const classes = useStyles();
    const cookies = new Cookies();
    const profileId = cookies.get("profileId");
    const dispatch = useAppDispatch();

    const handleSubscription = async() => {
      const headers = { 'Content-Type': "application/json" }
      if(!isSubscribed) {
          try {
              const data = await sendRequest(`/subscription/subscribe/${id}/${profileId}`, "post", core_url, undefined, headers)
              console.log(data)
              // toast.success(`${data}`)
            } catch (error) {}
          } else {
            try {
              const data = await sendRequest(`/subscription/subscribe/${id}/${profileId}`, "post", core_url, undefined, headers)
              console.log(data)
              // toast.success(`${data}`)
          } catch (error) {}
      }
      return () => {
        dispatch(getApiCategories());
        dispatch(getApis());
      }
    }

    useEffect(() => {
      error && toast.error(`${error}`)
    },[error])

  return (
    <Card className={classes.card}>
      <div className={classes.header}></div>
      <div className={classes.body}>
        <h5>{name}</h5>
        <p>{description}</p>
        <div className={classes.col}>
          <div className={classes.row} style={{gap: "23px"}}>
            <button style={{width: "41px"}} className={classes.btn} disabled>{rating}/10</button>
            <button style={{width: "41px"}} className={classes.btn} disabled>{latency}ms</button>
          </div>
          <div className={classes.row} style={{gap: "17px"}}>
            <button style={{width: "70px"}} className={classes.btn} disabled></button>
            <button style={{width: "70px"}} className={classes.btn} disabled></button>
            <button style={{width: "37px"}} className={classes.btn} disabled></button>
          </div>
        </div>
        <div className={classes.footer}>
          <button onClick={handleSubscription} className={classes.button}>
            {loading ? <Spinner /> : isSubscribed ? "unsubscribe" : "subscribe"}
          </button>
        </div>
      </div>
    </Card>
  )
}

const useStyles = makeStyles({
    card:{
      maxWidth: 267,
      height: 354,
      userSelect: "none",
      "&:hover": {
        boxShadow: "5px 5px 15px 0px rgba(0, 0, 0, 0.6)",
      }
    },
    header: {
      width: "267px",
      height: "97px",
      background: "#081F4A",
    },
    body: {
      height: "257px",
      padding: "0 16px",
      color: "#081F4A",
      "& h5": {
        fontWeight: 500,
        fontSize: "18px",
        lineHeight: "23px",
        margin: "16px 0",
      },
      "& p": {
        fontWeight: 400,
        fontSize: "16px",
        margin: "0 0 16px",
      },
    },
    col: {
      display: "flex",
      flexDirection: "column",
      gap: "22px",
    },
    row: {
      display: "flex",
      alignItems: "center",
    },
    footer: {
      margin: "20px 0 0",
    },
    btn: {
      height: "18px",
      background: "#FFEA00",
      borderRadius: "8px",
      border: "none",
      outline: "none",
      fontSize: "0.65rem",
      fontWeight: 700,
      color: "#081F4A",
      fontFamily: "var(--body-font)",
      "&:disabled": {
          cursor: "default",
      }
    },
    button: {
      width: "100px",
      height: "36px",
      background: "#081F4A",
      borderRadius: "4px",
      border: "none",
      outline: "none",
      fontSize: "0.8rem",
      textTransform: "uppercase",
      fontFamily: "var(--body-font)",
    }
})

export default NewAPICard