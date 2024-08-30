import { createIngredient } from '../../types/Ingredient.ts';
import Recipe from '../../types/Recipe.ts';
import { Unit } from '../../types/Unit.ts';

const fromScratchRecipes: Recipe[] = [
  {
    name: "Artisan Bread",
    picture: "/bread.jpg",
    rating: 4,
    ingredients: [ 
      createIngredient("Bread flour", 3.25, new Unit("cup")), 
      createIngredient("Yeast", 2, new Unit("teaspoon")),
      createIngredient("Sea salt", 2, new Unit("teaspoon")),
      createIngredient("Water", 1.5, new Unit("cup")),
    ],
    directions: ["Heat water to about 70°F", "Add yeast to water", "Add about 1/3 of the flour and mix", 
        "Add the rest of the flour and the salt", "Knead the dough on a floured surface", "Cover or wrap dough and let rise for 2-3 hours",
        "Cut the dough in half and place loaves onto a lightly floured baking sheet", "Cover and let rise for 45 minutes",
        "Score the loaves and bake at 475°F for 45 minutes"
    ]
  },
  {
    name: "Noodles",
    picture: "/noodle.jpg",
    rating: 4,
    ingredients: [ 
      createIngredient("All-purpose flour", 1.5, new Unit("cup")), 
      createIngredient("Milk", 2, new Unit("tablespoon")),
      createIngredient("Salt", .75, new Unit("teaspoon")),
      createIngredient("Egg", 2, new Unit("egg")),
    ],
    directions: [
      "Mix eggs, milk, and salt together until smooth",
      "Add flour in parts until dough is only slightly sticky. Add more if needed",
      "Knead dough on floured surface for 3-5 minutes",
      "Let dough rest for 10 minutes",
      "Roll dough out until is less than 1/4 inch thick",
      "Use sharp knife or pizza wheel for cutting the noodles into long strips or form them into a different pasta shape",
      "Cook them in boiling water for 2-3 minutes"
    ]
  },
  {
    name: "Croissants",
    picture: "/croissants.jpg",
    rating: 4.5,
    ingredients: [ 
      createIngredient("All-purpose flour", 4, new Unit("cup")),
      createIngredient("All-purpose flour (for butter layer)", 2, new Unit("cup")),
      createIngredient("Butter", 0.25, new Unit("cup")),
      createIngredient("Butter (for butter layer)", 1.5, new Unit("cup")),
      createIngredient("Sugar", 0.25, new Unit("cup")),
      createIngredient("Yeast", 1, new Unit("tablespoon")),
      createIngredient("Milk", 1.5, new Unit("cup")),
      createIngredient("Milk (for egg wash)", 2, new Unit("tablespoon")),
      createIngredient("Egg (for egg wash)", 1, new Unit("egg")),
    ],
    directions: [
      "Make room in fridge for a baking sheet",
      "Cut butter into fourths",
      "Combine butter, flour, sugar, and yeast",
      "Slowly add in milk and then knead dough for 5 minutes",
      "Place dough on lightly floured baking sheet and gently flatted it. Cover dough and let rest in the fridge for 30 minutes",
      "Roll dough into 14x10 inch rectangle",
      "Let dough rest in fridge for 4 hours",
      "For the butter layer beat the flour and butter together, then smooth into 7x10 inch rectangle and chill for 30 minutes",
      "Let the butter layer sit at room temperature for a few minutes, then place the butter layer in the middle of the dough, with the 10 inch side of both being parallel",
      "Fold each end of the dough over the butter layer and wrap the dough around the exposed ends of the butter",
      "Roll the dough into a 10x20 inch rectangle, then fold the dough lengthwise into thirds. Repeat this once more. Let dough rest in fridge for 30 minutes then repeat rolling and folding",
      "After the third roll and and fold, let rest in fridge for 4 hours",
      "Roll dough into a 8x20 inch rectangle. Then cut into 8 4x5 inch rectangles, then cut each rectangle diagonally",
      "Scretch or roll each rectangle to be 8 inches long, then roll into crossaint shapes",
      "Cover crossaints and let rest at room temperature for 1 hour, then in the fridge for 1 hour",
      "Whisk egg wash ingredients together, then brush on crossaints before baking for 20 minutes at 375°F"
    ]
  },
];

export default fromScratchRecipes;
