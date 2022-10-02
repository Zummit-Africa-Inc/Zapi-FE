import React, { ChangeEvent, FormEvent, useState } from 'react'
import { makeStyles } from "@mui/styles";
import InputSearch from './InputSearch';
import { Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

import { useContextProvider } from "../contexts/ContextProvider";
import StarRate  from '../assets/images/star_rate.svg';
import { useAppDispatch, useAppSelector } from '../hooks';
import { getUserApis } from '../redux/slices/userSlice';
import DevAPICard from './DevAPICard';

const DevAddApi: React.FC = () => { 
    const { userApis } = useAppSelector(store => store.user);
    const [queryString, setQueryString] = useState<string>("");
    const { handleClicked } = useContextProvider();
    const classes = useStyles();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
  }

  return (
    <div className={classes.bodyColor}>
        <div className={classes.body}>
            <div className={classes.widget1}>
                <form onSubmit={handleSubmit} className={classes.search}>
                <InputSearch className={classes.formControl} type="text" name="queryString" value={queryString} onChange={(e: ChangeEvent<HTMLInputElement>) => setQueryString(e.target.value)} placeholder="Search API Projects"/>
                </form>
            </div>
            <div className={classes.widget2}>
                <div className={classes.leftText}>
                    <Typography variant="subtitle2" mt={0.5}>All</Typography>
                    <div className={classes.rightText}>
                        <img src={StarRate} alt="Star-Rate" style={{height: "20px", width: "20px", left: "2px", marginTop: "4px"}}/>
                        <span>
                        <Typography variant="subtitle2" mt={-2.5} ml={4.5}>Favorites</Typography>
                        </span>
                    </div>
                </div>
            </div>
            <button className={classes.button} onClick={() => handleClicked('addapi')} style={{height: "46px"}}>
                <AddIcon /> <Typography>Add API Project</Typography>
            </button>
        </div>
        {/* Add API Description */}
        <div>
            {userApis.length !== 0 ? 
                <div className={classes.apiCard}>
                    {userApis.map((apis: any) => (<DevAPICard key={apis.id} {...apis} />))}
                </div>
                :
                <div className={classes.addApiDesc}>
                <Typography gutterBottom variant="subtitle1" sx=
                    {{
                        color: "#000000", fontFamily: "Space Grotesk", fontWeight: 700, fontSize: "18px",
                        lineHeight: "30px", textAlign: "center", marginTop: "116px"
                    }}>
                        You do no have any API Projects
                </Typography>
                <Typography gutterBottom variant="subtitle1" sx={{
                    color: "#000000", fontFamily: "Space Grotesk", fontStyle: "normal", fontWeight: 400,
                    fontSize: "16px", lineHeight: "30px", textAlign: "center", marginTop: "16px"
                }}>Add a new API Project from scratch or use our “Project 1” 
                    <br />{""}
                    to explore API Projects features.
                </Typography>
            </div>}
        </div>
    </div>
  )
}

const useStyles = makeStyles({
    body: {
        left:'0rem',
        right:'0rem',
        zIndex: 30,
        width:'100%',
        display: 'flex',
        alignItems: 'center',
        marginTop: '80px',
        padding: '24px 112px',
        flexDirection: 'row',
        justifyContent:'space-between',
        background:'white',
        height:  '100px',
        fontFamily:'Space Grotesk',
        "@media screen and (max-width: 1024px)": {
            padding: "1rem 2rem",
            display: "grid",
            justifyContent: "center",
            gap: 0,
        },
        "@media screen and (max-width: 375px)": {
            padding: "1rem 1rem",
            display: "grid",
            justifyContent: "center",
            gap: 0,
        }
    },
    bodyColor: {
        minHeight: "100vh",
        background:'#FFFFFF',
        paddingTop: '15px',
        height: "100vh",
    },
    widget1:{
        display:'flex',
        alignItems:'center',
        gap:'1rem',
        "@media screen and (max-width: 1024px)": {
            marginBottom: "2rem",
        }
    },
    widget2:{
        gap:'1rem',
        display:'flex',
        alignItems:'center',
        "@media screen and (max-width: 1024px)": {
            marginBottom: "2rem",
        }
    },
    leftText:{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: "8px 16px",
        width: "50px",
        height: "46px",
        background: "#C4C4C4",
        border: "1px solid #8C8C8C",
        borderRadius: "8px 0px 0px 8px",
    },
    rightText:{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: "8px 16px",
        margin: "-35px 30px",
        width: "130px",
        height: "46px",
        background: "#FFFFFF",
        borderTop: "1px solid #8C8C8C",
        borderBottom: "1px solid #8C8C8C",
        borderRight: "1px solid #8C8C8C",
        borderRadius: "0px 8px 8px 0px",
    },
    search: {
        width: "149px",
        height: "30px",
        fontFamily: 'Space Grotesk',
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: "16px",
        lineHeight: "30px",
        display: "flex",
        alignItems: "center",
        color: "#8B8B8C",
        background: "#E1E1E2",
      },
    formControl: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        padding: "8px 64px 8px 16px",
        gap: "16px",
        width: "269px",
        height: "46px",
        background: "#E1E1E2",
        borderRadius: "8px",
        "& input": {
            width: 250,
            height: "100%",
            outline: "none",
            border: "none",
            background: "#E1E1E2",
        },
        "& select": {
            width: 100,
            height: "100%",
            outline: "none",
            border: "none",
        },
        "& ::placeHolder": {
            fontFamily: 'Space Grotesk',
        },
        "@media screen and (max-width: 900px)": {
          marginTop: "1rem",
        }
    },
    button: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        padding: "8px 16px",
        gap: "16px",
        width: "190px",
        lineHeight: "46px",
        background: "#1D1D1D",
        borderRadius:"8px",
        cursor: "pointer",
        color: "#FFFFFF",
        border: "none",
        fontWeight: '500',
        fontSize: '16px',
        "@media screen and (max-width: 1024px)": {
            marginBottom: "2rem",
        }
    },
    disabledButton: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        textAlign: "center",
        marginTop: "32px",
        gap: "16px",
        color: "#585858",
        justifyContent: "center",
        
        width: "190px",
        height: "46px",
        background: "#DFDFDF",
        borderRadius: "8px",
        margin: "0 auto", 
    },
    addApiDesc: {
        marginTop: "20px",
        paddingBottom: "80px",
        height: "calc(100vh - 315px)"
    },
    apiCard: {
        height: "calc(100vh - 315px)",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "1.5rem",
        flexWrap: "wrap",
    }
})

export default DevAddApi