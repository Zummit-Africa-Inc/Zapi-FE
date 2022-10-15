import React, { MouseEvent, useEffect } from "react";
import { Card, Typography } from "@mui/material";
import { makeStyles } from '@mui/styles';
import Cookies from "universal-cookie";
import { toast } from "react-toastify";

import { useAppDispatch, useAppSelector, useHttpRequest } from "../hooks";
import { getApiCategories, getApis } from "../redux/slices/apiSlice";
import { CardProps } from "../interfaces";
import { Spinner } from "../assets";

const core_url = import.meta.env.VITE_CORE_URL

const NewAPICard:React.FC<CardProps> = ({id, name, description, rating, latency}) => {
    const { error, loading, sendRequest } = useHttpRequest();
    const { subscribedApis } = useAppSelector(store => store.user);
    const isSubscribed = subscribedApis.find(api => api.id === id);
    const classes = useStyles();
    const cookies = new Cookies();
    const profileId = cookies.get("profileId");
    const dispatch = useAppDispatch();

    const handleSubscription = async(e: MouseEvent<HTMLButtonElement>) => {
      e.preventDefault()

      const headers = { 'Content-Type': "application/json" }
      if(!isSubscribed) {
          try {
              const data = await sendRequest(`${core_url}/subscription/subscribe/${id}/${profileId}`, "POST", JSON.stringify({}), headers)
              console.log(data)
              // toast.success(`${data}`)
            } catch (error) {}
          } else {
            try {
              const data = await sendRequest(`${core_url}/subscription/subscribe/${id}/${profileId}`, "POST", JSON.stringify({}), headers)
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
      error && toast.error(`${error.message}`)
    },[error])

  return (
    <Card className={classes.cardContainer}>
      <div className={classes.img}></div>
      <div className={classes.content}>
        <Typography gutterBottom variant="h5" component="div" color="#071B85">{name}</Typography>
        <Typography variant="body2" color="#071B85">
          {description}
        </Typography>
        <br></br>
        <div className={classes.small_yellow_box}>
          <button style={{width: "41px"}} className={classes.btn} disabled>{rating}/10</button>
          <button style={{width: "41px"}} className={classes.btn} disabled>{latency}ms</button>
        </div>
        <br></br>
        <div className={classes.big_yellow_box}>
          <button style={{width: "70px"}} className={classes.btn} disabled></button>
          <button style={{width: "70px"}} className={classes.btn} disabled></button>
          <button style={{width: "37px"}} className={classes.btn} disabled></button>
        </div>
        <div className={classes.footer}>
            <button onClick={handleSubscription} className={classes.button}>
                {loading ? <Spinner /> : "Subscribe"}
            </button>
        </div>
      </div>
    </Card >
  )
}

const useStyles = makeStyles({
    cardContainer:{
      maxWidth: 267,
      height: 354,
      marginBottom: 40
    },
    img: {
      backgroundColor: "#081F4A",
      height: "97px",
      width: "267px"
    },
    content: {
      margin: "20px"
    },
    small_yellow_box: {
      display: "flex",
      justifyContent: "space-evenly",
      position: "relative",
      right: "40px"
    },
    big_yellow_box: {
      display: "flex",
      justifyContent: "space-evenly",
      position: "relative",
      right: "10px"
    },
    footer: {
      margin: "20px 0",
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