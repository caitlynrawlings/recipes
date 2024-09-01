// src/components/RecipeCard.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Recipe from '../types/Recipe';
import '../index.css'; // Ensure Tailwind CSS is imported
import ratingStars from '../functions/ratingStars.tsx';

interface RecipeCardProps {
  category: string
  recipe: Recipe;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ category, recipe }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/${category}/${recipe.name}`);
  };

  const Ingredients = () => {
    // return (
    //   <ul className="mt-4 space-y-2">
    //     {recipe.ingredients.map((ingredient, index) => (
    //       <li key={index} className="text-gray-700">{ingredient.name}: {ingredient.unit.getLabel(parseFloat(ingredient.amount.toFixed(2)))}</li>
    //     ))}
    //   </ul>
    // )

  }

  return (
    <div className="bg-slate-100 shadow-md overflow-hidden cursor-pointer mb-6 w-full flex flex-row" onClick={handleClick}>
      <div className='md:flex hidden items-center justify-center max-w-56 min-w-56'>
        <img className="w-full h-full object-cover" src={process.env.PUBLIC_URL + recipe.picture} alt={recipe.name}/>
      </div>

      <div className="mx-6 py-8 flex flex-col justify-center">
        <div className='flex flex-row items-center gap-2 mb-4'>
          <img className="md:hidden w-20 h-20 rounded-full object-cover" src={process.env.PUBLIC_URL + recipe.picture} alt={recipe.name}/>
          <h2 className="uppercase tracking-wide text-xl text-cyan-800 font-bold">{recipe.name}</h2>
        </div>
        {ratingStars(recipe.rating)}
        
        {recipe.description && <p className='text-slate-600 pt-4 pb-3 border border-b-2 border-t-transparent border-x-transparent'>{recipe.description}</p>}

        <div className='flex flex-row flex-wrap text-slate-600 whitespace-normal pt-3'>
          <p className='font-semibold'>Ingredient Overview:&nbsp;</p>
          {recipe.ingredients.map((ingredient, index) => (
            <span className="whitespace-nowrap" key={index}>
              {ingredient.name}
              {index < recipe.ingredients.length - 1 && ','}&nbsp;
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
