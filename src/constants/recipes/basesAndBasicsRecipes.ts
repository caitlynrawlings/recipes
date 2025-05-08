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
    directions: [
      "Heat water to about 70°F.", 
      "Add yeast to water.", 
      "Add about 1/3 of the flour and mix.", 
      "Add the rest of the flour and the salt.", 
      "Knead the dough on a floured surface.", 
      "Cover or wrap dough and let rise for 2-3 hours.",
      "Cut the dough in half and place loaves onto a lightly floured baking sheet.", 
      "Cover and let rise for 45 minutes.",
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
  {
    name: "Pizza Crust",
    picture: "/crust.jpg",
    alt_text: "Raw pizza dough in a circle with flour sprinkled on the table around it.",
    rating: 5,
    description: "A pretty good pizza dough if made ahead of time.",
    ingredients: [ 
      createIngredient("Bread flour", 2.5, new Unit("cup")), 
      createIngredient("Yeast", 2.25, new Unit("teaspoon")),
      createIngredient("Sugar", 1, new Unit("teaspoon")),
      createIngredient("Water", 1, new Unit("cup")),
      createIngredient("Oil", 2, new Unit("tablespoon")),
      createIngredient("Salt", 1, new Unit("teaspoon")),
      createIngredient("Garlic seasoning", 2, new Unit("teaspoon"))
    ],
    directions: [
      "Put the yeast in warm water.",
      "Add and mix other ingredients.",
      "Let dough rest overnight for 3 or more days for best taste.",
      "Stretch out dough and put toppings of your choice on.",
      "Bake at 450F for 15-20 minutes."
    ],
    notes: [
      "Try adding sugar on the egde of the pizza crust.",
    ]
  },
  {
    name: "Pita Bread",
    picture: "/pita.png",
    alt_text: "Pita breads in a splayed stack on a kitchen towel.",
    rating: 3.5,
    description: "A simple pita pread.",
    ingredients: [ 
      createIngredient("All purpose flour", 3, new Unit("cup")), 
      createIngredient("Yeast", 2.25, new Unit("teaspoon")),
      createIngredient("Water", 1, new Unit("cup")),
      createIngredient("Salt", 2, new Unit("teaspoon")),
    ],
    directions: [
      "In a large bowl, dissolve yeast in warm water. Stir in salt and enough flour to form a soft dough. Turn onto a floured surface; knead until smooth and elastic, 6-8 minutes. Do not let rise.",
      "Divide dough into 6 pieces; knead each for 1 minute, then roll into a 5-in. circle. Cover and let rise in a warm place until doubled, about 45 minutes. Preheat oven to 500°.",
      "Place upside down on greased baking sheets. Bake until puffed and lightly browned, 5-10 minutes. Remove from pans to wire racks to cool."
    ],
    notes: [
      "I did not get the pocket to form, but they still tasted pretty good.",
      "Worked ok for making a quick flatbread pizza."
    ],
    source: "https://www.tasteofhome.com/recipes/traditional-pita-bread/#RecipeCard"
  },
];

export default basesAndBasicsRecipes;
