import { createIngredient } from '../../types/Ingredient.ts';
import Recipe from '../../types/Recipe.ts';
import { Unit } from '../../types/Unit.ts';

const smoothieRecipes: Recipe[] = [
  {
    name: "Berryful",
    picture: "/3-berry-smoothie.jpg",
    alt_text: "2 purple smoothies with raspberries, blueberries, and strawberries to the side.",
    rating: 3.5,
    description: "A smoothie you'll want to be berried with.",
    ingredients: [ 
      createIngredient("Milk", 1 / 2, new Unit("cup"), "Sub for yogurt for a thicker consistency"), 
      createIngredient("Blueberries", 20, new Unit("blueberry"), "Frozen"),
      createIngredient("Blackberries", 7, new Unit("blackberry"), "Frozen"),
      createIngredient("Raspberries", 7, new Unit("raspberry"), "Frozen"),
      createIngredient("Strawberry", 2, new Unit("strawberry"), "Frozen"),
    ],
    directions: ["Run strawberries under water and slice into a few peices.", "Add all ingredients to blender and blend until smooth."]
  },
  {
    name: "Berry Grape",
    picture: "/berry-grape-smoothie.jpg",
    alt_text: "2 red smoothies with blackberries and grapes to the side.",
    rating: 5,
    description: "Tart and sweet.",
    ingredients: [ 
      createIngredient("Almond milk", 1 / 2, new Unit("cup")), 
      createIngredient("Blackberries", 20, new Unit("blackberry"), "Frozen"),
      createIngredient("Red Grapes (seedless)", 20, new Unit("grape"), "Frozen"),
      createIngredient("Strawberry", 4, new Unit("strawberry"), "Frozen"),
    ],
    directions: ["Run strawberries under water and slice into a few peices.", "Add all ingredients to blender and blend until smooth."]
  },
  {
    name: "Nutty",
    picture: "/nutty-smoothie.jpg",
    alt_text: "A close up of a light brown smoothie being held and topped with oats, seeds, and a swirl of peanut butter.",
    rating: 2.5,
    description: "A hearty blend filled with natural protein.",
    ingredients: [ 
      createIngredient("Oatmeal", 1 / 3, new Unit("cup")), 
      createIngredient("Milk", 2 / 3, new Unit("cup")),
      createIngredient("Peanutbutter", 1 / 3, new Unit("cup")),
      createIngredient("Almonds", 1 / 3, new Unit("cup")),
    ],
    directions: ["Chop almonds into pieces.", "Add all ingredients to blender and blend until smooth."]
  },
  {
    name: "Granana",
    picture: "/ban-grape-smoothie.jpg",
    alt_text: "A light purple smoothie with grapes, bananas, and a cup of milk to the side.",
    rating: 2.5,
    description: "Strong banana flavors come through in this grandnana smoothie.",
    ingredients: [ 
      createIngredient("Milk", 1 / 2, new Unit("cup"), "Sub for yogurt for a thicker consistency"), 
      createIngredient("Banana", 1, new Unit("banana")),
      createIngredient("Red Grapes (seedless)", 15, new Unit("grape"), "Frozen"),
    ],
    directions: ["Break banana into pieces.", "Blend all ingredients until smooth."]
  },
  {
    name: "Pulp Some Strings",
    picture: "/orange-banana-smoothie.jpg",
    alt_text: "2 orange smoothies topped with orange and banana slices. Oranges and bananans are also scattered around.",
    rating: 3,
    description: "A tasty drink if you can handle the peeling of pulp.",
    ingredients: [ 
      createIngredient("Milk", 1 / 2, new Unit("cup"), "Sub for yogurt for a thicker consistency"), 
      createIngredient("Banana", 1, new Unit("banana"), "Frozen"),
      createIngredient("Orange", 15, new Unit("orange")),
    ],
    directions: ["Break banana into pieces.", "Blend all ingredients until smooth."]
  },
];

export default smoothieRecipes;
