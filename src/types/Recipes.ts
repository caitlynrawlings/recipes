import  Ingredient from './Ingredients';

type Recipe = {
    name: string;
    picture?: string;
    description?: string;
    rating: number;  // number out of 10
    ingredients: Ingredient[]
    directions?: string;
  };

  export default Recipe