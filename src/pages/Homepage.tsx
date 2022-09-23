import { makeStyles } from '@mui/styles'
import { Education, Hero, HomeNavbar, Features, Footer, Pricing, Brand, MarketPlace } from '../sections'

const Homepage: React.FC = () => {
    const classes = useStyles()
    
  return (
    <div className={classes.homePage}>
    <HomeNavbar />
        <Hero />
        <Brand/>
        <MarketPlace/>
        <Features />
        <Pricing />
        <Education />  
    <Footer />
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
        backgroundColor: "#ffff",
        "@media screen and (max-width: 400px)": {
            padding: "1rem .5rem"
        },
    }
})