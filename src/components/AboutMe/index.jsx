import React from "react";


const Info = () => {

    const cvUrl = './Resources/CV-david.pdf';

    // Función para manejar la descarga del CV
    const descargarCV = () => {
        // Crear un elemento <a> temporal
        const link = document.createElement('a');
        link.href = cvUrl;
        // Asignar el nombre del archivo
        link.download = 'CV David Fletes.pdf';
        // Simular clic en el enlace
        document.body.appendChild(link);
        link.click();
        // Limpiar el elemento <a> temporal
        document.body.removeChild(link);
    };
    return (
        <div className="flex p-4 justify-evenly ">
                <div className="sm:block hidden w-48 bg-white items-center justify-center border border-white rounded-xl">
                    <img src="./images/Foto_perfil.jpg" alt="Foto perfil" className="rounded-xl"/></div>

                <div className="flex flex-col px-6">
                    <h2 className="text-white font-bold text-xl xl:text-4xl mb-4">
                        Hey i'm David <br/> <h2 className="bg-gradient-to-br from-sky-400 to-indigo-200 inline-block 
                        text-transparent bg-clip-text">Front End React Developer </h2> 
                    </h2>
                    <p className="text-white font-normal text-base lg:text-2xl">
                        I'm David Fletes. Front End React Developer <br/>
                        Based in Jalisco Mexico.
                    </p>
                </div>

                <div className="flex flex-col justify-evenly">
                    <button><a href="https://www.linkedin.com/in/david-fletes-esparza-729018228" className="flex items-center pb-2">
                        <img className="h-12 mr-4 bg-slate-400 transition duration-300 hover:bg-slate-200 hover:scale-110 rounded p-2" 
                            src="./assets/linkedin-icon.svg" alt="email icon" /></a></button>
                    <button><a href="https://github.com/Rosnye" className="flex items-center pb-2">
                        <img className="h-12 mr-4 bg-slate-400 transition duration-300 hover:bg-slate-200 hover:scale-110 rounded p-2" 
                            src="./assets/github-icon.svg" alt="email icon" /></a></button>
                    <div>
                        {/* Botón para descargar el CV */}
                        <button onClick={descargarCV}>
                            <img className="flex items-center justify-center font-bold text-2xl h-12 p-2 mr-4 bg-slate-400 transition duration-300 hover:bg-slate-200 hover:scale-110 rounded" src="./assets/CV-icon.svg" alt="CV" />
                        </button>
                    </div>
                    {/*<a download={Documento} className="flex items-center justify-center font-bold text-2xl h-12 mr-4 bg-slate-400 transition duration-300 hover:bg-slate-200 hover:scale-110 rounded">
                        CV</a> */}
                </div>
            </div>
    );
};

const Skills = () => {
    return (
        <div className="w-full p-6 flex flex-col mt-2">
                <h2 className="text-white text-2xl xl:text-4xl">Tech Skills:</h2>
                <div className="flex flex-col lg:flex-row justify-evenly lg:items-center mt-8 text-white lg:text-xl">
                    <div className="h-10 my-2 mr-4 flex items-center"><img className="h-12 mr-4 bg-slate-800 rounded p-2" 
                        src="./assets/html-5.svg" alt="html icon"/> HTML</div>
                    <div className="h-10 my-2 mr-4 flex items-center"><img className="h-12 mr-4 bg-slate-800 rounded p-2" 
                        src="./assets/css-3.svg" alt="css icon"/>CSS</div>
                    <div className="h-10 my-2 mr-4 flex items-center"><div className="w-12 h-12 mr-4 bg-slate-800 rounded p-2">
                        <img className="animate-spin-slow" src="./assets/react.svg" alt="react-logo" /></div> REACT JS</div>
                    <div className="h-10 my-2 mr-4 flex items-center"><img className="h-12 mr-4 bg-slate-800 rounded p-2" 
                        src="./assets/tailwind-icon.svg" alt="tailwind icon" /> TAILWIND</div>
                    <div className="h-10 my-2 mr-4 flex items-center"><img className="h-12 mr-4 bg-slate-800 rounded p-2" 
                        src="./assets/nodejs-icon.svg" alt="nodejs icon" /> NODE JS</div>
                    <div className="h-10 my-2 mr-4 flex items-center"><img className="h-12 mr-4 bg-slate-800 rounded p-2" 
                        src="./assets/javascript-icon.svg" alt="javascript icon" /> JAVASCRIPT</div>
                </div>
            </div>
    );
};

const Contact = () => {
    return (
        <div className="w-full p-6 flex flex-col mt-2">
                <h2 className="text-white text-lg lg:text-4xl">Contact Info:</h2>
                <div className="justify-evenly items-center text-white pt-6 lg:text-xl">
                    <div className="flex items-center pb-2"><img className="h-12 mr-4 bg-slate-400 rounded p-2" 
                        src="./assets/email-icon.svg" 
                        alt="email icon" /> Email: david.fletes.dev@gmail.com</div>

                    <div className="flex items-center pb-2"><img className="h-12 mr-4 bg-slate-400 rounded p-2" 
                        src="./assets/telephone-icon.svg" 
                        alt="email icon" /> Telephone: +52 3314961922</div>

                    <div className="flex items-center pb-2"><button><a href="https://www.linkedin.com/in/david-fletes-esparza-729018228" 
                        className="flex items-center">
                        <img className="h-12 mr-4 bg-slate-400 transition duration-300 hover:bg-slate-200 hover:scale-110 
                            rounded p-2" src="./assets/linkedin-icon.svg" alt="email icon" /></a></button><a className="hover:underline 
                            hover:underline-offset-2" href="https://www.linkedin.com/in/david-fletes-esparza-729018228">
                            LinkedIn: linkedin.com/david-fletes</a></div>

                    <div className="flex items-center pb-2"><button><a href="https://github.com/Rosnye" className="flex items-center">
                        <img className="h-12 mr-4 bg-slate-400 transition duration-300 hover:bg-slate-200 hover:scale-110 rounded p-2" 
                            src="./assets/github-icon.svg" alt="email icon" /></a></button><a className="hover:underline 
                            hover:underline-offset-2" href="https://www.github.com/Rosnye">Github: github.com/Rosnye </a></div>

                </div>
            </div>
    );
};

const AboutMe = () => {
    return (
        <div className="rounded-xl flex flex-col my-6 p-6">
            <Info/>
            
            <Skills/>
            
            <Contact/>
        </div>
    );
};

export default AboutMe;