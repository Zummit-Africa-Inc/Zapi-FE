import { makeStyles } from "@mui/styles";
import { Typography } from '@mui/material';
import DevAPICard from './DevAPICard';
import { useAppSelector } from '../hooks'

const Subscription: React.FC = () => {
  const { subscribedApis } = useAppSelector(store => store.user)
  const classes = useStyles();
  return (
    <div>
       {subscribedApis.length !== 0 ? 
                <div className={classes.apiCard}>
                    {subscribedApis.map((apis: any) => (<DevAPICard key={apis.id} {...apis} />))}
                </div>
                :
                <div className={classes.addApiDesc}>
                <Typography gutterBottom variant="subtitle1" sx=
                    {{
                        color: "#000000", fontFamily: "Space Grotesk", fontWeight: 700, fontSize: "18px",
                        lineHeight: "30px", textAlign: "center", marginTop: "116px"
                    }}>
                        You have not subscribed to any API Project
                </Typography>
                <Typography gutterBottom variant="subtitle1" sx={{
                    color: "#000000", fontFamily: "Space Grotesk", fontStyle: "normal", fontWeight: 400,
                    fontSize: "16px", lineHeight: "30px", textAlign: "center", marginTop: "16px"
                }}>Visit the Hub to subscribe to an API
                </Typography>
            </div>}
    </div>
  )
}

export default Subscription

const useStyles = makeStyles({
  addApiDesc: {
      marginTop: "20px",
      paddingBottom: "80px",
      height: "calc(100vh - 315px)"
  },
  apiCard: {
      height: "calc(100vh - 315px)",
      width: "100vw",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "1.5rem",
      flexWrap: "wrap",
  }
})