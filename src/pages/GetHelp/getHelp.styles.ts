import { makeStyles } from "@material-ui/core";
import { red } from "@mui/material/colors";

export const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    backgroundColor: "#f5f5f5",
    flexDirection: "column",
    padding: "8rem 5rem 1rem 5rem",
    position: "relative",
  },
  banner: {
    display: "flex",
    justifyContent: "space-between",
    height: 200,
    position: "relative",
  },
  header: {
    position: "absolute",
    height: "5rem",
    width: "40%",
    bottom: "-1rem",
    display: "flex",
    placeItems: "center",
    left: "-1rem",
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    backgroundColor: "#ffd000",
    borderRadius: "1rem",
  },
  header_text: {
    marginLeft: "20px!important",
    color: theme.palette.primary.main,
  },
  header_image: {
    position: "fixed",
    zIndex: -1,
    right: "-200px",
    top: "-100px",
  },
  card: {
    display: "flex",
    justifyContent: "space-between",
    height: 350,
    marginBottom: "3rem",

    "&:nth-child(2n+1)": {
      flexDirection: "row-reverse",
      justifyContent: "flex-end",

      "& div": {
        width: "50%",
      },
    },
  },
  content: {
    display: "flex",
    // flexDirection: "column",
  },
  card_content: {
    display: "flex",
    justifySelf: "flex-start",
    flexDirection: "column",
  },
}));

