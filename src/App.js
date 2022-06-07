import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
      <Router> 
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route exact path="/about" element={<AboutMe />}/>
          <Route exact path="/projects" element={<Projects />}/>
        </Routes>
      </Router>
  );
}

export default App;
