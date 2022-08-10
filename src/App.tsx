import React from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material";

import { Home, Login, Signup, UserProfile, ForgotPassword, Otp, APIPage } from "./pages";
import { theme } from "./theme";

const App:React.FC = () => {

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/otp" element={<Otp />} />

          <Route path="/signup" element={<Signup />} />
          <Route path="/user/:id" element={<UserProfile />} />
          <Route path="/api" element={<APIPage />} />
        </Routes>
      </div>
    </ThemeProvider>
  )
}

export default App