import React from 'react'
import { makeStyles } from '@mui/styles'
import KeyboardDoubleArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowLeftOutlined';

const Collapse:React.FC = () => {
    const classes = useStyles();

  return (
    <div className={classes.root}>
        <button className={classes.button}>
            <div className={classes.mainwrap}>
                <div className={classes.wrap}>
                    <div className={classes.lastwrap}>
                        <KeyboardDoubleArrowLeftOutlinedIcon sx={{display: 'block' }} />
                    </div>
                </div>
            Collapse
            </div>
        </button>
    </div>
  )
}

const useStyles = makeStyles({
    root:{
        webkitBoxFlex: 1,
        webkitBoxPack: 'end',
        justifyContent: 'flex-end',
        flexDirection: 'column',
        boxSizing: 'border-box',
        display: 'flex',
        "& > : last-child":{
            flex: '0 1 0%',
        },
    },

    button:{
        margin: '0px',
        padding:' 0px 14px',
        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Avenir Next", Avenir, Helvetica, sans-serif',
        fontSize: '14px',
        letterSpacing: 'normal',
        webkitBoxAlign: 'center',
        alignItems: 'center',
        appearance: 'none',
        borderRadius: '6px',
        borderStyle: 'solid',
        borderWidth: '1px',
        boxSizing: 'border-box',
        colorScheme: 'light',
        cursor: 'pointer',
        display:' inline-flex',
        fontWeight: 'normal',
        height: '36px',
        outline: 'none 0px',
        position: 'relative',
        lineHeight: '20px',
        transition: 'color 0.25s cubic-bezier(0.4, 0, 0.2, 1) 0s, background-color 0.25s cubic-bezier(0.4, 0, 0.2, 1) 0s',
        userSelect: 'none',
        verticalAlign: 'middle',
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        color: 'rgba(0, 0, 0, 0.6)',
        webkitBoxPack: 'start',
        justifyContent: 'flex-start',
    },
    mainwrap:{
        boxSizing: 'border-box',
        webkitBoxAlign: 'center',
        alignItems: 'center',
        display: 'flex',
        webkitBoxPack: 'center',
        justifyContent: 'center',
        position: 'relative',
        whiteSpace: 'nowrap',
    },
    wrap:{
        marginRight: '6px',
        boxSizing: 'border-box',
    },
    lastwrap:{
        marginRight: '14px',
        boxSizing: 'border-box',
    }
})


export default Collapse