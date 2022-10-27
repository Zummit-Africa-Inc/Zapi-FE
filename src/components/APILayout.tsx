import React, {useState} from "react";
import { makeStyles } from "@mui/styles";
import { Typography,TablePagination,Pagination } from "@mui/material";
import { useAppSelector } from "../hooks";
import DevAPICard from "./DevAPICard";

const APILayout: React.FC = () => {
  const { userApis } = useAppSelector((store) => store.user);
  const [rowsPerPage, setRowsPerPage] = useState(6);
  const [page, setPage] = useState(0);
  const classes = useStyles();

  const handleChangePage = (event: unknown, newPage: number) => setPage(newPage);

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <div>
      {userApis.length !== 0 ? (
        <>
        <div className={classes.apiCard}>
          {userApis?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((apis: any) => (
            <DevAPICard key={apis.id} {...apis} />
            ))}
        </div>
          <TablePagination
            rowsPerPageOptions={[]}
            component="div"
            className={classes.pagination}
            count={userApis.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
          </>
        
      ) : (
        <div className={classes.addApiDesc}>
          <Typography
            gutterBottom
            variant="subtitle1"
            sx={{
              color: "#000000",
              fontFamily: "Space Grotesk",
              fontWeight: 700,
              fontSize: "18px",
              lineHeight: "30px",
              textAlign: "center",
              marginTop: "116px",
            }}>
            You do no have any API Projects
          </Typography>
          <Typography
            gutterBottom
            variant="subtitle1"
            sx={{
              color: "#000000",
              fontFamily: "Space Grotesk",
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "30px",
              textAlign: "center",
              marginTop: "16px",
            }}>
            Add a new API Project from scratch or use our “Project 1”
            <br />
            {""}
            to explore API Projects features.
          </Typography>
        </div>
      )}
    </div>
  );
};

export default APILayout;

const useStyles = makeStyles({
  body: {
    left: "0rem",
    right: "0rem",
    zIndex: 30,
    width: "100%",
    display: "flex",
    alignItems: "center",
    marginTop: "80px",
    padding: "24px 112px",
    flexDirection: "row",
    justifyContent: "space-between",
    background: "white",
    height: "100px",
    fontFamily: "Space Grotesk",
    "@media screen and (max-width: 1024px)": {
      padding: "1rem 2rem",
      display: "grid",
      justifyContent: "center",
      gap: 0,
    },
    "@media screen and (max-width: 375px)": {
      padding: "1rem 1rem",
      display: "grid",
      justifyContent: "center",
      gap: 0,
    },
  },
  bodyColor: {
    minHeight: "100vh",
    background: "#FFFFFF",
    paddingTop: "15px",
    height: "100vh",
  },
  widget1: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    "@media screen and (max-width: 1024px)": {
      marginBottom: "2rem",
    },
  },
  widget2: {
    gap: "1rem",
    display: "flex",
    alignItems: "center",
    "@media screen and (max-width: 1024px)": {
      marginBottom: "2rem",
    },
  },
  leftText: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    height: "46px",
    background: "#C4C4C4",
    border: "1px solid #8C8C8C",
    borderRadius: "10px",
  },
  rightText: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "8px 16px",
    margin: "-35px 30px",
    width: "130px",
    height: "46px",
    background: "#FFFFFF",
    borderTop: "1px solid #8C8C8C",
    borderBottom: "1px solid #8C8C8C",
    borderRight: "1px solid #8C8C8C",
    borderRadius: "0px 8px 8px 0px",
  },
  search: {
    width: "149px",
    height: "30px",
    fontFamily: "Space Grotesk",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "30px",
    display: "flex",
    alignItems: "center",
    color: "#8B8B8C",
    background: "#E1E1E2",
  },
  formControl: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: "8px 64px 8px 16px",
    gap: "16px",
    width: "269px",
    height: "46px",
    background: "#E1E1E2",
    borderRadius: "8px",
    "& input": {
      width: 250,
      height: "100%",
      outline: "none",
      border: "none",
      background: "#E1E1E2",
    },
    "& select": {
      width: 100,
      height: "100%",
      outline: "none",
      border: "none",
    },
    "& ::placeHolder": {
      fontFamily: "Space Grotesk",
    },
    "@media screen and (max-width: 900px)": {
      marginTop: "1rem",
    },
  },
  button: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: "8px 16px",
    gap: "16px",
    width: "190px",
    lineHeight: "46px",
    background: "#1D1D1D",
    borderRadius: "8px",
    cursor: "pointer",
    color: "#FFFFFF",
    border: "none",
    fontWeight: "500",
    fontSize: "16px",
    "@media screen and (max-width: 1024px)": {
      marginBottom: "2rem",
    },
  },
  disabledButton: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    textAlign: "center",
    marginTop: "32px",
    gap: "16px",
    color: "#585858",
    justifyContent: "center",

    width: "190px",
    height: "46px",
    background: "#DFDFDF",
    borderRadius: "8px",
    margin: "0 auto",
  },
  addApiDesc: {
    marginTop: "20px",
    paddingBottom: "80px",
    height: "calc(100vh - 315px)",
  },
  apiCard: {
    height: "calc(100vh - 315px)",
    width: "100vw",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "1.5rem",
    flexWrap: "wrap",
  },
  pagination: {
    display: 'flex',
    justifyContent:'center',
  },
});
