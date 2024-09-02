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
        navigate('/not-found');
      }
    };

    loadRecipes();
  }, [category, navigate]);

  const recipe = recipes.find(r => r.name === name);

  if (!recipe) {
    navigate('/not-found');
    return null;
  }

  const handleServingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newServingSize = parseFloat(event.target.value);
    console.log("num: " + newServingSize)
    setServingSize(newServingSize);
  };

  const RecipePicure: React.FC = () => {
    return (
      <div className="py-2">
        <img className="max-h-72 border-slate-400 border-1" src={process.env.PUBLIC_URL + recipe.picture} alt={recipe.name} />
      </div>
    )
  }

  const ScaleRecipe: React.FC = () => {
    return (
      <div className="py-3">
        <label htmlFor="serving-size" className="text-slate-600">Scale:</label>
        <input
          id="serving-size"
          type="number"
          value={servingSize}
          onChange={(e) => handleServingChange(e)}
          className="w-14 text-center ml-2 p-1 outline outline-1 outline-slate-400 text-slate-700 bg-slate-100 rounded-lg"
          min={0}
          max={10}
          step={0.5}
        />
      </div>
    )
  }

  const RecipeIngredients: React.FC = () => {
    return (
      <section>
        <h2 className="font-semibold text-lg text-slate-600 mt-4 mb-2">Ingredients</h2>
        <ul className="list-disc list-inside ml-7">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index} className="text-slate-600 mb-3">
              <span className='font-medium'>
                {ingredient.name}: {ingredient.unit.getLabel(parseFloat((ingredient.amount * servingSize).toFixed(2)))} 
              </span>
              {ingredient.note && <span>&nbsp;&nbsp;{`*${ingredient.note}`}</span>}
            </li>
          ))}
        </ul>
      </section>
      
    )
  }

  const RecipeDirections: React.FC = () => {
    return (
      <section className='pb-4'>
        <h2 className="font-semibold text-lg text-slate-600 mt-2 mb-4">Directions</h2>
        <ol className="list-decimal list-inside ml-4 mb-4">
          {recipe.directions?.map((direction, index) => (
            <li key={index} className="list-none text-slate-600">
              <div className='flex flex-row gap-2 mb-3 items-start'>
                <div className='flex items-center justify-center bg-slate-200 font-semibold h-8 min-w-8 rounded-full'>
                  {index + 1}
                </div>
                <p className='mt-1'>
                  {direction}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>
      
    )
  }

  return (
    <div className="min-h-screen flex flex-col items-center ">
      <div className='flex w-full items-start p-4'>
        <BackButton/>
      </div>

      <div className='px-10 w-full flex justify-center'>
        <main className="bg-slate-100 rounded-none shadow-md p-8 mb-8 space-y-4 flex flex-col container">

          <h1 className="text-h1 font-bold text-cyan-800">{recipe.name.toUpperCase()}</h1>
          {ratingStars(recipe.rating)}
          
          { 
            recipe.description &&
            <p className='text-slate-600 pt-2'>{recipe.description}</p> 
          }

          <RecipePicure/>
          <ScaleRecipe/>
          <RecipeIngredients/>
          <RecipeDirections/>
          
          { 
            recipe.note &&
            <section className='outline outline-2 outline-slate-400 text-slate-700 bg-slate-200 p-2 flex flex-col'>
              <p className='font-semibold'>Notes:</p>
              <p>{recipe.note}</p>
            </section>
          }

          { 
            recipe.source &&
            <div className='flex flex-row font-semibold pt-2'>
              <p className='text-slate-600'>Credits:&nbsp;</p>
              <a href={recipe.source} className='text-cyan-700 underline pb-4'>Recipe Source</a> 
            </div>
          }
        </main>
      </div>
    </div>
  );
};

export default RecipeDetails;
