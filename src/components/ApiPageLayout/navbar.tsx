import { Tab, Tabs, Typography } from '@mui/material'
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
                            {nav.page}
                        </div>
                    </TabPanel>
                ))}
            </div>
            <Link to="/api/:id">
                <Typography sx={{marginTop: "-1.5rem"}}>View in Hub</Typography>
            </Link>
        </div>
    )
}

export default Navbar

const useStyles = makeStyles({
    navbar: {
        position: "sticky",
        top: "7rem",
        left: '0rem',
        right: '0rem',
        padding: "1rem 2rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100vw",
        height: "45px"
    },
    tabPanelStyle: {
        position: "absolute",
        marginTop: "10px"
    Tabs: {
        width: "800px",
        textTransform: "none"
    }
})