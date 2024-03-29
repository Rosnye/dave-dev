import React from "react";
import { Link } from "react-router-dom";
import routes from "../../routes";

const Nav = () => {
    return (
        <header className="bg-blue-900 flex text-gray-300 w-full justify-center items-center p-2">
            <h1 className="text-xl xl:text-3xl font-bold bg-gradient-to-br from-blue-400 to-sky-200 inline-block 
                        text-transparent bg-clip-text">David Front-End</h1> 

            <nav className="w-2/5">
                <ul className="text-xl flex w-full justify-evenly">
                    {routes.map(item => (
                        <li className="bg-blue-600 rounded px-2 py-1 hover:scale-105 transition-transform duration-300" key={item.id}><Link to={item.route}>{item.titulo}</Link></li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};
export default Nav;