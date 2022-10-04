import React, { ChangeEvent, FormEvent, SyntheticEvent, useState } from 'react'
import { makeStyles, styled } from "@mui/styles";
import InputSearch from './InputSearch';
import { Tab, Tabs, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

import { useContextProvider } from "../contexts/ContextProvider";
import TabPanel from './TabPanel';
import APILayout from './APILayout';
import Subscription from './Subscription';
import { Grade, Loyalty } from '@mui/icons-material';

const CustomTabs = styled(Tabs)({
      '& .MuiTabs-indicator': {
        display: "none"
      },
  })

const CustomTab = styled(Tab)({
   "&.MuiTab-wrapper": {
    height: "45px"
   },
'&.Mui-selected': {
    backgroundColor: '#ccc',
    borderRadius: "10px",
  }
  })

const DevAddApi: React.FC = () => { 
    const [queryString, setQueryString] = useState<string>("");
    const { handleClicked } = useContextProvider();
    const [tab, setTab] = useState<number>(0);
    const classes = useStyles();

    const handleTabChange = (e: SyntheticEvent, newValue: number) => {
        setTab(newValue)
    };

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
            {/* <div className={classes.widget2}> */}
                <div className={classes.leftText}>
                    <CustomTabs value={tab} onChange={handleTabChange}>
                        <CustomTab icon={<Loyalty />} iconPosition="start" label="Subscribed APIS"/>
                        <CustomTab icon={<Grade />} iconPosition="start" label="My APIS"/>
                    </CustomTabs>
                </div>
            {/* </div> */}
            <button className={classes.button} onClick={() => handleClicked('addapi')} style={{height: "46px"}}>
                <AddIcon /> <Typography>Add API Project</Typography>
            </button>
        </div>
        <div>
                <TabPanel value={tab} index={0}>
                    <Subscription />
                </TabPanel>
                <TabPanel value={tab} index={1}>
                    <APILayout />
                </TabPanel>
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
        background: "#FFFFFF",
        border: "1px solid #8C8C8C",
        borderRadius: "10px"
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
})

export default DevAddApi