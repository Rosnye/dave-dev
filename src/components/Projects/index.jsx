import React from "react";
import data from "../../data";


const Cards = () => {
    return (
        <div className="flex flex-wrap">
            {data.map(item => (
                <a key={item.id} href={item.url} className="hover:scale-105 transition-transform duration-300 rounded-lg shadow max-w-96 bg-sky-800 m-4">
                    <img src={item.imagen} alt={item.titulo} className="w-full h-auto mb-4 rounded-t-lg" />
                    <h2 className="text-xl font-semibold px-4 text-white underline underline-offset-4">{item.titulo}</h2>
                    <p className="text-white font-thin text-lg px-4 py-2">{item.descripcion}</p>
                </a>
            ))}
        </div>
    );
};

const Projects = () => {
    return (
        <div className="flex flex-col items-center w-full p-8">
            <h2 className="text-lg lg:text-4xl text-white pb-8">Projects:</h2>
            <Cards/>

        </div>
    );
};

export default Projects;