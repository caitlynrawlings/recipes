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
];

export default fromScratchRecipes;
