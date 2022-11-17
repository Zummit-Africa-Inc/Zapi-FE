import React, { useState } from "react";
import { makeStyles } from "@mui/styles";

import { Question } from "../assets";
import Typography from "@mui/material/Typography";
import { Footer, HomeNavbar } from "../sections";

import { FAQDATA } from "../testdata";
import { Accordion } from "../components";

const Faqs: React.FC = () => {
  const classes = useStyles();
  const [data, setData] = useState<any>(FAQDATA);

  return (
    <>
      <HomeNavbar />
      <div className={classes.main}>
        <Typography component="h1">Frequently Asked Questions</Typography>
      </div>
      <div className={classes.root}>
        <div className={classes.faq}>
          <img src={Question} />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            marginBottom: "2rem",
          }}>
          <div className={classes.accordionBlock}>
            {FAQDATA.map((val) => {
              return (
                <>
                  <Accordion {...val} />
                </>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

const useStyles = makeStyles({
  main: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "170px 1rem 90px 1rem",

    backgroundImage: "url('../../images/faq.png')",
    width: "100%",
    opacity: 0.99,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    "& h1": {
      fontSize: "42px",
      fontWeight: "bold",
      textAlign: "center",
      color: "#fff",
      lineHeight: "60px",

      "@media screen and (max-width: 1024px)": {
        fontSize: "36px",
        lineHeight: "50px",
      },
      "@media screen and (max-width: 375px)": {},
    },

    "@media screen and (max-width: 1024px)": {
      padding: "150px 1rem 70px 1rem",
    },
    "@media screen and (max-width: 375px)": {},
  },

  root: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "6rem",
    padding: "5rem 8rem 0 8rem",
    fontColor: "#071B85",
    width: "100%",
    height: "100%",
    "@media screen and (max-width: 1200px)": {
      padding: "5rem 5rem 0 5rem",
    },
    "@media screen and (max-width: 1024px)": {
      gap: "4rem",
      padding: "5rem 2rem 0 2rem",
    },
    "@media screen and (max-width: 900px)": {
      flexDirection: "column",
      justifyContent: "center",
      textAlign: "center",
    },
    "@media screen and (max-width: 700px)": {
      flexDirection: "column",
      padding: "4rem 4rem 0 4rem",
      height: "100%",
    },
    "@media screen and (max-width: 500px)": {
      flexDirection: "column",
      padding: "3.5rem 3.5rem 0 3.5rem",
      height: "100%",
    },
  },
  faq: {
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    // width: "100%",
    "@media screen and (max-width: 900px)": {
      display: "none",
    },
  },
  h1: {
    textAlign: "center",
    fontSize: "2rem",
    margin: "1em 0",
  },

  accordionBlock: {
    width: "100%",
  },
});

export default Faqs;
