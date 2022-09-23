import { makeStyles } from '@mui/styles';
import React, { ReactNode } from 'react'
import Navbar from './navbar';
import Sidebar from './sidebar';

const ApiPageLayout:React.FC = () => {
    const classes = useStyles()
  return (
    <div className={classes.layout}>
       <Sidebar />
       <Navbar />
    </div>
  )
}

export default ApiPageLayout

const useStyles = makeStyles({
    layout: {
        display: "flex"
    }
})