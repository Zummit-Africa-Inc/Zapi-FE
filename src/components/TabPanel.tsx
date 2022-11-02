import React from "react";
import { Box } from "@mui/material";

interface ITabPanel {
    children: React.ReactNode
    className?: string
    value: number
    index: number | string
};

const TabPanel: React.FC<ITabPanel> = ({ children, className, value, index }) => {
  console.log(`${index}` )
  return (
    <div className={className} role="tabpanel" hidden={value !== index} id={`simple-tab-${index}`}>
        {value === index && (
            <Box style={{padding: "0 0.5rem"}}>
                {children}
            </Box>
        )}
    </div>
  )
};

export default TabPanel;