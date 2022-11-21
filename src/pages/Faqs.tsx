import React, { useState } from "react";
import { makeStyles } from "@mui/styles";

import { Question } from "../assets";
import { Typography, Box } from "@mui/material";
import { Footer, HomeNavbar } from "../sections";

import { FAQDATA } from "../testdata";
import { Accordion } from "../components";
import ReactGA from "react-ga4";

ReactGA.send({ hitType: "pageview", page: "/faqs" });

const Faqs: React.FC = () => {
  const classes = useStyles();
  const [data, setData] = useState<any>(FAQDATA);

  return (
    <>
      <HomeNavbar />
      <Box className={classes.main}>
        <Typography component="h1">Frequently Asked Questions</Typography>
      </Box>
      <Box className={classes.root}>
        <Box className={classes.faq}>
          <Box component="img" alt="question." src={Question} />
        </Box>
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            marginBottom: "2rem",
          }}>
          <Box className={classes.accordionBlock}>
            {FAQDATA.map((val) => {
              return (
                <>
                  <Accordion {...val} />
                </>
              );
            })}
          </Box>
        </Box>
      </Box>
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
    backgroundColor: "#F3F3F3",
    backgroundImage: "url('../../images/faq.png')",
    width: "100%",
    opacity: 0.98,
    marginTop: "-0.1rem",
    boxShadow: "0px 4px 4px rgba(6, 113, 224, 0.05)",
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
