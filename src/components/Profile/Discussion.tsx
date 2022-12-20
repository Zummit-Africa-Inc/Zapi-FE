import React, { useState, useMemo, useEffect } from "react";
import { Stack, Typography } from "@mui/material";
import Cookie from "universal-cookie";
import { useHttpRequest } from "../../hooks";
import { DiscussionType } from "../../types";
import { Link } from "react-router-dom";

const core_url = "VITE_CORE_URL";

const Discussion = () => {
  const [discussion, setDiscussion] = useState<Array<DiscussionType>>([]);
  const cookies = new Cookie();
  const { sendRequest } = useHttpRequest();

  const getApiData = async () => {
    const headers = {
      "Content-Type": "application/json",
      "X-Zapi-Auth_Token": `Bearer ${cookies.get("accessToken")}`,
    };
    try {
      const data = await sendRequest(
        `/discussion/get/user-discussions`,
        "get",
        core_url,
        {},
        headers
      );
      if (data === undefined) return;
      console.log(data);
      setDiscussion(data.data);
    } catch (error) {}
  };

  const memoizedApiCall = useMemo(() => getApiData(), []);
  useEffect(() => {
    memoizedApiCall;
  }, []);

  return (
    <Stack sx={{ height: "100%" }}>
      <Stack
        direction="row"
        spacing={1}
        sx={{
          borderBottom: "1px solid #000000",
          width: "100%",
        }}>
        <Typography variant="h4">Discussions</Typography>
        <Typography
          sx={{ background: "#081F4A", color: "#fff", padding: ".5rem" }}>
          {discussion.length}
        </Typography>
      </Stack>
      {discussion?.length !== 0 ? (
        <Stack>
          {discussion?.map((disc, id) => (
            <Link to={`/discussion/${disc.id}`}>
              <Stack
                key={id}
                direction="row"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "0 2rem",
                  height: "3rem",
                  borderBottom: "1px solid #000000",
                  color: "#0000FF",
                }}>
                <Typography variant="subtitle1" sx={{}}>
                  {disc.title}
                </Typography>
                <Typography>
                  {new Date(disc?.createdOn).toLocaleDateString()}
                </Typography>
              </Stack>
            </Link>
          ))}
        </Stack>
      ) : (
        <Stack>
          <Typography
            variant="body1"
            sx={{ color: "#000", textAlign: "center", margin: "2rem 0" }}>
            This user has posted no discussions yet
          </Typography>
        </Stack>
      )}
    </Stack>
  );
};

export default Discussion;
