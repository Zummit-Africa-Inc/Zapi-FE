import React from "react";
import { makeStyles } from "@mui/styles";

import { useContextProvider } from "../contexts/ContextProvider";
import { useAppSelector } from "../hooks";
import {} from "./"

const APIGrid = () => {
    const classes = useStyles()

  return (
    <div className={classes.container}>
        <div className={classes.box}>
          {/* {apis.map((api) => ())} */}
        </div>
        <div className={classes.grid}>
            <div>
                <p></p>
            </div>
        </div>
    </div>
  )
}

const useStyles = makeStyles({
    container: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      padding: "60px 0",
    },
    grid: {
      width: "896px",
      background: "#EDF5FD",
    },
    box: {
      width: "320px",
      height: "379px",
      background: "#FFF",
      boxShadow: "0px 1px 15px rgba(6, 113, 224, 0.2)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }
  });

export default APIGrid