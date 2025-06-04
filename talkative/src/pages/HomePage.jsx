import React from "react";
import Signup from "../components/Authentication/Signup";
import Login from "../components/Authentication/login";


const HomePage = () => {
    return (
        <div className = "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-screen w-screen flex flex-col items-center gap-y-8">
            <div className="h-[10vh] w-[40vw] py-8 flex flex-col justify-around bg-white shadow-xl rounded-xl text-center">
                <p className="font-[WorkSans] text-black text-6xl">Talkative</p>
            </div>
            <div className="h-min w-[40dvw] flex flex-col rounded-xl bg-white shadow-xl">
                <div className="tabs tabs-lifted tabs-active tab-xl text-black bg-white">
                    <input type="radio" name="my_tab" className="tab text-black-500 not-checked:bg-gray-500 checked:bg-black checked:text-white w-1/2 hover:bg-black hover:text-white" aria-label="Login" defaultChecked/>
                    <div className="tab-content bg-white h-full">
                        <Login></Login>
                    </div>

                    <input type="radio" name="my_tab" className="tab text-black-500 not-checked:bg-gray-500 checked:bg-black checked:text-white w-1/2 hover:bg-black hover:text-white" aria-label="Sign Up"/>
                    <div className="tab-content bg-white h-full">
                        <Signup></Signup>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;