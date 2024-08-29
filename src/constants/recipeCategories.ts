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
    description: "Blend your time to make one of these delicious drinks!",
    recipes: smoothieRecipes,
  },
  {
    name: "Dinners",
    link: "dinners",
    picture: "/cat-dinners.jpg",
    description: "Dinners that are easy enough for me to make.",
    recipes: dinnerRecipes,
  },
  {
    name: "Breakfast",
    link: "breakfast",
    picture: "/cat-breakfast.jpg",
    description: "Morning favorites for any time of the day.",
    recipes: breakfastRecipes,
  },
  {
    name: "Deep Fried",
    link: "deepFried",
    picture: "/cat-deepFried.jpg",
    description: "You'll need a pot and a LOT of oil.",
    recipes: deepFriedRecipes,
  },
  {
    name: "Desserts",
    link: "desserts",
    picture: "/cat-desserts.jpg",
    description: "You'll never want to dessert these recipes!",
    recipes: dessertsRecipes,
  },
  {
    name: "Fun from Scratch",
    link: "fromScratch",
    picture: "/cat-fromScratch.jpg",
    description: "Spend hours making something you could get from the store.",
    recipes: fromScratchRecipes,
  },
  {
    name: "In a Mug",
    link: "mugs",
    picture: "/cat-mugs.jpeg",
    description: "Mug-nitudes of deliciousness!",
    recipes: mugsRecipes,
  },
  
];

export default categories;
