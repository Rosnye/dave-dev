import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom'
import Home from "./components/Home"
import Contact from "./components/Contact"
import About from "./components/About"
import Projects from './components/Projects'
import NotFound from './components/NotFound'
function App() {
  

  return (
    <Router basename="/dave-dev">
      <div className="min-h-dvh bg-slate-800">
        <header className="bg-slate-900">
          <nav className="flex md:justify-between justify-center items-center container mx-auto px-4 py-3">
            <h1 className="hidden md:block text-white text-2xl font-bold">
              <Link to="/home" className="text-white hover:text-blue-400 transition-colors">
                DaveDev
              </Link>
            </h1>
            <ul className="flex gap-6 items-center justify-center">
              <li>
                <Link to="/home" className="text-white hover:text-blue-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-white hover:text-blue-400 transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white hover:text-blue-400 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white hover:text-blue-400 transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
