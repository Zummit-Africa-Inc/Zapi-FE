import React, {ChangeEvent, FormEvent, useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { makeStyles } from "@mui/styles";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Box, FormControl, InputLabel, MenuItem, Select, Stack, TextField, Typography, Switch, SelectChangeEvent, Paper } from '@mui/material';
import Cookies from 'universal-cookie';

import { useAppDispatch, useAppSelector, useFormInputs, useHttpRequest } from '../hooks';
import ImageUpload from "./ImageUpload";
import { editAPI } from '../redux/slices/userSlice';

enum APIVisibility {
  PRIVATE = 'private',
  PUBLIC = 'public'
}
  
const core_url = import.meta.env.VITE_CORE_URL;
  
const GeneralTab: React.FC = () => {
  const { apis } = useAppSelector(store => store.apis)
  const [description, setDescription] = useState("")
  const [about, setAbout] = useState("")
  const [api_website, setApi_website] = useState("")
  const [term_of_use, setTerm_of_use] = useState("")
  const [base_url, setBase_url] = useState<String>("");
  const [visibility, setVisibility] = useState<String>(APIVisibility.PUBLIC)
  const [categoryId, setCategoryId] = useState<String>("");
  const [read_me, setRead_me] = useState("")
  const { error, loading, sendRequest } = useHttpRequest()
  const cookies = new Cookies()
  const profileId = cookies.get("profileId")
  const classes = useStyles()
  const [image, setImage] = useState(null)
  const { userApis } = useAppSelector(store => store.user)
  const { id } = useParams()
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  
  useEffect(() => {
    const api = userApis.find(api => api?.id === id)
    if (api) {
      setDescription(api?.description), setAbout(api?.about), setApi_website(api?.api_website), setTerm_of_use(api?.term_of_use),
      setBase_url(api?.base_url), setVisibility(api?.visibility), setCategoryId(api.categoryId), setRead_me(api?.read_me)
    }
  }, [id])
    
  const handleSwitch = (e: ChangeEvent<HTMLInputElement>) => {
    if (visibility === APIVisibility.PUBLIC) {
     setVisibility(APIVisibility.PRIVATE)
    } else {
     setVisibility(APIVisibility.PUBLIC)
    }
   }

  const handleSubmit = async(e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const payload = { categoryId, description, base_url, visibility, read_me, about, api_website, term_of_use }
    const headers = { 'Content-Type': 'application/json' }
    try{
      const data = await sendRequest(`${core_url}/api/${id}?profileId=${profileId}`, 'PATCH', JSON.stringify(payload), headers)
      if (data === undefined) return
      dispatch(editAPI(payload))
      navigate("/developer/dashboard")
    }catch(error){
      console.log(error)
    }
  }

  return (
    <>
    <Paper elevation={1} className={classes.paper}>
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
            <Select required value={categoryId} name="categoryId" onChange={(e) => setCategoryId(e.target.value)} sx={{width: '320px' }}>
              {apis.map((value) => ( value &&
                <MenuItem key={value.id} value={value.id}>{value.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <Box mt={2}>
          <InputLabel htmlFor="description">Short Description</InputLabel>
          <TextField required value={description} variant="outlined" name="description" onChange={(e) => setDescription(e.target.value)} multiline id="description" maxRows={10} fullWidth={true} helperText="Describe in few words what’s this API do" />
        </Box>
        <Box mt={2}>
          <InputLabel htmlFor="read_me">Read Me (optional)</InputLabel>
          <TextField value={read_me} variant="outlined" name="read_me" onChange={(e) => setRead_me(e.target.value)} multiline id="read_me" maxRows={10} fullWidth={true} helperText="Describe in detail what’s API do and how it might be helpful" />
        </Box>
        <Box mt={2}>
          <InputLabel htmlFor="documentation">Documentation (optional)</InputLabel>
          <TextField variant="outlined" value={about} name="about" onChange={(e) => setAbout(e.target.value)} multiline id="documentation" maxRows={10} fullWidth={true} helperText="Use this section to provide detailed documentation of your API and to highlight its benefits and features." />
        </Box>
        <Box mt={2}>
          <InputLabel htmlFor="api_website">Website(optional)</InputLabel>
          <TextField placeholder="https://" value={api_website} name="api_website" onChange={(e) => setApi_website(e.target.value)} variant="outlined" id="website" fullWidth={true} />
        </Box>
        <Box mt={2}>
        <Typography variant="body1" fontSize="20px" fontWeight={800}>Visibility</Typography>
        <Typography variant="body1" fontSize="16px" fontWeight={400}>Switching your API visibility to Public make it searchable and accessible to everyone.</Typography>
        <Box sx={{ padding: '30px', border: '1px solid black', marginBottom: '20px' }}>
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
              <Switch value={visibility} name="visibility" onChange={handleSwitch} />
            </Box>
          </Stack>
        </Box>
        <Box sx={{ padding: '30px', border: '1px solid black' }}>
          <Typography variant="body1" fontSize="18px" fontWeight={600}>Base URL</Typography>
          <Typography variant="body1" fontSize="18px" fontWeight={400}>Add a base URL, configure multiple URLs, override URLs, and select a load balancer</Typography>
          <InputLabel htmlFor="website">URL</InputLabel>
          <Stack direction="row">
            <TextField required value={base_url} name="base_url" onChange={(e) => setBase_url(e.target.value)} placeholder="https://" variant="outlined" id="website" fullWidth={true} />
          </Stack>
        </Box>
        </Box>
        <Box mt={2}>
          <Typography variant="body1" fontSize="20px" fontWeight={800}>Additional Information</Typography>
          <InputLabel htmlFor="terms">Terms of Use (optional)</InputLabel>
          <TextField variant="outlined" value={term_of_use} multiline name="term_of_use" onChange={(e) => setTerm_of_use(e.target.value)} maxRows={10} fullWidth={true} />
        </Box>
        <Box>
          <Stack direction="row" spacing={2} mt={5}>
            <button className={classes.saveBtn}>Save</button>
            <button className={classes.discardBtn}>Discard</button>
          </Stack>
        </Box>
      </form>
    </div>
    </Paper>
    </>
  )
}

export default GeneralTab;

const useStyles = makeStyles({
  paper: {
    width: "950px",
    marginTop: "20px",
    padding: "2rem 2rem",
},
  container: {
    background: 'inherit',
    borderRadius: '5px',
    width: '600px',
    padding: '20px',
    "@media screen and (max-width: 900px)": {
      width: "auto",
    }
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
  saveBtn: {
    padding: '15px 25px',
    backgroundColor: 'rgb(74, 149, 237)',
    color: 'white',
    borderRadius: '5px',
    outline: 'none',
    border: 'none',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#333',
    }
  },
  discardBtn: {
    padding: '15px 25px',
    borderRadius: '5px',
    outline: 'none',
    backgroundColor: '#fff',
    border: '1px solid rgb(214, 217, 219)',
    color: 'rgba(0, 0, 0, 0.87)'
  }
});