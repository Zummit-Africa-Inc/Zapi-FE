import { Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { ChangeEvent, SyntheticEvent, useState } from 'react'
import { Widget, InputSearch, DataTable } from '../../components'
import { DASHBOARDTEXT1, DASHBOARDTEXT2, ERROR, STATISTICS, SUCCESS, TIMERANGE, PERIOD, ZONE } from '../../testdata'

//styles
import './DevDashboard.css'

const DevDashboard: React.FC = () => {
    const [statsParam, setStatsParam] = useState<string>(STATISTICS[0])
    const [errorParam, setErrorParam] = useState<string>(ERROR[0])
    const [successParam, setSuccessParam] = useState<string>(SUCCESS[0])
    const [statsData, setStatsData] = useState<any>(STATISTICS)
    const [queryParam, setQueryParam] = useState<string>("")
    const [style, setStyle] = useState('clickTab')
    const [styles, setStyles] = useState('tab')
    const [styleses, setStyleses] = useState('tab')
    const classes = useStyles()

    const handleStats = (e: ChangeEvent<HTMLSelectElement>) => {
        if (statsData === STATISTICS) {
            setStatsParam(e.target.value)
        } else {
            setStatsParam(STATISTICS[0])
        }
        if (statsData === ERROR) {
            setErrorParam(e.target.value)
        } else {
            setErrorParam(ERROR[0])
        }
        if (statsData === SUCCESS) {
            setSuccessParam(e.target.value)
        } else {
            setSuccessParam(SUCCESS[0])
        }
    }

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        setStatsData(STATISTICS)
        setStyle('clickTab')
        setStyles('tab')
        setStyleses('tab')

    }
    const handleClicks = (e: React.MouseEvent<HTMLDivElement>) => {
        setStatsData(ERROR)
        setStyle('tab')
        setStyles('clickTab')
        setStyleses('tab')
    }
    const handleClickses = (e: React.MouseEvent<HTMLDivElement>) => {
        setStatsData(SUCCESS)
        setStyle('tab')
        setStyles('tab')
        setStyleses('clickTab')
    }

    return (
        <div className='dashboard'>
            <Typography variant='h5' gutterBottom sx={{padding: '1rem 2rem'}}>Dashboard</Typography>
            <div className="cards">
                <Widget  className='widget' title={DASHBOARDTEXT1.title} subtitle={DASHBOARDTEXT1.subtitle} />
                <Widget className='widget' title={DASHBOARDTEXT2.title} subtitle={DASHBOARDTEXT2.subtitle} />
            </div>
            <div className="selects">
                <div className="select-box">
                    <span className='select-title'>Statistics</span>
                    <InputSearch className={classes.select} type='select' name="statsParams" placeholder='Statistics' value={statsParam || errorParam || successParam} onSelect={handleStats} data={statsData} />
                </div>
                <div className="select-box">
                    <span className='select-title'>Time Range</span>
                    <InputSearch className={classes.select} type='select' name="queryParams" placeholder='Time Range' value={queryParam} onSelect={(e: ChangeEvent<HTMLSelectElement>) => setQueryParam(e.target.value)} data={TIMERANGE} />
                </div>
                <div className="select-box">
                    <span className='select-title'>Period</span>
                    <InputSearch className={classes.select} type='select' name="queryParams" value={queryParam} onSelect={(e: ChangeEvent<HTMLSelectElement>) => setQueryParam(e.target.value)} data={PERIOD} />
                </div>
                <div className="select-box">
                    <span className='select-title'>Time Zone</span>
                    <InputSearch className={classes.select} type='select' name="queryParams" value={queryParam} onSelect={(e: ChangeEvent<HTMLSelectElement>) => setQueryParam(e.target.value)} data={ZONE} />
                </div>
            </div>
            <div className="tabs">
                <Widget className={style} title='API Calls' subtitle={statsParam} onClick={handleClick} span='0' />
                <Widget className={styles} title='Errors' subtitle={errorParam} onClick={handleClicks} span='0%' />
                <Widget className={styleses} title='Success' subtitle={successParam} onClick={handleClickses} span='0ms' />
            </div>
            <div className="table">
                <DataTable />
            </div>
        </div>
    )
}

export default DevDashboard

const useStyles = makeStyles({
    select: {
        '& select': {
            padding: '.3rem .4rem',
        }
    },
    tabs: {

        '& span': {
            fontSize: '2rem'
        }
    }
})