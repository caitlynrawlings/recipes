// src/components/RecipeCard.tsx

import React from 'react';
import Recipe from '../types/Recipe';
import '../index.css'; // Ensure Tailwind CSS is imported

interface RecipeCardProps {
  recipe: Recipe;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mb-4">
      <div className="md:flex">
        {recipe.picture && (
          <div className="md:shrink-0">
            <img className="h-48 w-full object-cover md:h-full md:w-48" src={recipe.picture} alt={recipe.name} />
          </div>
        )}
        <div className="p-8">
          <h2 className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{recipe.name}</h2>
          {recipe.description && <p className="mt-2 text-gray-500">{recipe.description}</p>}
          <p className="mt-2 text-gray-900">Rating: {recipe.rating} / 10</p>
          <ul className="mt-4 space-y-2">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index} className="text-gray-700">{ingredient.name}: {ingredient.amount} {ingredient.unit}</li>
            ))}
          </ul>
          {recipe.directions && <p className="mt-4 text-gray-500">{recipe.directions}</p>}
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
