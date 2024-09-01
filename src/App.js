// src/App.js

import React, {} from 'react';
import './index.css';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import RecipePreviews from './pages/RecipePreviews.tsx'
import RecipeCategories from './pages/RecipeCategories.tsx'
import RecipeDetails from './pages/RecipeDetails.tsx';
import NotFound from './pages/NotFound.tsx';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<RecipeCategories />} />
          <Route path="/:category" element={<RecipePreviews />} />
          <Route path="/:category/:name" element={<RecipeDetails />} />
          <Route path="/not-found" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
