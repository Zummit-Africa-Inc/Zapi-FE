import React from 'react'
import { Box, Tabs, Tab, Typography, Paper, Avatar } from '@mui/material';
import { makeStyles } from "@mui/styles";
import Book from '../assets/images/book.svg';
import Layer from '../assets/images/layer.svg';
import Teacher from '../assets/images/teacher.svg';
import Secure from '../assets/images/secure.svg';
import Message from '../assets/images/messages-3.svg';
import Apps from '../assets/images/apps1.svg';
import { PopularApICard, SafetyApiCard, EducationalApiCard, SecurityApiCard, CustomerApiCard, AllApiCard } from '../components';


interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
    className: string;
  }
  
  function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  function a11yProps(index: number) {
    return {
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
    };
  }



const APIHubTab:React.FC = () => {
    const classes = useStyles();

    const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

    return (
    <>
    <Box style={{width: '90%', margin:'auto', marginBottom: '50px'}}>
        <Box
        sx={{ bgcolor: 'background.paper', display: 'flex', height: '1289px' }}
        >
        <Tabs
            orientation="vertical"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            sx={{ width:'340px', 
            '.MuiTabs-indicator': {
                left: 0,
                width: '5px',
            },
            "& .MuiTab-root.Mui-selected": {
                background: '#EDF5FD'
            },
            "& .MuiTab-root.MuiTab-wrapped":{
                alignItems: 'self-start',
                justifyContent: 'flex-start',
            },
            
            boxShadow: '0px 1px 15px rgba(6, 113, 224, 0.2)',
            paddingTop: '30px',
            }}
        >
            <Tab sx={{justifyContent: 'flex-start'}} icon = {<Avatar src={Book} sx={{width:'24px', height:'24px'}}  />} iconPosition="start" label={<span className={classes.tabLabel}>Popular APIs</span>}  {...a11yProps(0)} />
            <Tab sx={{justifyContent: 'flex-start'}} icon = {<Avatar src={Layer} sx={{width:'24px', height:'24px'}} />} iconPosition="start" label={<span className={classes.tabLabel}>Safety APIs</span>} {...a11yProps(1)} />
            <Tab sx={{justifyContent: 'flex-start'}}  icon = {<Avatar src={Teacher} sx={{width:'24px', height:'24px'}} />} iconPosition="start" label={<span className={classes.tabLabel}>Educational APIs </span>}{...a11yProps(2)} />
            <Tab sx={{justifyContent: 'flex-start'}} icon = {<Avatar src={Secure} sx={{width:'24px', height:'24px'}} />} iconPosition="start" label={<span className={classes.tabLabel}>Security APIs</span>} {...a11yProps(3)} />
            <Tab sx={{justifyContent: 'flex-start'}}   icon = {<Avatar src={Message} sx={{width:'24px', height:'24px'}} />} iconPosition="start" label={<span className={classes.tabLabel}>Customer service APIs</span>} {...a11yProps(4)} />
            <Tab sx={{justifyContent: 'flex-start'}}  icon = {<Avatar src={Apps} sx={{width:'24px', height:'24px'}} />} iconPosition="start" label={<span className={classes.tabLabel}>All APIs</span>} {...a11yProps(5)} />
        </Tabs>
        <TabPanel value={value} index={0} className={classes.tabBody}>
        <h1>Popular APIs</h1>
         <PopularApICard />
        </TabPanel>
        <TabPanel value={value} index={1} className={classes.tabBody}>
            <h1>Safety Apis</h1>
            <SafetyApiCard />
        </TabPanel>
        <TabPanel value={value} index={2} className={classes.tabBody}>
            <h1>Educational Apis</h1>
            <EducationalApiCard />
        </TabPanel>
        <TabPanel value={value} index={3} className={classes.tabBody}>
            <h1>Security Apis</h1>
            <SecurityApiCard />
        </TabPanel>
        <TabPanel value={value} index={4} className={classes.tabBody}>
            <h1>Customer Service Apis</h1>
            <CustomerApiCard />
        </TabPanel>
        <TabPanel value={value} index={5} className={classes.tabBody}>
            <h1>All Apis</h1>
            <AllApiCard />
        </TabPanel>
        
        </Box>
    </Box>
    </>
    )
}


export default APIHubTab;

const useStyles = makeStyles({
    tabIcon: {
        width:'24px', 
        height:'24px'
      },
    tabBody:{
        background: '#EDF5FD', 
        width:'100%',
        height: '100%',
        overflow: 'auto'
    },
    tabLabel:{
        fontSize: '18px',
        color: '#071B85', 
        textTransform: "none",
    }

});
