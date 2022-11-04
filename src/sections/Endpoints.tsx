import React, { ChangeEvent, FormEvent, SyntheticEvent, useState } from 'react'
import { makeStyles, styled } from '@mui/styles'

import { Tab, Tabs, Typography, Accordion, AccordionSummary, AccordionDetails, Paper, InputBase, Divider, IconButton,  } from "@mui/material";
import TabPanel from "../components/TabPanel";
import { ExpandMore, Menu, Search, Directions } from "@mui/icons-material";


const CustomTabs = styled(Tabs)({
	"&.MuiTabs-root": {
		width: "auto",
	},
	"& .MuiTabs-indicator": {
		display: "none",
	},
});

const CustomTab = styled(Tab)({
	"&.MuiTab-root": {
		display: "flex",
		flexDirection: "column",
		alignItems: "flex-start",
		fontWeight: "normal",
		fontSize: "14px"
	},
	"&.Mui-selected": {
		backgroundColor: "#f1f1f1",
	},
});

const CustomAccordion = styled(Accordion)({
	"&.MuiAccordion-root": {
		boxShadow: "unset", 
		borderTop: "1px solid #d1d1d1",
	},
});

const Endpoints:React.FC = () => {
    const [tab, setTab] = useState<number>(0);
    const classes = useStyles();

        
    const handleTabChange = (e: SyntheticEvent, newValue: number) => {
        setTab(newValue);
    };
    
    return (
        <div className={classes.root}>
			<div style={{ 
				display: "flex",
				flexDirection: "column",
				gap: "2rem",
				width: "45%"
			}}>
				<Paper
					component="form"
					sx={{ boxShadow: "unset", display: "flex", alignItems: "center", border: "1px solid #d1d1d1", borderRadius: "0", padding: "2px 8px" }}
				>
					<InputBase
						sx={{ ml: 1, flex: 1, fontSize: "13px", fontFamily: "Space Grotesk", color: "#000" }}
						placeholder="Search endpoints"
						inputProps={{ 'aria-label': 'search endpoints' }}
					/>
					<IconButton type="button" sx={{ p: '10px' }} aria-label="search">
						<Search sx={{ width: "21px"}} />
					</IconButton>
					
				</Paper>
				
				<div>
					<CustomAccordion>
						<AccordionSummary expandIcon={<ExpandMore />}>
							<Typography sx={{ fontSize: "15px", color: "#515D99"}}>API Name</Typography>
						</AccordionSummary>

						<AccordionDetails>
							<CustomTabs
								value={tab}
								orientation="vertical"
								onChange={handleTabChange}
							>
								<CustomTab label="GET" />
								<CustomTab label="POST" />
							</CustomTabs>
						</AccordionDetails>
					</CustomAccordion>
					
				</div>

			</div>
	  
            <div style={{ width: "100%" }}>
                <TabPanel value={tab} index={0}>
					<Typography sx={{ marginBottom: "10px", fontSize: "21px", fontWeight: "bold", color: "#515D99"}}>Endpoint Type</Typography>
					<Typography sx={{ marginBottom: "2rem", fontSize: "14px", color: "#515D99", width: "100%"}}>Endpoint Description </Typography>
					
					<Typography sx={{ marginBottom: "15px", fontSize: "19px", fontWeight: "bold", color: "#515D99"}}>Documentation</Typography>

					<Typography sx={{ fontSize: "15px", color: "#515D99"}}>ZAPI App</Typography>
					<Paper
						sx={{ boxShadow: "unset", display: "flex", alignItems: "center", marginBottom: "15px", border: "1px solid #d1d1d1", borderRadius: "4px", padding: "2px 8px", width: "auto" }}
					>
						<InputBase
							disabled
							sx={{ ml: 1, flex: 1, fontSize: "13px", fontFamily: "Space Grotesk", color: "#000" }}
							placeholder="Choose ZAPI App"
							inputProps={{ 'aria-label': 'choose zapi app' }}
						/>
					</Paper>
					
					<Typography sx={{ fontSize: "15px", color: "#515D99"}}>Request URL</Typography>
					<Paper
						sx={{ boxShadow: "unset", display: "flex", alignItems: "center", marginBottom: "25px", border: "1px solid #d1d1d1", borderRadius: "4px", padding: "2px 8px", width: "auto" }}
					>
						<InputBase
							disabled
							sx={{ ml: 1, flex: 1, fontSize: "13px", fontFamily: "Space Grotesk", color: "#000" }}
							placeholder="Choose Request URL"
							inputProps={{ 'aria-label': 'choose request url' }}
						/>
					</Paper>

					<CustomAccordion>
						<AccordionSummary expandIcon={<ExpandMore />}>
							<Typography sx={{ fontSize: "15px", color: "#515D99"}}>Header Parameters</Typography>
						</AccordionSummary>

						<AccordionDetails>
							<Typography sx={{ fontSize: "15px", color: "#515D99"}}>X-ZAPI-Key</Typography>
							<Paper
								sx={{ boxShadow: "unset", display: "flex", alignItems: "center", marginBottom: "25px", border: "1px solid #d1d1d1", borderRadius: "4px", padding: "2px 8px", width: "auto" }}
							>
								<InputBase
									disabled
									sx={{ ml: 1, flex: 1, fontSize: "13px", fontFamily: "Space Grotesk", color: "#000" }}
									placeholder="Choose X-ZAPI-Key"
									inputProps={{ 'aria-label': 'choose x-zapi-key' }}
								/>
							</Paper>
							
							<Typography sx={{ fontSize: "15px", color: "#515D99"}}>X-ZAPI-Host</Typography>
							<Paper
								sx={{ boxShadow: "unset", display: "flex", alignItems: "center", marginBottom: "25px", border: "1px solid #d1d1d1", borderRadius: "4px", padding: "2px 8px", width: "auto" }}
							>
								<InputBase
									disabled
									sx={{ ml: 1, flex: 1, fontSize: "13px", fontFamily: "Space Grotesk", color: "#000" }}
									placeholder="Choose X-ZAPI-Host"
									inputProps={{ 'aria-label': 'choose x-zapi-host' }}
								/>
							</Paper>
							
						</AccordionDetails>
					</CustomAccordion>

					<CustomAccordion>
						<AccordionSummary expandIcon={<ExpandMore />}>
							<Typography sx={{ fontSize: "15px", color: "#515D99"}}>Required Parameters</Typography>
						</AccordionSummary>

						<AccordionDetails>
							
							<Typography sx={{ fontSize: "15px", color: "#515D99"}}>Search Parameter</Typography>
							<Paper
								sx={{ boxShadow: "unset", display: "flex", alignItems: "center", marginBottom: "25px", border: "1px solid #d1d1d1", borderRadius: "4px", padding: "2px 8px", width: "auto" }}
							>
								<InputBase
									disabled
									sx={{ ml: 1, flex: 1, fontSize: "13px", fontFamily: "Space Grotesk", color: "#000" }}
									placeholder="Enter Search Parameter"
									inputProps={{ 'aria-label': 'enter search parameter' }}
								/>
							</Paper>
							
							<Typography sx={{ fontSize: "15px", color: "#515D99"}}>Search By</Typography>
							<Paper
								sx={{ boxShadow: "unset", display: "flex", alignItems: "center", marginBottom: "25px", border: "1px solid #d1d1d1", borderRadius: "4px", padding: "2px 8px", width: "auto" }}
							>
								<InputBase
									disabled
									sx={{ ml: 1, flex: 1, fontSize: "13px", fontFamily: "Space Grotesk", color: "#000" }}
									placeholder="Choose Value"
									inputProps={{ 'aria-label': 'choose value' }}
								/>
							</Paper>
							
						</AccordionDetails>
					</CustomAccordion>
					
					<CustomAccordion>
						<AccordionSummary expandIcon={<ExpandMore />}>
							<Typography sx={{ fontSize: "15px", color: "#515D99"}}>Optional Parameters</Typography>
						</AccordionSummary>

						<AccordionDetails>
							
						</AccordionDetails>
					</CustomAccordion>
                </TabPanel>
            </div>
        </div>
    )
}

const useStyles = makeStyles({
    root:{
        display: "flex",
		flexDirection: "row",
		gap: "2.5rem",
		margin: "0 5rem 8rem 5rem",
		// backgroundColor: "#f2f2f2",
    },

})


export default Endpoints;
