import {
    Typography,
    Link,
    Box,
    Pagination,
    Button,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import { usePagination } from "../hooks";
import ZapiHomeLogo from "../assets/images/ZapiHomeLogo.png";
import { Add } from "@mui/icons-material";
import { useContextProvider } from "../contexts/ContextProvider";
import { DiscussionType } from "../types";


// const core_url = import.meta.env.VITE_CORE_URL
interface Props {
    discussions: Array<DiscussionType>
}
const Discussion: React.FC<Props> = ({ discussions }) => {
    const classes = useStyles()
    const [tab, setTab] = useState<number>(0)
    const { handleClicked } = useContextProvider();
    const PER_PAGE = 6;
    const count = Math.ceil(discussions.length / PER_PAGE);
    const _DATA = usePagination(discussions, PER_PAGE);
    const [page, setPage] = useState(1);

    const handleChange = (event: unknown, value: number) => {
        setPage(value);
        _DATA.jump(value);
    };

    return (
        <Box className={classes.main}>
            <Box className={classes.container}>
                <Box className={classes.discussion_tab}>
                    <Box className={classes.header}>
                        <Typography variant="h2" fontWeight={500}>Discussions</Typography>
                    </Box>
                    <Box>
                        <Button
                            variant="contained"
                            sx={{background: "#071B85",color: "#FFFFFF"}}
                            className={classes.newDiscussion}
                            onClick={() => handleClicked("addDiscussion")}
                            style={{ height: "46px" }}>
                            <Add /> <Typography>New Discussion</Typography>
                        </Button>
                    </Box>
                </Box>
            </Box>
            <Box className={classes.discussions_container}>
                <Box
                    sx={{
                        width: '90%',
                        height: 'auto',
                        borderRadius: 0,
                    }}
                >
                    {discussions.length !== 0 ?
                        (
                            <>
                                {_DATA.currentData().map((discussion: any) => (
                                    <Box className={classes.discussion_thread} key={discussion.id}>
                                        <Box className={classes.discussion_row}>
                                            <img src={ZapiHomeLogo} alt="zapi-Home" />
                                            <Box className={classes.discussion_column}>
                                                <Typography variant="body1" fontWeight={500}><Link sx={{ textDecoration: 'none', color: "#071b85" }} href={`/discussion/${discussion.id}`} >{discussion.title}</Link></Typography>
                                                <Typography variant="body2" fontWeight={400}>commented on - {new Date(discussion?.createdOn).toLocaleDateString()}</Typography>
                                            </Box>
                                        </Box>
                                    </Box>
                                ))}
                                <Pagination
                                    count={count}
                                    className={classes.pagination}
                                    size="large"
                                    page={page}
                                    color="primary"
                                    shape="circular"
                                    onChange={handleChange}
                                />
                            </>
                        ) : (
                            <Box className={classes.discussion_thread} style={{ width: '100%', backgroundColor: '#ffffff', padding: '4rem 0', display: 'flex', alignItems: 'center' }}>
                                <Typography variant="h5" >
                                    There are no discussions in this API.
                                </Typography>
                            </Box>
                        )}
                </Box>
            </Box>
        </Box>
    )
}

export default Discussion;

const useStyles = makeStyles({
    main: {
        height: "auto",
        padding: "1rem 2rem 0",
    },
    container: {
        width: "auto",
        display: "flex",
        justifyContent: "center",
        gap: "32px",
        "@media screen and (max-width: 1024px)": {
            margin: "0 0 109px 2rem",
        },
        "@media screen and (max-width: 900px)": {

        },
        "@media screen and (max-width: 820px)": {
            gap: "22px",

        },
        "@media screen and (max-width: 770px)": {

        },
        "@media screen and (max-width: 375px)": {
            margin: "0 0 50px 1rem",
        }

    },
    discussion_tab: {
        display: "flex",
        width: "90%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "1rem",
        "@media screen and (max-width: 1024px)": {
            flexDirection: "column",
        },
    },
    header: {
        display: "flex",
        flexDirection: "column",
        margin: "32px 0",
        color: "#071B85",
        top: 0,
        left: 0,
        "& h2": {
            marginBottom: "3px",
            fontSize: "22px",
            "@media screen and (max-width: 820px)": {
                fontSize: "20px",
            },
        },
        "& p": {
            fontSize: "14px",
            "@media screen and (max-width: 820px)": {
                fontSize: "12px",
            },
        },
    },
    newDiscussion: {

        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        padding: "8px 16px",
        gap: "16px",
        width: "200px",
        lineHeight: "46px",
        background: "#071B85",
        borderRadius: "8px",
        cursor: "pointer",
        color: "#FFFFFF",
        border: "none",
        fontWeight: "500",
        fontSize: "16px",
        "@media screen and (max-width: 1024px)": {
            marginBottom: "1rem",
            width: "385px",
        },
        "@media screen and (max-width: 500px)": {
        },
    },
    discussions_container: {
        width: "100%",
        height: 'auto',
        display: 'flex',
        justifyContent: "center",
        marginBottom: '3rem'
    },

    discussion_thread: {
        background: "#F9FAFB",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "start",
        color: "#071B85",
        padding: "16px",
        borderBottom: "1px solid #071B85",
    },

    discussion_column: {
        display: "flex",
        justifyContent: "start",
        alignItems: "flex-start",
        flexDirection: "column",
        flexWrap: "wrap",
        color: "#071B85",
    },
    discussion_row: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        gap: "35px",
        flexWrap: "wrap",
        color: "#071B85",
        paddingLeft: '2rem',
    },
    pagination: {
        display: "flex",
        padding: '1rem',
        position: "relative",
        bottom: "0",
        justifyContent: "center",
    },
});
