import CardList from "./components/CardList"
import Nav from "./components/Nav"
import { BrowserRouter as Router } from "react-router"
import Contact from "./components/Contact"
import About from "./components/About"

function App() {
  

  return (
    <Router>
      <div className={`bg-slate-800 min-w-dvw min-h-dvh flex flex-col items-center`}>
        <Nav/>
        <CardList/>
        <About/>
        <Contact/>
      </div>
    </Router>
  )
}

export default App
