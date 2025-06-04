import React, { useEffect, useState } from "react";
import InputField from "../Reusable/InputField";

const Login = () => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const submitHandler = () => {

    }



    return (
        <div className="flex flex-col items-center space-y-5 h-full w-full">
            <div></div>
            <InputField heading = "Email" onChange={(e) => setEmail(e.target.value)} value = {email}></InputField>
            <InputField heading = "Password" onChange={(e) => setPassword(e.target.value)} value = {password}></InputField>
            <button className="border border-sm rounded-sm" onClick={submitHandler}>
                Log In
            </button>
            <button className="border border-sm rounded-sm" 
            onClick={() => {
                setEmail("guest@example.com"); 
                setPassword("123456");
                }}
            >
                Get Guest Credentials
            </button>
            <div></div>
        </div>
    )
}

export default Login