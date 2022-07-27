import React from "react";
import { Link } from "react-router-dom";
import { Avatar, Paper, Stack, Typography } from "@mui/material";
import { AccessTimeOutlined, BookmarkOutlined, DoneOutlined, NewReleasesOutlined, ShowChartOutlined, VerifiedOutlined } from "@mui/icons-material";

interface CardProps {
    id: string
    name: string
    description: string
    status: string
    image?: string
    latency?: number
    popularity?: number
    service_level?: number
}

const APICard: React.FC<CardProps> = ({id,name,description,status,image,latency,popularity,service_level}) => {

    return (
        <Link to={`/api/${id}`}>
            <Paper elevation={3}>
                <Stack direction="row" alignItems="center" justifyContent="space-between">
                    <Avatar src={image} variant="square" sx={{ width: 32,height: 32,objectFit:"contain"}} />
                    <BookmarkOutlined />
                </Stack>
                <Typography variant="h6" color="primary" my={2}>
                    {name}
                </Typography>
                <Typography variant="body2" fontWeight="light" px={2}>
                    {description}
                </Typography>
                <Stack direction="row" alignItems="center" spacing={2} my={2}>
                    Status: {status === "verified" ? 
                    <Typography>
                        Verified <VerifiedOutlined color="success" />
                    </Typography> :
                    <Typography>
                        Unverified <NewReleasesOutlined color="error" />
                    </Typography>}
                </Stack>
                <Stack direction="row" alignItems="center" justifyContent="space-between">
                    <Typography variant="caption">
                        <ShowChartOutlined /> {popularity}
                    </Typography>
                    <Typography variant="caption">
                        <AccessTimeOutlined /> {latency}ms
                    </Typography>
                    <Typography variant="caption">
                        <DoneOutlined /> {service_level}%
                    </Typography>
                </Stack>
            </Paper>
        </Link>
    );
};

export default APICard;