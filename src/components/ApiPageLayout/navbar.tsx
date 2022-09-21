import { Paper, Tab, Tabs, Typography } from '@mui/material'
import { makeStyles, styled } from '@mui/styles'
import { SyntheticEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { DEVSNAVBAR } from '../../testdata'
import TabPanel from '../TabPanel';

const CustomTab = styled(Tab)({
    "&.MuiTab-root": {
    textTransform: "none"
}
  })

const Navbar = () => {
    const classes = useStyles()
    const [tab, setTab] = useState<number>(0);

    const handleTabChange = (e: SyntheticEvent, newValue: number) => {
        setTab(newValue)
    };
    return (
        <div className={classes.navbar}>
            <div className="">
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
            </div>
            <Link to="/api/:id">
                <Typography sx={{position: "fixed", marginTop: "60px", marginRight: "800px", width: "150px"}}>View in Hub</Typography>
            </Link>
        </div>
    )
}

export default Navbar

const useStyles = makeStyles({
    paper: {
        width: "950px",
        marginTop: "20px",
        //All paper heights would be inherited    
    },
    navbar: {
        marginLeft: "250px",
        // padding: "1rem 4rem",
        //backgroundColor: "#F3F4F6",
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
        zIndex: "99",
        width: "800px",
    }
})