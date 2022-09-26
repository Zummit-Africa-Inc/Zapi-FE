import React, { Suspense, useEffect, useMemo } from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import { deviceDetect } from "react-device-detect";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import { Analytics, CreateEndpoint, DevDashboard, DeveloperApiPage, Home, HomePage, Signup, UserProfile, ForgotPassword, LoginHistory, Otp, APIPage, SuccessPage, Configuration, TermsConditons, ResetPassword } from "./pages";
import { Fallback, Login, AddApiPopup, GeneralTab, EndpointTab, GatewayTab } from "./components";
import { useContextProvider } from "./contexts/ContextProvider";
import { getUserApis, login } from "./redux/slices/userSlice";
import { useAppDispatch, useAppSelector } from "./hooks";
import { PrivateRoutes } from "./components/routes";
import { getApis } from "./redux/slices/apiSlice";
import { getDeviceIP } from "./utils";
import { theme } from "./theme";

const App: React.FC = () => {
  const { isClicked, setDeviceLocation, setDeviceInfo, setDeviceIP } = useContextProvider()
  const { isLoggedIn } = useAppSelector(store => store.user)
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

  const getCategories = useMemo(() =>  (dispatch(getApis())), [])
  const getApisByUser = useMemo(() => dispatch(getUserApis()),[])
  
  useEffect(() => {
    getCategories
  }, [])

  useEffect(() => {
    getApisByUser
  },[isLoggedIn])

  return (
    <ThemeProvider theme={theme}>
      <ToastContainer />
      <div>
        <Suspense fallback={<Fallback />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/dashboard" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/otp" element={<Otp />} />
            <Route path="/reset-password/:token" element={<ResetPassword />} />
            <Route element={<PrivateRoutes />}>
              <Route path="/user/:id" element={<UserProfile />} />
              <Route path="/developers/dashboard" element={<DevDashboard />} />
              <Route path="/developers" element={<DeveloperApiPage />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/api/:id" element={<APIPage />} />
              <Route path="/configuration" element={<Configuration />} />
              <Route path="/login-history" element={<LoginHistory />} />
              <Route path="/success-page" element={<SuccessPage />} />
              <Route path="/create-endpoint" element={<CreateEndpoint />} />
              <Route path="/endpoints" element={<EndpointTab />} />
              <Route path="/general-tab" element={<GeneralTab />} />
              <Route path="/gateway-tab" element={<GatewayTab />} />
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
