import { createIngredient } from '../../types/Ingredient.ts';
import Recipe from '../../types/Recipe.ts';
import { Unit } from '../../types/Unit.ts';

const basesAndBasicsRecipes: Recipe[] = [
  {
    name: "Artisan Bread",
    picture: "/bread.jpg",
    alt_text: "Four loaves of artisan bread with a bit of flour on their tops.",
    rating: 4,
    description: "Fill your kitchen with the smell of freshly baked bread!",
    ingredients: [ 
      createIngredient("Bread flour", 3.25, new Unit("cup")), 
      createIngredient("Yeast", 2, new Unit("teaspoon")),
      createIngredient("Sea salt", 2, new Unit("teaspoon")),
      createIngredient("Water", 1.5, new Unit("cup")),
    ],
    directions: ["Heat water to about 70°F.", "Add yeast to water.", "Add about 1/3 of the flour and mix.", 
        "Add the rest of the flour and the salt.", "Knead the dough on a floured surface.", "Cover or wrap dough and let rise for 2-3 hours.",
        "Cut the dough in half and place loaves onto a lightly floured baking sheet.", "Cover and let rise for 45 minutes.",
        "Score the loaves and bake at 475°F for 45 minutes."
    ],
    source: "https://sallysbakingaddiction.com/homemade-artisan-bread/#tasty-recipes-80079",
  },
  {
    name: "Noodles",
    picture: "/noodle.jpg",
    alt_text: "An overhead shot of noodles splayed out on a marble background.",
    rating: 4,
    description: "A batch of tender, silky noodles perfect for your favorite pasta dishes.",
    ingredients: [ 
      createIngredient("All-purpose flour", 1.5, new Unit("cup")), 
      createIngredient("Milk", 2, new Unit("tablespoon")),
      createIngredient("Salt", .75, new Unit("teaspoon")),
      createIngredient("Egg", 2, new Unit("egg")),
    ],
    directions: [
      "Mix eggs, milk, and salt together until smooth.",
      "Add flour in parts until dough is only slightly sticky. Add more if needed.",
      "Knead dough on floured surface for 3-5 minutes.",
      "Let dough rest for 10 minutes.",
      "Roll dough out until is less than 1/4 inch thick.",
      "Use sharp knife or pizza wheel for cutting the noodles into long strips or form them into a different pasta shape.",
      "Cook them in boiling water for 2-3 minutes."
    ],
    source: "https://tastesbetterfromscratch.com/homemade-egg-noodles/",
  },
];

export default basesAndBasicsRecipes;
