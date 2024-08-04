// src/pages/Smoothies.tsx

import React, { useState } from 'react';
import RecipeCard from '../components/RecipeCard.tsx';
import recipes from '../recipes/SmoothieRecipes.ts';
import DropDown from '../components/DropDown.tsx';
import DropdownCheckboxes from '../components/CheckboxDropdown.tsx';
import getIngredients from '../functions/getIngredients.ts';
import Recipe from '../types/Recipe.ts';

const Smoothies: React.FC = () => {
  const [sortBy, setSortBy] = useState<string>("name");
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);


  const handleSortChange = (sortType: string) => {
    setSortBy(sortType);
  };

  const filteredRecipes = recipes.filter(recipe => 
    !selectedOptions.some(selectedIngredient => recipe.ingredients.some(ingredient => 
      selectedIngredient === ingredient.name
    ))
  );

  // Function to sort recipes based on selected sort criteria
  const sortedRecipes = [...filteredRecipes].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'rating') {
      return b.rating - a.rating;
    } else if (sortBy === "name (z-a)") {
      return b.name.localeCompare(a.name);
    }
    return 0;
  });

  return (
    <div className="flex flex-col justify-center items-center container p-10 h-full">
      <div className="fixed top-0 left-0 w-full bg-rose-300 p-3 text-left z-50 shadow-lg">
        <h1 className="text-pink-700 h1 ml-3">Smoothies</h1>
      </div>
      <div className="mt-16 h-full w-full overflow-y-auto">
        <div className='flex flex-row'>
          <DropDown onChange={handleSortChange} />
          <DropdownCheckboxes options={getIngredients(recipes)} selectedOptions={selectedOptions} setSelectedOptions={setSelectedOptions}/>
        </div>
        {sortedRecipes.map((recipe) => (
          <div key={recipe.name}>
            <RecipeCard recipe={recipe}/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Smoothies;
