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
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import {
  MainButton,
  ChildButton,
  FloatingMenu,
  Directions,
} from '../components/FloatingMenu';

const Homepage: React.FC = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);
  ReactGA.send({ hitType: "pageview", page: "/" });

  return (
    <div className={classes.homePage}>
      <Modalpopup open={open} setOpen={setOpen} handleClose={handleClose}/>
      <HomeNavbar />
      <Hero />
      <Brand />
      <MarketPlace />
      <Features />
      {/* <Feedback handleOpen={handleOpen}/> */}
      <Pricing />
      <Education />
      <FloatingMenu
        slideSpeed={500}
        isOpen={isOpen}
        spacing={1}
        direction={Directions.Up}
      >
        <MainButton
          isOpen={isOpen}
          background="#081F4A"
          iconResting={<AddCircleOutlineRoundedIcon sx={{ fontSize: 20, background: "transparent" }} />}
          iconActive={<RemoveCircleOutlineIcon sx={{ fontSize: 20, background: "transparent" }} />}
          onClick={() => {
            setIsOpen((prev) => !prev);
          }}
          size={56}
        />
          <ChildButton
          icon={<WhatsAppIcon sx={{ fontSize: 20, background: "transparent" }} />}
            background="green"
          size={40}
          onClick={() => {
            window.open('https://wa.me/+2348163816789', '_blank')
          }}
          />
        <ChildButton
          icon={<Feedback handleOpen={handleOpen} />}
          background="#fff"
          size={40}
          // onClick={() => handleOpen}
        />
      </FloatingMenu>
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
