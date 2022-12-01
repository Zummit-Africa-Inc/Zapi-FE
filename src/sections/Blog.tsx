import { makeStyles } from "@mui/styles";
import { Typography, Box } from "@mui/material";
import BlogCard from "../components/BlogCard";
import { Grid } from "@mui/material";
import img1 from "../assets/images/img1.png";
import img2 from "../assets/images/img2.png";
import img3 from "../assets/images/img3.png";
import img4 from "../assets/images/img4.png";
import img5 from "../assets/images/img5.png";
import img6 from "../assets/images/img6.png";

const Blog = () => {
  const classes = useStyles();
  return (
    <>
      <div>
        <Typography
          gutterBottom
          variant="h2"
          sx={{
            color: "#071B85",
            fontFamily: "Space Grotesk",
            fontWeight: 700,
            fontSize: "36px",
            lineHeight: "45.94px",
            textAlign: "center",
            marginBottom: "36px",
          }}>
          Blog
        </Typography>
      </div>
      <Box>
        <Grid container spacing={4} className={classes.gridContainer}>
          <Grid item xs={12} sm={6} md={4}>
            <BlogCard
              image={img3}
              title={"Best Practices For Today's API Platform Architect"}
              avatar={
                "https://www.pngfind.com/pngs/m/39-391365_mark-zuckerberg-png-image-bill-gate-png-transparent.png"
              }
              User={"Bill Gates"}
              date={"November 19, 2022"}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <BlogCard
              image={img2}
              title={"The Difference Between API-First and API-as-a-Product"}
              avatar={
                "https://www.pngfind.com/pngs/m/679-6794621_ryan-cortes-mark-zuckerberg-transparent-background-hd-png.png"
              }
              User={"Ryan Cortes"}
              date={"November 15, 2022"}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <BlogCard
              image={img1}
              title={"10 Things To Do Before Your API Launch"}
              avatar={
                "https://www.pngfind.com/pngs/m/14-141135_download-mark-zuckerberg-png-image-mark-zuckerberg-transparent.png"
              }
              User={"Mark Zuckerbug"}
              date={"October 23, 2022"}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <BlogCard
              image={img4}
              title={
                "5 Examples of API Documentation With Great Developer Experience"
              }
              avatar={
                "https://www.pngfind.com/pngs/m/199-1999297_free-png-download-ryan-sessegnon-png-images-background.png"
              }
              User={"Ryan Sessegnon"}
              date={"October 11, 2022"}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <BlogCard
              image={img5}
              title={
                "API Security is Paramount to Protect the Software Supply Chain"
              }
              avatar={
                "https://www.pngfind.com/pngs/m/246-2465015_ryan-thornton-gentleman-hd-png-download.png"
              }
              User={"Jim Thornton"}
              date={"September 15, 2022"}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <BlogCard
              image={img6}
              title={
                "4 Top Challenges With API Development and How To Overcome Them"
              }
              avatar={
                "https://www.pngfind.com/pngs/m/581-5811498_ohio-political-activist-to-run-against-paul-ryan.png"
              }
              User={"Paul Messi"}
              date={"August 3, 2022"}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Blog;

const useStyles = makeStyles({
  gridContainer: {
    paddingLeft: "40px",
    paddingRight: "40px",
  },
});
