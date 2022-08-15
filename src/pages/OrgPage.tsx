import React from "react";
import { IconButton, Stack, Toolbar, Typography, TextField, Box, Grid, Select, MenuItem} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { InsertDriveFileOutlined, AccountCircleOutlined, NotificationsOutlined, } from "@mui/icons-material";
import { BaseButton } from "../components"



const OrgPage: React.FC = () => {
   const classes = useStyles()
  return (
  
    <div style={{ background: "#FFF",height:'100%'}} >
      <Toolbar className={classes.toolbar}>
        <Box className={classes.logoWrapper}>
          <img src="/images/zapi-logo.png" alt="zapi-logo" className={classes.logo} />
        </Box>
        <Stack className={classes.bar}>
          <Stack direction="row" alignItems="center" justifyContent="center" spacing={2} mb={1}>
            <IconButton color="primary">
               <InsertDriveFileOutlined />
            </IconButton>
            <IconButton color="primary">
              <NotificationsOutlined />
            </IconButton>
            <IconButton color="primary">
              <AccountCircleOutlined />
            </IconButton>
          </Stack>
        </Stack>
      </Toolbar>  
      <Box>  
<Typography variant="h4"  className={classes.typo} sx={{mb:{xs:'50px',md:'0',lg:'0'}}}>
 Create Your Organisation
</Typography>
<Typography  className={classes.typo} sx={{mb:'80px'}} >
 Organisation accounts allow your team to manage your API both internally and externally 
</Typography>
</Box>
<Box  sx={{ml:{xs:'0%',lg:'25%',md:'25%'}}}>
<Box sx={{ display:{xs:'grid'},placeItems:{xs:'center',lg:'normal',md:'normal'}}}>
<TextField label="Organisation" variant="outlined" sx={{width:{xs:'80vw',md:'35%',lg:'35%'}}} className={classes.field} />
<Typography className={classes.orgTypo}  sx={{mb:'50px',width:{xs:'80%'}}}>
 *This business name will own and control this organisation account
</Typography>
<TextField label="Organisation" variant="outlined" className={classes.field} sx={{width:{xs:'80vw',md:'35%',lg:'35%'}}}/>
<Typography className={classes.orgTypo}sx={{mb:'50px',width:{xs:'80%'}}}>
 *Seat can be added or removed at anything. The first seats are free
</Typography>
</Box>
</Box>
  <Typography variant="h5"className={classes.Task} sx={{mb:{xs:'50px',lg:'10px',md:'10px'}}}>Invite Teammates to your new organisation </Typography>
   <Box  sx={{ml:{xs:'0%',lg:'25%',md:'25%'},paddingBottom:'100px',display:{xs:'grid'},placeItems:{xs:'center',lg:'normal',md:'normal'}}}>
   <Grid container rowSpacing={{xs:3,lg:1,md:1}} columnSpacing={{ xs: 4, sm: 2, md: 3 }} sx={{columnGap:{xs:'20px',md:'8rem',lg:'8rem'},maxWidth:{lg:'56%',md:'70%',xs:'80%'},paddingBottom:'60px'}}>
  <Grid item 
  xs={12}
				md={4}
				lg={4}>
    <TextField label="Organisation" variant="outlined" sx={{width:{lg:'17rem',md:'17rem',xs:'100%'}}}  />

  </Grid>
  <Grid item xs={12} md={4} lg={4}>
  <Select sx={{ width: { xs: "100%", lg: "150px", md: "150px" } }}>
    <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>
  </Select>  
  </Grid>
  <Grid item
				xs={12}
				md={4}
				lg={4}
				>
<TextField  label="Organisation" variant="outlined" sx={{width:{lg:'17rem',md:'17rem',xs:'100%'}}}/>
  </Grid>
</Grid>
<BaseButton/>
</Box>
</div>
  )
  };
  const useStyles = makeStyles({
    toolbar: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    background: "#FFF",
    padding: 0,
    },
    bar: {
    width: "90%",
    alignItems: "flex-end",
    borderBottom: "2px solid var(--color-primary)",
    },
    logoWrapper : {
    width: "5rem",
    display: "grid",
    placeItems: "center",
    margin: "0.25rem",
  },
  logo: {
    width: "100%",
    objectFit: "contain",
  },

  typo: {
  fontStyle: "normal",
  fontWeight: "600",
  fontSize: "39px",
  lineHeight: "47px",
  textAlign: "center",
  color: "#081F4A",
  
  },

 field:  {
    width: "35%",
    background: "#FFFFFF",
    borderRadius: "1px",
  
  },

  orgTypo: {
fontSize: '20px',
letterSpacing: '0em',
  },

  Task: {
height: "42px",
left: "415px",
fontWeight: "400px",
fontSize: "35px",
lineHeight: "42px",
textAlign: "center",
color: "#081F4A",
  }
  })

export default OrgPage;