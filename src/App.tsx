import CardList from "./components/CardList"
import Nav from "./components/Nav"

function App() {
  

  return (
    <div className={`bg-slate-800 min-w-dvw min-h-dvh flex flex-col items-center`}>
      <Nav/>
      <CardList/>
    </div>
  )
}

export default App
