import { createIngredient } from '../../types/Ingredient.ts';
import Recipe from '../../types/Recipe.ts';
import { Unit } from '../../types/Unit.ts';

const breakfastRecipes: Recipe[] = [
  {
    name: "Butterful Biscuits",
    picture: "/biscuit.jpg",
    rating: 5,
    description: "Flaky, soft, buttery biscuits!",
    ingredients: [ 
        createIngredient("All-purpose flour", 2, new Unit("cup")),
        createIngredient("Baking Powder", 1, new Unit("tablespoon")), 
        createIngredient("Sugar", 1, new Unit("tablespoon")), 
        createIngredient("Butter", 6, new Unit("tablespoon")),
        createIngredient("Milk", 3/4, new Unit("cup")),
    ],
    directions: [
        "Mix flour, sugar, and baking powder together.", "Chop butter into peices and incorperate into dough using hands.",
        "Add milk and incorperate without overworking dough.", "Fully mix dough using hands on a floured surface, folding it over itself.",
        "Flatten dough to a height of around 1 inch.", "Cut circles from dough and place a baking sheet with parchment paper.",
        "Bake for 12-15 minutes at 425°F."
    ],
    source: "https://sugarspunrun.com/easy-homemade-biscuits/#recipe",
  },
  {
    name: "Croissants",
    picture: "/croissants.jpg",
    rating: 4.5,
    description: "A day to two day process that will deliver the freshest croissants you could have",
    ingredients: [ 
      createIngredient("All-purpose flour", 4, new Unit("cup")),
      createIngredient("All-purpose flour", 2, new Unit("tablespoon"), "For butter layer"),
      createIngredient("Butter", 0.25, new Unit("cup")),
      createIngredient("Butter", 1.5, new Unit("cup"), "For butter layer"),
      createIngredient("Sugar", 0.25, new Unit("cup")),
      createIngredient("Yeast", 1, new Unit("tablespoon")),
      createIngredient("Milk", 1.5, new Unit("cup")),
      createIngredient("Milk", 2, new Unit("tablespoon"), "For egg wash"),
      createIngredient("Egg", 1, new Unit("egg"), "For egg wash"),
    ],
    directions: [
      "Make room in fridge for a baking sheet.",
      "Cut butter into fourths.",
      "Combine butter, flour, sugar, and yeast.",
      "Slowly add in milk and then knead dough for 5 minutes.",
      "Place dough on lightly floured baking sheet and gently flatted it. Cover dough and let rest in the fridge for 30 minutes.",
      "Roll dough into 14x10 inch rectangle.",
      "Let dough rest in fridge for 4 hours.",
      "For the butter layer beat the flour and butter together, then smooth into 7x10 inch rectangle and chill for 30 minutes.",
      "Let the butter layer sit at room temperature for a few minutes, then place the butter layer in the middle of the dough, with the 10 inch side of both being parallel.",
      "Fold each end of the dough over the butter layer and wrap the dough around the exposed ends of the butter.",
      "Roll the dough into a 10x20 inch rectangle, then fold the dough lengthwise into thirds. Repeat this once more. Let dough rest in fridge for 30 minutes then repeat rolling and folding.",
      "After the third roll and and fold, let rest in fridge for 4 hours.",
      "Roll dough into a 8x20 inch rectangle. Then cut into 8 4x5 inch rectangles, then cut each rectangle diagonally.",
      "Scretch or roll each rectangle to be 8 inches long, then roll into crossaint shapes.",
      "Cover crossaints and let rest at room temperature for 1 hour, then in the fridge for 1 hour.",
      "Whisk egg wash ingredients together, then brush on crossaints before baking for 20 minutes at 375°F."
    ],
    source: "https://sallysbakingaddiction.com/homemade-croissants/#tasty-recipes-66930",
  },
];

export default breakfastRecipes;