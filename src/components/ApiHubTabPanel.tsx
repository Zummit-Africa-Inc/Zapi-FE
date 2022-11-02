import React, { SyntheticEvent, useState, useEffect, FormEvent } from "react";
import { Box } from "@mui/material";
import { useAppDispatch, useAppSelector, useHttpRequest } from "../hooks";

interface IApiHubTabPanel {
  children: React.ReactNode;
  className?: string;
  value: number;
  index: number | string;
  categoryId: string;
}

const ApiHubTabPanel: React.FC<IApiHubTabPanel> = ({
  children,
  className,
  value,
  index,
}) => {
  // const { apis, categories } = useAppSelector(store => store.apis)
  // const [categoryId, setCategoryId] = useState<String>("");
  // const { error, loading, sendRequest } = useHttpRequest();
  // const core_url = import.meta.env.VITE_CORE_URL;
  // console.log(categoryId)
  // const handleSelector = async () => {
  //     const headers = {
  //       "Content-Type": "application/json",
  //     };
  //     try {
  //       const data = await sendRequest(
  //         `/categories/${categoryId}/apis`,
  //         "get",
  //         core_url,
  //         undefined,
  //         headers
  //       );
  //       if (!data.success) return;
  //       // dispatch(editAPI(payload));
  //       // navigate("/developer/dashboard");
  //     } catch (error) {}
  // }

  // useEffect(() => {
  //     handleSelector();
  // },[categoryId])

  // console.log(`${index}` )
  return (
    <div
      className={className}
      role="apihubtabpanel"
      hidden={value !== index}
      id={`simple-tab-${index}`}>
      {value === index && <Box style={{ padding: "0 0.5rem" }}>{children}</Box>}
    </div>
  );
};

export default ApiHubTabPanel;
