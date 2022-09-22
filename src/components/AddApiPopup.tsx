import React from "react";
import { Typography, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, MenuItem, Stack, Modal} from "@mui/material";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { makeStyles } from "@mui/styles";

import { useContextProvider } from "../contexts/ContextProvider";

import { useFormInputs, useHttpRequest } from "../hooks";
import { Fallback } from "../components";

const initialState = {name: "", description: ""};

const AddApiPopup: React.FC = () => {
  const { loading, error, sendRequest, clearError } = useHttpRequest();
  const { inputs, bind } = useFormInputs(initialState);
  const { handleUnclicked } = useContextProvider()
  const [dropdown, setDropdown] = React.useState('');
  const classes = useStyles();

  const handleDropdownChange = (event: SelectChangeEvent) => {
    setDropdown(event.target.value);
  };
 
  
  return (
    <>
    {loading && <Fallback />}
    <div>
      <div className={classes.container}>
        <div className={classes.main} onClick={(e) => e.stopPropagation()}>
          <Typography variant="body1" fontSize="24px" lineHeight="30px" fontWeight={700} mb={3}>Add API Project</Typography>
          <form className={classes.form}>
            <div className={classes.input}>
              <label>Name</label>
              <input type="text" {...bind} placeholder="Add API Name" />
            </div>
            <div className={classes.input}>
              <label>Description</label>
              <input type="text" name="description" {...bind} placeholder="Add API Description" />
            </div>
            <div className={classes.input}>
              <label>Category</label>
              <div>
                <FormControl className={classes.input}>
                  <Select
                    value={dropdown}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Category' }}
                    onChange={handleDropdownChange}
                  >
                    <MenuItem value={10}>Technology</MenuItem>
                    <MenuItem value={20}>Sports</MenuItem>
                    <MenuItem value={30}>Health</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>

            <div className={classes.input}>
              <label>Team</label>
              <div>
                <FormControl className={classes.input}>
                  <Select
                    value={dropdown}
                    onChange={handleDropdownChange}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Team' }}
                  >
                    <MenuItem value={10}>Personal</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>

          </form>
      
          {/* Radio Buttons */}
          <FormControl>
              <FormLabel id="demo-radio-buttons-group-label" sx={{fontSize: "16px", fontWeight: "500", lineHeight: "24px", color: "#000000", marginBottom: "10px", marginTop: "10px"}}>Import data from</FormLabel>

              <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="radio-buttons-group"
              >
                  <FormControlLabel value="Do not Import" control={<Radio />} label="Do not Import" />
                  <FormControlLabel value="Open API" control={<Radio />} label="Open API" />
                  <FormControlLabel value="Rapid API" control={<Radio />} label="Rapid API" />
                  <FormControlLabel value="Postman Collection" control={<Radio />} label="Postman Collection" />
              </RadioGroup>
          </FormControl>
          {/* Divider */}
          <div className={classes.divider} />
          {/* Add and Cancel Buttons */}
          <div style={{top: "600px", left: "325px", gap: "40px", display: "flex", flexDirection: "row", alignItems: "flex-start", width: "275px", marginBottom: "20PX", marginLeft: "235PX"}}>
              <button className={classes.cancelBtn} onClick={() => handleUnclicked('addapi')}>
                  <Typography>Cancel</Typography>
              </button>
              <div className={classes.addBtn}>
                  <Typography>Add API Project</Typography>
              </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

const useStyles = makeStyles({
  container: {
    width: "100vw",
    height: "100vh",
    display: "grid",
    placeItems: "center",
    position: "fixed",
    overflow: "scroll",
    top: 0,
    left: 0,
    background: "rgba(225, 225, 225, 0.3)",
    backdropFilter: "blur(2px)",
    zIndex: 50,
  },
  main: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    background: "#FFF",
    borderRadius: "8px",
    padding: "40px 40px",
    marginTop: "110px",

  },
  form: {
    width: "500px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "1rem",
    "@media screen and (max-width: 768px)": {
      width: "70%",
    }
  },
  input: {
    width: "500px",
    height: "72px",
    background: "",
    display: "flex",
    flexDirection: "column",
    "& input": {
      width: "100%",
      height: "52px",
      borderRadius: "4px",
      border: "1px solid #999",
      outline: "none",
      padding: "12px 16px 8px 12px",
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: "24px",
    },
    "& label": {
      fontWeight: 500,
      fontSize: "16px",
      lineHeight: "16px",
      marginBottom: "3px"
    },
    "@media screen and (max-width: 768px)": {
      width: "100%",
    }
  },
  button: {
    width: "440px",
    height: "52px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "4px",
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "16px",
    cursor: "pointer",
    margin: "2rem 0",
    padding: "0 1rem",
    "@media screen and (max-width: 768px)": {
      width: "100%",
    }
  },
  link: {
    textDecoration: "underline",
    marginLeft: "0.5rem",
  },
  divider: {
    width: "100%",
    height: "1px",
    background: "Grey",
    marginTop: "10px",
    marginBottom: "20px"
  },
  cancelBtn: {
    display: "flex", 
    flexDirection: "row", 
    alignItems: "center", 
    padding: "8px 16px", 
    gap: "16px",
    width: "150px", 
    height: "46px", 
    cursor: "pointer",
    background: "#white",
    color: "#1D1D1D", 
    border: "1px solid #1D1D1D",
    borderRadius: "8px"
  },
  addBtn: {
    display: "flex", 
    flexDirection: "row", 
    alignItems: "center", 
    padding: "8px 14px", 
    gap: "16px",
    width: "440px", 
    height: "46px", 
    background: "#1D1D1D", 
    color: "white",
    borderRadius: "8px",
    textAlign: "center",   
    margin: "0 auto", 
  }
})

export default AddApiPopup;