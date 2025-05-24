import { createIngredient } from '../../types/Ingredient.ts';
import Recipe from '../../types/Recipe.ts';
import { Unit } from '../../types/Unit.ts';

// {
// name: "Lemon Herb Chicken",
// picture: "/lemon-herb-chicken",
// alt_text: "",
// rating: 4,
// description: "Zesty and herby pan-seared chicken",
// ingredients: [ 
//   createIngredient("Boneless skinless chicken", 2, new Unit("breast")),
// ],
// directions: [
//     ""
// ],
// source: "", // optional
// notes: [] // optional
// },
const dinnerRecipes: Recipe[] = [
  {
    name: "Mac and Cheese",
    picture: "/macAndCheese.jpg",
    alt_text: "A bowl of mac and cheese made from elbow noodles.",
    rating: 3,
    description: "Your classic comfort food!",
    ingredients: [ 
      createIngredient("Pasta", 3.25, new Unit("pound")), 
      createIngredient("Butter", 0.5, new Unit("cup")),
      createIngredient("All-purpose flour", 0.25, new Unit("cup")),
      createIngredient("Milk", 4, new Unit("cup")),
      createIngredient("Shredded Cheese", 5, new Unit("cup")),
    ],
    directions: [
        "Cook past al dente, then mix 1/4 of the butter into cooked pasta.",
        "In a large saucepan, melt remaining butter over medium heat. Once melted, whisk in the flour to form a thick paste. Cook and whisk the paste for 1 minute, then slowly whisk in the milk. Bring to a simmer, then whisk in the cheese until smooth. Remove from heat.",
        "Pour the sauce over the pasta and server right away or continue to bake.",
        "To bake: Bake for 10 minutes in 9x13 inch dish covered in aluminum foil at 400°F. Then uncover dish and bake for 10 more minutes."
    ],
    source: "https://sallysbakingaddiction.com/macaroni-and-cheese-recipe/",
  },
  {
    name: "Lemon Herb Chicken",
    picture: "/lemon-chicken.png",
    alt_text: "Chicken with herbs and grill marks on a plate next to lemon slices.",
    rating: 4,
    description: "Zesty and herby pan-seared chicken",
    ingredients: [ 
      createIngredient("Boneless skinless chicken", 2, new Unit("breast")),
      createIngredient("Pepper", 1, new Unit("teaspoon")),
      createIngredient("Salt", 1, new Unit("teaspoon")),
      createIngredient("Garlic and herb seasoning", 1, new Unit("teaspoon")),
      createIngredient("Lemon juice", 4, new Unit("tablespoon")),
      createIngredient("Olive oil", 1, new Unit("tablespoon"))
    ],
    directions: [
        "Rub chicken breasts with dry seasonings",
        "Pour thin layer of oil over skillet and heat on medium-high.",
        "Place the chicken into the pan. Cook on one side over medium-high heat for 5 minutes.",
        "Flip breasts. Cook on the other side over for 5 minutes more minutes or until reaches internal tempurature of 170 deg.",
        "If needed place lid over the pan and lower heat to medium-low and allow chicken to cook all the way through.",
        "Take chicken out and let rest before slicing.",
        "Pour lemon juice into pan used for cooking chicken.",
        "Heat over medium heat and add a pinch of seasonings if wanted.",
        "Scrape little brown bits off bottom of pan and let mixture come to a sizzle for 1-2 minutes.",
        "Pour mixture over chicken as sauce."
    ],
    notes: [
      "I didn't actually measure out the seasonings I used when making this so these are estimates expect for the lemon juice, which I did measure.",
      "I used this chicken in a broccoli chicken pasta."
    ]
  },
];

export default dinnerRecipes;
