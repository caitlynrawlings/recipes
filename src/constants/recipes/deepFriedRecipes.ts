import { createIngredient } from '../../types/Ingredient.ts';
import Recipe from '../../types/Recipe.ts';
import { Unit } from '../../types/Unit.ts';

const deepFriedRecipes: Recipe[] = [
  {
    name: "Mozzerella Sticks",
    picture: "/mozzySticks.jpeg",
    rating: 5,
    ingredients: [ 
      createIngredient("Panko", 1.5, new Unit("cup")), 
      createIngredient("Italian seasoning", 0.5, new Unit("teaspoon")),
      createIngredient("Dried parsley", 0.5, new Unit("teaspoon")),
      createIngredient("Garlic powder", 0.25, new Unit("teaspoon")),
      createIngredient("Pepper", 0.5, new Unit("teaspoon")),
      createIngredient("Salt", 0.25, new Unit("teaspoon")),
      createIngredient("Eggs", 2, new Unit("egg")),
      createIngredient("All-purpose flour", 0.5, new Unit("cup")),
      createIngredient("String cheese", 1, new Unit("pound")),
      createIngredient("Vegetable oil", 4, new Unit("cup")),
    ],
    directions: [
        "Place panko crumbs in a Ziploc bag and use a rolling pin or mallet to crush until you have fine crumbs.",
        "Pour crushed panko into a shallow dish and add Italian seasoning, parsley, garlic powder, pepper, and salt and stir to combine.",
        "In a separate, shallow bowl, crack 2 large eggs and beat with a whisk or the tines of a fork until scrambled.",
        "Pour flour into another bowl",
        "Working with one at a time, dip the stick in the flour and shake off any excess flour. Then dip in the beaten egg and let any excess drip off. Finally, dip in panko crumb mixture, making sure the entire cheese stick is coated with panko.",
        "Fill a medium-sized saucepan 3” deep with vegetable oil and heat to 350°F",
        "Put a few sticks in at a time, turning oil as needed. Cook for about 1 minute or until golden brown",
    ]
  },
];

export default deepFriedRecipes;
