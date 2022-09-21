import React, { ChangeEvent, useState, useEffect } from 'react'
import { makeStyles } from "@mui/styles";
import { Link, useParams } from 'react-router-dom';
import Profile from '/images/avatar.png';
import Menus from "../components/Menus";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Box, Divider, FormControl, IconButton, InputLabel, MenuItem, Select, Stack, TextField, Typography, Switch, SelectChangeEvent } from '@mui/material';
import { useAppSelector } from '../hooks';
import axios from 'axios';
import Cookies from 'universal-cookie';
import ImageUpload from "./ImageUpload";

const url = import.meta.env.VITE_BASE_URL

enum APIVisibility {
  PRIVATE = 'private',
  PUBLIC = 'public'
}

const GeneralTab: React.FC = () => {
  const classes = useStyles()
  const [description, setDescription] = useState("")
  const [about, setAbout] = useState("")
  const [api_website, setApi_website] = useState("")
  const [term_of_use, setTerm_of_use] = useState("")
  const [base_url, setBase_Url] = useState<String>("");
  const [logo_url, setLogo_url] = useState<any>();
  const [visibility, setVisibility] = useState<String>(APIVisibility.PUBLIC)
  const [categoryId, setCategoryId] = useState<String>("");
  const { apis } = useAppSelector(store => store.apis)
  const [apiId, setApiId] = useState("")
  const cookies = new Cookies()
  const profileId = cookies.get("profileId")

  useEffect(() => {
    const fetchAPI = async() => {
      try{
        const data = await axios.get(`${url}/api/${profileId}/myapis`)
        data.data.data.map((api: any) => {
          setApiId(api.id), setDescription(api.description) ,setAbout(api.about) ,setApi_website(api.api_website) ,setTerm_of_use(api.term_of_use) ,setVisibility(api.visibility) ,setCategoryId(api.categoryId)
          setBase_Url(api.base_url), setLogo_url(api.logo_url)
        })
      }catch(err) {
        console.log(err)
      }
    }
    fetchAPI()
  }, [])

  const handleSwitch = (e: ChangeEvent<HTMLInputElement>) => {
   if (visibility === APIVisibility.PRIVATE) {
    setVisibility(APIVisibility.PUBLIC)
   } else {
    setVisibility(APIVisibility.PRIVATE)
   }
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    try{
      const data = {base_url, visibility, categoryId, logo_url, description, api_website, about, term_of_use }
      
      console.log(data)
      
      const res = await axios.patch(`${url}/zl-core/api/${apiId}/?profileId=${profileId}`, data)
      console.log(res)
    }catch(err){
      console.log(err)
    }

   
  }

  return (
    <>
      <div className={classes.container}>
        <Typography variant="body1" fontSize="24px"  fontWeight={800}>General Information</Typography>
        <form onSubmit={handleSubmit}>
          <Stack direction="row" sx={{ marginBottom:'4rem', marginTop: '2rem' }} spacing={4}>
            <Box>
              <Typography variant="body1" fontSize="16px" mb={2} fontWeight={400}>Drop file to upload or attach it (optional)</Typography>
              {/* <label htmlFor="filePicker" className={classes.uploadBtn}>
                Upload Logo
              </label> */}
              <ImageUpload setImageFile={logo_url} />
              {/* <Typography variant="body1" fontSize="14px" mt={2}>Maximum Size: 500 x 500px, JPEG / PNG</Typography> */}
            </Box>
          </Stack>
          <Box mt={2}>
              <InputLabel htmlFor="category" id="category">Category</InputLabel>
            <FormControl>
              <Select
              required
                value={categoryId}
                onChange={(e: SelectChangeEvent<String>) => setCategoryId(e.target.value)}
                sx={{width: '320px' }}
                inputProps={{
                  name: "agent",
                  id: "age-simple"
                }}
              >
                {apis.map((value) => (
                  <MenuItem key={value.id} value={value.id}>{value.name}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>

          <Box width="600px" mt={2}>
            <InputLabel htmlFor="description">Short Description</InputLabel>
            <TextField required variant="outlined" value={description} onChange={(e) => setDescription(e.target.value)} multiline id="description" rows={5} maxRows={10} fullWidth={true} helperText="Describe in few words what’s this API do" />
          </Box>

          <Box width="600px" mt={2}>
            <InputLabel htmlFor="readme">Read Me (optional)</InputLabel>
            <TextField variant="outlined" multiline id="readme" rows={5} maxRows={10} fullWidth={true} helperText="Describe in detail what’s API do and how it might be helpful" />
          </Box>

          <Box width="600px" mt={2}>
            <InputLabel htmlFor="documentation">Documentation (optional)</InputLabel>
            <TextField variant="outlined" value={about} onChange={(e) => setAbout(e.target.value)} multiline id="documentation" rows={5} maxRows={10} fullWidth={true} helperText="Use this section to provide detailed documentation of your API and to highlight its benefits and features." />
          </Box>

          <Box width="300px" mt={2}>
            <InputLabel htmlFor="website">Website (optional)</InputLabel>
            <TextField placeholder="https://" value={api_website} onChange={(e) => setApi_website(e.target.value)} variant="outlined" id="website" fullWidth={true} />
          </Box>

          <Box mt={2}>
            <Typography variant="body1" fontSize="20px" fontWeight={800}>Visibility</Typography>
            <Typography variant="body1" fontSize="16px" fontWeight={400}>Switching your API visibility to Public make it searchable and accessible to everyone.</Typography>

            <Box width="600px" sx={{ padding: '30px', border: '1px solid black', marginBottom: '20px' }}>
              <Stack direction="row" spacing={2}>
                <Box>
                  <IconButton>
                    {
                      visibility ? <VisibilityIcon /> : <VisibilityOffIcon />
                    }

                  </IconButton>
                </Box>
                <Box>
                  {
                    visibility ?
                      <>
                        <Typography fontWeight={600}>API Project is Public</Typography>
                        <Typography>Accessible to hundreds of thousands of developers on the Hub</Typography>
                      </>
                      :
                      <>
                        <Typography fontWeight={600}>API Project is Private</Typography>
                        <Typography>It’s not visible on the Hub and new users can’t access it</Typography>
                      </>
                  }


                  <Switch value={visibility} onChange={handleSwitch}  />

                </Box>
              </Stack>
            </Box>

            <Box width="600px" sx={{ padding: '30px', border: '1px solid black' }}>
              <Typography variant="body1" fontSize="18px" fontWeight={600}>Base URL</Typography>
              <Typography variant="body1" fontSize="18px" fontWeight={400}>Add a base URL, configure multiple URLs, override URLs, and select a load balancer</Typography>
              <InputLabel htmlFor="website">URL</InputLabel>
                  <Stack direction="row">
                    <TextField required name="apiUrl" placeholder="https://" value={base_url}  onChange={(e) => setBase_Url(e.target.value)} variant="outlined" id="website" fullWidth={true} />
                  </Stack>
            </Box>
          </Box>


          <Box width="600px" height="300px" mt={2}>
            <Typography variant="body1" fontSize="20px" fontWeight={800}>Additional Information</Typography>
            <InputLabel htmlFor="terms">Terms of Use (optional)</InputLabel>
            <TextField variant="outlined" multiline id="terms" value={term_of_use} onChange={(e) => setTerm_of_use(e.target.value)} rows={5} maxRows={10} fullWidth={true} />
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