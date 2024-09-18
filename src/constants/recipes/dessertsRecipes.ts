import { createIngredient } from '../../types/Ingredient.ts';
import Recipe from '../../types/Recipe.ts';
import { Unit } from '../../types/Unit.ts';

const dessertsRecipes: Recipe[] = [
  {
    name: "Brownies",
    picture: "/brownie.jpg",
    alt_text: "A stack of 3 fudgy brownies with a few more scattered around them.",
    description: `Fudgy, moist, chocolatey brownies, that in my grandma's words, are "to die for."`,
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
    description: "A soft bread filled with cinnamon sugar and covered with sweet cream cheese frosting.",
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
  {
    name: "Monkey Bread",
    picture: "/monkey-bread.jpg",
    alt_text: "Monkey bread in bundt cake shape dripping with glaze",
    rating: 3.5,
    description: "Cinnamon-sugary finger food.",
    ingredients: [ 
        createIngredient("All-purpose flour", 4, new Unit("cup")),
        createIngredient("Sugar", 0.25, new Unit("cup")),
        createIngredient("Cornstarch", 2, new Unit("tablespoon")),
        createIngredient("Baking powder", 4, new Unit("teaspoon")),
        createIngredient("Butter", 12, new Unit("tablespoon"), "cold"),
        createIngredient("Milk", 5/4, new Unit("cup")),
        createIngredient("Sugar", 1/2, new Unit("cup"), "For rolling"),
        createIngredient("Cinnamon", 2.5, new Unit("teaspoon"), "For rolling"),
        createIngredient("Butter", 6, new Unit("tablespoon"), "For glaze"),
        createIngredient("Brown sugar", 1/3, new Unit("cup"), "For glaze"),
    ],
    directions: [
      "In a large bowl, whisk together flour, sugar, cornstarch, baking powder, and salt.",
      "Chop butter into small peices and stir into flour mixture.",
      "Add milk and stir until coheesive. May need to use hands.",
      "On a floured surface, flatten dough to 1/2 inch.",
      "Cut dough into peices smaller than 1 inch squared.",
      "Mix the cinnamon and sugar for rolling, then roll the peices in mixture and layer into pan.",
      "In a small saucepan, combine glaze ingredients over medium heat until butter is melted. Bring to boil then remove from heat.",
      "Drizzle glaze over dough.",
      "Bake for 35 minutes at 350°F."
    ],
    notes: [
      "I used a third of the glaze the original recipe used and it was plenty.",
      "I baked the monkey bread in an 8x8 pan and for 8 minutes longer suggested and the middle was still a little undercooked, so bake it in something with smaller width like a bundt pan or cupcake tin."
    ],
    source: "https://sugarspunrun.com/drunken-monkey-bread/#recipe",
  },
  {
    name: "Baked Donut",
    picture: "/baked-donut.jpg",
    alt_text: "A pile of cinnamon sugar donuts.",
    rating: 2.5,
    description: "A baked cake donut.",
    ingredients: [ 
        createIngredient("All-purpose flour", 2.33, new Unit("cup")),
        createIngredient("Sugar", .5, new Unit("cup")),
        createIngredient("Baking powder", 2.5, new Unit("teaspoon")),
        createIngredient("Cinnamon", .5, new Unit("teaspoon")),
        createIngredient("Nutmeg", .25, new Unit("teaspoon")),
        createIngredient("Milk", 1.5, new Unit("cup")),
        createIngredient("Egg", 1, new Unit("egg"), "Room tempurature"),
        createIngredient("Butter", 2, new Unit("tablespoon")),
        createIngredient("Vegetable oil", 2, new Unit("tablespoon")),
        createIngredient("Vanilla", 2, new Unit("teaspoon")),

        createIngredient("Sugar", .5, new Unit("cup"), "For toppings"),
        createIngredient("Cinnamon", 1, new Unit("tablespoon"), "For toppings"),
    ],
    directions: [
      "In a large mixing bowl, whisk together the flour sugar, baking powder, cinnamon, salt, and nutmeg.",
      "Add the buttermilk, egg, butter, vegetable oil, and vanilla.",
      "Pour or spoon batter into pan.",
      "Bake at 400°F for 10 minutes.",
      "Let cool then lightly brush with melted butter and toss in cinnamon sugar."
    ],
    notes: [
      "I had hoped that this recipe would be think enough to pipe onto a baking sheet, but it was not. It was liquid and required a sheet with forms for the batter.",
      "They were decent when fresh, but did not hold well even after just one day.",
      "I did not make the glaze from the original recipe, only used cinnamon sugar as a topping."
    ],
    source: "https://preppykitchen.com/baked-donut-recipe/#recipe",
  },
];

export default dessertsRecipes;
