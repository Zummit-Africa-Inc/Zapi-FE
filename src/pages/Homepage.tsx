import { makeStyles } from '@mui/styles'
import { Hero, HomeNavbar } from '../sections'

const Homepage: React.FC = () => {
    const classes = useStyles()
  return (
    <div className={classes.homePage}>
    <HomeNavbar />
        <div className={classes.main}>
            <Hero />
        </div>
    </div>
  )
}

export default Homepage

const useStyles = makeStyles({
    homePage: {
        height: "100vh",
        width: "100vw",
        background: "#F5F5F5",
        fontFamily: "Space Grotesk, sans-serif"
    },
    main: {
        padding: "1rem 5rem",
        "@media screen and (max-width: 400px)": {
            padding: "1rem .5rem"
        },
    }
})