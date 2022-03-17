import './App.css';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import Contact from '../Contact/Contact';
import Navbar from '../Navbar/Navbar';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
import About from '../About/About';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Contact />
      </Router>
    </div>
  );
}

export default App;
