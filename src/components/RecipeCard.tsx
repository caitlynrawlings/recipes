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
    <div className="bg-cyan-100 rounded-xl shadow-md overflow-hidden cursor-pointer mb-6 mx-auto w-full" onClick={handleClick}>
      <div className="flex flex-row">
        {recipe.picture && (
          <div className="md:shrink-0">
            <img className="h-48 w-full object-cover md:h-full md:w-48 min-w-48" src={recipe.picture} alt={recipe.name}/>
          </div>
        )}
        <div className="p-8 flex flex-col">
          <h2 className="uppercase tracking-wide text-xl text-cyan-700 font-semibold">{recipe.name}</h2>
          <p className="mt-2 text-zinc-600">Rating: {recipe.rating} / 10</p>
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
