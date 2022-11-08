import React, { ChangeEvent, FormEvent, MouseEvent, useState } from "react";
import { Card, Rating, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { toast } from "react-toastify";
import Cookies from "universal-cookie";

import { useHttpRequest } from "../hooks";

interface Props {
  apiId: string | undefined
  onClose: () => void
}

const core_url = "VITE_CORE_URL"

const RatingComponent:React.FC<Props> = ({apiId, onClose}) => {
  const {error, loading, sendRequest} = useHttpRequest();
  const [rating, setRating] = useState<number | null>(0);
  const [review, setReview] = useState<string>("")
  const classes = useStyles();
  const cookies = new Cookies();
  
  const handleRating = async(e: FormEvent) => {
    e.preventDefault()
    if(rating && rating <= 0) return toast.error('Please add a rating')
    const headers = {
      'Content-Type': "application/json",
      'X-Zapi-Auth-Token': `Bearer ${cookies.get("accessToken")}`
    }
    const payload = {rating, review}
    try {
      // const data = await sendRequest("", "post", core_url, payload, headers)
    } catch (error: any) {}
    console.log({rating, review})
  }

  return (
    <div className={classes.backdrop} onClick={() => onClose()}>
      <Card className={classes.container} onClick={(e: MouseEvent) => e.stopPropagation()}>
        <Typography variant="body1" sx={{fontSize:"16px",fontWeight:500,color:"#515D99",margin:"1rem 0 2rem"}}>
          Like this API? Drop a review.
        </Typography>
        <form onSubmit={handleRating} className={classes.form}>
          <div className={classes.control}>
            <Rating precision={0.5} value={rating} onChange={(e, value) => setRating(value)} />
            <Typography variant="body1" sx={{fontSize:"14px",fontWeight:500,color:"#515D99"}}>
              {rating}
            </Typography>
          </div>
          <textarea rows={3} value={review} onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setReview(e.target.value)} className={classes.input} />
          <div className={classes.control}>
            <button type="submit" className={classes.button}>submit</button>
            <button type="button" onClick={() => onClose()} className={classes.button} style={{background:"#E32C08"}}>
              cancel
            </button>
          </div>
        </form>
      </Card>
    </div>
  )
}

const useStyles = makeStyles({
  backdrop: {
    width: "100vw",
    height: "100vh",
    display: "grid",
    placeItems: "center",
    position: "fixed",
    top: 0,
    left: 0,
    background: "rgba(225, 225, 225, 0.3)",
    backdropFilter: "blur(2px)",
    zIndex: 70,
  },
  container: {
    width: "30%",
    minWidth: "300px",
    padding: "0.5rem 1.5rem",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  control: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    width: "fit-content",
  },
  input: {
    width: "100%",
    height: "150px",
    resize: "none",
    borderRadius: "4px",
    border: "1px solid #999",
    outline: "none",
    padding: "0.5rem",
  },
  button: {
    display: "flex",
    alignItems: "center",
    gap: "0.25rem",
    color: "#FFF",
    padding: "6px 16px",
    borderRadius: "5px",
    border: "none",
    outline: "none",
    fontSize: "0.875rem",
    fontWeight: 500,
    lineHeight: 1.75,
    textTransform: "uppercase",
    fontFamily: "var(--body-font)",
    transition: "0.5s all ease-in-out cubic-bezier(0.075, 0.82, 0.165, 1)",
    cursor: "pointer",
    background: "#081F4A",
  }
})

export default RatingComponent