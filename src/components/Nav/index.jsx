import React from "react";
{/*import logo from './logo.png'*/}

const Menu = () => {
    return(
        <div className="mr-6">
            <button className="bg-gray-900 hover:bg-gray-600 text-white font-medium py-2 px-4 rounded">Home</button>
            <button className="bg-gray-900 hover:bg-gray-600 text-white font-medium py-2 px-4 ml-4 rounded">About Me</button>
            <button className="bg-gray-900 hover:bg-gray-600 text-white font-medium py-2 px-4 ml-4 rounded">Proyects</button>
        </div>
    )
}

const Nav = () => {
    
    return (
        <nav className="z-10 flex justify-center bg-gradient-to-b from-90% from-black w-full py-4 sticky top-0">
            <div className="flex items-center justify-between w-1/2">
                <div className="flex items-center mr-8">
                    <button className="bg-slate-800 p-2 hover:bg-transparent rounded">
                        <div className="bg-gradient-to-br from-sky-400 to-indigo-200 inline-block text-transparent bg-clip-text text-3xl">David Dev</div>
                    </button>
                    
                </div>
                <Menu/>
            </div>
        </nav>
    );
};

export default Nav;