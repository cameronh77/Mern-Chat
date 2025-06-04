import React, { useState } from "react";
import InputField from "../Reusable/InputField";

const Signup = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [password, setPassword] = useState();
    const [pic, setPic] = useState();

    const postDetails = (pics) => {

    }

    const submitHandler = () => {

    }

    return (
        <div className="flex flex-col items-center space-y-5 h-full w-full">
            <div></div>
            <InputField heading = "Name" onChange={(e) => setName(e.target.value)}></InputField>
            <InputField heading = "Email" onChange={(e) => setEmail(e.target.value)}></InputField>
            <InputField heading = "Password" onChange={(e) => setPassword(e.target.value)}></InputField>
            <InputField heading = "Confirm Password" onChange={(e) => setConfirmPassword(e.target.value)}></InputField>
            <div className="w-[80%]">
                <p className="font-bold">Upload a Picture:</p>
                <button className="border border-sm rounded-sm shadow-xl">Choose a file</button>
            </div>
            <button className="border border-sm rounded-sm" onClick={submitHandler}>
                Sign Up
            </button>
            <div></div>
        </div>
    )
}

export default Signup