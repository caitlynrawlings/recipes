// src/components/Smoothies.tsx

import React from 'react';
import RecipeCard from '../components/RecipeCard';
import { bras, rab } from '../recipes/smoothies';

const Smoothies: React.FC = () => {
  const recipes = [bras, rab];

  return (
    <div className="container mx-auto p-4">
      {recipes.map((recipe, index) => (
        <RecipeCard key={index} recipe={recipe} />
      ))}
    </div>
  );
};

export default Smoothies;
