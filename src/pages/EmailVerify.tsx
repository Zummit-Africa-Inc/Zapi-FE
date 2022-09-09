import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { Stack, Typography } from '@mui/material';
import SuccessPage from "./SuccessPage";

const identity_url = import.meta.env.VITE_IDENTITY_URL;


const EmailVerify: React.FC = () => {
    const [validUrl, setValidUrl] = useState(true);
	const param = useParams();

	useEffect(() => {
		const verifyEmailUrl = async () => {
			try {
				const url = `${identity_url}/zapi-identity/email-verification/${param.token}`;
				const { data } = await axios.get(url);
				console.log(data);
				setValidUrl(true);
			} catch (error) {
				console.log(error);
				setValidUrl(false);
			}
		};
		verifyEmailUrl();
	}, [param]);

  return (
    <>
      {validUrl ? (
          <SuccessPage/>
      ):(
        <Typography variant="h1" sx={{textAlign: 'center'}}>Page Not Found</Typography>

      )}
    </>
  );
};

export default EmailVerify;