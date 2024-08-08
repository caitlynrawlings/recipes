import { createIngredient } from '../types/Ingredient.ts';
import Recipe from '../types/Recipe.ts';
import { Unit } from '../types/Unit.ts';

const recipes: Recipe[] = [
  {
    name: "Berry Right",
    picture: "/smoothie.png",
    rating: 7,
    ingredients: [ 
      createIngredient("Yogurt", 1, new Unit("cup")), 
      createIngredient("Blueberries", 28, new Unit("blueberry")),
      createIngredient("Raspberries", 16, new Unit("raspberry")),
      createIngredient("Strawberry", 2, new Unit("strawberry")),
    ],
    directions: ["Run strawberries under water and slice into a few peices.", "Add all ingredients to blender and blend until smooth."]
  },
  {
    name: "Rab",
    picture: "/smoothie.png",
    rating: 9,
    ingredients: [ 
      createIngredient("Yogurt", 1, new Unit("cup")), 
      createIngredient("Blueberries", 28, new Unit("blueberry")),
      createIngredient("Raspberries", 32, new Unit("raspberry")),
    ],
    directions: ["Blend all ingredients until smooth."]
  },
  {
    name: "Nutty",
    picture: "/smoothie.png",
    rating: 5,
    ingredients: [ 
      createIngredient("Oatmeal", 1 / 3, new Unit("cup")), 
      createIngredient("Milk", 2 / 3, new Unit("cup")),
      createIngredient("Peanutbutter", 1 / 3, new Unit("cup")),
      createIngredient("Almonds", 1 / 3, new Unit("cup")),
    ],
    directions: ["Chop almonds into peices.", "Add all ingredients to blender and blend until smooth."]
  },
  {
    name: "Bernana",
    picture: "/smoothie.png",
    rating: 8,
    ingredients: [ 
      createIngredient("Yogurt", 1 / 3, new Unit("cup")), 
      createIngredient("Banana", 1, new Unit("banana")),
      createIngredient("Red Grapes (seedless)", 15, new Unit("grape")),
    ],
    directions: ["Blend all ingredients until smooth."]
  },
];

export default recipes;
