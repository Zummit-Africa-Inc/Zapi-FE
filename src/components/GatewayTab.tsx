import React from 'react'
import { SelectMulti,ProxySecret, Threat, Schema, Config, Version } from '../components';
import { makeStyles } from "@mui/styles"
import { Box, Stack, Typography } from "@mui/material"






const GatewayTab: React.FC = () => {

    const classes = useStyles();
    
   

  return (
    <>
        <div className={classes.container}>
            <div className={classes.box}>
                <div className={classes.con}>
                    <form>
                        <div className={classes.gateway}>
                            <div className={classes.way}>
                            <Typography variant='h6' style={{ fontWeight:600, color:'black',fontSize:'16px',display:'block', boxSizing:'border-box',outline:'none 0px',letterSpacing:'normal', lineHeight:'24px' }}>Gateway DNS</Typography>
                            <Typography variant='h6' style={{ fontWeight:600, color:'black',fontSize:'12px',display:'block', boxSizing:'border-box',outline:'none 0px', letterSpacing:'normal',lineHeight:'16px' }}>The gateway developers use to make request to the API.</Typography>
                            </div>
                            <div className={classes.dropdown}>
                                <SelectMulti />
                            </div>
                            <div className={classes.fire}>
                                <div className={classes.wall}>
                                    <Typography variant='h6'style={{ fontWeight:600, color:'black',fontSize:'16px',display:'block', boxSizing:'border-box',outline:'none 0px',letterSpacing:'normal', lineHeight:'24px' }}>Firewall Settings</Typography>
                                    <Typography variant='h6' style={{ marginTop:'8px', fontWeight:'600px', color:'black',fontSize:'12px',display:'block', boxSizing:'border-box',outline:'none 0px', letterSpacing:'normal',lineHeight:'16px' }}>Protect your API by blocking requests that are not from the RapidAPI infrastructure. RapidAPI adds the “X-RapidAPI-Proxy-Secret” header on every request. This header has a unique value for each API.</Typography>
                                </div>
                            </div>
                            <ProxySecret />
                        </div>
                        <Threat />
                        <Schema />
                        <Config />
                        <Version />
                      
                        <Box className={classes.fixedBottom}>
                            <Stack direction="row" spacing={2}>
                            <button className={classes.saveBtn}>Save</button>
                            <button className={classes.discardBtn}>Discard</button>
                            </Stack>
                        </Box>
                    </form>
                </div>

            </div>

        </div>
    </>
  )

}
const useStyles = makeStyles({
    container:{
        overflow:'auto',
        flex:'1 1 0%',
        flexDirection:'column',
        boxSizing:'border-box',
        display:'flex'
    },
    box:{
        height: '100%',
        flexDirection: 'column',
        boxSizing:'border-box',
        display: 'flex',
    },
    con:{
        padding: '32px 24px',
        overFlowY: 'auto',
        boxSizing: 'border-box',
    },
    gateway:{
        width:'688px',
        boxSizing:'border-box'
    },
    way:{
        flexDirection:'column',
        boxSizing:'border-box',
        display:'flex'
    },
    dropdown:{
        marginTop:'16px',
        boxSizing:'border-box'
    },
    fire:{
        marginTop: '32px',
        boxSizing:'border-box',
    },
    wall:{
        flexDirection: 'column',
        boxSizing: 'border-box',
        display: 'flex',
    },
    fixedBottom: {
        width: '100%',
        borderTop: '1px solid rgb(214, 217, 219)',
        position: 'fixed',
        bottom: 0,
        padding: '20px',
        zIndex: 100,
        backgroundColor: '#F3F4F6'
      },
      saveBtn: {
        padding: '10px 20px',
        backgroundColor: 'rgb(74, 149, 237)',
        color: 'white',
        borderRadius: '10px',
        outline: 'none',
        border: 'none',
        cursor: 'pointer',
        '&:hover': {
          backgroundColor: '#333',
        }
      },
      discardBtn: {
        padding: '10px 20px',
        borderRadius: '10px',
        outline: 'none',
        backgroundColor: '#fff',
        border: '1px solid rgb(214, 217, 219)',
        color: 'rgba(0, 0, 0, 0.87)'
      },
    
})

export default GatewayTab