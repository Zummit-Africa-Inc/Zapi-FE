import React from 'react'
import { makeStyles } from "@mui/styles";
import FileUploadIcon from '@mui/icons-material/FileUpload';
import { Stack, TextField, Select, MenuItem, InputLabel, Typography, Box, Button } from "@mui/material";

const AddApi: React.FC = () => { 
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <form>
        <Stack spacing={2} mx={2}>
        <Typography variant="h5">Add New API</Typography>
          <Typography className={classes.label}>API Name</Typography>
          <TextField
          required
          id=""
            placeholder="Your API Name"
            className={classes.inputWidth}
          />
          <Typography className={classes.label}>API Description</Typography>
          <TextField
          required
          id=""
            placeholder="Your API Name"
            className={classes.inputWidth}
          />
          <Typography className={classes.label}>API Category</Typography>
      <Select
				name="category"
        defaultValue="category"
        className={classes.inputWidth}
        >
          <MenuItem value="category" style={{ pointerEvents: "none" }}>
												Select
											</MenuItem>
          <MenuItem value="business">Business</MenuItem>
            <MenuItem value="travel">Travel</MenuItem>
          </Select>
          <Typography className={classes.label}>Who Owns this API: <span className={classes.grey}>John Doe</span></Typography>
          <Stack direction="row" alignItems="center" spacing={2}>
            
            <Typography className={classes.label}>Specify using:</Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                            <Button variant="outlined" className={classes.space}>UI</Button>
                            <Button variant="outlined">OpenAPI</Button>
                            <Button variant="outlined">Postman Collection</Button>
                            <Button variant="outlined">GraphQL Schema</Button>
                            <Button variant="outlined">Kafka</Button>
                    </Box>
          </Stack>
          <Button variant="contained" size="large" startIcon={<FileUploadIcon />} className={classes.button}>
  Upload API
</Button>
        </Stack>
        
          </form>
    </div>
  )
}
const useStyles = makeStyles({
  main: {
    backgroundColor: "#fff",
    height: "100%",
  },
  label: {
    color: "#081F4A",
  },
  inputWidth: {
    width: "70vh",
  },
  button: {
    width: "38vh",
  },
  grey: {
    color: "#B8B8B8",
  },
  space: {
    marginRight: "10px"
  }
})
export default AddApi