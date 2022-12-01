import React from "react";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import { Avatar, CardMedia, Card, Typography } from "@mui/material";

interface Props {
  image: string;
  title: string;
  avatar: string;
  User: string;
  date: string;
}

const BlogCard: React.FC<Props> = ({ image, title, avatar, User, date }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <Link to="#">
        <Typography
          gutterBottom
          variant="h6"
          sx={{
            color: "#071B85",
            padding: "10px",
            ":hover": {
              textDecoration: "underline",
            },
          }}>
          {title}
        </Typography>
        <CardMedia component="img" image={image} alt="API "></CardMedia>
      </Link>
      <Link to="#" className={classes.link}>
        <Avatar src={avatar} />
        <Typography
          sx={{
            margin: 2,
            marginLeft: 1,
            justifyContent: "center",
            fontSize: "13px",
            ":hover": {
              textDecoration: "underline",
            },
          }}>
          {User}
        </Typography>
      </Link>
      <Typography
        variant="subtitle2"
        align="right"
        sx={{
          fontSize: "13px",
          marginTop: -4.5,
          "@media screen and (max-width:400px)": {
            margin: 0,
            alignItems: "left",
          },
        }}
        color="text.secondary">
        {date}
      </Typography>
    </Card>
  );
};

export default BlogCard;

const useStyles = makeStyles({
  root: {
    minWidth: 225,
    padding: "20px",
    transition: "all 0.5s ease-in-out",
    "&:hover": {
      boxShadow: "5px 5px 15px 0px rgba(0, 0, 0, 0.4)",
    },
  },
  link: {
    display: "flex",
    justifySelf: "center",
    marginTop: "10px",
  },
});
