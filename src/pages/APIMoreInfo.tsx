import React, { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
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
            const apiDiscussion = await sendRequest(`/discussion/api/${apiId}`, "get", core_url, {}, headers)

            const [api, endpoints,discussions] = await Promise.all([apiData, endpointsData,apiDiscussion])
            if(api === undefined || endpoints === undefined || discussions === undefined) return
            console.log({api, endpoints, discussions})
            setApi(api.data);
            setEndpoints(endpoints.data)
            setDiscussions(discussions.data)
        } catch (error) {}
    }

    const memoizedApiCall = useMemo(() => (getApiData(id)),[])

    useEffect(() => { memoizedApiCall }, [])
    localStorage.setItem("api_id", JSON.stringify(api?.id));

    useEffect(() => {
        error && toast.error(`${error.message}`)
    },[error])

    if(loading) return <Fallback />

    return (
        <>
        {api && endpoints && (
            <>
            <HomeNavbar />
            <APIDesc api={api} />
                    <Endpoints endpoints={endpoints} />
                    {discussions &&
                        <Discussion discussions={discussions} />
                    }
                    
            <Footer />
            </>
        )}
        </>
    )
}


export default APIMoreInfo;
