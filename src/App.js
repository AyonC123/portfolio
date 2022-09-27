import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css'

import Navbar from './components/Navbar';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Home from './pages/Home';

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/skills' element={<Skills/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </Router>
      </div>
  );
}

export default App;
