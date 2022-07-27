import React from "react";
import { Container } from "@mui/material";
import { makeStyles } from "@mui/styles";

const Sidebar: React.FC = () => {
  const classes = useStyles()

  return (
    <Container className={classes.root}></Container>
  )
}

const useStyles = makeStyles({
  root: {},
})

export default Sidebar