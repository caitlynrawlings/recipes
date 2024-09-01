import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ratingStars from '../functions/ratingStars.tsx';
import BackButton from '../components/BackButton.tsx';
import Recipe from '../types/Recipe.ts';

const RecipeDetails: React.FC = () => {
  const navigate = useNavigate();

  const { name } = useParams<{ name: string }>();
  const { category } = useParams<{ category: string }>();
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  const [servingSize, setServingSize] = useState(1);

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

  const recipe = recipes.find(r => r.name === name);

  if (!recipe) {
    return <div className="text-center text-2xl text-red-600">Recipe not found</div>;
  }

  const handleServingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newServingSize = parseInt(event.target.value);
    setServingSize(newServingSize > 0 ? newServingSize : 1); // Ensure serving size is at least 1
  };

  const RecipePicure: React.FC = () => {
    return (
      <div className="pb-2">
        <img className="max-h-72 border-slate-500 border-2 " src={process.env.PUBLIC_URL + recipe.picture} alt={recipe.name} />
      </div>
    )
  }

  const ScaleRecipe: React.FC = () => {
    return (
      <div className="py-3">
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
    )
  }

  const RecipeIngredients: React.FC = () => {
    return (
      <>
        <h2 className="font-semibold text-lg text-zinc-600 mt-4 mb-2">Ingredients</h2>
        <ul className="list-disc list-inside ml-7">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index} className="text-zinc-600 mb-3">
              <span className='font-medium'>
                {ingredient.name}: {ingredient.unit.getLabel(parseFloat((ingredient.amount * servingSize).toFixed(2)))} 
              </span>
              {ingredient.note && ` *${ingredient.note}`}
            </li>
          ))}
        </ul>
      </>
      
    )
  }

  const RecipeDirections: React.FC = () => {
    return (
      <div className='pb-6'>
        <h2 className="font-semibold text-lg text-zinc-600 mt-4 mb-4">Directions</h2>
        <ol className="list-decimal list-inside ml-4 mb-4">
          {recipe.directions?.map((direction, index) => (
            <li key={index} className="list-none text-zinc-600">
              <span className='flex flex-row gap-2 mb-3 items-start'>
                <div className='flex items-center justify-center bg-slate-200 font-semibold h-8 min-w-8 rounded-full'>
                  {index + 1}
                </div>
                <span className='mt-1'>
                  {direction}
                </span>
              </span>
            </li>
          ))}
        </ol>
      </div>
      
    )
  }

  return (
    <div className="min-h-screen flex flex-col items-center ">
      <div className='flex w-full items-start p-4'>
        <BackButton/>
      </div>

      <div className='px-10 w-full flex justify-center'>
        <div className="bg-slate-100 rounded-none shadow-md p-8 mb-8 space-y-4 flex flex-col container">

          <h1 className="text-h1 font-bold text-cyan-800">{recipe.name.toUpperCase()}</h1>
          {ratingStars(recipe.rating)}
          
          { 
            recipe.description &&
            <p className='text-zinc-600'>{recipe.description}</p> 
          }

          <RecipePicure/>
          <ScaleRecipe/>
          <RecipeIngredients/>
          <RecipeDirections/>
          
          { 
            recipe.note &&
            <div className='outline outline-2 outline-slate-400 text-slate-700 bg-slate-200 p-2 flex flex-col'>
              <p className='font-semibold'>Notes:</p>
              <p>{recipe.note}</p>
            </div>
          }

          { 
            recipe.source &&
            <div className='flex flex-row font-semibold pt-2'>
              <p className='text-slate-600'>Credits:&nbsp;</p>
              <a href={recipe.source} className='text-cyan-700 underline pb-4'>Recipe Source</a> 
            </div>
          }
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
