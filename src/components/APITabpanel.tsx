import React, { useCallback, useEffect, useMemo, useState } from "react";
import { makeStyles } from "@mui/styles";
import Cookies from "universal-cookie";

import { useAppSelector, useHttpRequest } from "../hooks";
import { APIType } from "../types";
import { Spinner } from "../assets";
import TabPanel from "./TabPanel";
import APICard from "./APICard";

interface Props {
    value: any
    index: number
    categoryId: string
}

const APITabPanel:React.FC<Props> = ({value, index, categoryId}) => {
    const { categories } = useAppSelector(store => store.apis);
    const category = categories.find(category => category.id === categoryId);
    const { error, loading, sendRequest } = useHttpRequest();
    const [apis, setApis] = useState<Array<APIType>>([]);
    const cookies = new Cookies();
    const classes = useStyles();

    const getApisByCategory = useCallback(async(categoryId: string) => {
        const headers = {
            'Content-Type': "application/json",
            'X-Zapi-Auth-Token': `Bearer ${cookies.get("accessToken")}`
        }
        try {
            const data = await sendRequest(`/categories/${categoryId}/apis`, "get", "VITE_CORE_URL", undefined, headers)
            if(!data || data === undefined) return
            console.log(data)
        } catch (error) {}
    },[])
    
    return (
        <div>
            <TabPanel value={value} index={index}>
                {loading ? (
                    <div className={classes.centered}>
                        <Spinner width="150px" height="150px" borderWidth="8px" />
                    </div>
                ): (
                    <>
                    <div className={classes.header}>
                        <h2>{category?.name}</h2>
                        <p>{category?.description}</p>
                    </div>
                    <div className={classes.grid}>
                        {apis.map((api) => <APICard key={api.id} {...api} />)}
                    </div>
                    </>
                )}
            </TabPanel>
        </div>
    )
}

const useStyles = makeStyles({
    header: {
        display: "flex",
        flexDirection: "column",
        margin: "32px 0",
        color: "#081F4A",
        positon: "fixed",
        top: 0,
        left: 0,
    },
      grid: {
        width: "100%",
        height: "1150px",
        display: "grid",
        // gridTemplateColumns: "repeat(3, 1fr)",
        gridTemplateColumns: "repeat(auto-fit, minmax(267px, 1fr))",
        gridTemplateRows: "360px",
        gap: "1rem",
        padding: "1rem 0",
        overflowY: "scroll",
    },
    centered: {
        width: "100%",
        height: "1150px",
        display: "grid",
        placeItems: "center",
    }
})

export default APITabPanel