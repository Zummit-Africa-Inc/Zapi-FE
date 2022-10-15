import './App.css';
import React, { Suspense, useEffect, useMemo } from "react";
import { Routes, Route } from  "react-router-dom";
import { ThemeProvider } from "@mui/material";
import { deviceDetect } from  "react-device-detect";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import { DevDashboard, DeveloperApiPage, HomePage, Signup, UserProfile, ForgotPassword, LoginHistory, Otp, APIPage, SuccessPage, Configuration, TermsConditions, ResetPassword, Pricing, Documentation, APIHub, Notifications } from "./pages";
import { Fallback, Login, AddApiPopup, } from "./components";
import { useContextProvider } from "./contexts/ContextProvider";
import { login } from "./redux/slices/userSlice";
import { useAppDispatch, useAppSelector } from "./hooks";
import { PrivateRoutes } from "./components/routes";
import { getUserApis } from "./redux/slices/userSlice";
import { getApis, getApiCategories } from "./redux/slices/apiSlice";
import { getDeviceIP } from "./utils";
import { theme } from "./theme";
import Cookies from 'universal-cookie';

const App: React.FC = () => {
  const { isClicked, setDeviceLocation, setDeviceInfo, setDeviceIP } = useContextProvider()
  const { trigger } = useContextProvider()
  const cookies = new Cookies()
  const profileId = cookies.get("profileId")
  const dispatch = useAppDispatch()

  useEffect(() => {
    const device = deviceDetect(navigator.userAgent)
    setDeviceInfo(device)
  }, []);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setDeviceLocation({
        lat: position.coords.latitude,
        lon: position.coords.longitude,
        time: position.timestamp
      })
    })
  }, []);

  useEffect(() => {
    const getIPAddress = async() => {
      const data = await getDeviceIP()
      setDeviceIP(data)
    }
    getIPAddress()
  },[])

  useEffect(() => {
    const loginUser = () => {
      const item = localStorage.getItem("zapi_user")
      if (!item) return
      const user = JSON.parse(item)
      dispatch(login(user))
    }
    loginUser()
  }, []);

  const getCategories = useMemo(() =>  (dispatch(getApiCategories())),[])
  const getApi = useMemo(() => (dispatch(getApis())),[])

  useEffect(() => {
    getCategories
  },[])

  useEffect(() => {
    getApi
  },[])
  
  useEffect(() => {
    if (profileId === undefined) return 
    dispatch(getUserApis(profileId))
  },[profileId])

  return (
    <ThemeProvider theme={theme}>
      <ToastContainer />
      <div>
        <Suspense fallback={<Fallback />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/otp" element={<Otp />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/documentation" element={<Documentation />} />
            <Route path="/terms" element={<TermsConditions />} />
            <Route path="/api-hub" element={<APIHub />} />


            <Route element={<PrivateRoutes />}>
              <Route path="/user/:id" element={<UserProfile />} />
              <Route path="/developer/dashboard" element={<DevDashboard />} />
              <Route path="/developer/api/:id" element={<DeveloperApiPage />} />
              <Route path="/api/:id" element={<APIPage />} />
              <Route path="/configuration" element={<Configuration />} />
              <Route path="/login-history" element={<LoginHistory />} />
              <Route path="/success-page" element={<SuccessPage />} />
            </Route>
          </Routes>
        </Suspense>

        {isClicked.login && <Login />}
        {isClicked.addapi && <AddApiPopup />}
      </div>
    </ThemeProvider>
  )
}

export default App
