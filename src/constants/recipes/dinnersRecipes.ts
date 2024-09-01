import { createIngredient } from '../../types/Ingredient.ts';
import Recipe from '../../types/Recipe.ts';
import { Unit } from '../../types/Unit.ts';

const dinnerRecipes: Recipe[] = [
  {
    name: "Mac and Cheese",
    picture: "/macAndCheese.jpg",
    rating: 3,
    ingredients: [ 
      createIngredient("Pasta", 3.25, new Unit("pound")), 
      createIngredient("Butter", 0.5, new Unit("cup")),
      createIngredient("All-purpose flour", 0.25, new Unit("cup")),
      createIngredient("Milk", 4, new Unit("cup")),
      createIngredient("Shredded Cheese", 5, new Unit("cup")),
    ],
    directions: [
        "Cook past al dente, then mix 1/4 of the butter into cooked pasta",
        "In a large saucepan, melt remaining butter over medium heat. Once melted, whisk in the flour to form a thick paste. Cook and whisk the paste for 1 minute, then slowly whisk in the milk. Bring to a simmer, then whisk in the cheese until smooth. Remove from heat.",
        "Pour the sauce over the pasta and server right away or continue to bake",
        "To bake: Bake for 10 minutes in 9x13 inch dish covered in aluminum foil at 400°F. Then uncover dish and bake for 10 more minutes"
    ],
    source: "https://sallysbakingaddiction.com/macaroni-and-cheese-recipe/",
  },
];

export default dinnerRecipes;
