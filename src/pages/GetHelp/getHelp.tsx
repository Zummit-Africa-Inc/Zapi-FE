import { Box } from "@mui/system";
import { HomeNavbar } from "../../sections";
import { useStyles } from "./getHelp.styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Ui from "../../assets/images/ui.png";
import { helpContent } from "./text";
import Manual from "../../assets/images/manual.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const GetHelp = () => {
  const classes = useStyles({});

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <HomeNavbar />
      <Box className={classes.wrapper} component="div">
        <CardMedia
          component="img"
          sx={{ width: "70%", zIndex: 1 }}
          className={classes.header_image}
          image={Manual}
          alt="manual"
        />
        <Box className={classes.banner} sx={{ zIndex: 20 }}>
          <Box component="div" className={classes.header}>
            <Typography
              variant="h5"
              className={classes.header_text}
              component="div">
              Quick guide to help you get started
            </Typography>
          </Box>
        </Box>
        {helpContent.map((entry, index) => {
          return (
            <Card
              className={classes.card}
              key={index}
              sx={{ zIndex: 10 }}
              data-aos="fade-up">
              <CardContent className={classes.card_content}>
                <Typography component="div" variant="h5">
                  {entry.title}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div">
                  {entry.body}
                </Typography>
              </CardContent>
              <CardMedia
                component="img"
                sx={{ width: "50%" }}
                image={Ui}
                alt="image"
              />
            </Card>
          );
        })}
      </Box>
    </>
  );
};

export default GetHelp;
