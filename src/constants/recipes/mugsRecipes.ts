import { createIngredient } from '../../types/Ingredient.ts';
import Recipe from '../../types/Recipe.ts';
import { Unit } from '../../types/Unit.ts';

const mugsRecipes: Recipe[] = [
  {
    name: "Cake Mix Mug Cake",
    picture: "/mug-cake-mix.jpg",
    rating: 2,
    description: "The quickest way to bake a cake for one!",
    ingredients: [ 
        createIngredient("Cake mix", 6, new Unit("tablespoon")),
        createIngredient("Water", 4, new Unit("tablespoon")), 
        createIngredient("Oil", 2, new Unit("teaspoon")),
    ],
    directions: [
        "Mix ingredients in microwave-safe mug.", "Microwave for 1.5 minutes."
    ],
    source: "https://www.kimscravings.com/cake-mix-mug-cake/",
  },
];

export default mugsRecipes;