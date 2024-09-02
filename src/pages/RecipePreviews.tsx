// src/pages/RecipePreviews.tsx

import React, { useState, Suspense } from 'react';
import RecipeCard from '../components/RecipeCard.tsx';
import DropDown from '../components/DropDown.tsx';
import DropdownCheckboxes from '../components/CheckboxDropdown.tsx';
import getIngredients from '../functions/getIngredients.ts';
import { useNavigate, useParams } from 'react-router-dom';
import BackButton from '../components/BackButton.tsx';
import categories from '../constants/recipeCategories.ts';

const RecipePreviews: React.FC = () => {
  const navigate = useNavigate(); 
  const { category: categoryLink } = useParams<{ category: string }>();
  const category = categories.find(c => c.link === categoryLink);
  const recipes = category?.recipes;

  const [sortBy, setSortBy] = useState<string>("Recipe Name (A-Z)");
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  if (!categoryLink || !recipes) {
    navigate('/not-found');
    return null;
  }

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
    if (sortBy === 'Recipe Name (A-Z)') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'Rating') {
      return b.rating - a.rating;
    } else if (sortBy === "Recipe Name (Z-A)") {
      return b.name.localeCompare(a.name);
    }
    return 0;
  });

  const HeaderBar: React.FC = () => {
    return (
      <div className="fixed top-0 left-0 w-full bg-gray-800 p-3 text-left z-50 flex flex-row items-end">
        <h1 className="text-slate-200 h1 whitespace-nowrap ml-3">{category.name.charAt(0).toUpperCase() + category.name.slice(1)}</h1>
        <HeaderOrganizationOptions />
      </div>
    )
  }

  const HeaderOrganizationOptions: React.FC = () => {
    return (
      <div className='items-center lg:flex flex-row justify-end w-full h-full hidden gap-2'>
        <DropdownCheckboxes options={getIngredients(recipes)} selectedOptions={selectedOptions} setSelectedOptions={setSelectedOptions}/>
        <DropDown selectedOption={sortBy} setSelectedOption={handleSortChange} />
      </div>
    )
  }

  const MobileOrganizationOptions: React.FC = () => {
    return (
      <div className='items-start flex flex-col justify-start w-full h-full lg:hidden mb-8 gap-2'>
        <DropdownCheckboxes options={getIngredients(recipes)} selectedOptions={selectedOptions} setSelectedOptions={setSelectedOptions}/>
        <DropDown selectedOption={sortBy} setSelectedOption={handleSortChange} />
      </div>
    )
  }

  const RecipePreviews: React.FC = () => {

    return (
      <div className='flex flex-col justify-center items-center container'>
        {sortedRecipes.map((recipe, index) => (
          <RecipeCard key={index} category={categoryLink} recipe={recipe}/>
        ))}
      </div>
    )
  }

  return (
    <div className="flex flex-col justify-center lg:px-8 px-4 py-8 h-full">
      <HeaderBar/>
      <div className="mt-16 h-full w-full overflow-y-auto flex flex-col justify-center items-center">
        <div className='flex items-start w-full justify-start mb-4'>
          <BackButton />
        </div>
        <MobileOrganizationOptions />
        <Suspense fallback={<div>Loading recipes...</div>}>
          <RecipePreviews />
        </Suspense>
      </div>
    </div>
  );
};

export default RecipePreviews;
