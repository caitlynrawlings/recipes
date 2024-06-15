import { createIngredient } from '../types/Ingredient.ts';
import Recipe from '../types/Recipe.ts';

const recipes: Recipe[] = [
  {
    name: "Berry Right",
    picture: "/smoothie.png",
    rating: 7,
    ingredients: [ 
      createIngredient("Yogurt", 1, "cup"), 
      createIngredient("Blueberries", 28, "berries"),
      createIngredient("Raspberries", 16, "berries"),
      createIngredient("Strawberry", 2, "berries"),
    ],
    directions: "Blend all ingredients until smooth."
  },
  {
    name: "Rab",
    picture: "/smoothie.png",
    rating: 9,
    ingredients: [ 
      createIngredient("Yogurt", 1, "cup"), 
      createIngredient("Blueberries", 28, "berries"),
      createIngredient("Raspberries", 32, "berries"),
    ],
    directions: "Blend all ingredients until smooth."
  }
];

export default recipes;
