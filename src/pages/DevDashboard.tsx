import React, { useEffect } from "react";
import Cookies from "universal-cookie";

import { useContextProvider } from "../contexts/ContextProvider";
import { useAppDispatch, useAppSelector } from "../hooks";
import { getUserApis, getSubscribedApis } from "../redux/slices/userSlice";
import { DevNavbar, DevAddApi  } from "../components";

const DevDashboard:React.FC = () => {
    const { isLoggedIn } = useAppSelector(store => store.user)
    const { trigger } = useContextProvider()
    const dispatch = useAppDispatch()

    const cookies = new Cookies()
    const profileId = cookies.get("profileId")

    useEffect(() => {
        dispatch(getUserApis(`${profileId}`))
    },[(isLoggedIn === true),trigger])

    useEffect(() => {
        dispatch(getSubscribedApis(`${profileId}`))
    },[(isLoggedIn === true),trigger])

    return (
        <>
        <DevNavbar />
        <DevAddApi />
        </>
    )
}

export default DevDashboard