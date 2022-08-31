import { makeStyles } from '@mui/styles';
import { Typography } from '@mui/material';


const Brand = () => {
  const classes = useStyles()

  return (
    <div className={classes.brandBox}>
      <div className={classes.brand}>
        <div className={classes.brandText}>
          <Typography gutterBottom variant="subtitle1" sx={{
            fontStyle: 'normal', fontColor: '#071B85', fontFamily: 'Space Grotesk', fontWeight: 500,
            fontSize: "24px", lineHeight: "30px"
          }}>Used and trusted by developers and brands such as:</Typography>
        </div>

        <div className={classes.brandlogo}>
          <img src="images/coinbase.svg" alt="coinbase-company-logo" />
          <img src="images/spotify.svg" alt="spotify-company-logo" />
          <img src="images/slack.svg" alt="slack-company-logo" />
          <img src="images/dropbox.svg" alt="dropbox-company-logo" />
          <img src="images/webflow.svg" alt="webflow-company-logo" />
          <img src="images/zoom.svg" alt="zoom-company-logo" />
        </div>

      </div>
    </div>


  )
}
export default Brand

const useStyles = makeStyles({
  brandBox: {
    width: '100%',
    background: '#EDF5FD',
    marginTop: "5rem",
    padding: '5rem 0',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex'
  },

  brand: {
    background: '#F9FAFB',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: "3rem",
    borderRadius: '16px',
    justifyContent: 'center',
    padding: '3rem 4rem',
  },

  brandlogo: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: "center",
    gap: '65px',
    flexWrap: "wrap",
  },
  brandText: {
    display: 'flex',
    alignItems: 'center',
    color: '#071B85',
  },

})