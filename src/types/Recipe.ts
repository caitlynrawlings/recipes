import  Ingredient from './Ingredient';
import Rating from './Rating';

type Recipe = {
    name: string;  // name of recipe
    picture: string;  // file name of picture of recipe. picture should be in the public directory
    alt_text: string;  // descriptive alt text for the image. Guidelines: https://accessibility.huit.harvard.edu/describe-content-images
    description: string;  // description of recipe
    rating: Rating;  // rating from 0-5 stars. can be whole or half stars
    ingredients: Ingredient[];  // list of ingredients for the recipe
    directions: string[];  // list of directions
    notes?: string[];  // list of notes about the recipe. for example, alterations from the original or future suggestions
    source?: string;  // link to recipe source. exclude if created recipe yourself
  };

export default Recipe