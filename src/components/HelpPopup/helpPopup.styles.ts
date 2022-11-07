import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  container: {
    position: "fixed",
    left: 5,
    bottom: 15,
  },
  card: {
    display: "flex",
    backgroundColor: "#f5f5f5",
    justifyContent: "space-between",
    flexDirection: "column",
    height: 200,
    width: "350px !important",
    cursor: "none",
  },
  content: {
    position: "absolute",
    top: "2%",
    left: "2%",
    bottom: "2%",
    padding: "5px!important",
  },

  top: {
    display: "flex",
    alignItems: "left",
    justifyContent: "space-between",
    flexDirection: "column",
    gap: "20px",
  },
  bottom: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    position: "absolute",
    bottom: "2%",
    width: "250px",
  },
  button: {
    color: "#081F4A!important",
    backgroundColor: "rgb(255,255,255, 0.5) !important",
    border: "none!important",
    marginTop: "20px!important",
    borderRadius: "20px!important",
    padding: "0 1rem!important",
  },
  chip: {
    color: "#081F4A!important",
    backgroundColor: "#FFEA00!important",
    cursor: "pointer",
  },
  close: {
    color: "#081F4A",
    backgroundColor: "rgba(230,233,238,0.5)",
    borderRadius: "50%",
    height: "30px",
    width: "30px",
    position: "absolute",
    top: "5%",
    right: "5%",
    cursor: "pointer",
    padding: "5px",
  },
}));

