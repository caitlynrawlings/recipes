import  Ingredient from './Ingredient';
import Rating from './Rating';

type Recipe = {
    name: string;
    picture: string;
    description?: string;
    source?: string;
    rating: Rating;
    ingredients: Ingredient[]
    directions: string[];
    note?: string;
  };

export default Recipe