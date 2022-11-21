import React from 'react';
import { makeStyles } from "@mui/styles";
import ChoiceButton from "./ChoiceButton";
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SvgIcon from '@mui/material/SvgIcon';
import {
    Box,
    Input,
    Avatar,
    MenuItem,
    Select,
    Stack,
    TextField,
    Typography,
    Switch,
    SelectChangeEvent,
    Paper,
    Button,
} from "@mui/material";

interface Props {
    logo_url: string;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    imageUpload: (event: React.MouseEvent<HTMLButtonElement>) => void;
    imageReject: (event: React.MouseEvent<HTMLButtonElement>) => void;
};


const UploadFile: React.FC<Props> = ({
    logo_url,
    handleChange,
    imageUpload,
    imageReject,
}) => {
    const classes = useStyles();
    return (
        <Box>
            <Box className={classes.wrapper}>     
                {logo_url ? (
                    <Avatar src={logo_url}
                        alt=""
                        variant="square"
                        sizes='large'
                        sx={{width: 200, height: 200}}
                    />               
                ) : (
                        <SvgIcon component={AttachFileIcon} sx={{ fontSize: 130 }}  viewBox="0 5 25 15" />
                    )}
            </Box>
            <Input
                type="file"
                onChange={handleChange}
            />    
            <ChoiceButton
                border="1px solid rgb(214, 217, 219)"
                acceptColor="#FFF"
                rejectColor="rgba(0, 0, 0, 0.87)"
                onAccept={imageUpload}
                onReject={imageReject}
                radius="5px"
                acceptText="Upload"
                rejectText="Cancel"
                acceptBackgroundColor="#0814FA"
                rejectBackgroundColor="#FFF"
                padding="15px 25px"
                outline="none"
            />
        </Box>
    )
}

export default UploadFile;

const useStyles = makeStyles({
    wrapper: {
        width: "100%",
        height: "80%",
        position: "relative",
        "& img": {
            width: "100%",
            height: "100%",
            objectFit: "cover",
        },
    }
});