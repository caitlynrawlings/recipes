import { createIngredient } from '../../types/Ingredient.ts';
import Recipe from '../../types/Recipe.ts';
import { Unit } from '../../types/Unit.ts';

const breakfastRecipes: Recipe[] = [
  {
    name: "Butterful Biscuits",
    picture: "/biscuit.jpg",
    rating: 5,
    ingredients: [ 
        createIngredient("All-purpose flour", 2, new Unit("cup")),
        createIngredient("Baking Powder", 1, new Unit("tablespoon")), 
        createIngredient("Sugar", 1, new Unit("tablespoon")), 
        createIngredient("Butter", 6, new Unit("tablespoon")),
        createIngredient("Milk", 3/4, new Unit("cup")),
    ],
    directions: [
        "Mix flour, sugar, and baking powder together", "Chop butter into peices and incorperate into dough using hands",
        "Add milk and incorperate without overworking dough", "Fully mix dough using hands on a floured surface, folding it over itself",
        "Flatten dough to a height of around 1 inch", "Cut circles from dough and place a baking sheet with parchment paper",
        "Bake for 12-15 minutes at 425°F"
    ]
  },
];

export default breakfastRecipes;
