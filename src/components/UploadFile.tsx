import React from 'react';
import { makeStyles } from "@mui/styles";
import ChoiceButton from "./ChoiceButton";
import AttachFileIcon from '@mui/icons-material/AttachFile';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import SvgIcon from '@mui/material/SvgIcon';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import {
    Box,
    Input,
    Avatar,
    InputBase,
    InputLabel,
    Typography
} from "@mui/material";

interface Props {
    logo_url: string;
    label: string;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    imageUpload: (event: React.MouseEvent<HTMLButtonElement>) => void;
    imageReject: (event: React.MouseEvent<HTMLButtonElement>) => void;
    startAdornment?: React.ReactNode;
    endAdornment?: React.ReactNode;
    error?: boolean;
    inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
    inputRef?: React.Ref<HTMLInputElement>;
    visible: boolean;
};


const UploadFile: React.FC<Props> = ({
    label,
    logo_url,
    handleChange,
    imageUpload,
    imageReject,
    error,
    inputProps,
    inputRef,
    startAdornment,
    endAdornment,
    visible
}) => {
    const classes = useStyles();
    return (
        <InputLabel className={classes.wrapper}>  
            <Box>
                <Box sx={{ display: 'flex',flexDirection: 'column' }}>
                    {logo_url ? (
                        <Avatar src={logo_url}
                            alt=""
                            variant="square"
                            sizes='large'
                            sx={{ width: 200, height: 200 }}
                        />
                    ) : (
                        <Box sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                        }}>
                            <SvgIcon component={UploadFileIcon} sx={{ fontSize: 130 }} />
                            <Typography>
                                {label}
                            </Typography>
                        </Box>
                    )}
                </Box>
            </Box>

            <InputBase
                type="file"
                onChange={handleChange}
                startAdornment={startAdornment}
                endAdornment={endAdornment}
                error={error}
                inputProps={inputProps}
                inputRef={inputRef}
                sx={{ display: 'none' }}
            />  
            
            <Fab
                color="info"
                size="small"
                component="span"
                aria-label="add"
                variant="extended"
                sx={{  
                    marginTop: 2, 
                    padding: 2,
                    width: "100%"
                }}
            >
                <AddIcon /> Choose file
            </Fab>

            <ChoiceButton
                border="1px solid rgb(214, 217, 219)"
                acceptColor="#FFF"
                rejectColor="rgba(0, 0, 0, 0.87)"
                onAccept={imageUpload}
                onReject={imageReject}
                radius="5px"
                acceptText="Upload"
                rejectText="Cancel"
                acceptBackgroundColor="#26c340"
                rejectBackgroundColor="#FFF"
                padding="15px 25px"
                outline="none"
                visible={visible}
            />
        </InputLabel>
    )
}

export default UploadFile;

const useStyles = makeStyles({
    wrapper: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
        "& img": {
            width: "100%",
            height: "100%",
            objectFit: "cover",
        },
    }
});
