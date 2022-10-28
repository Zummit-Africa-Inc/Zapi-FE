import React, { useEffect, useState } from "react";
import { Card, Tooltip } from "@mui/material";
import { makeStyles, styled } from "@mui/styles";
import Cookies from "universal-cookie";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

import { useAppDispatch, useAppSelector, useHttpRequest } from "../hooks";
import { getApis } from "../redux/slices/apiSlice";
import { CardProps } from "../interfaces";
import { Spinner } from "../assets";

import {
  BookmarkAddOutlined,
  BookmarkRemove,
  StackedLineChart,
  TimerOutlined,
  Check,
} from "@mui/icons-material";

const core_url = "VITE_CORE_URL";

const APICard: React.FC<CardProps> = ({
  id,
  name,
  description,
  rating,
  latency,
}) => {
  const { error, loading, sendRequest } = useHttpRequest();
  const { subscribedApis } = useAppSelector((store) => store.user);
  const classes = useStyles();
  const cookies = new Cookies();
  const profileId = cookies.get("profileId");
  const dispatch = useAppDispatch();

  const [isSubscribed, setIsSubscribed] = useState(
    subscribedApis?.find((api) => api.apiId === id) || false
  );

  const handleSubscription = async () => {
    const headers = { "Content-Type": "application/json" };
    const queryStringParameters = { profileId };
    if (!isSubscribed) {
      try {
        const data = await sendRequest(
          `/subscription/subscribe/${id}`,
          "post",
          core_url,
          undefined,
          headers,
          queryStringParameters
        );
        if (!data || data === undefined) return;
        const { message } = data;
        toast.success(`${message}`);

        setIsSubscribed(true);
      } catch (error) {}
    } else {
      try {
        const data = await sendRequest(
          `/subscription/subscribe/${id}`,
          "post",
          core_url,
          undefined,
          headers,
          queryStringParameters
        );
        if (!data || data == undefined) return;
        const { message } = data;
        toast.success(`${message}`);

        setIsSubscribed(false);
      } catch (error) {}
    }
    dispatch(getApis());
  };

  useEffect(() => {
    error && toast.error(`${error}`);
  }, [error]);

  return (
    <div className={classes.card}>
      <div>
        <div className={classes.topBar}>
          <div className={classes.icon}></div>
          <Tooltip
            onClick={handleSubscription}
            title={isSubscribed ? "Unsubscribe" : "Subscribe"}
            placement="right"
            arrow>
            {isSubscribed ? (
              <BookmarkRemove className={classes.subscribe} />
            ) : (
              <BookmarkAddOutlined className={classes.subscribe} />
            )}
          </Tooltip>
        </div>
        <div className={classes.body}>
          <h4>{name || "API Name"}</h4>
          <p>
            {description && description?.length > 60
              ? `${String(description).substring(0, 50)}...`
              : description || "API Description."}
          </p>
        </div>
      </div>

      <div className={classes.bottomBar}>
        <div className={classes.item} title="no. of subscribers">
          <StackedLineChart
            sx={{ width: "18px" }}
            className={classes.itemIcon}
          />
          <p className={classes.itemTitle}>10K</p>
        </div>
        <div className={classes.item} title="latency">
          <TimerOutlined sx={{ width: "18px" }} className={classes.itemIcon} />
          <p className={classes.itemTitle}>{latency || 0}ms</p>
        </div>
        <div className={classes.item} title="rating">
          <Check sx={{ width: "18px" }} className={classes.itemIcon} />
          <p className={classes.itemTitle}>{((rating || 10) / 10) * 100}%</p>
        </div>
      </div>
    </div>
  );
};

const useStyles = makeStyles({
  card: {
    userSelect: "none",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    boxSizing: "border-box",
    padding: "31px 28px 33px 29px",
    // width: "251px",
    minHeight: "230px",
    background: "#fff",
    border: "1px solid #d1d1d1",
    boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.25)",
    borderRadius: "28px",
    "@media screen and (max-width: 820px)": {
      scale: 0.9,
    },
    "@media screen and (max-width: 430px)": {
      scale: 0.85,
    },
  },
  topBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  icon: {
    marginBottom: "13px",
    backgroundColor: "#253480",
    borderRadius: "50%",
    width: "36px",
    height: "36px",
  },
  subscribe: {
    cursor: "pointer",
    color: "#515D99",
    width: "17px",
    height: "auto",
  },
  body: {
    "& h4": {
      marginBottom: "10px",
      fontWeight: "bold",
      fontSize: "17px",
      color: "#071B85",
      width: "186px",
    },
    "& p": {
      fontSize: "12px",
      lineHeight: "22px",
      color: "#4554A3",
      width: "186px",
    },
  },
  bottomBar: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "20px",
  },
  item: {
    display: "flex",
    alignItems: "center",
    gap: "2px",
  },
  itemIcon: {
    color: "#515D99",
  },
  itemTitle: {
    fontSize: "10px",
    color: "#515D99",
  },
});

export default APICard;
