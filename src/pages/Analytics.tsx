import { Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { ChangeEvent, useState } from 'react'
import { Widget, InputSearch, DataTable, Navbar } from '../components'
import { ERROR, STATISTICS, SUCCESS, TIMERANGE, PERIOD, ZONE, TABLEHADING, ROWS } from '../testdata'

const Analytics: React.FC = () => {
    const [statsParam, setStatsParam] = useState<string>(STATISTICS[0])
    const [errorParam, setErrorParam] = useState<string>(ERROR[0])
    const [successParam, setSuccessParam] = useState<string>(SUCCESS[0])
    const [statsData, setStatsData] = useState<string[]>(STATISTICS)
    const [queryParam, setQueryParam] = useState<string>("")
    const [style, setStyle] = useState('clickTab')
    const [errStyle, setErrStyle] = useState('tab')
    const [successStyle, setSuccessStyle] = useState('tab')
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
    <Typography sx={{fontSize: '1.5rem', fontWeight: 500, color: 'var(--color-primary)', padding: '2rem 2rem'}}>default-application_6350466 - Analytics</Typography>
    </div>
    <div className="selects">
                <div className="select-box">
                    <span className='select-title'>Statistics</span>
                    <InputSearch className={classes.select} type='select' name="statsParams" value={statsParam || errorParam || successParam} onSelect={handleStats} data={statsData} />
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
                <Widget className={style} title='API Calls' subtitle={statsParam} onClick={handleStatClick} span='0' />
                <Widget className={errStyle} title='Errors' subtitle={errorParam} onClick={handleErrClick} span='0%' />
                <Widget className={successStyle} title='Success' subtitle={successParam} onClick={handleSuccessClick} span='0ms' />
            </div>
            <div className="table">
                <DataTable Heading={TABLEHADING} Rows={ROWS} />
            </div>

    </div>
  )
}

export default Analytics

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
    },
    analytics: {
        width: "calc(100vw - 250px)"
    }
})