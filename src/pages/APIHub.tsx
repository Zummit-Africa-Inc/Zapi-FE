import React from 'react'

import { HomeNavbar, Footer, APIHubTab, APIHubHeader } from '../sections'


const APIHub:React.FC = () => {

    return (
        <>
            <HomeNavbar />
            <APIHubHeader/>
            <APIHubTab/>
            <Footer />
        </>
    )
}


export default APIHub;
