// src/App.js

import React from 'react';
import './App.css';
import Smoothies from './pages/Smoothies.tsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RecipeDetails from './pages/RecipeDetails.tsx';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Smoothies />} />
          <Route path="/recipe/:name" element={<RecipeDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
