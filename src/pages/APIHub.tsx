import React from "react";

import { HomeNavbar, Footer, APIHubTab, APIHubHeader } from "../sections";
import ReactGA from "react-ga4";

ReactGA.send({ hitType: "pageview", page: "/api-hub" });

const APIHub: React.FC = () => {
  return (
    <>
      <HomeNavbar />
      <APIHubHeader />
      <APIHubTab />
      <Footer />
    </>
  );
};

export default APIHub;
