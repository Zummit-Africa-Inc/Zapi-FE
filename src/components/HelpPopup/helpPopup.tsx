import { Box, Chip, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useStyles } from "./helpPopup.styles";
import { HelProps } from "../../interfaces";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea } from "@mui/material";
import Help from "../../assets/images/getHelp.jpg";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { MdClose } from "react-icons/md";

const HelpPopup: React.FC<HelProps> = ({ content }) => {
  const classes = useStyles({});
  const [show, setShow] = useState<boolean>(true);
  const [maximize, setMaximize] = useState<boolean>(false);

  useEffect(() => {
    AOS.init();
  }, []);

  if (!show) return null;
  return (
    <Box className={classes.container}>
      {!maximize ? (
        <Chip
          label="Need Help?"
          className={classes.chip}
          onMouseEnter={() => setMaximize(true)}
        />
      ) : null}
      {maximize && (
        <Card className={classes.card} data-aos="fade-up">
          <CardActionArea sx={{ height: 200 }}>
            <CardMedia
              component="img"
              sx={{ opacity: 0.5, cursor: "none" }}
              height="200"
              image={Help}
              alt="help"
            />
            <CardContent className={classes.content}>
              <MdClose
                className={classes.close}
                onClick={() => setMaximize(false)}
              />
              <Box component="div" className={classes.top}>
                <Typography gutterBottom variant="h4" component="div">
                  Need help?
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {content}
                </Typography>
              </Box>
              <Box component="div" className={classes.bottom}>
                <Link to="/help">
                  <Button
                    className={classes.button}
                    variant="outlined"
                    size="small">
                    Read Guide
                  </Button>
                </Link>
              </Box>
            </CardContent>
          </CardActionArea>
        </Card>
      )}
    </Box>
  );
};

export default HelpPopup;

