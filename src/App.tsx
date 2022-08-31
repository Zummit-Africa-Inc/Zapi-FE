import React, { Suspense, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import { deviceDetect } from "react-device-detect";

import { DevDashboard, Home, Homepage, Signup, UserProfile, ForgotPassword, LoginHistory, Otp, APIPage, Analytics, SuccessPage, Configuration, OrgPage } from "./pages";
import { useContextProvider } from "./contexts/ContextProvider";
import { Fallback, Login } from "./components";
import { getDeviceIP } from "./utils";
import { theme } from "./theme";


const App:React.FC = () => {
  const { isClicked, setDeviceLocation, setDeviceInfo, setDeviceIP } = useContextProvider()

  useEffect(() => {
    const device = deviceDetect(navigator.userAgent)
    setDeviceInfo(device)
  },[])

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setDeviceLocation({
        lat: position.coords.latitude,
        lon: position.coords.longitude,
        time: position.timestamp
      })
    })
  },[])

  useEffect(() => {
    const getIPAddress = async() => {
      const data = await getDeviceIP()
      setDeviceIP(data)
    }
    getIPAddress()
  },[])

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Suspense fallback={<Fallback />}>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/dashboard" element={<Home />} />

            <Route path="/signup" element={<Signup />} />
            <Route path="/user/:id" element={<UserProfile />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/otp" element={<Otp />} />
            <Route path="/developers/dashboard/" element={<DevDashboard />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/api/:id" element={<APIPage />} />
            <Route path="/configuration" element={<Configuration />} />
            <Route path="/login-history" element={<LoginHistory/> } />
            <Route path="/success-page" element={<SuccessPage />} />
            <Route path="/OrgPage" element={<OrgPage />} />
          </Routes>
        </Suspense>
        {isClicked.login && <Login />}
      </div>
    </ThemeProvider>
  )
}

export default App
