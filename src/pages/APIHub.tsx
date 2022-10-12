import React from 'react'

import { HomeNavbar, APIHubHeader, Footer } from '../sections'
import APIGrid from "../components/APIGrid";


const Pricing:React.FC = () => {

    return (
    <div style={{background: "#FFF",width: "100%",minHeight: "100vh"}}>
        <HomeNavbar />
        <APIHubHeader />
        <APIGrid />
        <Footer />
    </div>
    )
}


export default Pricing;
