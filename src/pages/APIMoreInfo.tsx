import React, { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Cookies from "universal-cookie";
import { toast } from "react-toastify";

import { HomeNavbar, Footer, APIDesc, Endpoints } from "../sections";
import { useHttpRequest } from "../hooks";
import { Fallback } from "../components";
import { APIType, EndpointsType } from "../types";

const core_url = "VITE_CORE_URL";

const APIMoreInfo:React.FC = () => {
    const {error, loading, sendRequest} = useHttpRequest();
    const [api, setApi] = useState<APIType | null>(null)
    const [endpoints, setEndpoints] = useState<Array<EndpointsType> | null>(null)
    const navigate  =  useNavigate();
    const cookies = new Cookies();
    const {id} = useParams();

    const getApiData = async(apiId: string | undefined) => {
        if(!apiId) return
        const headers = {
            'Content-Type': "application/json",
            'X-Zapi-Auth_Token': `Bearer ${cookies.get("accessToken")}`
        }
        try {
            const apiData = await sendRequest(`/api/findOne/${apiId}`, "get", core_url, {}, headers)
            const endpointsData = await sendRequest(`/endpoints/${apiId}`, "get", core_url, {}, headers)

            const [api, endpoints] = await Promise.all([apiData, endpointsData])
            if(api === undefined || endpoints === undefined) return toast.error('Something went wrong')
            console.log({api, endpoints})
            setApi(api.data);
            setEndpoints(endpoints.data)
        } catch (error) {}
    }

    const memoizedApiCall = useMemo(() => (getApiData(id)),[])

    useEffect(() => { memoizedApiCall },[])

    if(loading) return <Fallback />

    return (
        <>
        {api && endpoints && (
            <>
            <HomeNavbar />
            <APIDesc api={api} />
            <Endpoints endpoints={endpoints} />
            <Footer />
            </>
        )}
        </>
    )
}


export default APIMoreInfo;
