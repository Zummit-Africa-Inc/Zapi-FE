import { Box, Typography, TextField, TextareaAutosize, Button } from "@mui/material";
import Modal from '@mui/material/Modal';
import { useState } from "react";


const Modalpopup = () => {
    const [openmodal, setOpenmodal] = useState(false);
    return (
        <div>
            <Modal
            open={openmodal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
            What's your feedback?
            </Typography>
            <TextField sx={textField} id="standard-basic" label="Name" variant="standard" />
            <TextField sx={textField} id="standard-basic" label="Email" variant="standard" />
            <TextareaAutosize
            aria-label="minimum height"
            maxRows={6}
            minRows={6}
            placeholder="Give us your feedback"
            style={{ width: "99%", height:"30%", marginTop: "5%", padding: "2%", fontSize: "1em"}}
            />
            <Typography id="modal-modal-description" sx={{ my: 4, display: "flex", justifyContent: "center"}}>
            <Button sx={{width: "30em", background: "#081F4A",  color: 'white'}}>Submit</Button>
            </Typography>
            </Box>
            </Modal>
        </div>
    )
}


export default Modalpopup;

const style = {
    position: 'absolute' as 'absolute',
    display: "block",
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 470,
    height: 450,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    "@media screen and (max-width: 495px)": {
      width: 350,
    },
};
  
const textField = {
    marginTop : "5px",
    marginBottom: "5px",
    width: "99%",
    fontSize: "1em",
}