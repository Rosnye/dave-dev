import './App.css'
import { useState, useEffect } from 'react';
import AboutMe from './components/AboutMe'
import Nav from './components/Nav'
import Load from './components/Load';
import Projects from './components/Projects';

function App() {

  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setIsActive(false); // Desactivar el temporizador después de ejecutarse una vez
    }, 300);

    return () => clearTimeout(timerId); // Detener el temporizador al desmontar el componente
  }, []); // El arreglo de dependencias vacío asegura que este efecto solo se ejecute una vez al montar el componente


  return (
    <div className="flex flex-col items-center min-h-screen bg-Mountains bg-no-repeat bg-cover">
      
      {isActive ? <Load/> : <></>}
      <Nav/>
      <AboutMe/>
      <Projects/>
    </div>
  );
};

export default App
