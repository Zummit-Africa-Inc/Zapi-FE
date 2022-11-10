import React, { ChangeEvent, useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import Cookies from "universal-cookie";
import { toast } from "react-toastify";
import { Tab, Tabs } from "@mui/material";
import { makeStyles, styled } from "@mui/styles";

import { HomeNavbar, Footer, APIDesc, Endpoints } from "../sections";
import { APIType, EndpointsType } from "../types";
import { useHttpRequest } from "../hooks";
import { Fallback, TabPanel } from "../components";

const core_url = "VITE_CORE_URL";

const CustomTabs = styled(Tabs)({
    "&.MuiTabs-root": {
      width: "auto",
      fontSize: 500,
    },
    "& .MuiTabs-indicator": {
      display: "none",
    },
});
  
const CustomTab = styled(Tab)({
    "&.MuiTab-root": {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        fontWeight: "normal",
        fontSize: "14px",
    },
    "&.Mui-selected": {
        backgroundColor: "#f1f1f1",
    },
});

const APIMoreInfo:React.FC = () => {
    const {error, loading, sendRequest} = useHttpRequest();
    const [tab, setTab] = useState<number>(0);
    const [api, setApi] = useState<APIType | null>(null)
    const [endpoints, setEndpoints] = useState<Array<EndpointsType> | null>(null);
    const cookies = new Cookies();
    const classes = useStyles();
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
            if(api === undefined || endpoints === undefined) return
            setApi(api.data);
            setEndpoints(endpoints.data)
        } catch (error) {}
    }

    const memoizedApiCall = useMemo(() => (getApiData(id)),[])

    const handleTabChange = (e: ChangeEvent<unknown>, value: number) => setTab(value)

    useEffect(() => { memoizedApiCall },[])

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
            <CustomTabs value={tab} onChange={handleTabChange}>
                <CustomTab label="Endpoints" />
                <CustomTab label="Discussions" />
                <CustomTab label="Reviews" />
            </CustomTabs>
            <div className={classes.tabpanel}>
                <TabPanel value={tab} index={0}>
                    <Endpoints endpoints={endpoints} />
                </TabPanel>
                <TabPanel value={tab} index={1}>
                    <div></div>
                </TabPanel>
                <TabPanel value={tab} index={2}>
                    <div></div>
                </TabPanel>
            </div>
            <Footer />
            </>
        )}
        </>
    )
}

const useStyles = makeStyles({
    tabpanel: {
        width: "100%",
        minHeight: "500px",
        margin: "1rem 0 0",
    }
})

export default APIMoreInfo;
