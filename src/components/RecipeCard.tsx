// src/components/RecipeCard.tsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Recipe from '../types/Recipe';
import '../index.css'; // Ensure Tailwind CSS is imported
import ratingStars from '../functions/ratingStars.tsx';
import getIngredients from '../functions/getIngredients.ts';

interface RecipeCardProps {
  category: string
  recipe: Recipe;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ category, recipe }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/${category}/${recipe.name}`);
  };

  const ingredients = Array.from(getIngredients([recipe]))
  function getIngredientsString() : string {
    let str = ""
    ingredients.map((ingredient, index) => (
      index < ingredients.length - 1 ? str += ingredient + ', ' : str += ingredient
    ))
    return str
  }
  const ingredientsString: string = getIngredientsString()

  useEffect(() => {
    const keyDownCallback = (event: KeyboardEvent) => {
      const key = event.key;
      if (key === "Enter") {
        event.preventDefault();
      }
    }

    // Attach the event listener on component mount
    document.addEventListener('keydown', keyDownCallback);

    // Cleanup the event listener on component unmount
    return () => {
        document.removeEventListener('keydown', keyDownCallback);
    }
  }, [])

  return (
    <article role="listitem" aria-label={`${recipe.name} card`} className="bg-slate-100 shadow-md cursor-pointer mb-6 w-full flex flex-row h-auto overflow-hidden relative" onClick={handleClick}>
      <div className='md:flex hidden items-center justify-center max-w-56 min-w-56 absolute overflow-hidden h-full'>
        <img className="w-full h-full object-cover" src={process.env.PUBLIC_URL + recipe.picture} alt={recipe.alt_text}/>
      </div>

      <div className="md:ml-60 md:pl-2 ml-6 mr-6 py-8 flex flex-col justify-center w-full h-auto overflow-hidden">
        <div className='flex flex-row items-center gap-2 mb-4'>
          <img className="md:hidden w-20 h-20 rounded-full object-cover" src={process.env.PUBLIC_URL + recipe.picture} alt={recipe.alt_text}/>
          <h2 role="link" tabIndex={0} className="uppercase tracking-wide text-xl text-cyan-800 font-bold">{recipe.name}</h2>
        </div>
        {ratingStars(recipe.rating)}
        
        <div>
          <p className='text-slate-600 pt-4 pb-3 border border-b-2 border-t-transparent border-x-transparent'>{recipe.description}</p>

          <p className='break-normal text-slate-600 text-wrap pt-3 '>
            <span className='font-semibold'>Ingredient Overview:&nbsp;</span>
            {ingredientsString}
          </p>

        </div>
        
      </div>
    </article>
  );
};

export default RecipeCard;
