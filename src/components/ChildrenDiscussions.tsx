import React, { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Cookies from "universal-cookie";
import { toast } from "react-toastify";
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
import { StackedLineChart, TimerOutlined, Check } from "@mui/icons-material";

import { makeStyles } from "@mui/styles";
import { HomeNavbar, Footer, APIDesc, Endpoints } from "../sections";
import { useHttpRequest,useAppSelector } from "../hooks";
import ZapiHomeLogo from "../assets/images/ZapiHomeLogo.png";
import { Fallback, Discussion } from "../components";
import { APIType, ChildrenDiscussionType, DiscussionType, EndpointsType } from "../types";
import ReactGA from "react-ga4";

const core_url = "VITE_CORE_URL";

interface Props {
    childDiscussion: Array<ChildrenDiscussionType> | null
    // api: APIType
}
const ChildrenDiscussions: React.FC<Props> = ({ childDiscussion }) => {
    const { error, loading, sendRequest } = useHttpRequest();
    const [api, setApi] = useState<APIType | null>(null)
    const [discussions, setDiscussions] = useState<Array<DiscussionType> | null>(null)
    const navigate = useNavigate();
    const classes = useStyles()
    const cookies = new Cookies();
    const { id } = useParams();
    // const { categories } = useAppSelector(store => store.apis)
    // const category = categories.find((category) => category.id === api.categoryId)
    ReactGA.send({ hitType: "pageview", page: "/discussion/id" });

    const getApiData = async (apiId: string | undefined) => {
        if (!apiId) return
        const headers = {
            'Content-Type': "application/json",
            'X-Zapi-Auth_Token': `Bearer ${cookies.get("accessToken")}`
        }
        try {
            const apiDiscussion = await sendRequest(`/discussion/${apiId}`, "get", core_url, {}, headers)

            const [discussions] = await Promise.all([apiDiscussion])
            if (discussions === undefined) console.log("No Child discussion for under this discussion")
            console.log({ discussions })
            setDiscussions(discussions.data)
        } catch (error) { }
    }

    console.log(childDiscussion);
    console.log(discussions);
    const memoizedApiCall = useMemo(() => (getApiData(id)), [])

    useEffect(() => { memoizedApiCall }, [])

    if (loading) return <Fallback />

    return (
        <>

            <>
                <div className={classes.root}>
                {/* <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px", padding: "0 20px 15px 0", borderBottom: "1px solid #d1d1d1" }}>
                <div>
                    <h2>{api.name}</h2>
                    <p style={{ lineHeight: "1px", fontSize: "13px", color: "#515D99" }}>
                        Category: {category?.name}
                    </p>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", gap: "1rem", }}>
                    <div className={classes.item}>
                        <div className={classes.subItem}>
                            <p className={classes.itemHeader}>Popularity</p>
                            <StackedLineChart sx={{ width: "19px" }} className={classes.itemIcon} />
                        </div>
                        <p className={classes.itemTitle}>{api.popularity}/10</p>
                    </div>
                    <div className={classes.item}>
                        <div className={classes.subItem}>
                            <p className={classes.itemHeader}>Latency</p>
                            <TimerOutlined sx={{ width: "19px" }} className={classes.itemIcon} />
                        </div>
                        <p className={classes.itemTitle}>{api.latency}ms</p>
                    </div>
                    <div className={classes.item}>
                        <div className={classes.subItem}>
                            <p className={classes.itemHeader}>Service level</p>
                            <Check sx={{ width: "19px" }} className={classes.itemIcon} />
                        </div>
                        <p className={classes.itemTitle}>{api.service_level}%</p>
                    </div>
                </div>
            </div> */}
                    {/* <p className={classes.description}>{api.description}</p>
            <Typography sx={{margin:"24px 0 0",fontSize:"21px",fontWeight:"bold",color:"#515D99"}}>Base URL</Typography>
            <p className={classes.description}>{api.base_url}</p>
            <Typography sx={{margin:"24px 0 0",fontSize:"21px",fontWeight:"bold",color:"#515D99"}}>Website</Typography>
            <p className={classes.description}>
                Website: {api.api_website ? <a href={`${api.api_website}`} target="_blank" rel="noreferrer">{api.api_website}</a> : "Website not specified"}
            </p>
            <Typography sx={{margin:"24px 0 0",fontSize:"21px",fontWeight:"bold",color:"#515D99"}}>Documentation</Typography>
            <p className={classes.description}>{api.read_me ? api.read_me : "ReadMe file not attached"}</p> */}
                    {/* {discussions ?
                        (
                            <div className={classes.discussions_container}>
                                    <Box
                                        sx={{
                                            width: '90%',
                                            height: 'auto',
                                            borderRadius: 0,
                                            backgroundColor: '#F8F9F9',
                                        }}
                                    >
                                        {discussion && discussion.length !== 0 ?
                                            (
                                                <div>
                                                    {discussion?.map((discussion, index) => (
                                                        <>
                                                            <div className={classes.discussion_thread} key={index}>
                                                                <div className={classes.discussion_row}>
                                                                    <img src={ZapiHomeLogo} alt="zapi-Home" />
                                                                    <div className={classes.discussion_column}>
                                                                        <Typography variant="body2" fontWeight={400}>{discussion.title}</Typography>
                                                                        <Typography variant="body1" fontWeight={500}><Link sx={{ textDecoration: 'none', color: "#071b85" }} href={`/discussion/${discussion.id}`} >{discussion?.body}</Typography>
                                                                        <Typography variant="body2" fontWeight={400}>{discussion?.createdOn?.toLocaleString()}</Typography>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <hr />
                                                        </>
                                                    ))}
                                                </div>
                                            ) : (
                                                <div style={{ width: '100%', backgroundColor: '#ffffff', padding: '4rem 0' }}>
                                                    <Typography variant="h5" >
                                                        There are no Children Discussions in this API.
                                                    </Typography>
                                                </div>
                                            )}
                                    </Box>
                            </div>
                        ) :
                        ( */}
                    <div className={classes.discussions_container}>
                        {discussions && discussions.length !== 0 ?
                            (
                                <Box
                                    sx={{
                                        width: '90%',
                                        height: 'auto',
                                        borderRadius: 0,
                                        // backgroundColor: ',
                                    }}
                                >
                                    <div>
                                        {discussions?.map((discussion, index) => (
                                            <>
                                                <div className={classes.discussion_thread} key={index}>
                                                    <div style={{ padding: '1rem' }}>
                                                        <div className={classes.discussion_row}>
                                                            <img src={ZapiHomeLogo} alt="zapi-Home" />
                                                            <div className={classes.discussion_column}>
                                                                <Typography variant="body2" fontWeight={400}>{discussion.title}</Typography>
                                                                <Typography variant="body1" fontWeight={500}>{discussion?.body}</Typography>
                                                                <Typography variant="body2" fontWeight={400}>{discussion?.createdOn?.toLocaleString()}</Typography>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        ))}
                                    </div>
                                </Box>
                            ) : (
                                <>
                                    {/* <div className={classes.discussions_container}> */}
                                    <Box
                                        sx={{
                                            width: '90%',
                                            height: 'auto',
                                            borderRadius: 0,
                                            // backgroundColor: '#F8F9F9',
                                        }}
                                    >
                                        <div className={classes.discussion_thread}>
                                                    <Typography variant="h4" fontWeight={500} style={{marginBottom:'2rem'}}>A Comment or Discussion about Text Summarizer</Typography>
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


                                        {childDiscussion && childDiscussion?.length !== 0 ?
                                            (
                                                <p className={classes.discussion_nested_thread} style={{ color: 'black' }} >{childDiscussion?.map((disc, index) => (
                                                    <p>{disc.body}</p>
                                                ))}</p>
                                            )
                                            :
                                            (
                                                <>
                                                    <div className={classes.discussion_nested_thread}>
                                                        <div style={{ padding: '1rem' }}>
                                                            <div className={classes.nested_discussion_row}>
                                                                <img src={ZapiHomeLogo} alt="zapi-Home" />
                                                                <div className={classes.nested_discussion_column}>
                                                                    <Typography variant="body2" fontWeight={400}>User24 <span> commented - 5 5hours ago</span></Typography>
                                                                    {/* <hr style={{width:'100%',backgroundColor: "#071b85", color: "#071b85" , padding:'0'}} /> */}
                                                                    <Typography variant="body1" fontWeight={500}>A Comment or Discussion about Text Summarizer
                                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. At quidem rem nam, iste, natus sed minus voluptatum facere maxime provident animi maiores, possimus illo tenetur dolorem praesentium velit reprehenderit! Magnam, dolor. Qui sapiente mollitia dolor quae voluptates, eveniet inventore officiis, velit, error vitae molestiae quasi saepe maxime harum aperiam similique?</Typography>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className={classes.discussion_nested_thread}>
                                                        <div style={{ padding: '1rem' }}>
                                                            <div className={classes.nested_discussion_row}>
                                                                <img src={ZapiHomeLogo} alt="zapi-Home" />
                                                                <div className={classes.nested_discussion_column}>
                                                                    <Typography variant="body2" fontWeight={400}>User24 <span> commented - 5 5hours ago</span></Typography>
                                                                    {/* <hr style={{width:'100%',backgroundColor: "#071b85", color: "#071b85" , padding:'0'}} /> */}
                                                                    <Typography variant="body1" fontWeight={500}>A Comment or Discussion about Text Summarizer
                                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. At quidem rem nam, iste, natus sed minus voluptatum facere maxime provident animi maiores, possimus illo tenetur dolorem praesentium velit reprehenderit! Magnam, dolor. Qui sapiente mollitia dolor quae voluptates, eveniet inventore officiis, velit, error vitae molestiae quasi saepe maxime harum aperiam similique?</Typography>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className={classes.discussion_nested_thread}>
                                                        <div style={{ padding: '1rem' }}>
                                                            <div className={classes.nested_discussion_row}>
                                                                <img src={ZapiHomeLogo} alt="zapi-Home" />
                                                                <div className={classes.nested_discussion_column}>
                                                                    <Typography variant="body2" fontWeight={400}>User24 <span> commented - 5 5hours ago</span></Typography>
                                                                    {/* <hr style={{width:'100%',backgroundColor: "#071b85", color: "#071b85" , padding:'0'}} /> */}
                                                                    <Typography variant="body1" fontWeight={500}>A Comment or Discussion about Text Summarizer
                                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. At quidem rem nam, iste, natus sed minus voluptatum facere maxime provident animi maiores, possimus illo tenetur dolorem praesentium velit reprehenderit! Magnam, dolor. Qui sapiente mollitia dolor quae voluptates, eveniet inventore officiis, velit, error vitae molestiae quasi saepe maxime harum aperiam similique?</Typography>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </>
                                            )
                                        }
                                    </Box>
                                    {/* </div> */}
                                </>
                            )}
                    </div>
                    {/* //     )
                    // } */}
                </div>
            </>
        </>
    )
}


export default ChildrenDiscussions;
const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        marginBottom: "15px",
        padding: "130px 5rem 50px 5rem",
        lineHeight: "41px",
        width: '100%',
        minHeight: "647px",
        "& h2": {
            marginBottom: "5px",
            fontSize: "26px",
            color: "#071B85",
        },
        // height: "auto",
        // padding: "1rem 2rem 0",
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
        // background: "#F9FAFB",
        // border:'1px solid #071B85',
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        // gap: "3rem",
        justifyContent: "start",
        color: "#071B85",
        padding: "32px",
    },
    discussion_nested_thread: {
        // background: "#F9FAFB",
        // border:'1px solid #071B85',
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        position: 'relative',
        left:'30',
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
        maxWidth:'100%',
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
        maxWidth:'100%',
        flexDirection: "row",
        gap: "15px",
        // flexWrap: "wrap",
        color: "#071B85",
        paddingLeft: '2rem',
        
    },
    description: {
        display: "flex",
        alignItems: "center",
        fontSize: "15px",
        lineHeight: "26px",
        color: "#071B85",
        gap: "0.5rem",
    },
    item: {
        display: "flex",
        flexDirection: "column",
        width: "100px",
        height: "65px"
    },
    subItem: {
        display: "flex", 
        flexDirection: "row",
        alignItems: "center",
        gap: ".3rem"
    },
    itemHeader: {
        fontSize: "12px",
        fontWeight: "bold",
        color: "#071B85",
    },
    itemIcon: {
        color: "#515D99",
    },
    itemTitle: {
        fontSize: "20px",
        color: "#515D99",
        lineHeight: "0px",
    },

});