import  Ingredient from './Ingredient';
import Rating from './Rating';

type Recipe = {
    name: string;
    picture: string;
    alt_text: string;
    description: string;
    rating: Rating;
    ingredients: Ingredient[]
    directions: string[];
    notes?: string[];
    source?: string;
  };

export default Recipe