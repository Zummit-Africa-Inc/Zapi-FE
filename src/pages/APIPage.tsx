import React from "react";
import AddApi from "../components/AddApi";
import Configuration from "../pages/Configuration";
import ApiPageSidebar from "../components/ApiPageSidebar";
import { Navbar } from "../components";

const APIPage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <ApiPageSidebar
        addApi= {<AddApi />} configuration= {<Configuration />}
      />
    </div>
  )
}
export default APIPage