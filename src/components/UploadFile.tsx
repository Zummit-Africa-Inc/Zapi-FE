import React from "react";
import { makeStyles } from "@mui/styles";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import SvgIcon from "@mui/material/SvgIcon";
import {
  Avatar,
  Box,
  Button,
  InputBase,
  InputLabel,
  Typography,
} from "@mui/material";

import ChoiceButton from "./ChoiceButton";

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
    loading?: boolean
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
    visible,
    loading
}) => {
  const classes = useStyles();
  return (
    <InputLabel className={classes.wrapper}>
      <Box>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          {logo_url ? (
            <Avatar
              src={logo_url}
              alt=""
              variant="square"
              sizes="large"
              sx={{ width: 100, height: 200 }}
            />
          ) : (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                margin: "0 auto",
              }}>
              <SvgIcon component={UploadFileIcon} sx={{fontSize: 130}} />
              <Typography component="p" sx={{marginLeft: "15px",color: "var(--color-primary)"}}>
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
        sx={{ display: "none" }}
      />
      {visible && (
        <Box className={classes.flex}>
          <Button
            className={`${classes.button} Upload`}
            onClick={imageUpload}>
            {loading ? "Loading" : "Upload"}
          </Button>
          <Button
            className={`${classes.button} Reject`}
            onClick={imageReject}>
            Cancel
          </Button>
        </Box>
      )}
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
    width: "200px",
    height: "225px",
    border: "1px solid #000000",
    borderRadius: "8px",
    "& img": {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      margin: "0 auto",
    },
  },
  flex: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 4px",
    margin: "12px 0 0"
  },
  button: {
    "&.MuiButton-root": {
      minWidth: "80px",
      fontWeight: 700,
      padding: "6px 12px",
      "&.Upload": {
        background: "green",
        color: "#FFF",
      },
      "&.Reject": {
        background: "red",
        color: "#FFF",
      },
    }
  }
});
