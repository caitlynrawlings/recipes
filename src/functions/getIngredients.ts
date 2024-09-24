import Recipe from "../types/Recipe";

// returns set of ingredients in given recipes array
export default function getIngredients (recipes: Recipe[]) : Set<string> {
    let allIngredients = new Set<string>();
    
    recipes.forEach(recipe => {
        recipe.ingredients.forEach(ingredient => {
            allIngredients.add(ingredient.name);
        });
    });
    
    return allIngredients;
}