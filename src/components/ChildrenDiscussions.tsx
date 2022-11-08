import {
    TextField,
    Typography,
    InputLabel,
    MenuItem,
    FormControl,
    Select,
    SelectChangeEvent,
    Link,
    Box,
    Stack
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { FormEvent, SyntheticEvent, useState, useMemo, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector, useHttpRequest, useFormInputs } from "../hooks";
import ZapiHomeLogo from "../assets/images/ZapiHomeLogo.png";
import Cookies from "universal-cookie";
import { toast } from "react-toastify";

import { Add } from "@mui/icons-material";
import { useContextProvider } from "../contexts/ContextProvider";
import { DiscussionType, ChildrenDiscussionType } from "../types";
import { addChildrenDiscussion, getApisChildrenDiscussion } from "../redux/slices/apiSlice";

const core_url = import.meta.env.VITE_CORE_URL
interface Props {
    discussions: Array<ChildrenDiscussionType>
}


const ChildrenDiscussion: React.FC<Props> = ({ discussions }) => {
    const { loading, error, sendRequest, clearError } = useHttpRequest();
    const classes = useStyles()
    const cookies = new Cookies();
    const profile_id = cookies.get("profileId");

    const [tab, setTab] = useState<number>(0)
    const { handleClicked } = useContextProvider();
    const { triggerRefresh } = useContextProvider();
    // const dispatch = useAppDispatch();
    const { id } = useParams();
    console.log(discussions)

    return (
        <div className={classes.main}>
            <div className={classes.container}>
                {/* <div className={classes.discussion_tab}>

                </div> */}
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
                                <div className={classes.discussion_thread}>
                                    <Typography variant="h4" fontWeight={500} style={{ marginBottom: '2rem' }}>A Comment or Discussion about Text Summarizer</Typography>
                                    <div className={classes.discussion_row}>
                                        <img src={ZapiHomeLogo} alt="zapi-Home" />
                                        <div className={classes.discussion_column}>
                                            <Typography variant="body2" fontWeight={400}>User24</Typography>
                                            <Typography variant="body2" fontWeight={400}>5 hours ago</Typography>
                                        </div>
                                    </div>
                                    <Typography variant="body2" fontWeight={500} style={{ marginTop: '2rem' }}>A Comment or Discussion about Text Summarizer
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente, vel at eaque consequuntur explicabo dolore delectus, magnam quibusdam repellat debitis rerum. Alias vel amet dolore illum accusantium sequi error iste nisi vero corporis, odio ea repudiandae a laboriosam dolor vitae! Quaerat similique amet veritatis maxime quae minima, quisquam facere voluptatibus. Lorem ipsum dolor sit, amet consectetur adipisicing elit. In ea quibusdam facere dolorem perspiciatis? Fuga accusantium cupiditate soluta deleniti maiores eos animi dicta at molestias quidem, quaerat aliquid amet laborum maxime nisi veniam iusto dolor incidunt, sit illum iste ullam exercitationem aperiam. Ipsam doloremque voluptatum eaque dignissimos officia asperiores, dolores quibusdam, dolore eos temporibus, facilis consequatur! Veniam, fugiat est. Eos modi non recusandae consequuntur, quibusdam consectetur eum earum iste ullam quas officiis voluptas sapiente libero doloremque explicabo obcaecati dolor delectus, maiores, repellendus exercitationem voluptatibus laborum culpa. Sit doloremque consequatur, quasi amet sint nobis beatae neque laboriosam placeat itaque facilis laudantium?
                                    </Typography>
                                </div>
                                <div className={classes.container}>
                                    <div className={classes.discussion_tab}>

                                        <div className={classes.header}>
                                            {/* <h2>Discussions</h2> */}
                                        </div>
                                        <div>
                                            <button
                                                className={classes.newDiscussion}
                                                onClick={() => handleClicked("addChildrenDiscussion")}
                                                style={{ height: "46px" }}>
                                                <Add /> <Typography>New Discussion</Typography>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                {discussions.map((discussion: any) => (
                                    <>

                                        <div className={classes.discussion_nested_thread} key={discussion.id}>
                                            <div style={{ padding: '1rem' }}>
                                                <div className={classes.nested_discussion_row}>
                                                    <img src={ZapiHomeLogo} alt="zapi-Home" />
                                                    <div className={classes.nested_discussion_column}>
                                                        <Typography variant="body1" fontWeight={500}><Link sx={{ textDecoration: 'none', color: "#071b85" }} href={`/discussion/${discussion?.id}`} >{discussion?.body}</Link></Typography>
                                                        <Typography variant="body2" fontWeight={400}>{discussion?.createdOn?.toLocaleString()}</Typography>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <hr /> */}
                                    </>
                                ))}
                            </>
                        ) : (
                            <div className={classes.discussion_thread} style={{ width: '100%', backgroundColor: '#ffffff', paddingBottom: "4rem", display: 'flex', alignItems: 'center' }}>
                                <Typography variant="h5" >
                                    There are no  children discussions in this API.
                                </Typography>
                            </div>
                        )}
                </Box>
            </div>
        </div>
    )
}

export default ChildrenDiscussion;


const useStyles = makeStyles({
    main: {
        // marginTop:'5rem',
        height: "auto",
        padding: "1rem 2rem 0",
    },
    container: {
        width: "auto",
        display: "flex",
        paddingTop: "5rem",
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
    },

    discussion_nested_thread: {
        // background: "#F9FAFB",
        // border:'1px solid #071B85',
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        position: 'relative',
        left: '30',
        // gap: "3rem",
        justifyContent: "start",
        color: "#071B85",
        paddingLeft: "2rem",
        borderRadius: "15px",
        // border: '1px solid #071B85',
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
    nested_discussion_column: {
        display: "flex",
        justifyContent: "start",
        alignItems: "flex-start",
        flexDirection: "column",
        width: '100%',
        // gap: "5px",
        flexWrap: "wrap",
        color: "#071B85",
        padding: "1rem",
        borderRadius: "5px",
        // border: '1px solid #071B85',
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
    nested_discussion_row: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        maxWidth: '100%',
        flexDirection: "row",
        gap: "15px",
        // flexWrap: "wrap",
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
});
