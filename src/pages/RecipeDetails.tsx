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
      <div className="md:shrink-0">
        <img className="max-h-72 border-cyan-800 border-2 " src={process.env.PUBLIC_URL + recipe.picture} alt={recipe.name} />
      </div>
    )
  }

  const ScaleRecipe: React.FC = () => {
    return (
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
    )
  }

  const RecipeIngredients: React.FC = () => {
    return (
      <>
        <h2 className="font-semibold text-zinc-600 mt-4 mb-2">Ingredients</h2>
        <ul className="list-disc list-inside ml-4 mb-4">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index} className="text-zinc-600">
              {ingredient.name}: {ingredient.unit.getLabel(parseFloat((ingredient.amount * servingSize).toFixed(2)))}
            </li>
          ))}
        </ul>
      </>
      
    )
  }

  const RecipeDirections: React.FC = () => {
    return (
      <>
        <h2 className="font-semibold text-zinc-600 mt-4 mb-2">Directions</h2>
        <ol className="list-decimal list-inside ml-4 mb-4">
          {recipe.directions?.map((direction, index) => (
            <li key={index} className="text-zinc-600">
              {direction}
            </li>
          ))}
        </ol>
      </>
      
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

          {recipe.picture && 
            <RecipePicure/>
          }
          {recipe.description && <p className="text-zinc-600 mb-4">{recipe.description}</p>}
          <ScaleRecipe/>
          <RecipeIngredients/>
          <RecipeDirections/>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
