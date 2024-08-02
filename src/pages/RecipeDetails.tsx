import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import recipes from '../recipes/SmoothieRecipes.ts';
import { useNavigate } from 'react-router-dom';

const RecipeDetails: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const recipe = recipes.find(r => r.name === name);
  const navigate = useNavigate();

  const [servingSize, setServingSize] = useState(1);

  if (!recipe) {
    return <div className="text-center text-2xl text-red-600">Recipe not found</div>;
  }

  const handleServingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newServingSize = parseInt(event.target.value);
    setServingSize(newServingSize > 0 ? newServingSize : 1); // Ensure serving size is at least 1
  };

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen flex flex-col bg-rose-100 mx-auto">
      <div className="p-4 cursor-pointer" onClick={handleClick}>{"< Back to Browse"}</div>
      <div className="bg-cyan-100 rounded-xl shadow-md p-8 mb-8 mr-56 ml-56 space-y-4">
        <h1 className="text-3xl font-bold text-cyan-800 mb-4">{recipe.name.toUpperCase()}</h1>
        {recipe.picture && (
          <div className="md:shrink-0">
            <img className="h-80 w-full object-cover md:h-full md:w-80" src={recipe.picture} alt={recipe.name} />
          </div>
        )}
        <p className="text-zinc-600">Rating: {recipe.rating} / 10</p>
        {recipe.description && <p className="text-zinc-600 mb-4">{recipe.description}</p>}
        <div className="mb-4">
          <label htmlFor="serving-size" className="text-zinc-600">Scale:</label>
          <input
            id="serving-size"
            type="number"
            value={servingSize}
            onChange={handleServingChange}
            className="w-12 text-center ml-2 p-1 border border-gray-400 rounded"
            min="1"
          />
        </div>
        <div>
          <h2 className="font-semibold text-zinc-600 mt-4 mb-2">Ingredients</h2>
          <ul className="list-disc list-inside ml-4 mb-4">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index} className="text-zinc-600">
                {ingredient.name}: {ingredient.unit.getLabel(parseFloat((ingredient.amount * servingSize).toFixed(2)))}
              </li>
            ))}
          </ul>
          {recipe.directions && (
            <>
              <h2 className="font-semibold text-zinc-600 mt-4 mb-2">Directions</h2>
              <ol className="list-decimal list-inside ml-4 mb-4">
                {recipe.directions.map((direction, index) => (
                  <li key={index} className="text-zinc-600">
                    {direction}
                  </li>
                ))}
              </ol>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
