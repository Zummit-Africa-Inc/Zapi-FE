import {
    Box,
    Typography,
    TextField,
    TextareaAutosize,
    Button,
} from "@mui/material";
import React, { SyntheticEvent, useState } from "react";
import { makeStyles, styled } from '@mui/styles';
import { useHttpRequest } from "../hooks";
import { toast } from "react-toastify";
import { Spinner } from "../assets";
import { EMAIL_REGEX } from "../utils";

import contact from "../assets/images/sent-message-pana.svg";

const core_url = "VITE_CORE_URL";

const Contact: React.FC = () => {
    const classes = useStyles();
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [body, setBody] = useState<string>("");
    const [load, setLoad] = useState(false)
    const { error, loading, sendRequest } = useHttpRequest();
    const isValid = name && email && body

    const handleSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();

        if (!EMAIL_REGEX.test(email)) return toast.error("Please input a valid email")

        setLoad(true)
        const payload = { name, email, body };
        const headers = { "Content-Type": "application/json" };
        
        try {
            const data = await sendRequest(
                "/feedback/create",
                "post",
                core_url,
                payload,
                headers
            );

            const {message} = data
            if (!data) return;
            
            setLoad(false)
            toast.success(`${message}`)
            setName('')
            setEmail('')
            setBody('')
        } catch (error) {
            setLoad(false)
            toast.error('Could not send your message')
        }
    };


    return (
        <Box className={classes.root}>
            <Box
                component="img"
                alt="contact"
                src={contact}
            />

            <Box className={classes.form}>
                <Typography component="h2">Get in touch</Typography>

                <TextField
                    className={classes.textField}
                    id="standard-basic"
                    label="Name"
                    variant="standard"
                    value={name}
                    required
                    onChange={(e) => setName(e.target.value)}
                />

                <TextField
                    className={classes.textField}
                    id="standard-basic"
                    label="Email"
                    variant="standard"
                    value={email}
                    required
                    onChange={(e) => setEmail(e.target.value)}
                />

                <TextareaAutosize
                    aria-label="minimum height"
                    maxRows={6}
                    minRows={6}
                    placeholder="Type your message here..."
                    style={{
                        width: "99%",
                        height: "30%",
                        marginTop: "5%",
                        padding: "2%",
                        fontSize: "1em",
                    }}
                    value={body}
                    required
                    onChange={(e) => setBody(e.target.value)}
                />

                <Typography
                    sx={{ my: 4, display: "flex", justifyContent: "center" }}>
                    <Button
                    sx={{
                        width: "100%",
                        background: "#081F4A",
                        color: "white",
                    }}
                    variant="contained"
                    disableElevation
                    disableFocusRipple
                    disabled={!isValid}
                    onClick={handleSubmit}>
                    {load ? <Spinner/> : 'Submit'}
                    </Button>
                </Typography>

            </Box>
            
        </Box>
        
    );
};
  
export default Contact;
  

const useStyles = makeStyles({
    root:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: "4.5rem",
        margin: "0 5rem 5rem",
        "& img": {
            // backgroundColor: "#EDF5FD",
            border: "1px solid #a1a1a1",
            borderRadius: "20px",
            // boxShadow: "2px 2px 10px 2px #e1e1e1",
            width: "40%",
            height: "auto",
                
            "@media screen and (max-width: 870px)": {
                display: "none"
            },
        },
        "@media screen and (max-width: 1024px)": {
            justifyContent: "space-between",
        }, 
        "@media screen and (max-width: 870px)": {
            justifyContent: "center",
            margin: "0 3rem 3rem",
        },
    },
    form: {
        width: "43%", 
        height: "auto", 
        "& h2": {
            fontSize: "32px", 
            fontWeight: "bold", 
            textAlign: "center", 
            color: "#071B85",
            "@media screen and (max-width: 1024px)": {
                fontSize: "28px",
            }, 
            "@media screen and (max-width: 870px)": {
                fontSize: "26px",
            },
        },
        "@media screen and (max-width: 870px)": {
            width: "100%", 
        },
    },
    textField: {
        marginTop: "5px",
        marginBottom: "5px",
        width: "99%",
        fontSize: "1em",
    },

});
