import './App.css'
import AboutMe from './components/AboutMe'
import Nav from './components/Nav'

function App() {

  return (
    <div className="flex flex-col items-center min-h-screen bg-black">
      <Nav/>
      <AboutMe/>
    </div>
  );
};

export default App
