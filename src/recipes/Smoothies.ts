import Ingredient, { createIngredient } from '../types/ingredient';
import Recipe from '../types/recipe';

export const bras: Recipe = {
    name: "Bras",
    rating: 7,
    ingredients: [ 
        createIngredient("Yogurt", 1, "cup"), 
        createIngredient("Blueberries", 28, "berries"),
        createIngredient("Raspberries", 16, "berries"),
        createIngredient("Strawberry", 2, "berries"),
    ]
};

export const rab: Recipe = {
    name: "Rab",
    rating: 9,
    ingredients: [ 
        createIngredient("Yogurt", 1, "cup"), 
        createIngredient("Blueberries", 28, "berries"),
        createIngredient("Raspberries", 32, "berries"),
    ]
};