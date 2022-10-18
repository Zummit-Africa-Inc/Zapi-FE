import React from "react";

import { HomeNavbar, APIHubHeader, Footer, APIHubTab } from "../sections";


const APIHub:React.FC = () => {

    return (
        <div style={{background: "#FFF",width: "100%",minHeight: "100vh"}}>
            <HomeNavbar />
            <APIHubHeader />
            <APIHubTab/>
            <Footer />
        </div>
    )
}


export default APIHub;
