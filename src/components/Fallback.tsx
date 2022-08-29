import React from "react";
import { makeStyles } from "@mui/styles";

const Fallback: React.FC = () => {
    const classes = useStyles()

  return (
    <div className={classes.container}>
        <div className={classes.loader}></div>
    </div>
  )
}

const useStyles = makeStyles({
    container: {
        width: "100vw",
        height: "100vh",
        display: "grid",
        placeItems: "center",
        background: "#FFF",
    },
    loader: {}
})

export default Fallback