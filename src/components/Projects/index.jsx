import React from "react";
import Cards from "../Cards";

const Projects = () => {
    return (
        <div className="flex flex-col items-center w-full p-8">
            <h2 className="text-lg lg:text-4xl text-white">Projects:</h2>
            <div>
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
            </div>
            
        </div>
    );
};

export default Projects