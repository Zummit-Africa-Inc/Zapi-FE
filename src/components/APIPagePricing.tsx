import React, { SyntheticEvent } from "react";
import {} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { toast } from "react-toastify";
import Cookies from "universal-cookie";

import { useAppSelector, useHttpRequest } from "../hooks";

const core_url = import.meta.env.VITE_CORE_URL

const APIPagePricing:React.FC<{id: string | undefined}> = ({id}) => {
    const { error, loading, sendRequest } = useHttpRequest()
    const { subscribedApis } = useAppSelector(store => store.user)
    const classes = useStyles()
    const cookies = new Cookies()
    const profileId = cookies.get("profileId")

    const isSubscribed = subscribedApis.find(api => api.id === id)

    const handleSubscription = async(e: SyntheticEvent) => {
        e.preventDefault()
        e.persist()

        const headers = { 'Content-type': "application/json" }
        if(isSubscribed){
            try {
                const data = await sendRequest(`${core_url}`, 'POST')
            } catch (error) {}
        } else {
            try {
                const data = await sendRequest(`${core_url}/subscription/subscribe/${id}/${profileId}`, 'POST', JSON.stringify({}), headers)
            } catch (error) {}
        }
    }

  return (
    <div className={classes.container}>
        <div className={classes.row}>
            <div className={classes.col}>
                <h5>Basic</h5>
                <p>1000 requests/month</p>
                <i>$50</i>
                <button type="button" className={classes.button}>
                    {isSubscribed ? "unsubscribe" : "subscribe"}
                </button>
            </div>
            <div className={classes.col}>
                <h5>Premium</h5>
                <p>5000 requests/month</p>
                <i>$100</i>
                <button type="button" className={classes.button}>
                    {isSubscribed ? "unsubscribe" : "subscribe"}
                </button>
            </div>
            <div className={classes.col}>
                <h5>Mega</h5>
                <p>40000 requests/month</p>
                <i>$500</i>
                <button type="button" className={classes.button}>
                    {isSubscribed ? "unsubscribe" : "subscribe"}
                </button>
            </div>
            <div className={classes.col}>
                <h5>Enterprise</h5>
                <p>Unlimited requests/month</p>
                <i>Send us an Email</i>
                <button type="button" className={classes.button}>
                    {isSubscribed ? "unsubscribe" : "subscribe"}
                </button>
            </div>
        </div>
    </div>
  )
}

const useStyles = makeStyles({
    container: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    row: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 5rem",
        margin: "1rem 0"
    },
    col: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "0.25rem",
        color: "#081F4A",
        "& h5": {
            fontSize: "1.5rem",
        },
        "& p": {
            fontSize: "1rem",
        },
        "& i": {
            fontSize: "0.75rem",
        },
    },
    button: {
        padding: "1.25rem 1.5rem",
        border: "none",
        outline: "none",
        borderRadius: "5px",
        background: "#081F4A",
        color: "#FFEA00",
        cursor: "pointer",
        fontFamily: "var(--body-font)",
        textTransform: "uppercase",
        transition: "0.5s all ease",
        "&:hover": {
            transform: "scale(0.97)",
        }
    }
})

export default APIPagePricing