import React from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import { DevDashboard, Home, Login, Signup, UserProfile, ForgotPassword, Otp, Analytics } from "./pages";
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
        </Routes>
      </div>
    </ThemeProvider>
  )
}

export default App