import React, { ChangeEvent, FormEvent, SyntheticEvent, useState } from 'react';
import { Tab, Tabs, Typography, Accordion, AccordionSummary, AccordionDetails, Paper, InputBase, IconButton, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { ExpandMore, Menu, Search, Directions } from "@mui/icons-material";
import { makeStyles, styled } from '@mui/styles';

import TabPanel from "../components/TabPanel";
import { EndpointsType } from "../types";

interface Props {
    endpoints: Array<EndpointsType>
}

const methodColor: any = {
	get: "#1B5598",
	post: "#22EF48",
	patch: "#E6BA36",
	delete: "#E64F36",
}

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

const Endpoints:React.FC<Props> = ({endpoints}) => {
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
					sx={{boxShadow: "unset", display: "flex", alignItems: "center", border: "1px solid #d1d1d1", borderRadius: "0", padding: "2px 8px"}}
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
					<Typography sx={{marginBottom:"10px",fontSize:"21px",fontWeight:"bold",color: "#515D99"}}>Endpoints</Typography>
					{endpoints && endpoints.length !== 0 ? 
					(
						<div>
							{/* <CustomAccordion>
								<AccordionSummary></AccordionSummary>
								<AccordionDetails></AccordionDetails>
							</CustomAccordion> */}
							<CustomTabs value={tab} orientation="vertical" onChange={handleTabChange}>
								{endpoints?.map((endpoint, index) => (
									<CustomTab key={index} label={
										<Stack direction="row" alignItems="center" spacing={16} px={1}>
											<p>{endpoint.name}</p>
											<p style={{color: methodColor[endpoint.method]}}>{endpoint.method}</p>
										</Stack>
									} />
								))}
							</CustomTabs>
						</div>
					):(
						<div>
							<Typography sx={{fontSize: "15px", color: "#515D99"}}>
								There are no endpoints in this API.
							</Typography>
						</div>
					)}
				</div>
			</div>
            <div style={{ width: "100%" }}>
				{endpoints && endpoints.length !== 0 ? 
				(
					<div>
						{endpoints?.map((endpoint, index) => (
							<TabPanel key={index} value={tab} index={index}>
								<Typography sx={{marginBottom: "10px", fontSize: "21px", fontWeight: "bold", color: "#515D99"}}>Endpoint Description</Typography>
								<Typography sx={{marginBottom: "2rem", fontSize: "14px", color: "#515D99", width: "100%"}}>{endpoint.description}</Typography>
								<CustomAccordion>
									<AccordionSummary expandIcon={<ExpandMore />}>
										<Typography sx={{ fontSize: "15px", color: "#515D99"}}>Headers</Typography>
									</AccordionSummary>
									<AccordionDetails>
									<TableContainer>
											<Table>
												<TableHead>
													<TableRow className={classes.tableHead}>
														<TableCell>Name</TableCell>
														<TableCell>Type</TableCell>
														<TableCell>Required</TableCell>
													</TableRow>
												</TableHead>
												<TableBody>
													{endpoint?.headers?.map((header, index) => (
														<TableRow key={index}>
															<TableCell>
																{header.name}
															</TableCell>
															<TableCell>
																{header.type}
															</TableCell>
															<TableCell>
																{header.required ? 'true' : 'false'}
															</TableCell>
														</TableRow>
													))}
												</TableBody>
											</Table>
										</TableContainer>
									</AccordionDetails>
								</CustomAccordion>
								<CustomAccordion>
									<AccordionSummary expandIcon={<ExpandMore />}>
										<Typography sx={{ fontSize: "15px", color: "#515D99"}}>Body</Typography>
									</AccordionSummary>
									<AccordionDetails>
										<TableContainer>
											<Table>
												<TableHead>
													<TableRow className={classes.tableHead}>
														<TableCell>Name</TableCell>
														<TableCell>Type</TableCell>
														<TableCell>Required</TableCell>
													</TableRow>
												</TableHead>
												<TableBody>
													{endpoint?.body?.map((bodyItem, index) => (
														<TableRow key={index}>
															<TableCell>
																{bodyItem.name}
															</TableCell>
															<TableCell>
																{bodyItem.type}
															</TableCell>
															<TableCell>
																{bodyItem.required ? 'true' : 'false'}
															</TableCell>
														</TableRow>
													))}
												</TableBody>
											</Table>
										</TableContainer>
									</AccordionDetails>
								</CustomAccordion>
								<CustomAccordion>
									<AccordionSummary expandIcon={<ExpandMore />}>
										<Typography sx={{ fontSize: "15px", color: "#515D99"}}>Query</Typography>
									</AccordionSummary>
									<AccordionDetails>
									<TableContainer>
											<Table>
												<TableHead>
													<TableRow className={classes.tableHead}>
														<TableCell>Name</TableCell>
														<TableCell>Type</TableCell>
														<TableCell>Required</TableCell>
													</TableRow>
												</TableHead>
												<TableBody>
													{endpoint?.query?.map((queryItem, index) => (
														<TableRow key={index}>
															<TableCell>
																{queryItem.name}
															</TableCell>
															<TableCell>
																{queryItem.type}
															</TableCell>
															<TableCell>
																{queryItem.required ? 'true' : 'false'}
															</TableCell>
														</TableRow>
													))}
												</TableBody>
											</Table>
										</TableContainer>
									</AccordionDetails>
								</CustomAccordion>
							</TabPanel>
						))}
					</div>
				):(
					<div></div>
				)}
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
	paper: {
		boxShadow: "unset",
		display: "flex",
		alignItems: "center",
		marginBottom: "25px",
		border: "1px solid #d1d1d1",
		borderRadius: "4px",
		padding: "2px 8px",
		width: "auto" 
	},
	row: {
		display: "flex",
		alignItems: "center",
		gap: "2rem",
		"& p": {
			fontSize: "15px",
			color: "#515D99",
		}
	},
	tableHead: {
		"& .MuiTableCell-head": {
			height: "50px",
			color: "#FFF",
			backgroundColor: "#081F4A"
		},
	}
})


export default Endpoints;
