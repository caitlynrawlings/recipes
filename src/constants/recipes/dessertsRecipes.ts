import { createIngredient } from '../../types/Ingredient.ts';
import Recipe from '../../types/Recipe.ts';
import { Unit } from '../../types/Unit.ts';

const dessertsRecipes: Recipe[] = [
  {
    name: "Brownies",
    picture: "/brownie.jpg",
    rating: 4.5,
    ingredients: [ 
        createIngredient("All-purpose flour", 1, new Unit("cup")),
        createIngredient("Cocoa powder", .75, new Unit("cup")), 
        createIngredient("Sugar", 2, new Unit("cup")), 
        createIngredient("Butter", 1, new Unit("cup")),
        createIngredient("Egg", 3, new Unit("egg")),
        createIngredient("Vanilla extract", 1, new Unit("tablespoon")),
        createIngredient("chocolate", 1.5, new Unit("cup")),
    ],
    directions: [
        "Line 8x8 baking pan with parchment paper", "Melt butter",
        "Whisk sugar and cocoa into the butter", "Whisk in eggs and vanilla", "Chop chocolate if using a bar",
        "Add chocolate and flour and stir until just combined", "Spread batter into pan and bake for 40-45 minutes"
    ]
  },
];

export default dessertsRecipes;
