import { createIngredient } from '../../types/Ingredient.ts';
import Recipe from '../../types/Recipe.ts';
import { Unit } from '../../types/Unit.ts';

const smoothieRecipes: Recipe[] = [
  {
    name: "Berry Right",
    picture: "/3-berry-smoothie.jpg",
    rating: 3.5,
    ingredients: [ 
      createIngredient("Yogurt", 1 / 2, new Unit("cup")), 
      createIngredient("Blueberries", 28, new Unit("blueberry")),
      createIngredient("Raspberries", 16, new Unit("raspberry")),
      createIngredient("Strawberry", 2, new Unit("strawberry")),
    ],
    directions: ["Run strawberries under water and slice into a few peices.", "Add all ingredients to blender and blend until smooth."]
  },
  {
    name: "Rab",
    picture: "/berry-smoothie.jpg",
    rating: 4.5,
    ingredients: [ 
      createIngredient("Yogurt", 1/2, new Unit("cup")), 
      createIngredient("Blueberries", 28, new Unit("blueberry"), "Frozen"),
      createIngredient("Raspberries", 32, new Unit("raspberry"), "Frozen"),
    ],
    directions: ["Blend all ingredients until smooth."]
  },
  {
    name: "Nutty",
    picture: "/nutty-smoothie.jpg",
    rating: 2.5,
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
    picture: "/ban-grape-smoothie.jpg",
    rating: 4,
    ingredients: [ 
      createIngredient("Yogurt", 1 / 2, new Unit("cup")), 
      createIngredient("Banana", 1, new Unit("banana")),
      createIngredient("Red Grapes (seedless)", 15, new Unit("grape"), "Frozen"),
    ],
    directions: ["Blend all ingredients until smooth."]
  },
];

export default smoothieRecipes;