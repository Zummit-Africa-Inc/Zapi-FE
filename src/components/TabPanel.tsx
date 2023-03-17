import React from "react";
import { Box } from "@mui/material";

interface ITabPanel {
  children: React.ReactNode;
  className?: string;
  value: number;
  index: number | string;
  borderRight?: string;
}

const TabPanel: React.FC<ITabPanel> = ({
  children,
  className,
  value,
  index,
  borderRight,
}) => {
  return (
    <Box
      style={{ width: "100%", height: "100%"}}
      className={className}
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tab-${index}`}>
      {value === index && <Box style={{ padding: "0 0rem", height: "100%", borderRight: borderRight }}>{children}</Box>}
    </Box>
  );
};

export default TabPanel;
