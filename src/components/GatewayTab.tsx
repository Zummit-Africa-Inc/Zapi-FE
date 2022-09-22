import React, { useState } from 'react'
import { SelectMulti,ProxySecret, Threat } from '../components';
import { makeStyles } from "@mui/styles"
import { Button, IconButton, Paper, Typography } from "@mui/material"

import ToggleOffIcon from "@mui/icons-material/ToggleOff";
import ToggleOnIcon from "@mui/icons-material/ToggleOn";


const GatewayTab: React.FC = () => {

    const classes = useStyles();
    const [threatProtection, setThreatProtection] = useState<boolean>(false);

    const toogleThreatProtection = () => {
		setThreatProtection(prevState => {
			return !prevState;
		});
    }

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
                        <div className={classes.request}>
                            <div className={classes.text}>
                                <Typography variant='h6' style={{ fontWeight:600, color:'black',fontSize:'16px',display:'block', boxSizing:'border-box',outline:'none 0px',letterSpacing:'normal', lineHeight:'24px' }}>Request Schema Validation</Typography>
                            </div>
                            <div className={classes.field}>
                                <div className={classes.subfield}>
                                    <div className={classes.textfield}>
                                        <Typography variant='h6' style={{ fontWeight:600, color:'black',fontSize:'16px',display:'block', boxSizing:'border-box',outline:'none 0px',letterSpacing:'normal', lineHeight:'24px' }}>
                                            Automatically validate the path, query and header parameters on run 
                                            time and block all invalid requests</Typography>
                                        <Typography variant='h6' style={{ marginTop:'4px', fontWeight:'600px', color:'black',fontSize:'12px',display:'block', boxSizing:'border-box',outline:'none 0px', letterSpacing:'normal',lineHeight:'16px' }}>
                                            This requires “Content-Type” header in requests with a body.</Typography>
                                            {threatProtection ? (
                                                <div className={classes.main}>
                                                    <ToggleOnIcon
                                                        fontSize="large"
                                                        onClick={toogleThreatProtection}
                                                        className={classes.pointer}
                                                    />{" "}
                                                </div>
                                            ) : (
                                                
                                                <div className={classes.main}>
                                                    <ToggleOffIcon
                                                        fontSize="large"
                                                        onClick={toogleThreatProtection}
                                                        className={classes.pointer}
                                                    />
                                                </div>
                                            )}
                                    </div>
                                </div>
                            </div>
                        </div>
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
    request:{
        marginTop: '32px',
        boxSizing: 'border-box',
    },
    text:{
        flexDirection: 'column',
        boxSizing: 'border-box',
        display: 'flex',
    },field:{
        marginTop: '16px',
        width: 'fit-content',
        height: 'fit-content',
        borderColor: 'rgb(214, 217, 219)',
        borderRadius: '6px',
        borderStyle: 'solid',
        borderWidth: '1px',
        boxSizing: 'border-box',
    },
    subfield:{
        padding: '16px',
        webkitBoxAlign: 'center',
        alignItems: 'center',
        boxSizing: 'border-box',
        display: 'flex',
    },
    textfield:{
        flexDirection: 'column',
        boxSizing:'border-box',
        display: 'flex',
    },
    main: {
		marginLeft: '16px',
        boxSizing: 'border-box',
        display: 'inline-flex',
        flexDirection: 'column',
        position: 'relative'
    },
    pointer: {
		cursor: "pointer",
	},
    
})

export default GatewayTab