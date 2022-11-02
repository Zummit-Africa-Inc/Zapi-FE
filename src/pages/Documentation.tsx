import React from "react";

import { HomeNavbar, ComingSoon, Footer } from "../sections";
import ReactGA from "react-ga4";

const Documentation: React.FC = () => {
  ReactGA.send({ hitType: "pageview", page: "/documentation" });
  return (
    <>
      <HomeNavbar />
      <ComingSoon />
      <Footer />
    </>
  );
};

export default Documentation;
