import React from 'react'

import { HomeNavbar, Footer, APIDesc, Endpoints } from '../sections'


const APIMoreInfo:React.FC = () => {

    return (
        <>
            <HomeNavbar />
            <APIDesc />
            <Endpoints />
            <Footer />
        </>
    )
}


export default APIMoreInfo;
