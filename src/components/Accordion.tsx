import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
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
      <div onClick={display} className={classes.question}>
        <h2>{question}</h2>
        <p onClick={display}>
          {text ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
        </p>
      </div>
      <div className={classes.answer}>{text && <p>{answer}</p>}</div>
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
    backgroundColor: "rgb(8, 31, 74);",
    margin: "0 auto",
    marginBottom: ".2em",
    borderRadius: ".5em",
    cursor: "pointer",
    "& h2": {
      color: "#fff",
      fontSize: "1.8rem",
    },
    "& p": {
      color: "#fff",
      fontSize: "2.2rem",
      cursor: "pointer",
    },
  },

  answer: {
    "& p": {
      fontSize: "1.5rem",
      backgroundColor: "#fff",
      width: "100%",
      margin: "0 auto",
      padding: ".2em",
      textAlign: "left",
    },
  },
});

export default Accordion;
