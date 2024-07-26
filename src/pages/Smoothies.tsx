// src/pages/Smoothies.tsx

import React from 'react';
import RecipeCard from '../components/RecipeCard.tsx';
import recipes from '../recipes/SmoothieRecipes.ts';

const Smoothies: React.FC = () => {
  return (
    <div className="flex-col justify-center items-center container flex mx-auto p-10 h-full">
      <div className="fixed top-0 left-0 w-full bg-rose-300 p-3 text-left z-50 shadow-lg">
        <h1 className='text-pink-700 h1 ml-3'>Smoothies</h1>
      </div>
      <div className="mt-16 p-5 h-full overflow-y-auto">
        <div>
          
        </div>
        {recipes.map((recipe) => (
          <div key={recipe.name} className="col-auto row-auto">
            <RecipeCard recipe={recipe} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Smoothies;
