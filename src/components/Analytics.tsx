import { Typography, Paper, Table, TableBody, TableCell, TableHead, TableRow, TablePagination } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { useState, useEffect, useMemo } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks'
import { Widget, InputSearch, DataTable, Navbar } from '.'
import { ERROR, STATISTICS, SUCCESS, TIMERANGE, PERIOD, ZONE } from '../testdata'
import { getAnalytics, getAnalyticsLog } from '../redux/slices/analyticSlice'
import { useParams } from 'react-router-dom'
import { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';

const initialState = { statistics: "", timerange: TIMERANGE[0], period: PERIOD[0], timezone: ZONE[0] }

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

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
    const dispatch = useAppDispatch()
    const { analytics, analyticsLog } = useAppSelector(store => store.analytics)
    const { id } = useParams()

    const { userApis } = useAppSelector(store => store.user)
    const api = userApis.find(api => api?.id === id)

    useMemo(() => {api}, [id])
      

    const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  
  useEffect(() => {
    dispatch(getAnalytics(id))
  }, [id])
  
  useEffect(() => {
    dispatch(getAnalyticsLog(id))
  }, [id])

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
        <Paper elevation={1} className={classes.paper}>
        <div className={classes.analytics}>
            <div className="heading">
                <Typography sx={{ fontSize: '1.5rem', fontWeight: 500, color: 'var(--color-primary)', padding: '2rem 2rem' }}>{api!.name} API - Analytics</Typography>
            </div>
            <div className={classes.Tab}>
                <div className="tabs">
                    <Widget className={style} title='API Calls' subtitle={statsParam} onClick={handleStatClick}  span={analytics.total_calls} />
                </div>
                <div className="tabs">
                    <Widget className={errStyle} title='Errors' subtitle={errorParam} onClick={handleErrClick} span={analytics.total_errors} />
                </div>
                <div className="tabs">
                    <Widget className={successStyle} title='Success' subtitle={successParam} onClick={handleSuccessClick} span={analytics.successful_calls} />
                </div>
            </div>
            <div>
            <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Time</StyledTableCell>
            <StyledTableCell>API Version</StyledTableCell>
            <StyledTableCell>Endpoint</StyledTableCell>
            <StyledTableCell>Method</StyledTableCell>
            <StyledTableCell>Response Status</StyledTableCell>
            <StyledTableCell>Latency</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {analyticsLog?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)?.map((logs, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell>
                {logs.createdOn}
              </StyledTableCell>
              <StyledTableCell>
                {logs.version}
              </StyledTableCell>
              <StyledTableCell>
                {logs.endpoint}
              </StyledTableCell>
              <StyledTableCell>
                {logs.method}
              </StyledTableCell>
              <StyledTableCell>
                {logs.status}
              </StyledTableCell>
              <StyledTableCell>
                {logs.latency}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[5, 10, 20]}
        component="div"
        count={analyticsLog.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
            </div>
        </div>
        </Paper>
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
    paper: {
        width: "950px",
        marginTop: "20px",
        padding: "2rem 2rem",
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