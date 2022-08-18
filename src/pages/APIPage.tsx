import React from "react";
import AddApi from "../components/AddApi";
import ApiPageSidebar from "../components/ApiPageSidebar";
import { Navbar } from "../components";

const APIPage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <ApiPageSidebar
        addApi= {<AddApi />}
      />
    </div>
  )
}
export default APIPage