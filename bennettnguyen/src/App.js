import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Menubar from './components/Menubar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div classname="App">
        <Header
          title="Welcome to my Portfolio"
          subtitle="Example"
          backgroundImage="https://uhdwallpapers.org/uploads/converted/18/05/17/san-francisco-cityscape-1920x1080_76474-mm-90.webp"
        />
        <Menubar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;