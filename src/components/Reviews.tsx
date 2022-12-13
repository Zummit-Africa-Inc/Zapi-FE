import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  Box,
  Button,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ChatRounded } from "@mui/icons-material";
import { Add } from "@mui/icons-material";
import { ReviewsType } from "../types";
import { Fallback } from ".";
import { useHttpRequest } from "../hooks";
import { useContextProvider } from "../contexts/ContextProvider";
import { addDiscussion } from "../redux/slices/apiSlice";

interface Props {
  reviews: Array<ReviewsType>;
}

const Reviews: React.FC<Props> = ({ reviews }) => {
  const classes = useStyles();
  const { loading } = useHttpRequest();
  const { handleClicked } = useContextProvider();
  const [popup, setPopup] = useState(false);

  return (
    <Box className={classes.container}>
      <Box className={classes.wrapper}>
        {reviews.length !== 0 ? (
          <Typography
            sx={{
              marginBottom: "10px",
              fontSize: "21px",
              fontWeight: "bold",
              color: "#264276",
              padding: "5px",
            }}>
            {/* Reviews */}
          </Typography>
        ) : (
          <></>
        )}
      </Box>
      <Box>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#264276",
            color: "#fff",
            width: "200px",
            height: "2.5rem",
          }}
          className={classes.newDiscussion}
          onClick={() => setPopup(!popup)}>
          <Add /> <Typography sx={{ fontSize: "14px" }}>New Reviews</Typography>
        </Button>
      </Box>

      <>
        {loading && <Fallback />}
        {popup ? (
          <Box
            className={classes.container}
            // onClick={() => handleUnclicked}
          >
            <Box
              className={classes.main}
              //   onClick={(e) => e.stopPropagation()}
            >
              <Typography
                variant="body1"
                fontSize="24px"
                lineHeight="30px"
                fontWeight={700}
                mb={3}>
                Add New Reviews
              </Typography>
              <form
                className={classes.form}
                // onSubmit={handleSubmit}
              >
                <Box className={classes.input}>
                  <label>Title</label>
                  <input
                    type="text"
                    name="title"
                    placeholder="Add Reviews Title"
                  />
                </Box>
                <Box className={classes.input}>
                  <label>Reviews</label>
                  <input type="text" name="body" placeholder="Add Reviews" />
                </Box>
                <Box
                  style={{
                    gap: "1rem",
                    display: "flex",
                    flexDirection: "row",
                    marginLeft: "auto",
                  }}>
                  <Button
                    sx={{ background: "#071B85", color: "#FFFFFF" }}
                    type="submit"
                    className={classes.addBtn}>
                    Post Reviews
                  </Button>
                  <Button
                    variant="contained"
                    color="error"
                    sx={{ background: "red", color: "#FFFFFF" }}
                    type="button"
                    className={classes.cancelBtn}
                    //   onClick={() => handleUnclicked}
                  >
                    Cancel
                  </Button>
                </Box>
              </form>
            </Box>
          </Box>
        ) : (
          ""
        )}
      </>
      <Box className={classes.list}>
        {reviews.length !== 0 ? (
          <>
            <Box>
              {reviews.map((review, index) => (
                <Card key={index} className={classes.card}>
                  <Typography
                    sx={{
                      fontSize: "16px",
                      color: "#081F4A",
                      fontWeight: 700,
                    }}>
                    By:
                  </Typography>
                  {/* <Rating size="small" defaultValue={review.rating} disabled /> */}
                  <Typography sx={{ fontSize: "14px", color: "#081F4A" }}>
                    {/* {review.reviews} */}
                  </Typography>
                </Card>
              ))}
            </Box>
          </>
        ) : (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "110px",
              width: "100%",
            }}>
            <ChatRounded sx={{ fontSize: "32px", color: "#264276" }} />
            <Typography sx={{ fontSize: "18px", color: "#515D99" }}>
              No reviews on the API yet.
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
};

const useStyles = makeStyles({
  container: {
    width: "100%",
  },
  wrapper: {
    width: "100%",
  },
  list: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "1rem",
  },
  main: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    background: "#FFF",
    borderRadius: "8px",
    padding: "40px 40px",
    marginTop: "110px",
    boxShadow: "2px 2px 7px 3px #CECECE",
  },
  card: {
    width: "250px",
    minHeight: "100px",
    borderRadius: "4px",
    border: "1px solid #081F4A",
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
    padding: "0.5rem",
  },
  image: {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    "& img": {
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      border: "1px solid #081F4A",
      objectFit: "cover",
    },
  },
  form: {
    width: "500px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "1rem",
    "@media screen and (max-width: 768px)": {
      width: "70%",
    },
  },
  input: {
    width: "500px",
    height: "72px",
    background: "",
    display: "flex",
    flexDirection: "column",
    "& input": {
      width: "100%",
      height: "52px",
      borderRadius: "4px",
      border: "1px solid #999",
      outline: "none",
      padding: "12px 16px 8px 12px",
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: "24px",
    },
  },
  cancelBtn: {
    outline: "none",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: "8px 16px",
    gap: "16px",
    fontFamily: "inherit",
    height: "46px",
    cursor: "pointer",
    background: "red",
    color: "white",
    border: "none",
    borderRadius: "4px",
  },
  addBtn: {
    outline: "none",
    border: "none",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: "8px 14px",
    gap: "16px",
    height: "46px",
    background: "#081F4A",
    fontFamily: "inherit",
    color: "white",
    borderRadius: "4px",
    textAlign: "center",
    margin: "0 auto",
    cursor: "pointer",
  },
  newDiscussion: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: "8px 16px",
    gap: "16px",
    width: "200px",
    left: "87%",
    lineHeight: "46px",
    background: "#071B85",
    borderRadius: "8px",
    cursor: "pointer",
    color: "#FFFFFF",
    border: "none",
    fontWeight: "500",
    fontSize: "16px",
    "@media screen and (max-width: 1024px)": {
      marginBottom: "1rem",
      width: "385px",
    },
    "@media screen and (max-width: 500px)": {},
  },
});

export default Reviews;
