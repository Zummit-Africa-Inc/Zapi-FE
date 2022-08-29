import React, { FormEvent } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { Navbar } from "../components";
import { useFormInputs } from "../hooks/form-hook";
import { PASSWORD_REGEX } from "../utils";

const initialState = {
  email: "",
  password: ""
}

const Login: React.FC = () => {
  const { inputs, bind } = useFormInputs(initialState)
  const { email, password } = inputs
  const navigate = useNavigate()
  const location = useLocation()

  const {from} = (location.state || {from:{pathname:"/"}}) as {from:{pathname:string}}
  
  const handleLogin = async(e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(inputs)
    
  }

  return (
    <>
    <Navbar />
    <div>
      <form onSubmit={handleLogin}>
        <input type="email" name="email" {...bind} placeholder="email" /> <br />
        <input type="password" name="password" {...bind} placeholder="password" /> <br />
        <button type="submit">submit</button>
      </form>
    </div>
    </>
  );
};

export default Login;