import { createIngredient } from '../../types/Ingredient.ts';
import Recipe from '../../types/Recipe.ts';
import { Unit } from '../../types/Unit.ts';

const snacksAndSidesRecipes: Recipe[] = [
  {
    name: "Mozzerella Sticks",
    picture: "/mozzySticks.jpeg",
    alt_text: "Mozzerella sticks in a pile, with one on top broken open and mozzerella stretched between the two halfs. A dish of marinara sauce is next to them.",
    rating: 5,
    description: "Soft, stringy mozzerella covered by a crispy, crunchy shell of bread crumbs.",
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
      createIngredient("Vegetable oil", 4, new Unit("cup"), "For frying"),
    ],
    directions: [
        "Place panko crumbs in a Ziploc bag and use a rolling pin or mallet to crush until you have fine crumbs.",
        "Pour crushed panko into a shallow dish and add Italian seasoning, parsley, garlic powder, pepper, and salt and stir to combine.",
        "In a separate, shallow bowl, crack 2 large eggs and beat with a whisk or the tines of a fork until scrambled.",
        "Pour flour into another bowl.",
        "Working with one at a time, dip the stick in the flour and shake off any excess flour. Then dip in the beaten egg and let any excess drip off. Finally, dip in panko crumb mixture, making sure the entire cheese stick is coated with panko.",
        "Fill a medium-sized saucepan 3” deep with vegetable oil and heat to 350°F.",
        "Put a few sticks in at a time, turning oil as needed. Cook for about 1 minute or until golden brown.",
    ],
    source: "https://sugarspunrun.com/mozzarella-sticks-recipe/#recipe",
  },
  {
    name: "Focaccia Bread",
    picture: "/focaccia.jpg",
    alt_text: "An overhead shot of golden brown focaccia.",
    rating: 2.5,
    description: "A fairly bland focaccia, which may just reflect that it was made poorly.",
    ingredients: [ 
      createIngredient("Oil olive", 1/2, new Unit("cup"), "Extra-virgin"), 
      createIngredient("Garlic", 2, new Unit("clove")),
      createIngredient("Rosemary", 1, new Unit("tablespoon")),
      createIngredient("Thyme", 1, new Unit("tablespoon")),
      createIngredient("Pepper", 1/4, new Unit("teaspoon")),
      createIngredient("Water", 1, new Unit("cup")),
      createIngredient("Yeast", 2.25, new Unit("teaspoon")),
      createIngredient("Maple syrup", 1/4, new Unit("teaspoon"), "Alternatively use sugar or honey"),
      createIngredient("All-purpose flour", 2.5, new Unit("cup")),
    ],
    directions: [
        "Combine olive oil, minced garlic, thyme, rosemary, and black pepper in a cold medium skillet. Place the pan over low heat and cook, stirring occasionally, for 5 to 10 minutes or until aromatic. You are not looking to add color to the garlic. Keep the temperature low and remove the skillet from the heat before the garlic browns. Set aside and allow to cool.",
        "In a large bowl, combine the warm water (110-115°F), yeast, and sugar. Stir a few times, then let it sit for 5 minutes.",
        "Add 1 cup of the flour and 1/4 cup of the infused garlic-olive oil mixture to the bowl with yeast. Stir 3 to 4 times until the flour has moistened. Let sit for another 5 minutes.",
        "Stir in the remaining flour, then knead.",
        "Transfer the dough to a large oiled bowl, cover with a warm, damp towel, and let it rise at room temperature until doubled in size, for 1 to 2 hours.",
        "Use two tablespoons of the remaining garlic-olive oil mixture to oil a 9 x 13-inch rimmed baking sheet",
        "Transfer the dough to the baking sheet, then gently press it into the pan. Use your fingers to dimple the dough, then drizzle the top with the remaining garlic-olive oil mixture.",
        "Let rise for 20-30 minutes while preheating the oven to 450°F.",
        "Bake until golden brown, 15 to 20 minutes, and then let the baked focaccia bread cool completely on a wire rack."
    ],
    source: "https://www.inspiredtaste.net/19313/easy-focaccia-bread-recipe-with-herbs/",
    notes: [
      "I forgot the thyme, which may not have helped the flavor.",
      "I used a tablespoon of crushed rosemary, but probably a teaspoon would have been better.",
      "I don't have good olive oil, so I used 1/4 cup of the oil and 1/4 cup butter instead of the 1/2 cup olive oil the original recipe called for."
    ]
  },
];

export default snacksAndSidesRecipes;
