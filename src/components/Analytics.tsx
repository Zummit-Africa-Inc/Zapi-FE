import { Box, FormControl, InputLabel, MenuItem, Select, Typography, SelectChangeEvent } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { ChangeEvent, useState } from 'react'
import { useFormInputs } from '../hooks'
import { Widget, InputSearch, DataTable, Navbar } from '.'
import { ERROR, STATISTICS, SUCCESS, TIMERANGE, PERIOD, ZONE, TABLEHADING, ROWS } from '../testdata'

const initialState = { statistics: "", timerange: TIMERANGE[0], period: PERIOD[0], timezone: ZONE[0] }

const Analytics: React.FC = () => {
    const [statsParam, setStatsParam] = useState<string>("")
    const [errorParam, setErrorParam] = useState<string>("")
    const [successParam, setSuccessParam] = useState<string>("")
    const [statsData, setStatsData] = useState<any>(STATISTICS)
    const [queryParam, setQueryParam] = useState<string>("")
    const [style, setStyle] = useState('clickTab')
    const [errStyle, setErrStyle] = useState('tab')
    const [successStyle, setSuccessStyle] = useState('tab')
    const classes = useStyles()

    const { inputs, bind, select } = useFormInputs(initialState);
    const { statistics, timerange, timezone, period } = inputs

   
    
    console.log(inputs)

    const handleStatClick = (e: React.MouseEvent<HTMLDivElement>) => {
        setStatsData(STATISTICS)
        setStyle('clickTab')
        setErrStyle('tab')
        setSuccessStyle('tab')

    }
    const handleErrClick = (e: React.MouseEvent<HTMLDivElement>) => {
        setStatsData(ERROR)
        setStyle('tab')
        setErrStyle('clickTab')
        setSuccessStyle('tab')
    }
    const handleSuccessClick = (e: React.MouseEvent<HTMLDivElement>) => {
        setStatsData(SUCCESS)
        setStyle('tab')
        setErrStyle('tab')
        setSuccessStyle('clickTab')
    }
    return (
        <div className={classes.analytics}>
            <div className="heading">
                <Typography sx={{ fontSize: '1.5rem', fontWeight: 500, color: 'var(--color-primary)', padding: '2rem 2rem' }}>default-application_6350466 - Analytics</Typography>
            </div>
            {/* <div className={classes.selects}>
                <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                        <label>Statistics</label>
                        <Select name='statistics' labelId="stats" id="stats" value={statistics} {...select}>
                            {statsData.map((stats:any, index:number) => (
                                <MenuItem key={index} value={stats.span}>{stats.query}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Box>
                <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                        <label>Time Range</label>
                        <Select name='timerange' labelId="time range" id="time range" value={timerange} {...select}>
                            {TIMERANGE.map((time, index) => (
                                <MenuItem key={index} value={time}>{time}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Box>
                <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                        <label>Period</label>
                        <Select name="period" labelId="period" id="period" value={period} {...select}>
                            {PERIOD.map((period, index) => (
                                <MenuItem key={index} value={period}>{period}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Box>
                <Box sx={{ minWidth: 300 }}>
                    <FormControl fullWidth>
                        <label>Time Zone</label>
                        <Select name='timezone' labelId="time-zone" id="timezone" value={timezone} {...select}>
                            {ZONE.map((zone, index) => (
                                <MenuItem key={index} value={zone}>{zone}</MenuItem>
                                ))}
                        </Select>
                    </FormControl>
                </Box>
            </div> */}
            <div className={classes.Tab}>
                <div className="tabs">
                    <Widget className={style} title='API Calls' subtitle={statsParam} onClick={handleStatClick}  span="0" />
                </div>
                <div className="tabs">
                    <Widget className={errStyle} title='Errors' subtitle={errorParam} onClick={handleErrClick} span="0" />
                </div>
                <div className="tabs">
                    <Widget className={successStyle} title='Success' subtitle={successParam} onClick={handleSuccessClick} span="0" />
                </div>
            </div>
            <div>
                {ROWS ?
                    <DataTable Heading={TABLEHADING} Rows={ROWS} />
                    :
                    "No data yet"
                }
            </div>
        </div>
    )
}

export default Analytics


//styles for analytics are in the index.css file.
const useStyles = makeStyles({
    selects: {
        width: "100%",
        display: "flex",
        gap: ".5rem",
        alignItems: "center",
        justifyContent: "flex-end",
        // paddingRight: "1rem",
        // marginLeft: "8rem",
        // marginTop: "2.5rem",
        // marginBottom: "2.5rem",
        // marginRight: "2rem",
        /* padding: 1rem 1rem; */
    },
    select: {
        '& select': {
            padding: '.3rem .4rem',
        }
    },
    tabs: {

        '& span': {
            fontSize: '2rem'
        }
    },
    analytics: {
        display: "flex",
        flexDirection: "column",
        gap: "2rem"
    },
    Tab: {
        width: "500px",
        display: "flex",
        gap: ".5rem"
    }
})