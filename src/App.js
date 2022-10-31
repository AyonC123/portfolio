import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import './App.css'

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function App() {
  const theme = window.localStorage.getItem('KDV_THEME')
  console.log(theme)
  if (theme === "dark"|| theme === "null") {
    document.body.classList.remove('lightTheme')
  } else {
    document.body.classList.add('lightTheme')
  }
  return (
    <div className='App'>
      <Helmet>
        <meta charSet='utf-8'/>
        <title>Ayon C</title>
        <meta name='keywords' content='portfolio'/>;
      </Helmet>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/skills' element={<Skills/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/*' element={<NotFound/>}/>
        </Routes>
      </Router>
      <Footer/> 
      </div>
  );
}

export default App;
