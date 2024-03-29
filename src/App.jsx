import './App.css'
import { Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';

function App() {

  return (
    <div className='App flex flex-col items-center min-w-96 h-full min-h-screen bg-Mountains bg-no-repeat bg-cover'>
      <Nav/>
      <Routes>
        <Route path='/dave-dev/' element={<Home/>}/>
        <Route path='/dave-dev/About/' element={<About/>}/>
        <Route path='*' element={<h1 className='w-full p-6 text-4xl flex justify-center text-white'>404 Not Found</h1>}/>
      </Routes>
    </div>
  );
};

export default App;