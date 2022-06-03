import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutMe from './components/AboutMe'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
      <Router> 
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} /> 
          <Route exact path="/about" element={<AboutMe />}/>
        </Routes>
      </Router>
  );
}

export default App;
