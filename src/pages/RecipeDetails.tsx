import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import recipes from '../recipes/SmoothieRecipes.ts';

const RecipeDetails: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const recipe = recipes.find(r => r.name === name);

  const [servingSize, setServingSize] = useState(1);

  if (!recipe) {
    return <div className="text-center text-2xl text-red-600">Recipe not found</div>;
  }

  const handleServingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newServingSize = parseInt(event.target.value);
    setServingSize(newServingSize > 0 ? newServingSize : 1); // Ensure serving size is at least 1
  };

  return (
    <div className="container flex flex-col bg-cyan-200 mx-auto p-10">
      <h1 className="text-3xl font-bold text-indigo-500 mb-4">{recipe.name}</h1>
      <div className="max-w-4xl mx-auto flex flex-row mb-8">
        {recipe.picture && (
          <div className="md:shrink-0">
            <img className="h-80 w-full object-cover md:h-full md:w-80" src={recipe.picture} alt={recipe.name} />
          </div>
        )}
        <div className="p-8 flex flex-col">
          <p className="text-gray-700 text-lg mb-2">Rating: {recipe.rating} / 10</p>
          {recipe.description && <p className="text-gray-600 mb-4">{recipe.description}</p>}
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="serving-size" className="text-lg font-semibold text-teal-500">Serving Size:</label>
        <input
          id="serving-size"
          type="number"
          value={servingSize}
          onChange={handleServingChange}
          className="ml-2 p-1 border border-gray-400 rounded"
          min="1"
        />
      </div>
      <div>
        <h2 className="text-2xl font-semibold text-teal-500 mt-4 mb-2">Ingredients</h2>
        <ul className="list-disc list-inside mb-4">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index} className="text-gray-800">
              {ingredient.name}: {(ingredient.amount * servingSize).toFixed(2)} {ingredient.unit}
            </li>
          ))}
        </ul>
        {recipe.directions && (
          <>
            <h2 className="text-2xl font-semibold text-teal-500 mt-4 mb-2">Directions</h2>
            <p className="text-gray-800">{recipe.directions}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default RecipeDetails;
