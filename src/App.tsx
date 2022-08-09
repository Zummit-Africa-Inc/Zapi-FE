import React from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material";

import { Home, Login, OrgPage } from "./pages";
import { theme } from "./theme";

const App:React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/orgpage" element= {<OrgPage />} />
      </Routes>
    </ThemeProvider>
  )
}

export default App