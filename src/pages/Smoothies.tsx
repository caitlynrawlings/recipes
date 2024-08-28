// src/pages/Smoothies.tsx

import React, { useState } from 'react';
import RecipeCard from '../components/RecipeCard.tsx';
import recipes from '../recipes/SmoothieRecipes.ts';
import DropDown from '../components/DropDown.tsx';
import DropdownCheckboxes from '../components/CheckboxDropdown.tsx';
import getIngredients from '../functions/getIngredients.ts';

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

  const HeaderBar: React.FC = () => {
    return (
      <div className="fixed top-0 left-0 w-full bg-gray-800 p-3 text-left z-50 shadow-lg flex flex-row items-end">
        <h1 className="text-slate-200 h1 ml-3">Smoothies</h1>
        <HeaderOrganizationOptions />
      </div>
    )
  }

  const HeaderOrganizationOptions: React.FC = () => {
    return (
      <div className='items-center md:flex flex-row justify-end w-full h-full hidden'>
        <DropdownCheckboxes options={getIngredients(recipes)} selectedOptions={selectedOptions} setSelectedOptions={setSelectedOptions}/>
        <DropDown onChange={handleSortChange} />
      </div>
    )
  }

  const MobileOrganizationOptions: React.FC = () => {
    return (
      <div className='items-start flex flex-col justify-start w-full h-full md:hidden mb-8'>
        <DropdownCheckboxes options={getIngredients(recipes)} selectedOptions={selectedOptions} setSelectedOptions={setSelectedOptions}/>
        <DropDown onChange={handleSortChange} />
      </div>
    )
  }

  const RecipePreviews: React.FC = () => {

    return (
      <div className='flex flex-col justify-center items-center container'>
        {sortedRecipes.map((recipe) => (
          <RecipeCard key={recipe.name} recipe={recipe}/>
        ))}
      </div>
    )
  }

  return (
    <div className="flex flex-col justify-center p-10 h-full">
      <HeaderBar/>
      <div className="mt-16 h-full w-full overflow-y-auto flex flex-col justify-center items-center">
        <MobileOrganizationOptions />
        <RecipePreviews/>
      </div>
    </div>
  );
};

export default Smoothies;
