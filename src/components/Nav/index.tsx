

const Nav = () => {
    return (
        <div className="font-serif border border-black shadow-lg rounded-xl m-2 px-4 py-2 bg-gray-700 min-h-12 w-3/4 flex items-center justify-between">
            <a href="https://rosnye.github.io/dave-dev/" className="text-whiteText font-sans text-2xl font-bold">Dave Dev</a>
            <ul>
                <li className="inline-block mx-2"><a href="https://rosnye.github.io/dave-dev/" className="text-whiteText">Home</a></li>
                <li className="inline-block mx-2"><a href="https://rosnye.github.io/dave-dev/about" className="text-whiteText">About</a></li>
                <li className="inline-block mx-2"><a href="https://rosnye.github.io/dave-dev/projects" className="text-whiteText">Projects</a></li>
                <li className="inline-block mx-2"><a href="https://rosnye.github.io/dave-dev/contact" className="text-whiteText">Contact</a></li>
            </ul>
        </div>
    )
}

export default Nav;