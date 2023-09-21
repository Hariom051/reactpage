// src/App.js

import React from 'react';
import { HashRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Use HashRouter here
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
   
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
  
  );
}

export default App;
