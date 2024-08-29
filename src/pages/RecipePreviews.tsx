// src/pages/RecipePreviews.tsx

import React, { useState, useEffect, Suspense } from 'react';
import RecipeCard from '../components/RecipeCard.tsx';
import DropDown from '../components/DropDown.tsx';
import DropdownCheckboxes from '../components/CheckboxDropdown.tsx';
import getIngredients from '../functions/getIngredients.ts';
import { useNavigate, useParams } from 'react-router-dom';
import Recipe from '../types/Recipe.ts';
import BackButton from '../components/BackButton.tsx';

const RecipePreviews: React.FC = () => {
  const { category } = useParams<{ category: string }>();

  const navigate = useNavigate();

  const [recipes, setRecipes] = useState<Recipe[]>([]); // Add appropriate type for recipes
  const [sortBy, setSortBy] = useState<string>("name");
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  useEffect(() => {
    // Dynamically import the recipe file based on the category
    const loadRecipes = async () => {
      try {
        if (category) {
          const recipesModule = await import(`../constants/recipes/${category}Recipes.ts`);
          setRecipes(recipesModule.default);
        }
      } catch (error) {
        console.error("Failed to load recipes:", error);
        // Handle error (e.g., navigate to a 404 page or show an error message)
        navigate('/not-found'); // or set an error state
      }
    };

    loadRecipes();
  }, [category, navigate]);

  if (!category) return null;

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
      <div className="fixed top-0 left-0 w-full bg-gray-800 p-3 text-left z-50 flex flex-row items-end">
        <h1 className="text-slate-200 h1 ml-3">{category.charAt(0).toUpperCase() + category.slice(1)}</h1>
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
        {sortedRecipes.map((recipe, index) => (
          <RecipeCard key={index} recipe={recipe}/>
        ))}
      </div>
    )
  }

  return (
    <div className="flex flex-col justify-center p-10 h-full">
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
