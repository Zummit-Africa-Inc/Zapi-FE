import { useEffect, useMemo } from "react";

import { useContextProvider } from "../contexts/ContextProvider";
import { useAppDispatch, useAppSelector } from "../hooks";
import { getUserApis } from "../redux/slices/userSlice";
import { DevNavbar, DevAddApi  } from "../components";

const DevDashboard: React.FC = () => {
   
    const dispatch = useAppDispatch()

   

    return (
        <>
        <DevNavbar />
        <DevAddApi />
        </>
    )
}

export default DevDashboard