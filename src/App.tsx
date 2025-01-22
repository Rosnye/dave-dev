import Card from "./components/Card"
import Nav from "./components/Nav"
import React, { useState } from "react"

function App() {

  let color = ""
  const [theme,setTheme] = useState(true)
  if (theme){
    color="dark"
  }
  else{
    color="white"
  }

  return (
    <div className={`bg-slate-800 min-w-dvw min-h-dvh flex flex-col items-center`}>
      <Nav/>
      <Card/>
    </div>
  )
}

export default App
