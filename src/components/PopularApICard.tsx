 
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/material';


const ApiCard = () => {

  const classes = useStyles();

  return (
    <Card sx={{
      maxWidth: 267,
      height: 354
    }}>
      <div className={classes.img}></div>
      <div className={classes.content}>
        <Typography gutterBottom variant="h5" component="div" color="#071B85">
          Text Summarizer
        </Typography>
        <Typography variant="body2" color="#071B85">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor sint. Velit officia consequat duis enim velit mollit.
        </Typography>
        <br></br>
        <div className={classes.small_yellow_box}>
          <Box sx={{
            background: "#FFEA00",
            height: "18px",
            width: "41px",
            borderRadius: "8px"
          }}></Box>
          <Box sx={{
            background: "#FFEA00",
            height: "18px",
            width: "41px",
            borderRadius: "8px"
          }}></Box>
        </div>
        <br></br>
        <div className={classes.big_yellow_box}>
          <Box sx={{
            background: "#FFEA00",
            height: "18px",
            width: "70px",
            borderRadius: "8px"
          }}></Box>
          <Box sx={{
            background: "#FFEA00",
            height: "18px",
            width: "70px",
            borderRadius: "8px"
          }}></Box>
          <Box sx={{
            background: "#FFEA00",
            height: "18px",
            width: "37px",
            borderRadius: "8px"
          }}></Box>

        </div>
      </div>

    </Card >
  );
}

export default ApiCard;

const useStyles = makeStyles({
  img: {
    backgroundColor: "#081F4A",
    height: "97px",
    width: "267px"
  },
  content: {
    margin: "20px"
  },
  small_yellow_box: {
    display: "flex",
    justifyContent: "space-evenly",
    position: "relative",
    right: "40px"
  },
  big_yellow_box: {
    display: "flex",
    justifyContent: "space-evenly",
    position: "relative",
    right: "10px"
  }
})