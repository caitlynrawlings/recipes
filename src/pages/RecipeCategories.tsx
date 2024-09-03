// src/pages/RecipeCategories.tsx

import React from 'react';
import categories from '../constants/recipeCategories.ts';
import CategoryCard from '../components/CategoryCard.tsx';

const RecipeCategories: React.FC = () => {


  return (
    <div className='p-4'>
        <header className='flex flex-col md:flex-row border-b-2 pb-5 pt-2 border-cyan-100'>
            <h1 className='text-cyan-100 text-6xl font-bold'>Recipes I've Tried</h1>
            <div className='hidden md:block mx-8 w-32'>
                <p className='text-cyan-100 font-light'>Just a place for me to track recipes I've tried.</p>
            </div>
            <p className='md:hidden text-cyan-100 mt-2 font-light'>Just a place for me to track recipes I've tried.</p>
        </header>

        <nav role="navigation" aria-label="Recipe categories" className="lg:px-8 md:px-4 px-2 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
            {categories.map((category, index) => (
            <CategoryCard key={index} category={category}/>
            ))}
        </nav>
    </div>
  );
};

export default RecipeCategories;
