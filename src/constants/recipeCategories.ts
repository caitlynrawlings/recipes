import Category from "../types/Category";
import smoothieRecipes from "./recipes/smoothiesRecipes.ts";

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
    recipes: smoothieRecipes,
  },
  {
    name: "Breakfast",
    link: "breakfast",
    picture: "/cat-breakfast.jpg",
    description: "Morning favorites for any time of the day.",
    recipes: smoothieRecipes,
  },
  {
    name: "Deep Fried",
    link: "deepFried",
    picture: "/cat-deepFried.jpg",
    description: "You'll need a pot and a LOT of oil.",
    recipes: smoothieRecipes,
  },
  {
    name: "Desserts",
    link: "desserts",
    picture: "/cat-desserts.jpg",
    description: "You'll never want to dessert these recipes!",
    recipes: smoothieRecipes,
  },
  {
    name: "Fun from Scratch",
    link: "fromSratch",
    picture: "/cat-fromScratch.jpg",
    description: "Spend hours making something you could get from the store.",
    recipes: smoothieRecipes,
  },
  {
    name: "In a Mug",
    link: "mugs",
    picture: "/cat-mugs.jpeg",
    description: "Mug-nitudes of deliciousness!",
    recipes: smoothieRecipes,
  },
  
];

export default categories;
