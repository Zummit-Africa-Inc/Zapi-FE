import { Typography } from "@mui/material"
import { makeStyles } from "@mui/styles"
import React, { useState } from "react"
import TextBox from "../components/TextBox"
import { TextBoxData } from "../testdata"

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
    <div className={classes.hero}>
        <div className={classes.heroText}>
          <Typography gutterBottom variant="h4" sx={{fontFamily: "Space Grotesk",fontWeight: 700, fontSize: "2.25rem", lineHeight: "2.87rem", paddingBottom: "1.5rem", color: "#071B85" }}>Your one stop shop for Artificial Intelligence related APIs.</Typography>
          <Typography gutterBottom variant="subtitle1" sx={{ fontFamily: "Space Grotesk",fontWeight: 400, fontSize: "1.5rem", lineHeight: "2.5rem", paddingBottom: "2rem", color: "#071B85" }}>Emotion detection, drowsiness detection, chat bots, face recognition, <br />{''}
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
        <div>
          <TextBox className={classes.box} data={TextBoxData} />
        </div>
    </div>
  )
}

export default Hero

const useStyles = makeStyles({
  hero: {
    paddingTop: "10rem",
    background: "#FFFFFF",
  },
  heroText: {
    textAlign: "center",
    paddingTop: "2rem",
    "@media screen and (max-width: 950px)": {
      "& br": {
        display: "none"
      },
    }
  },
  form: {
    display: "flex",
    gap: "1.5rem",
    width: "100%",
    "@media screen and (max-width: 600px)": {
      flexDirection: "column",
    },
  },
  select: {
    border: "none",
    outline: "none",
    padding: "1rem",
    background: "#FFFFFF",
    color: "#071B85",
    fontWeight: 500,
    fontSize: "1rem",
    fontFamily: "Space Grotesk",
  },
  input: {
    background: "rgba(19, 50, 159, 0.05)",
    borderRadius: "4px",
    flex: 1,
    border: "none",
    outline: "none",
    padding: "1rem",
    fontFamily: "Space Grotesk",
    color: "#071B85",
    "&::placeholder": {
      fontWeight: 400,
      fontSize: "1rem",
      lineHeight: "1.25rem",
      fontFamily: "Space Grotesk",
      color: "#071B85",
    },
  },
  send: {
    background: "#081F4A",
    borderRadius: "4px",
    padding: "1.12rem 2rem",
    border: "none",
    fontWeight: 500,
    fontSize: "1rem",
    cursor: "pointer",
    fontFamily: "Space Grotesk",
    color: "#FFEA00",
  },
  box: {
    background: "#FFFFFF",
    boxShadow: "0px 1px 15px rgba(6, 113, 224, 0.2)",
    borderRadius: "4px",
    width: "592px",
    height: "320px",
    padding: "1rem 1.5rem"
}
})