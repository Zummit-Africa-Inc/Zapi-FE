import React, { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Cookies from "universal-cookie";
import { toast } from "react-toastify";

import { HomeNavbar, Footer, APIDesc, Endpoints } from "../sections";
import { useHttpRequest } from "../hooks";
import { Fallback,Discussion } from "../components";
import { APIType, DiscussionType, EndpointsType } from "../types";

const core_url = "VITE_CORE_URL";

const APIMoreInfo:React.FC = () => {
    const {error, loading, sendRequest} = useHttpRequest();
    const [api, setApi] = useState<APIType | null>(null)
    const [endpoints, setEndpoints] = useState<Array<EndpointsType> | null>(null)
    const [discussions, setDiscussions] = useState<Array<DiscussionType> | null>(null)
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
            const apiDiscussion = await sendRequest(`/discussion/${apiId}`, "get", core_url, {}, headers)

            const [api, endpoints,discussions] = await Promise.all([apiData, endpointsData,apiDiscussion])
            if (api === undefined || endpoints === undefined) return toast.error('Something went wrong')
            if(discussions === undefined) console.log("No discussion for now")
            console.log({api, endpoints, discussions})
            setApi(api.data);
            setEndpoints(endpoints.data)
            setDiscussions(discussions.data)
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
                    {discussions ?
                        <Discussion discussions={discussions} /> :
                        <Discussion discussions={discussions} /> 
                    }
                    
            <Footer />
            </>
        )}
        </>
    )
}


export default APIMoreInfo;
