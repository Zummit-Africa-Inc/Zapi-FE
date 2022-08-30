import { TextField, Typography } from "@mui/material"
import { makeStyles } from "@mui/styles"
import React, { useState } from "react"
import { APIData } from "../testdata"

const Hero: React.FC = () => {
  const classes = useStyles()
  const [API, setAPI] = useState<string>("")
  const [endpoint, setEndpoint] = useState<string>(`https://zapi.com/${API}`)
  const [query, setQuery] = useState<string>("{}")
  const [data, setData] = useState("")

  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {  
      const res = await fetch("https://qnanswer-api.pk25mf6178910.eu-west-3.cs.amazonlightsail.com/q_and_a", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.parse(query)
    })
    const data = await res.json() 
      setData(data.answer)
    } catch (err) {  
      alert("Input must be a JSON String");  
    }

  }
  return (
    <div className={classes.hero}>
        <div className={classes.heroText}>
          <Typography gutterBottom variant="h4" sx={{fontFamily: "Space Grotesk",fontWeight: 700, fontSize: "2.25rem", lineHeight: "2.87rem", paddingBottom: "1.5rem", color: "#071B85" }}>Your one stop shop for Artificial Intelligence related APIs.</Typography>
          <Typography gutterBottom variant="subtitle1" sx={{fontFamily: "Space Grotesk",fontWeight: 400, fontSize: "1.5rem", lineHeight: "2.5rem", paddingBottom: "2rem", color: "#071B85" }}>Emotion detection, drowsiness detection, chat bots, face recognition, <br />{''}
            sentiment analysis, and lots more with Z-API.</Typography>
        </div>
        <form className={classes.form} onSubmit={handleSubmit}>
          <select className={classes.select} value={API} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setAPI(e.target.value)}>
            <option value="">Select an API</option>
            {APIData?.map(api => (
              <option key={api.id} value={api.url}>
                {api.name}
              </option>
            ))}
          </select>
          <input type="text" className={classes.input} value={API ? API : endpoint} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEndpoint(e.target.value)} placeholder="drowsinessdetection" />
          <button className={classes.send}>Send</button>
        </form>
        <div className={classes.actionBoxes}>
         <TextField className={classes.box} value={query} onChange={(e) => setQuery(e.target.value)} fullWidth multiline rows="8.5" />
         <TextField className={classes.box} value={data} fullWidth multiline rows="8.5" />
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
},
actionBoxes: {
  display: "flex",
  gap: "2rem",
  paddingTop: "2.5rem",
}
})