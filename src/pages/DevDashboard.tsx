import React, { useEffect } from "react";

import { useContextProvider } from "../contexts/ContextProvider";
import { useAppDispatch, useAppSelector } from "../hooks";
import { getUserApis } from "../redux/slices/userSlice";
import { DevNavbar, DevAddApi  } from "../components";

const DevDashboard:React.FC = () => {
    const { isLoggedIn } = useAppSelector(store => store.user)
    const { trigger } = useContextProvider()
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getUserApis())
    },[(isLoggedIn === true),trigger])

    return (
        <>
        <DevNavbar />
        <DevAddApi />
        </>
    )
}

export default DevDashboard