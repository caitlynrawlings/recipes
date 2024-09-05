import { createIngredient } from '../../types/Ingredient.ts';
import Recipe from '../../types/Recipe.ts';
import { Unit } from '../../types/Unit.ts';

const dessertsRecipes: Recipe[] = [
  {
    name: "Brownies",
    picture: "/brownie.jpg",
    alt_text: "A stack of 3 fudgy brownies with a few more scattered around them.",
    description: `Fudgy, moist, chocolatey brownies, that in my grandma's words, are "to die for"`,
    rating: 4.5,
    ingredients: [ 
        createIngredient("All-purpose flour", 1, new Unit("cup")),
        createIngredient("Cocoa powder", .75, new Unit("cup")), 
        createIngredient("Sugar", 2, new Unit("cup")), 
        createIngredient("Butter", 1, new Unit("cup")),
        createIngredient("Egg", 3, new Unit("egg")),
        createIngredient("Vanilla extract", 1, new Unit("tablespoon")),
        createIngredient("Chocolate", 1.5, new Unit("cup")),
    ],
    directions: [
        "Line 8x8 baking pan with parchment paper.", "Melt butter.",
        "Whisk sugar and cocoa into the butter.", "Whisk in eggs and vanilla.", "Chop chocolate if using a bar.",
        "Add chocolate and flour and stir until just combined.", "Spread batter into pan and bake for 40-45 minutes at 350°F."
    ],
    notes: [
      "I reduced the sugar from the original recipe.",
      "I used a caramel-filled chocolate bar for 2/3 of the chocolate and semi-sweet chocolate chips for the rest.", 
      "Cooked for 5 minutes longer than the max on the original recipe."
    ],
    source: "https://preppykitchen.com/brownie-recipe/",
  },
  {
    name: "Cinnamon rolls",
    picture: "/cinnamon-roll.jpg",
    alt_text: "An overhead shot of frosted cinnamon rolls still stuck together from baking.",
    rating: 4,
    description: "A soft bread filled with cinnamon sugar and covered with sweet cream cheese frosting",
    ingredients: [ 
        createIngredient("Bread flour", 3, new Unit("cup")),
        createIngredient("Milk", 0.75, new Unit("cup"), "Warmed to 110°F"),
        createIngredient("Yeast", 2.25, new Unit("teaspoon")),
        createIngredient("Sugar", 0.25, new Unit("cup")),
        createIngredient("Egg", 2, new Unit("egg")),
        createIngredient("Butter", 1/4, new Unit("cup")),
        createIngredient("Brown sugar", 2/3, new Unit("cup"), "For filling"),
        createIngredient("Cinnamon", 1.5, new Unit("tablespoon"), "For filling"),
        createIngredient("Butter", .25, new Unit("cup"), "For filling (softened)"),
        createIngredient("Cream cheese", 4, new Unit("ounce"), "For frosting (softened)"),
        createIngredient("Butter", 3, new Unit("tablespoon"), "For frosting (softened)"),
        createIngredient("Powdered sugar", 3/4, new Unit("cup"), "For frosting"),
        createIngredient("Vanilla extract", 1/2, new Unit("teaspoon"), "For frosting"),
    ],
    directions: [
        "Add yeast to warm milk.",
        "Add sugar, eggs, and melted butter and combine well.",
        "Stir in flour then knead dough for 8 minutes.",
        "Let dough rest covered in oiled bowl for 1 hour until doubled in size.",
        "Roll dough into 14x9 inch rectangle.",
        "Spread softened filling butter over dough leaving a quarter inch on one of the short sides.",
        "Mix fill brown sugar and cinnamon and sprinkle over dough.",
        "Tightly roll dough starting on short side.",
        "Cut roll into 9 sections.",
        "Place rolls into a 9x9 parchment paper lined baking dish.",
        "Bake for 25-30 minutes at 350°F.",
        "Beat frosting ingredients together on frost rolls after letting them cool for 5-10 minutes."
    ],
    source: "https://www.ambitiouskitchen.com/best-cinnamon-rolls/",
  },
];

export default dessertsRecipes;
