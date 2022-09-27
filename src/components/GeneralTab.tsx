import React, { FormEvent, useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import { makeStyles } from "@mui/styles";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Box, FormControl, InputLabel, MenuItem, Select, Stack, TextField, Typography, Switch, SelectChangeEvent } from '@mui/material';
import Cookies from 'universal-cookie';

import { useAppSelector, useFormInputs, useHttpRequest } from '../hooks';
import { AddApiProps } from "../interfaces";
import ImageUpload from "./ImageUpload";
  
const core_url = import.meta.env.VITE_BASE_URL
const initialState = { category: "", description: "", baseUrl:"", visibility: "public",
readMe: null, about: "", documentation: null, website: "", additionalInfo: "" } as AddApiProps
  
const GeneralTab: React.FC = () => {
  const { apis } = useAppSelector(store => store.apis)
  const { inputs, bind, select, toggle } = useFormInputs(initialState)
  const { category, description, baseUr, visibility, readMe, about, documentation, website, additionalInfo } = inputs
  const { error, loading, sendRequest } = useHttpRequest()
  const cookies = new Cookies()
  const profileId = cookies.get("profileId")
  const classes = useStyles()
  const [image, setImage] = useState(null)
  
  const fetchAPI = async() => {
    try{
    }catch(err) {}
  }
  
  useEffect(() => {
    fetchAPI()
  }, [])

  const handleSubmit = async(e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const payload = { category, description, baseUr, visibility, readMe, about, documentation, website, additionalInfo }
    const headers = { 'Content-Type': 'application/json' }
    try{
      // const data = await sendRequest(`${core_url}/api/${profileId}`, 'POST', JSON.stringify(payload), headers)
      console.log(payload)
    }catch(err){}
  }

  return (
    <>
    <div className={classes.container}>
      <Typography variant="body1" fontSize="24px"  fontWeight={800}>General Information</Typography>
      <form onSubmit={handleSubmit}>
        <Box sx={{width: "200px", height: "200px", margin: "0.5rem 0"}}>
          <ImageUpload setImageFile={() => setImage} />
          {/* <Typography variant="body1" fontSize="14px" mt={2}>Maximum Size: 500 x 500px, JPEG / PNG</Typography> */}
        </Box>
        <Box mt={2}>
          <InputLabel htmlFor="category" id="category">Category</InputLabel>
          <FormControl>
            <Select required value={category} name="category" {...select} sx={{width: '320px' }}>
              {apis.map((value) => ( value &&
                <MenuItem key={value.id} value={value.id}>{value.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <Box width="600px" mt={2}>
          <InputLabel htmlFor="description">Short Description</InputLabel>
          <TextField required variant="outlined" name="description" {...bind} multiline id="description" maxRows={10} fullWidth={true} helperText="Describe in few words what’s this API do" />
        </Box>
        <Box width="600px" mt={2}>
          <InputLabel htmlFor="readme">Read Me (optional)</InputLabel>
          <TextField variant="outlined" multiline id="readMe" maxRows={10} fullWidth={true} helperText="Describe in detail what’s API do and how it might be helpful" />
        </Box>
        <Box width="600px" mt={2}>
          <InputLabel htmlFor="documentation">Documentation (optional)</InputLabel>
          <TextField variant="outlined" name="about" {...bind} multiline id="documentation" maxRows={10} fullWidth={true} helperText="Use this section to provide detailed documentation of your API and to highlight its benefits and features." />
        </Box>
        <Box width="300px" mt={2}>
          <InputLabel htmlFor="website">Website (optional)</InputLabel>
          <TextField placeholder="https://" name="website" {...bind} variant="outlined" id="website" fullWidth={true} />
        </Box>
        <Box mt={2}>
        <Typography variant="body1" fontSize="20px" fontWeight={800}>Visibility</Typography>
        <Typography variant="body1" fontSize="16px" fontWeight={400}>Switching your API visibility to Public make it searchable and accessible to everyone.</Typography>
        <Box width="600px" sx={{ padding: '30px', border: '1px solid black', marginBottom: '20px' }}>
          <Stack direction="row" spacing={2}>
            <Box>
              {visibility ? <VisibilityIcon /> : <VisibilityOffIcon />}
            </Box>
            <Box>
              {visibility ?
                <>
                  <Typography fontWeight={600}>API Project is Public</Typography>
                  <Typography>Accessible to hundreds of thousands of developers on the Hub</Typography>
                </>
                :
                <>
                  <Typography fontWeight={600}>API Project is Private</Typography>
                  <Typography>It&apos;s not visible on the Hub and new users can&apos;t access it</Typography>
                </>
              }
              <Switch value={visibility} name="visibility" {...toggle} />
            </Box>
          </Stack>
        </Box>
        <Box width="600px" sx={{ padding: '30px', border: '1px solid black' }}>
          <Typography variant="body1" fontSize="18px" fontWeight={600}>Base URL</Typography>
          <Typography variant="body1" fontSize="18px" fontWeight={400}>Add a base URL, configure multiple URLs, override URLs, and select a load balancer</Typography>
          <InputLabel htmlFor="website">URL</InputLabel>
          <Stack direction="row">
            <TextField required name="baseUrl" {...bind} placeholder="https://" variant="outlined" id="website" fullWidth={true} />
          </Stack>
        </Box>
        </Box>
        <Box width="600px" height="300px" mt={2}>
          <Typography variant="body1" fontSize="20px" fontWeight={800}>Additional Information</Typography>
          <InputLabel htmlFor="terms">Terms of Use (optional)</InputLabel>
          <TextField variant="outlined" multiline name="additionalInfo" {...bind} maxRows={10} fullWidth={true} />
        </Box>
        <Box className={classes.fixedBottom}>
          <Stack direction="row" spacing={2}>
            <button className={classes.saveBtn}>Save</button>
            <button className={classes.discardBtn}>Discard</button>
          </Stack>
        </Box>
      </form>
    </div>
    </>
  )
}

export default GeneralTab;

const useStyles = makeStyles({
  container: {
    background: 'inherit',
    borderRadius: '5px',
    width: '100%',
    padding: '20px'
  },
  previewContainer: {
    position: 'relative'
  },
  imgPreview: {
    width: '100px',
    height: '100px',
    objectFit: "cover"
  },
  uploadBtn: {
    padding: '5px 10px',
    border: '1px solid rgb(214, 217, 219)',
    backgroundColor: '#fff',
    cursor: 'pointer',
    borderRadius: '5px',
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.05)'
    }
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
  }
});