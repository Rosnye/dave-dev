import React from "react";

const Load = () => {

    
    return (
        
        <div className={"z-30 bg-gray-700 absolute min-h-screen min-w-full flex items-center justify-center"}>
            <div className="flex flex-col">
                <img src="./assets/react.svg" className="animate-spin-slow" alt="react-svg"/>
                <h2 className="mt-4 font-bold text-white text-2xl">Loading</h2>
            </div>
        </div>
    );
};

export default Load;