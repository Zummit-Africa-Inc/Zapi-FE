import {
    Typography,
    Link,
    Box,
    Pagination
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
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
        <div className={classes.main}>
            <div className={classes.container}>
                <div className={classes.discussion_tab}>

                    <div className={classes.header}>
                        <h2>Discussions</h2>
                    </div>
                    <div>
                        <button
                            className={classes.newDiscussion}
                            onClick={() => handleClicked("addDiscussion")}
                            style={{ height: "46px" }}>
                            <Add /> <Typography>New Discussion</Typography>
                        </button>
                    </div>
                </div>
            </div>

            <div className={classes.discussions_container}>
                <Box
                    sx={{
                        width: '90%',
                        height: 'auto',
                        borderRadius: 0,
                        // backgroundColor: '#F8F9F9',
                    }}
                >
                    {discussions.length !== 0 ?
                        (
                            <>
                                {_DATA.currentData().map((discussion: any) => (
                                    // <>
                                    <div className={classes.discussion_thread} key={discussion.id}>
                                        <div className={classes.discussion_row}>
                                            <img src={ZapiHomeLogo} alt="zapi-Home" />
                                            <div className={classes.discussion_column}>
                                                <Typography variant="body2" fontWeight={400}>{discussion.title}</Typography>
                                                <Typography variant="body1" fontWeight={500}><Link sx={{ textDecoration: 'none', color: "#071b85" }} href={`/discussion/${discussion.id}`} >{discussion?.body}</Link></Typography>
                                                <Typography variant="body2" fontWeight={400}>{discussion?.createdOn?.toLocaleString()}</Typography>
                                            </div>
                                        </div>
                                    </div>

                                    // </>
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
                            <div className={classes.discussion_thread} style={{ width: '100%', backgroundColor: '#ffffff', padding: '4rem 0', display: 'flex', alignItems: 'center' }}>
                                <Typography variant="h5" >
                                    There are no discussions in this API.
                                </Typography>
                            </div>
                        )}
                </Box>
            </div>
        </div>
    )
}

export default Discussion;

const useStyles = makeStyles({
    main: {
        // marginTop:'5rem',
        height: "auto",
        padding: "1rem 2rem 0",
    },
    container: {
        width: "auto",
        display: "flex",
        justifyContent: "center",
        gap: "32px",
        // margin: "0 0 0 5rem",
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
            // width: "100%",
        },
    },
    discussions_container: {
        width: "100%",
        // margin: "0 5rem 0 10rem",
        height: 'auto',
        display: 'flex',
        justifyContent: "center",
        marginBottom: '3rem'
    },

    discussion_thread: {
        background: "#F9FAFB",
        // border:'1px solid #071B85',
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        // gap: "3rem",
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
        // gap: "5px",
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
    brandText: {
        display: "flex",
        alignItems: "center",
        color: "#071B85",
    },
    hr: {
        backgroundColor: '#071B85',
        color: "#071B85",
    },
    pagination: {
        display: "flex",
        padding: '1rem',
        position: "relative",
        bottom: "0",
        justifyContent: "center",
    },
});
