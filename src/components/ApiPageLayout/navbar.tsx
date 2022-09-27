import { Paper, Tab, Tabs, Typography } from '@mui/material'
import { makeStyles, styled } from '@mui/styles'
import { SyntheticEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { DEVSNAVBAR } from '../../testdata'
import TabPanel from '../TabPanel';

const CustomTab = styled(Tab)({
    "&.MuiTab-root": {
    textTransform: "none"}
  })

const Navbar = () => {
    const classes = useStyles()
    const [tab, setTab] = useState<number>(0);

    const handleTabChange = (e: SyntheticEvent, newValue: number) => {
        setTab(newValue)
    };

    return (
        <div className={classes.navbar}>
            <>
            <Tabs variant="fullWidth" className={classes.Tabs} value={tab} onChange={handleTabChange}>
                {DEVSNAVBAR.map((nav, i) => (
                    <CustomTab disableRipple key={i} label={nav.name} />
                ))}
            </Tabs>
            {DEVSNAVBAR.map((nav, i) => (
                <TabPanel key={i} value={tab} index={i}>
                    <div className={classes.tabPanelStyle}>
                    <Paper elevation={1} className={classes.paper}>
                        {nav.page}
                    </Paper>
                    </div>
                </TabPanel>
            ))}
            </>
        </div>
    )
}

export default Navbar

const useStyles = makeStyles({
    paper: {
        width: "950px",
        marginTop: "20px",   
    },
    navbar: {
        marginLeft: "250px",
        paddingTop: "1rem",
        paddingBottom: "1rem",
        paddingLeft: "2rem",
        paddingRight: "6rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100vw",
        height: "45px",
    },
    tabPanelStyle: {
        position: "absolute",
        marginTop: "100px",
    },
    Tabs: {
        position: "fixed",
        top: "4.3rem",
        zIndex: 5,
        width: "calc(100% - 300px)",
        background: "#F4F5F6",
    }
})