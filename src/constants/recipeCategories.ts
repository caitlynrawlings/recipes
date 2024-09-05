import Category from "../types/Category";
import smoothieRecipes from "./recipes/smoothiesRecipes.ts";
import fromScratchRecipes from "./recipes/fromScratchRecipes.ts";
import dinnerRecipes from "./recipes/dinnersRecipes.ts";
import breakfastRecipes from "./recipes/breakfastRecipes.ts";
import deepFriedRecipes from "./recipes/deepFriedRecipes.ts";
import dessertsRecipes from "./recipes/dessertsRecipes.ts";
import mugsRecipes from "./recipes/mugsRecipes.ts";

const categories: Category[] = [
  {
    name: "Smoothies",
    link: "smoothies",
    picture: "/cat-smoothies.jpg",
    alt_text: "A purple, pink, and light pink smoothie topped in blackberries, raspberries and strawberries respectively.",
    description: "Blend your time to make one of these delicious drinks!",
    recipes: smoothieRecipes,
  },
  {
    name: "Dinners",
    link: "dinners",
    picture: "/cat-dinners.jpg",
    alt_text: "A dish of orange chicken and noodles.",
    description: "Dinners that are easy enough for me to make.",
    recipes: dinnerRecipes,
  },
  {
    name: "Breakfast",
    link: "breakfast",
    picture: "/cat-breakfast.jpg",
    alt_text: "A dish of pancakes topped with butter and syrup, bacon, and eggs.",
    description: "Morning favorites for any time of the day.",
    recipes: breakfastRecipes,
  },
  {
    name: "Deep Fried",
    link: "deepFried",
    picture: "/cat-deepFried.jpg",
    alt_text: "6 clear bottles of yellow-orange oil. All of different heights and shapes.",
    description: "You'll need a pot and a LOT of oil.",
    recipes: deepFriedRecipes,
  },
  {
    name: "Desserts",
    link: "desserts",
    picture: "/cat-desserts.jpg",
    alt_text: "An overhead of an many desserts, including cupcakes, cakes, and pies.",
    description: "You'll never want to dessert these recipes!",
    recipes: dessertsRecipes,
  },
  {
    name: "Fun from Scratch",
    link: "fromScratch",
    picture: "/cat-fromScratch.jpg",
    alt_text: "Bread dough on a table dusted in flour with a person's hands on either wide of the dough.",
    description: "Spend hours making something you could get from the store.",
    recipes: fromScratchRecipes,
  },
  {
    name: "In a Mug",
    link: "mugs",
    picture: "/cat-mugs.jpeg",
    alt_text: "2 white mugs with chocolate cake coming out from the top.",
    description: "Mug-nitudes of deliciousness!",
    recipes: mugsRecipes,
  },
  
];

export default categories;
