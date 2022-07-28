import React from "react";
import { Link } from "react-router-dom";
import { Avatar, Paper, Stack, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
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
    const classes = useStyles()

    return (
        <Link to={`/api/${id}`}>
            <Paper elevation={3} className={classes.root}>
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
                    <Typography variant="caption" className={classes.span}>
                        <ShowChartOutlined /> {popularity}
                    </Typography>
                    <Typography variant="caption" className={classes.span}>
                        <AccessTimeOutlined /> {latency}ms
                    </Typography>
                    <Typography variant="caption" className={classes.span}>
                        <DoneOutlined /> {service_level}%
                    </Typography>
                </Stack>
            </Paper>
        </Link>
    );
};

const useStyles = makeStyles({
    root: {
        width: 300,
        height: 400,
        padding: "1rem 0.5rem",
    },
    span: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "1rem",
    }
})

export default APICard;