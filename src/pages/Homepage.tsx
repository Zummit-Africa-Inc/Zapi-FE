import { makeStyles } from "@mui/styles";
import React, {useState} from 'react'
import {
  Education,
  Hero,
  HomeNavbar,
  Features,
  Footer,
  Pricing,
  Brand,
  MarketPlace,
} from "../sections";
import ReactGA from "react-ga4";
import Modalpopup from "../components/Modal";
import Feedback from "../sections/Feedback";

const Homepage: React.FC = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const classes = useStyles();
  ReactGA.send({ hitType: "pageview", page: "/" });

  return (
    <div className={classes.homePage}>
      <Modalpopup open={open} setOpen={setOpen} handleClose={handleClose}/>
      <HomeNavbar />
      <Hero />
      <Brand />
      <MarketPlace />
      <Features />
      <Feedback handleOpen={handleOpen}/>
      <Pricing />
      <Education />
      <Footer />
    </div>
  );
};

export default Homepage;

const useStyles = makeStyles({
  homePage: {
    height: "100%",
    width: "100%",
    fontFamily: "Space Grotesk, sans-serif",
    background: "#fff",
  },
  feedback: {
    position: "fixed",
    bottom: "1%",
    right: "1%",
    background: "yellow",
    "@media screen and (max-width: 400px)": {
      position: "fixed",
      bottom: "1%",
      right: "1%",
    },
  },
  main: {
    backgroundColor: "#ffff",
    "@media screen and (max-width: 400px)": {
      padding: "1rem .5rem",
    },
  },
});
