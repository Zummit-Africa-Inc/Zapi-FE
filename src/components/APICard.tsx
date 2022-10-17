import React from "react";
import { Link } from "react-router-dom";
import { Avatar, Paper, Stack, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { MdBookmarkBorder, MdNewReleases, MdOutlineAccessTime, MdOutlineBookmarkBorder, MdOutlineDone, MdOutlineNewReleases, MdOutlineTrendingUp, MdOutlineVerified } from "react-icons/md";

interface CardProps {
    id: string
    name: string
    description: string
    status: string | null
    image?: string
    latency?: number
    popularity?: number
    service_level?: number
};

const APICard: React.FC<CardProps> = ({id,name,description,status,image,latency,popularity,service_level}) => {
    const classes = useStyles();

    return (
        <Link to={`/developer/api/${id}`} className={classes.card}>
            <Paper elevation={3} className={classes.root}>
                <Stack direction="row" alignItems="center" justifyContent="space-between">
                    <Avatar src={image} variant="square" sx={{width:40,height:40,objectFit:"contain"}} />
                    <MdBookmarkBorder />
                </Stack>
                <Typography variant="h6" color="primary" my={2}>
                    {name}
                </Typography>
                <Stack height="30%">
                    <Typography variant="body2" fontWeight="light">
                        {description.substring(0, 150)}...
                    </Typography>
                </Stack>
                <Stack direction="row" alignItems="center" spacing={2} mb={4}>
                    {status === "verified" ? 
                    <>
                    <Typography variant="subtitle2">
                        Status: Verified 
                    </Typography> 
                    <MdOutlineVerified fontSize="small" color="success" />
                    </>:
                    <>
                    <Typography variant="subtitle2">
                        Status: Unverified 
                    </Typography>
                    <MdNewReleases fontSize="small" color="error" />
                    </>}
                </Stack>
                <Stack direction="row" alignItems="center" justifyContent="space-between">
                    <Typography variant="caption" className={classes.span}>
                        <MdOutlineTrendingUp /> {popularity}
                    </Typography>
                    <Typography variant="caption" className={classes.span}>
                        <MdOutlineAccessTime /> {latency}ms
                    </Typography>
                    <Typography variant="caption" className={classes.span}>
                        <MdOutlineDone /> {service_level}%
                    </Typography>
                </Stack>
            </Paper>
        </Link>
    );
};

const useStyles = makeStyles({
    root: {
        width: 300,
        height: 320,
        padding: "1rem 0.5rem",
    },
    span: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.5rem",
    },
    card: {
        transition: "0.2s all ease-in-out",
        "&:hover": {
            transform: "scale(1.03)",
        }
    }
});

export default APICard;