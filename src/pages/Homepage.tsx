import { makeStyles } from '@mui/styles'
import { Education, Hero, HomeNavbar, Features, Footer, Pricing } from '../sections'

const Homepage: React.FC = () => {
    const classes = useStyles()
  return (
    <div className={classes.homePage}>
    <HomeNavbar />
        <div className={classes.main}>
            <Hero />
            <Features />
            <Pricing />
            <Education />
            <Footer />
        </div>
    </div>
  )
}

export default Homepage

const useStyles = makeStyles({
    homePage: {
        height: "100%",
        width: "100%",
        fontFamily: "Space Grotesk, sans-serif",
        background: "#fff"
    },
    main: {
        padding: "1rem 5rem",
        backgroundColor: "#ffff",
        "@media screen and (max-width: 400px)": {
            padding: "1rem .5rem"
        },
    }
})