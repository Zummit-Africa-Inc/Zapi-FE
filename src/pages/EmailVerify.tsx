import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useHttpRequest } from "../hooks";
import SuccessPage from "./SuccessPage";
import ErrorPage from "./ErrorPage";
import { Fallback } from "../components";

const url = import.meta.env.VITE_IDENTITY_URL;

const EmailVerify = () => {
	const { error, loading, sendRequest } = useHttpRequest();
	const { token } = useParams();

	const verifyEmailUrl = async () => {
		try {
			const data = await sendRequest(`${url}/email-verification/${token}`, 'GET')
			console.log(data)
		} catch (error) {}
	};

	useEffect(() => {
		verifyEmailUrl()
	},[]);

	if(loading) return <Fallback />

  return error ? <ErrorPage error={error?.message} /> : <SuccessPage />
};

export default EmailVerify;