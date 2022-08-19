import { Typography } from "@mui/material"
import { makeStyles } from "@mui/styles"
import React, { useState } from "react"
import { InputSearch } from "../components"

const Hero: React.FC = () => {
  const classes = useStyles()
  const [url, setUrl] = useState<string>("https://zapi.com/")
  const [API, setAPI] = useState<string>("")

  const DATA = ["HELLO"]

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    console.log({ API, url })
  }
  return (
    <div>
        <div className={classes.heroText}>
          <Typography gutterBottom variant="h4" sx={{ fontWeight: 700, fontSize: "2.25rem", lineHeight: "2.87rem", paddingBottom: "1.5rem" }}>Your one stop shop for Artificial Intelligence related APIs.</Typography>
          <Typography gutterBottom variant="subtitle1" sx={{ fontWeight: 400, fontSize: "1.5rem", lineHeight: "2.5rem", paddingBottom: "2rem" }}>Emotion detection, drowsiness detection, chat bots, face recognition, <br />{''}
            sentiment analysis, and lots more with Z-API.</Typography>
        </div>
        <form className={classes.form} onSubmit={handleSubmit}>
          <select className={classes.select} value={API} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setAPI(e.target.value)}>
            <option value="">Select an API</option>
            {DATA?.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
          <input type="text" className={classes.input} value={url} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUrl(e.target.value)} placeholder="drowsinessdetection" />
          <button className={classes.send}>Send</button>
        </form>
    </div>
  )
}

export default Hero

const useStyles = makeStyles({
  heroText: {
    textAlign: "center",
    paddingTop: "2rem",
    color: "#000000",
    "@media screen and (max-width: 950px)": {
      "& br": {
        display: "none"
      },
    }
  },
  form: {
    display: "flex",
    width: "100%",
    "@media screen and (max-width: 600px)": {
      flexDirection: "column",
    },
  },
  select: {
    border: "none",
    outline: "none",
    padding: "1rem",
    background: "#E9E9E9",
    color: "#000000",
    fontWeight: 500,
    fontSize: "1rem",
  },
  input: {
    background: "#F3F3F3",
    flex: 1,
    border: "none",
    padding: "1rem",
    "&::placeholder": {
      fontWeight: 400,
      fontSize: "1rem",
      lineHeight: "1.25rem",
    },
  },
  send: {
    background: "#C4C4C4",
    padding: "1.12rem 2rem",
    border: "none",
    fontWeight: 500,
    fontSize: "1rem",
    cursor: "pointer",
  },
})