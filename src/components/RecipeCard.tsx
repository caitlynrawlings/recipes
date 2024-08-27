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
    <div className="bg-slate-100 shadow-md overflow-hidden min-h-48 cursor-pointer mb-6 mx-auto w-full flex flex-row items-stretch" onClick={handleClick}>
      {recipe.picture && (
        <div className='flex items-center justify-center mr-6'>
          <img className=" w-56 h-full object-cover" src={recipe.picture} alt={recipe.name}/>
        </div>
      )}
      <div className="py-8 flex flex-col justify-center">
        <h2 className="uppercase tracking-wide text-xl text-cyan-800 font-bold">{recipe.name}</h2>
        <p className="mt-2 text-zinc-600">Rating: {recipe.rating} / 10</p>
        <ul className="mt-4 space-y-2">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index} className="text-gray-700">{ingredient.name}: {ingredient.unit.getLabel(parseFloat(ingredient.amount.toFixed(2)))}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RecipeCard;
