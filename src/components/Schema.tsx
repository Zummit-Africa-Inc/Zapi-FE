;import React,{ useState } from 'react'
import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { MdError, MdToggleOff, MdToggleOn } from "react-icons/md";

import { SCHEMA } from '../testdata';

const Schema:React.FC = () => {
    const classes = useStyles();
    const [threatProtection, setThreatProtection] = useState<boolean>(false);
    const [value, setValue] = React.useState(SCHEMA[0].header);

    const toogleThreatProtection = () => {
		setThreatProtection(prevState => {
			return !prevState;
		});
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue((event.target as HTMLInputElement).value);
    };

  return (
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
                    {threatProtection ? 
                    (<div className={classes.main}>
                        <MdToggleOn fontSize="large" onClick={toogleThreatProtection} className={classes.pointer} />{" "}
                        </div>
                    ) : (
                        <div className={classes.main}>
                            <MdToggleOff fontSize="large" onClick={toogleThreatProtection}className={classes.pointer} />
                        </div>
                    )}
                    {threatProtection && 
                    <>
                    <div className={classes.line}></div>
                    <div className={classes.subcontain}>
                        <div className={classes.submain}>
                            <div className={classes.icon}>
                                <MdError />
                            </div>
                            <Typography variant='h6' style={{ marginLeft:'14px', color:'rgba(0, 0, 0, 0.87)', 
                                fontSize:'18px', letterSpacing:'normal', lineHeight:'20px', display:'block',
                                boxSizing:'border-box', outline:'none 0px' }}>
                                    Enabled to automatically validate the path,
                                    query and header parameters on run time and block all invalid requests
                            </Typography>
                        </div>
                        <div className={classes.select}>
                            <FormControl>
                                <RadioGroup
                                    aria-labelledby="demo-controlled-radio-buttons-group"
                                    name="controlled-radio-buttons-group"
                                    value={value}
                                    onChange={handleChange}>
                                    {SCHEMA.map((schema) => ( <FormControlLabel control={<Radio />} key={schema.header} {...schema} />))}
                                </RadioGroup>
                            </FormControl>
                        </div>
                    </div>
                    </>}
                </div>
            </div>
        </div>
    </div>
  )
}
const useStyles = makeStyles({
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
    line:{
        boxSizing: 'border-box',
        height: '1px',
        width: '100%',
        borderTop: '1px solid rgb(214, 217, 219)'
    },
    subcontain:{
        padding: '16px',
        boxSizing:'border-box',
    },
    submain:{
        marginBottom: '16px',
        padding: '16px',
        webkitBoxAlign: 'center',
        alignItems: 'center',
        display: 'flex',
        border: '1.5px solid rgb(74, 149, 237)',
        boxSizing: 'border-box',
        borderRadius: '6px',
    },
    icon:{
        color: 'rgb(48, 128, 222)',
        boxSizing: 'border-box'
    },
    select:{
        flexDirection: 'column',
        boxSizing: 'border-box',
        display: 'flex',
    }

})

export default Schema