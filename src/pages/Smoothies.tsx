// src/pages/Smoothies.tsx

import React from 'react';
import RecipeCard from '../components/RecipeCard.tsx';
import recipes from '../recipes/SmoothieRecipes.ts';

const Smoothies: React.FC = () => {
  return (
    <div className="container mx-auto p-10">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.name} recipe={recipe} />
      ))}
    </div>
  );
};

export default Smoothies;
