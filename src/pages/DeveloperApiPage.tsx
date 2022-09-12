import React from 'react'
import { makeStyles } from '@mui/styles'
import { ApiSidebar } from '../components';
import {  DevNavbar } from '../components'

const DeveloperApiPage:React.FC = () => {
    const classes = useStyles();

  return (
    <div className={classes.root}>
        <div className={classes.subRoot}>
            <div className={classes.minRoot}>
                <DevNavbar />
                <div className={classes.mainWrap}>
                    <div className={classes.main}>
                    <ApiSidebar />
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    
  )
}

const useStyles = makeStyles({
    root:{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
    },
    subRoot:{
        display: 'flex',
        flexDirection: 'column',
        minHeight:' 100%',
        height: '100%',
    },
    minRoot:{
        display: 'flex',
        flexDirection: 'column',
        minHeight:' 100%',
        height:' 100%',
    },
    mainWrap:{
        display: 'flex',
        flex: '1',
        backgroundColor:'#ffff'
    },

    main:{
        padding: '16px',
        overFlow: 'hidden',
        height: '100%',
        flexShrink:'0',
        boxSizing: 'border-box',
        display: 'flex',
        width: '240px',
        flexDirection: 'column',
        borderRight: '1px solid rgb(214, 217, 219)',
        alignContent: 'space-around',
        transition: 'width 0.1s linear 0s',
    },
})


export default DeveloperApiPage