import { createIngredient } from '../../types/Ingredient.ts';
import Recipe from '../../types/Recipe.ts';
import { Unit } from '../../types/Unit.ts';

const breakfastRecipes: Recipe[] = [
  {
    name: "Butterful Biscuits",
    picture: "/biscuit.jpg",
    alt_text: "8 golden brown biscuits next to each other on a wooden table.",
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
    alt_text: "Several croissants stacked in a pile on a wooden board on a table.",
    rating: 4.5,
    description: "A day to two day process that will deliver the freshest croissants you ask for.",
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
  {
    name: "Pancakes",
    picture: "/pancakes.jpg",
    alt_text: "A stack of four pancakes topped with syrup and butter.",
    rating: 4.5,
    description: "Light and fluffly pancakes!",
    ingredients: [ 
        createIngredient("All-purpose flour", 2, new Unit("cup")),
        createIngredient("Sugar", 1/4, new Unit("cup")),
        createIngredient("Baking powder", 4, new Unit("teaspoon")),
        createIngredient("Baking soda", 1/4, new Unit("teaspoon")),
        createIngredient("Salt", 1/2, new Unit("teaspoon")),
        createIngredient("Milk", 1.75, new Unit("cup")),
        createIngredient("Butter", 1/4, new Unit("cup")),
        createIngredient("Vanilla", 2, new Unit("teaspoon")),
        createIngredient("Egg", 1, new Unit("egg")),
    ],
    directions: [
      "Partially melt the butter and let cool.",
      "Mix all ingredients together. Should be thick and creamy in consistency.",
      "Heat oil or butter in pan over medium-low heat.",
      "Cook for about 4 minutes on each side."
    ],
    source: "https://cafedelites.com/best-fluffy-pancakes/#recipe",
  },
  {
    name: "Cashew Muffins",
    picture: "/cashew-muffin.png",
    alt_text: "Baked muffins in a tin.",
    rating: 3,
    description: "A simple muffin with crushed cashews throughout.",
    ingredients: [ 
        createIngredient("All-purpose flour", 2, new Unit("cup")),
        createIngredient("Sugar", 1/2, new Unit("cup")),
        createIngredient("Baking powder", 2, new Unit("teaspoon")),
        createIngredient("Milk", .75, new Unit("cup")),
        createIngredient("Butter", 1/2, new Unit("cup")),
        createIngredient("Eggs", 2, new Unit("egg")),
        createIngredient("Cashews", 1/2, new Unit("cup")),
    ],
    directions: [
      "Preheat the oven to 350°F. Line a muffin pan with paper liners; set aside.",
      "Crush the cashews",
      "Whisk the flour, sugar, baking powder, and salt together.",
      "Add the milk, butter, and eggs and mix until well combined.",
      "Fold in crushed cashews",
      "Bake for 20-25 minutes, or until a toothpick inserted into the center comes out with only a few moist crumbs attached.",
      "Transfer muffins to a wire rack to cool completely."
    ],
    notes: ["Make a dozen"],
    source: "https://www.bakedbyanintrovert.com/basic-muffin-recipe/#recipe",
  },
];

export default breakfastRecipes;
