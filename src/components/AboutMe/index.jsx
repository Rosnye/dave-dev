import React from "react";

const AboutMe = () => {
    return (
        <div className="rounded-xl flex flex-col my-6 p-6">
            <div className="flex p-4 justify-evenly border-gray-300 rounded-xl bg-gray-500 border-b border-w-">
                <div className="h-32 w-32 bg-white flex items-center justify-center border border-white rounded-xl"><img src="./src/images/Foto_perfil.jpg" 
                    alt="Foto perfil" className="rounded-xl"/></div>
                <div className="flex flex-col px-6">
                    <h2 className="text-white font-bold text-xl mb-4">
                        Hey i'm David <br/> Front End React Developer
                    </h2>
                    <p className="text-white font-normal text-base">
                        Hi i'm David Fletes. Front End React Developer <br/>
                        Based in Jalisco Mexico.
                    </p>
                </div>

                <div className="flex flex-col justify-evenly">
                    <button><a href="https://www.linkedin.com/in/david-fletes-esparza-729018228" className="flex items-center pb-2">
                        <img className="h-12 mr-4 bg-slate-400 rounded p-2" src="./src/assets/linkedin-icon.svg" alt="email icon" /></a></button>
                    <button><a href="https://github.com/Rosnye" className="flex items-center pb-2">
                        <img className="h-12 mr-4 bg-slate-400 rounded p-2" src="./src/assets/github-icon.svg" alt="email icon" /></a></button>
                </div>

            </div>
            <div className="border-b border-gray-300 w-full p-6 flex flex-col bg-gray-500 rounded-xl mt-2">
                <h2 className="text-white text-xl">Tech Skills:</h2>
                <div className="h-14 flex justify-evenly items-center mt-8 text-white">
                    <div className="h-10 mr-4 flex items-center"><img className="h-12 mr-4 bg-slate-800 rounded p-2" src="./src/assets/html-5.svg" alt="html icon"/> HTML</div>
                    <div className="h-10 mr-4 flex items-center"><img className="h-12 mr-4 bg-slate-800 rounded p-2" src="./src/assets/css-3.svg" alt="css icon"/>CSS</div>
                    <div className="h-10 mr-4 flex items-center"><div className="h-12 mr-4 bg-slate-800 rounded p-2">
                        <img className="animate-spin-slow" src="./src/assets/react.svg" alt="react-logo" /></div> REACT JS</div>
                    <div className="h-10 mr-4 flex items-center"><img className="h-12 mr-4 bg-slate-800 rounded p-2" 
                        src="./src/assets/tailwind-icon.svg" alt="tailwind icon" /> TAILWIND</div>
                    <div className="h-10 mr-4 flex items-center"><img className="h-12 mr-4 bg-slate-800 rounded p-2" 
                        src="./src/assets/nodejs-icon.svg" alt="nodejs icon" /> NODE JS</div>
                    <div className="h-10 mr-4 flex items-center"><img className="h-12 mr-4 bg-slate-800 rounded p-2" 
                        src="./src/assets/javascript-icon.svg" alt="javascript icon" /> JAVASCRIPT</div>
                </div>
            </div>
            <div className="border-b border-gray-300 w-full p-6 flex flex-col bg-gray-500 rounded-xl mt-2">
                <h2 className="text-white text-xl">Contact Info:</h2>
                <div className="justify-evenly items-center text-white pt-6">
                    <div className="flex items-center pb-2"><img className="h-12 mr-4 bg-slate-400 rounded p-2" src="./src/assets/email-icon.svg" 
                        alt="email icon" /> Email: david.fletes.dev@gmail.com</div>
                    <div className="flex items-center pb-2"><img className="h-12 mr-4 bg-slate-400 rounded p-2" src="./src/assets/telephone-icon.svg" 
                        alt="email icon" /> Telephone: +52 3314961922</div>
                    <div className="flex items-center pb-2"><img className="h-12 mr-4 bg-slate-400 rounded p-2" src="./src/assets/linkedin-icon.svg" 
                        alt="email icon" /><a className="hover:underline hover:underline-offset-2" href="https://www.linkedin.com/in/david-fletes-esparza-729018228">
                            LinkedIn: www.linkedin.com/in/david-fletes-esparza-729018228</a></div>
                    <div className="flex items-center pb-2"><img className="h-12 mr-4 bg-slate-400 rounded p-2" src="./src/assets/github-icon.svg" 
                        alt="email icon" /><a className="hover:underline hover:underline-offset-2" href="https://www.github.com/Rosnye">Github: github.com/Rosnye </a></div>

                </div>
            </div>
        </div>
    );
};

export default AboutMe;