// src/components/RecipeCard.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Recipe from '../types/Recipe';
import '../index.css'; // Ensure Tailwind CSS is imported
import ratingStars from '../functions/ratingStars.tsx';

interface RecipeCardProps {
  recipe: Recipe;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/recipe/${recipe.name}`);
  };

  return (
    <div className="bg-slate-100 shadow-md overflow-hidden min-h-48 cursor-pointer mb-6  w-full flex flex-row items-stretch" onClick={handleClick}>
      <div className='md:flex hidden items-center justify-center'>
        <img className=" w-56 h-full object-cover" src={recipe.picture} alt={recipe.name}/>
      </div>
      <div className="mx-6 py-8 flex flex-col justify-center">
        <div className='flex flex-row items-center gap-2 mb-4'>
          <img className="md:hidden w-20 h-20 rounded-full object-cover" src={recipe.picture} alt={recipe.name}/>
          <h2 className="uppercase tracking-wide text-xl text-cyan-800 font-bold">{recipe.name}</h2>
        </div>
        {ratingStars(recipe.rating)}
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
