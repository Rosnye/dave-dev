import React from "react";
{/*import logo from './logo.png'*/}

const Nav = () => {
    
    return (
        <nav className="z-10 flex items-center justify-between border-b bg-black border-gray-300 w-full p-4 sticky top-0">
            <div className="flex items-center ml-8">
                <img src="./images/david-icon.jpeg" alt="Logo" className="rounded h-10 w-10 mr-4"/>
                <div className="bg-slate-800 p-4 rounded">
                    <button className="bg-gradient-to-br from-sky-400 to-indigo-200 inline-block text-transparent bg-clip-text text-3xl">David Dev</button>
                </div>
                
            </div>
            <div className="hidden mr-6">
                <button className="bg-gray-900 hover:bg-gray-600 text-white font-medium py-2 px-4 rounded">Home</button>
                <button className="bg-gray-900 hover:bg-gray-600 text-white font-medium py-2 px-4 ml-4 rounded">About Me</button>
                <button className="bg-gray-900 hover:bg-gray-600 text-white font-medium py-2 px-4 ml-4 rounded">Proyects</button>
            </div>
        </nav>
    );
};

export default Nav;