import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { Typography, Box } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

interface AccordionProp {
  question: string;
  answer: string;
}

const Accordion: React.FC<AccordionProp> = ({ question, answer }) => {
  const classes = useStyles();
  const [text, setText] = useState<boolean>(false);

  const display = () => {
    setText(!text);
  };
  return (
    <>
      <Box onClick={display} className={classes.question}>
        <Typography variant="h2">{question}</Typography>
        <Typography component="p" onClick={display}>
          {text ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
        </Typography>
      </Box>
      <Box className={classes.answer}>
        {text && <Typography component="p">{answer}</Typography>}
      </Box>
    </>
  );
};

const useStyles = makeStyles({
  question: {
    display: "flex",
    justifyContent: "space-between",
    alignItem: "center",
    padding: ".5em 1em",
    width: "100%",
    backgroundColor: "whitesmoke",
    margin: "0 auto",
    marginBottom: ".2em",
    borderRadius: ".5em",
    cursor: "pointer",
    "& h2": {
      color: "#071B85",
      fontSize: "1.8rem",
    },
    "& p": {
      color: "#071B85",
      fontSize: "2.2rem",
      cursor: "pointer",
    },
  },

  answer: {
    "& p": {
      fontSize: "1.5rem",
      backgroundColor: "whitesmoke",
      width: "100%",
      margin: "0 auto",
      padding: ".2em",
      textAlign: "left",
      color: "#071B85",
    },
  },
});

export default Accordion;
