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
  {
    name: "Lemon Chicken Broccoli Pasta",
    picture: "/lemon-chicken-broccoli-pasta.png",
    alt_text: "Bird's eye view of broccoli chicken pasta in a pot.",
    rating: 4,
    description: "A light, refreshing pasta",
    ingredients: [ 
      createIngredient("Pasta", 8, new Unit("ounce")),
      createIngredient("Broccoli chopped", 3, new Unit("cup")),
      createIngredient("Seared chicken breasts", 2, new Unit("breast")),
      createIngredient("Pepper", 2, new Unit("tablespoon")),
      createIngredient("Salt", 2, new Unit("tablespoon")),
      createIngredient("Garlic and herb seasoning", 1, new Unit("tablespoon")),
      createIngredient("Lemon juice", 3, new Unit("tablespoon")),
      createIngredient("Olive oil", 4, new Unit("tablespoon")),
      createIngredient("Parsley", 1, new Unit("tablespoon"))
    ],
    directions: [
        "Fill a large pot with water and put on heat until boiling. You will want at least twice as much water as would be nessecary for the pasta to cook the broccoli.",
        "While waiting for water to boil chop the broccoli into chunks about as big as the pasta noodles.",
        "While waiting for water to boil, chop the chicken into chunks about as big as the pasta noodles.",
        "When water is boiling, dump in the pasta noodles. The broccoli with go into the boiling water 5 minutes before the pasta is done (so if using fresh pasta, the broccoli with go in first).",
        "While the pasta is cooking, put lemon juice, olive oil, and seasonings into a pan and heat on low heat.",
        "When the pasta and broccoli are done cooking, add in the chopped chicken and stir until chicken has been warmed up.",
        "Stir in the lemon sauce.",
        "Add extra seasonings to taste."
    ],
    notes: [
      "I didn't actually measure out the seasonings I used when making this so these are estimates expect for the lemon juice and olive oil, which I did measure.",
      "I used Lemon Herb Chicken recipe as the chicken in this.",
      "Pairs lovely with Roasted Garlic Carrots as a side."
    ]
  },
];

export default dinnerRecipes;
