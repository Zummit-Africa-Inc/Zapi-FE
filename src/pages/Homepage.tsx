import { makeStyles } from '@mui/styles'
import { Hero, HomeNavbar, Features, Footer, Pricing } from '../sections'

const Homepage: React.FC = () => {
    const classes = useStyles()
  return (
    <div className={classes.homePage}>
    <HomeNavbar />
        <div className={classes.main}>
            <Hero />
            <Features />
            <Pricing />
            
            <Footer />
        </div>
    </div>
  )
}

export default Homepage

const useStyles = makeStyles({
    homePage: {
        height: "100vh",
        width: "100vw",
        backgroundColor: "#ffff",
        fontFamily: "Space Grotesk, sans-serif"
    },
    main: {
        padding: "1rem 5rem",
        backgroundColor: "#ffff",
        "@media screen and (max-width: 400px)": {
            padding: "1rem .5rem"
        },
    }
})