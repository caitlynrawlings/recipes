// src/components/RecipeCard.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Recipe from '../types/Recipe';
import '../index.css'; // Ensure Tailwind CSS is imported

interface RecipeCardProps {
  recipe: Recipe;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/recipe/${recipe.name}`);
  };

  return (
    <div className="max-w-md mx-auto bg-teal-400 rounded-xl shadow-md overflow-hidden md:max-w-2xl mb-4 cursor-pointer" onClick={handleClick}>
      <div className="flex flex-row">
        {recipe.picture && (
          <div className="md:shrink-0">
            <img className="h-48 w-full object-cover md:h-full md:w-48" src={recipe.picture} alt={recipe.name} />
          </div>
        )}
        <div className="p-8 flex flex-col">
          <h2 className="uppercase tracking-wide text-xl text-indigo-500 font-semibold">{recipe.name}</h2>
          <p className="mt-2 text-gray-900">Rating: {recipe.rating} / 10</p>
          <ul className="mt-4 space-y-2">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index} className="text-gray-700">{ingredient.name}: {ingredient.unit.getLabel(parseFloat(ingredient.amount.toFixed(2)))}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
