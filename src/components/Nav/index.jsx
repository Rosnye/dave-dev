import React, {useState} from "react";
{/*import logo from './logo.png'*/}


const DropdownMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option) => {
        console.log(`Selected option: ${option}`);
      // Aquí puedes añadir la lógica para manejar la opción seleccionada
    };

    return (
        <div className="relative inline-block text-left">
            <div>
                <button
                    type="button"
                    className="inline-flex justify-center w-full rounded-md shadow-sm bg-gradient-to-br hover:bg-gradient-to-br 
                        duration-500 hover:from-sky-400 hover:to-sky-800 from-sky-400 to-sky-200 px-4 py-2 text-sm 
                        font-medium text-gray-700 hover:outline-none hover:ring-2 hover:ring-blue-500 hover:border-blue-500"
                    onClick={toggleMenu}
                >

                    {isOpen ?   <img className="w-6" src="./assets/menu-open-icon.svg"/> : 
                                <img className="duration-500 transition-transform scale-100 w-6" src="./assets/menu-closed-icon.svg"/> }

                </button>
            </div>

        {isOpen && (
            <div className="origin-top-right absolute right-0 mt-2 w-56 rounded bg-gradient-to-r shadow-lg from-blue-900 to-sky-800 ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div
                            className=""
                            role="menu"
                            aria-orientation="vertical"
                            aria-labelledby="options-menu"
                            >
                            <button
                                onClick={() => handleOptionClick('Opción 1')}
                                className="block px-4 py-2 text-sm text-white w-full text-left rounded-t hover:bg-gray-400"
                                role="menuitem"
                            >
                                Home
                            </button>
                            <button
                                onClick={() => handleOptionClick('Opción 2')}
                                className="block px-4 py-2 text-sm text-white w-full text-left hover:bg-gray-400"
                                role="menuitem"
                            >
                                About me
                            </button>
                            <button
                                onClick={() => handleOptionClick('Opción 3')}
                                className="block px-4 py-2 text-sm text-white w-full text-left rounded-b hover:bg-gray-400"
                                role="menuitem"
                            >
                                Projects
                            </button>
                        </div>
                    </div>
                )}
            </div>
        );
    };

const Menu = () => {
    return(
        <div className="flex flex-col relative right mr-6">
            <DropdownMenu/>
        </div>
    )
}

const Nav = () => {
    
    return (
        <nav className="z-10 flex justify-center bg-gradient-to-b from-90% from-black w-full py-4 sticky top-0">
            <div className="flex items-center justify-between lg:w-1/2">
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