import React from "react";
{/*import logo from './logo.png'*/}

const Nav = () => {
    
    return (
        <nav className="flex items-center justify-between border-b border-gray-300 w-full p-4">
            <div className="flex items-center ml-8">
                <img src="./images/david-icon.jpeg" alt="Logo" className="rounded h-10 w-10 mr-4"/>
                <button className="text-white text-2xl hover:underline">David Fletes Dev</button>
            </div>
            <div className="flex mr-6">
                <button className="bg-gray-900 hover:bg-gray-600 text-white font-medium py-2 px-4 rounded">Home</button>
                <button className="bg-gray-900 hover:bg-gray-600 text-white font-medium py-2 px-4 ml-4 rounded">About Me</button>
                <button className="bg-gray-900 hover:bg-gray-600 text-white font-medium py-2 px-4 ml-4 rounded">Proyects</button>
            </div>
        </nav>
    );
};

export default Nav;