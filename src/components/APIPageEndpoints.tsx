import React, { SyntheticEvent, useState } from "react";
import { Tab, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tabs } from "@mui/material";
import { makeStyles } from "@mui/styles";

import { EndpointsType } from "../types";
import TabPanel from "./TabPanel";

interface Props { endpoints: Array<EndpointsType | null> | undefined }

const APIPageEndpoints:React.FC<Props> = ({endpoints}) => {
    const [tab, setTab] = useState<number>(0)
    const classes = useStyles()

    const handleTabChange = (e: SyntheticEvent, value: number) => setTab(value)

  return (
    <div className={classes.container}>
        <TableContainer className="">
            <Table></Table>
        </TableContainer>
        <div>
            <Tabs orientation="vertical" variant="scrollable" value={tab} onChange={handleTabChange} className={classes.tabs}>
                <Tab label="Endpoint 1" />
                <Tab label="Endpoint 2" />
                <Tab label="Endpoint 3" />
                <Tab label="Endpoint 4" />
            </Tabs>
        </div>
        <div className={classes.views}>

        </div>
        <div className={classes.views}>
            <TabPanel value={tab} index={0}>
                Endpoint 1
            </TabPanel>
            <TabPanel value={tab} index={1}>
                Endpoint 2
            </TabPanel>
            <TabPanel value={tab} index={2}>
                Endpoint 3
            </TabPanel>
            <TabPanel value={tab} index={3}>
                Endpoint 4
            </TabPanel>
        </div>
    </div>
  )
}

const useStyles = makeStyles({
    container: {
        display: "flex",
    },
    table: {
        width: "100%",
    },
    views: {
        flex: 1,
        flexGrow: "grow",
    },
    tabs: {
        "& button": {
            textTransform: "capitalize",
        }
    },
})

export default APIPageEndpoints