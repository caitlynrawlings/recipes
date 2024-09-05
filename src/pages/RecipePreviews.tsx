// src/pages/RecipePreviews.tsx

import React, { useState, Suspense, useEffect } from 'react';
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

  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [filteredRecipes, setFilteredRecipes] = useState(category?.recipes || []);
  const [sortedRecipes, setSortedRecipes] = useState(filteredRecipes);
  const [sortData, setSortData] = useState({isOpen: false, wasOpen: false, activeIndex: 0, selectedOption: "Recipe Name (A-Z)"})

  // const filteredRecipes = recipes.filter(recipe => 
  //   !selectedOptions.some(selectedIngredient => recipe.ingredients.some(ingredient => 
  //     selectedIngredient === ingredient.name
  //   ))
  // );

  // // Function to sort recipes based on selected sort criteria
  // const sortedRecipes = [...filteredRecipes].sort((a, b) => {
  //   if (sortData.selectedOption === 'Recipe Name (A-Z)') {
  //     return a.name.localeCompare(b.name);
  //   } else if (sortData.selectedOption === 'Rating') {
  //     return b.rating - a.rating;
  //   } else if (sortData.selectedOption === "Recipe Name (Z-A)") {
  //     return b.name.localeCompare(a.name);
  //   }
  //   return 0;
  // });

  useEffect(() => {
    if (!categoryLink || !recipes) {
      navigate('/not-found');
      return;
    }

    // Update filtered recipes based on selected options
    const newFilteredRecipes = recipes.filter(recipe => 
      !selectedOptions.some(selectedIngredient => recipe.ingredients.some(ingredient => 
        selectedIngredient === ingredient.name
      ))
    );
    setFilteredRecipes(newFilteredRecipes);
  }, [selectedOptions, recipes, categoryLink, navigate]);

  useEffect(() => {
    // Sort filtered recipes based on sort criteria
    const newSortedRecipes = [...filteredRecipes].sort((a, b) => {
      if (sortData.selectedOption === 'Recipe Name (A-Z)') {
        return a.name.localeCompare(b.name);
      } else if (sortData.selectedOption === 'Rating') {
        return b.rating - a.rating;
      } else if (sortData.selectedOption === "Recipe Name (Z-A)") {
        return b.name.localeCompare(a.name);
      }
      return 0;
    });
    setSortedRecipes(newSortedRecipes);
  }, [sortData.selectedOption, filteredRecipes]);

  if (!categoryLink || !recipes) {
    navigate('/not-found');
    return;
  }

  const HeaderBar: React.FC = () => {
    return (
      <header className="fixed top-0 left-0 w-full bg-gray-800 p-3 text-left z-50 flex flex-row items-end">
        <h1 className="text-slate-200 h1 whitespace-nowrap ml-3">{category.name.charAt(0).toUpperCase() + category.name.slice(1)}</h1>
        <HeaderOrganizationOptions />
      </header>
    )
  }
  

  const HeaderOrganizationOptions: React.FC = () => {
    return (
      <div className='items-center lg:flex flex-row justify-end w-full h-full hidden gap-2'>
        <DropdownCheckboxes options={getIngredients(recipes)} selectedOptions={selectedOptions} setSelectedOptions={setSelectedOptions}/>
        <DropDown data={sortData} setData={setSortData} />
      </div>
    )
  }

  const MobileOrganizationOptions: React.FC = () => {
    return (
      <div 
        className='items-start flex flex-col justify-start w-full h-full lg:hidden mb-8 gap-2'
      >
        <DropdownCheckboxes options={getIngredients(recipes)} selectedOptions={selectedOptions} setSelectedOptions={setSelectedOptions}/>
        <DropDown data={sortData} setData={setSortData} />
      </div>
    )
  }

  const RecipePreviews: React.FC = () => {

    return (
      <main aria-label="Recipe previews" className='w-full flex flex-col items-center'>
        <ul className='flex flex-col items-center container w-full'>
          {sortedRecipes.map((recipe, index) => (
            <RecipeCard key={index} category={categoryLink} recipe={recipe}/>
          ))}
        </ul>
      </main>
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
        <RecipePreviews />
      </div>
    </div>
  );
};

export default RecipePreviews;
