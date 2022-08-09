import React from "react";
import { IconButton, Stack, Toolbar, Typography, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { InsertDriveFileOutlined, AccountCircleOutlined, NotificationsOutlined, Subtitles } from "@mui/icons-material";



const OrgPage: React.FC = () => {
   const classes = useStyles()
  return (
    <>
      <Toolbar className={classes.toolbar}>
        <div className={classes.logoWrapper}>
          <img src="/images/zapi-logo.png" alt="zapi-logo" className={classes.logo} />
        </div>
        <Stack className={classes.div}>
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
<Typography variant="h4"  className={classes.typo}>
 Create Your Organisation
</Typography>

<Typography  className={classes.stypo} >
 Organisation accounts allow your team to manage your API both internally and externally 
</Typography>

<TextField id="outlined-basic" label="Organisation" variant="outlined" className={classes.field} />
<Typography className={classes.orgTypo} >
 *This business name will own and control this organisation account
</Typography>

<TextField id="outlined-basic" label="Organisation" variant="outlined" className={classes.field} style={{ top: "290px"}}/>
<Typography className={classes.orgTypo} style={{ top: "530px"}} >
 *Seat can be added or removed at anything. The first seats are free
</Typography>

<section>
  <Typography variant="h5"className={classes.Task}>Invite Teammates to your new organisation </Typography>
</section>
   </>
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
    div: {
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
  position: "absolute",
  width: "475px",
  height: "47px",
  left: "529px",
  top: "105px",
  fontFamily: "Inter",
  fontStyle: "normal",
  fontWeight: "600",
  fontSize: "39px",
  lineHeight: "47px",
  textAlign: "center",
  color: "#081F4A",
  },

  stypo: {
position: "absolute",
width: "1046px",
height: "30px",
left: "243px",
top: "165px",
fontFamily: "Inter",
fontStyle: "normal",
fontWeight: "400",
fontSize: "25px",
lineHeight: "30px",
textAlign: "center",
color: "#081F4A",
  },

 field:  {
    boxSizing: "border-box",
    position: "absolute",
    width: "862px",
    height: "85px",
    left: "168px",
    top: "200px",
    background: "#FFFFFF",
    border: "1px solid #081F4A",
    borderRadius: "10px",
  },

  orgTypo: {
position: "absolute",
width: "600px",
height: "24px",
left: "110px",
top: "350px",
textAlign: "center",
color: " #000000",
  },

  Task: {
    position: "absolute",
width: "703px",
height: "42px",
left: "415px",
top: "684px",
fontFamily: "Inter",
fontStyle: "normal",
fontWeight: "400",
fontSize: "35px",
lineHeight: "42px",
textAlign: "center",
color: "#081F4A",
  }
  })

export default OrgPage