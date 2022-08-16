import React from "react";
import {  Typography, TextField, Box, Grid, Select, MenuItem,InputLabel, FormControl} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { BaseButton, Navbar } from "../components"



const OrgPage: React.FC = () => {
   const classes = useStyles()
  return (
  
    <Box style={{ background: "#FFF",height:'100%'}} >
      <Navbar />
      <Box>  
<Typography variant="h4"  className={classes.typo} sx={{mb:{xs:'25px',md:'0',lg:'0'}}}>
 <Box fontWeight='fontWeightMedium' display='inline'>Create Your Organisation</Box>
</Typography>
<Typography  className={classes.typo} sx={{mb:'80px'}} >
 Organisation accounts allow your team to manage your API both internally and externally 
</Typography>
</Box>
<Box  mb={2} sx={{ml:{xs:'0%',lg:'25%',md:'25%'}}}>
<Box sx={{ display:{xs:'grid'},placeItems:{xs:'center',lg:'normal',md:'normal'}}}>
<TextField label="Organisation Name" variant="outlined" sx={{width:{xs:'80vw',md:'48%',lg:'48%'}}} className={classes.field} />
<Typography className={classes.orgTypo}  sx={{mb:'50px',width:{xs:'80%'}}}>
 *This business name will own and control this organisation account
</Typography>
<TextField label="Organisation Seat" variant="outlined" className={classes.field} sx={{width:{xs:'80vw',md:'48%',lg:'48%'}}}/>
<Typography className={classes.orgTypo}sx={{mb:'50px',width:{xs:'80%'}}}>
 *Seat can be added or removed at anything. The first seats are free
</Typography>
</Box>
</Box>
  <Typography variant="h5"className={classes.Task} sx={{mb:{xs:'50px',lg:'10px',md:'10px'}}}>Invite Teammates to your new organisation </Typography>
   <Box  sx={{ml:{xs:'0%',lg:'25%',md:'25%'},display:{xs:'grid'},paddingBottom:{xs:'80px',lg:'0px',md:'0px'}, placeItems:{xs:'center',lg:'normal',md:'normal'}}}>
   <Grid container rowSpacing={{xs:3,lg:1,md:1}} columnSpacing={{ xs: 4, sm: 2, md: 3 }} sx={{columnGap:{xs:'20px',md:'8rem',lg:'8rem'},maxWidth:{lg:'56%',md:'70%',xs:'80%'}, paddingBottom:'30px'}}>
  <Grid item 
  xs={12}
				md={4}
				lg={4}>
    <TextField label="Username or Email" variant="outlined" sx={{width:{lg:'17rem',md:'17rem',xs:'100%'}}} />

  </Grid>
  <Grid item xs={12} md={4} lg={4}>
  <FormControl sx={{ width: { xs: "100%", lg: "155px", md: "155px" }}}>
    <InputLabel >Role</InputLabel>
    <Select variant="outlined" size="small" fullWidth>
    <MenuItem value={1}>Option 1</MenuItem>
    <MenuItem value={2}>Option 2</MenuItem>
    <MenuItem value={3}>Option 3</MenuItem>
    <MenuItem value={4}>Option 4</MenuItem>
    </Select>
</FormControl> 
  </Grid>
  <Grid item
				xs={12}
				md={4}
				lg={4}
				>
<TextField  label="Organisation Role" variant="outlined" sx={{width:{lg:'17rem',md:'17rem',xs:'100%'}, paddingBottom:"10px"}} />
  </Grid>
</Grid>
<BaseButton/>
</Box>
</Box>
  )
  };
  const useStyles = makeStyles(()=>({
  typo: {
  fontSize: "39px",
  lineHeight: "45px",
  textAlign: "center",
  color: "#081F4A",
  
  },

 field:  {
    width: "48%",
    background: "#FFFFFF",
    borderRadius: "1px",
  
  },

  orgTypo: {
fontSize: '20px',
letterSpacing: '0em',
  },

  Task: {
height: "42px",
left: "400px",
fontWeight: "400px",
fontSize: "35px",
lineHeight: "42px",
textAlign: "center",
color: "#081F4A",
  }
  }))

export default OrgPage;