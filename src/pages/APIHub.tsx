import React from 'react'

import { HomeNavbar, APIHubHeader, Footer, APIHubTab } from '../sections'


const APIHub:React.FC = () => {

    return (
        <>
            <HomeNavbar />
            <APIHubHeader />
            <APIHubTab/>
            <Footer />
        </>
    )
}


export default APIHub;
