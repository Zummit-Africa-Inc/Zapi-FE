import React from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import { DevDashboard, Home, Login, Signup, UserProfile, ForgotPassword, LoginHistory, Otp, APIPage, Analytics, SuccessPage, EndPoint, CreateEndpoint, Configuration } from "./pages";

import { theme } from "./theme";

const App:React.FC = () => {

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
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
          <Route path="/endpoint" element={<EndPoint />} />
          <Route path="/add-endpoint" element={<CreateEndpoint />} />

        </Routes>
      </div>
    </ThemeProvider>
  )
}

export default App
