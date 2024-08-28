import  Ingredient from './Ingredient';
import Rating from './Rating';

type Recipe = {
    name: string;
    picture: string;
    description?: string;
    rating: Rating;
    ingredients: Ingredient[]
    directions: string[];
  };

export default Recipe