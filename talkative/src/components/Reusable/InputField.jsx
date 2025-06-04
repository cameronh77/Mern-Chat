import React from "react";


const InputField = ({heading, onChange, value}) => {
    return(
        <div className="h-full w-[80%]">
            <p className="font-bold">{heading}:</p>
            <input 
                className="w-full placeholder:text-slate-400 text-slate-700 border border-slate-500 rounded-md grow"
                onChange={onChange}
                placeholder={heading}
                value={value}
            />
        </div>
    )
};

export default InputField;