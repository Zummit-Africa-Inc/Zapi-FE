import React, { useState} from 'react'
import { makeStyles } from "@mui/styles";
import { Link } from 'react-router-dom';
import Profile from '/images/avatar.png';
import  Menus  from "../components/Menus";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Box, Divider, FormControl, IconButton, InputLabel, MenuItem, OutlinedInput, Select, Stack, TextField, Typography, Switch } from '@mui/material';



const GeneralTab: React.FC = () => {
  const classes = useStyles()
  const [formList, setFormList] = useState([{ form: ""}]);
  const [file, setFile] = useState(null);
  const [passwordVisible, setPasswordVisible] = useState(true);


  const [values, setValues] = React.useState([
    "Advertising",
    "Business",
    "Commerce",
    "Data",
    "Database",
    "eCommerce",
    "Education",
    "Food",
    "Health"
  ]);
  const [selected, setSelected] = useState("Bam");

  function handleChange(event:any) {
    setSelected(event.target.value);
  }

  function handleAdd(){
    setFormList([...formList, { form: ""}])
  }
  function handleRemove(index: any){
    const form = [...formList];
    form.splice(index, 1);
    setFormList(form)
  }
    
  return (
    <>
      <div className={classes.container}>
        <Typography variant="body1" fontSize="24px" fontWeight={800}>General Information</Typography>
        <form>
        <Stack direction="row" spacing={4}>
        {file ? (
						<div className={classes.previewContainer}>
							<img
								className={classes.imgPreview}
								src={URL.createObjectURL(file)}
								alt=""
							/>
						</div>
					) : (
						<div className={classes.previewContainer}>
									<img src={Profile} alt="Logo" className={classes.imgPreview} />
						</div>
					)}
          <Box>
            <Typography variant="body1" fontSize="16px" mb={2} fontWeight={400}>Drop file to upload or attach it (optional)</Typography>
            <label htmlFor="filePicker" className={classes.uploadBtn}>
              Upload Logo
            </label>
            <input id="filePicker" style={{visibility:"hidden"}} type={"file"} accept="image/*"
                  onChange={(e:any) => setFile(e.target.files[0])}/>
            <Typography variant="body1" fontSize="14px" mt={2}>Maximum Size: 500 x 500px, JPEG / PNG</Typography>
					</Box>
        </Stack>
        <Box mt={2}>
          <FormControl>
            <InputLabel htmlFor="agent-simple">Category</InputLabel>
            <Select
              value={selected}
              onChange={handleChange}
              sx={{marginTop: '10px', width: '320px'}}
              inputProps={{
                name: "agent",
                id: "age-simple"
              }}
            >
              {values.map((value, index) => {
                return <MenuItem value={value}>{value}</MenuItem>;
              })}
            </Select>
          </FormControl>
        </Box>

        <Box width="600px" mt={2}>
          <InputLabel htmlFor="description">Short Description</InputLabel>
          <TextField variant="outlined" multiline id="description" rows={5} maxRows={10} fullWidth={true} helperText="Describe in few words what’s this API do" />
        </Box>

        <Box width="600px" mt={2}>
          <InputLabel htmlFor="readme">Read Me (optional)</InputLabel>
          <TextField variant="outlined" multiline id="readme" rows={5} maxRows={10} fullWidth={true} helperText="Describe in detail what’s API do and how it might be helpful" />
        </Box>

        <Box width="600px" mt={2}>
          <InputLabel htmlFor="documentation">Documentation (optional)</InputLabel>
          <TextField variant="outlined" multiline id="documentation" rows={5} maxRows={10} fullWidth={true} helperText="Use this section to provide detailed documentation of your API and to highlight its benefits and features." />
        </Box>

        <Box width="300px" mt={2}>
          <InputLabel htmlFor="website">Website (optional)</InputLabel>
          <TextField placeholder="https://" variant="outlined" id="website"  fullWidth={true} />
        </Box>
        
        <Box mt={2}>
        <Typography variant="body1" fontSize="20px" fontWeight={800}>Visibility</Typography>
        <Typography variant="body1" fontSize="16px" fontWeight={400}>Switching your API visibility to Public make it searchable and accessible to everyone.</Typography>
         
        <Box width="600px" sx={{padding: '30px', border: '1px solid black', marginBottom: '20px'}}>
          <Stack direction="row" spacing={2}>
            <Box>
              <IconButton>
                {
                  passwordVisible ? <VisibilityIcon/> : <VisibilityOffIcon/>
                }
                    
              </IconButton>
            </Box>
            <Box>
              {
                passwordVisible ?
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
               
              
               <Switch onChange={() => setPasswordVisible(!passwordVisible)} />

            </Box>
          </Stack>
        </Box>

        <Box width="600px"  sx={{padding: '30px', border: '1px solid black'}}>
        <Typography variant="body1" fontSize="18px" fontWeight={600}>Base URL</Typography>
        <Typography variant="body1" fontSize="18px" fontWeight={400}>Add a base URL, configure multiple URLs, override URLs, and select a load balancer</Typography>
          <InputLabel htmlFor="website">URL</InputLabel>
          {formList.map((singleForm, index)=>(
            <>
            <Stack direction="row">
              <TextField placeholder="https://" variant="outlined" id="website"  fullWidth={true} />
              {formList.length > 1 && (
                <IconButton onClick={handleRemove}>
                    <HighlightOffIcon/>
                </IconButton>
              )}
              
            </Stack>
              <Divider sx={{marginTop: '10px', marginBottom: '10px'}}/>
              {formList.length - 1 === index && (
                <button style={{padding:'10px'}} onClick={handleAdd}>Add URL</button>
              )}
              </>
          ))}
        </Box>
        </Box>
        

        <Box width="600px" height="300px" mt={2}>
          <Typography variant="body1" fontSize="20px" fontWeight={800}>Additional Information</Typography>
          <InputLabel htmlFor="terms">Terms of Use (optional)</InputLabel>
          <TextField variant="outlined" multiline id="terms" rows={5} maxRows={10} fullWidth={true} />
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
        background: '#fff',
        width: '100%',
        height: '2600px',
        padding: '20px'
      },
    previewContainer: {
        position: 'relative'
    },
    imgPreview:{
          width: '100px',
          height: '100px',
          objectFit: "cover"
      },
    uploadBtn: {
        padding:'5px 10px',
        border: '1px solid rgb(214, 217, 219)',
        backgroundColor: '#fff',
        cursor: 'pointer',
        borderRadius: '5px',
        '&:hover':{
          backgroundColor: 'rgba(0, 0, 0, 0.05)'
        }
    },
    fixedBottom:{
      width:'100%',
      borderTop:'1px solid rgb(214, 217, 219)',
      position:'fixed',
      bottom: 0,
      padding: '20px',
      zIndex: 100,
      backgroundColor: 'white'
    },
    saveBtn:{
      padding: '10px 20px',
      backgroundColor: 'rgb(74, 149, 237)',
      color: 'white',
      borderRadius: '10px',
      outline: 'none',
      border: 'none',
      cursor: 'pointer',
      '&:hover':{
        backgroundColor: '#333',
      }
    },
    discardBtn:{
      padding: '10px 20px',
      borderRadius: '10px',
      outline: 'none',
      backgroundColor: '#fff',
      border: '1px solid rgb(214, 217, 219)',
      color: 'rgba(0, 0, 0, 0.87)'
    }
  });