import Recipe from "./Recipe";

type Category = {
    name: string;  // name of category
    link: string;  // path appended to root domain when viewing the recipe previews in this category
    picture: string;  // file name of image in stored in public directory that is displayed on this category's category card
    alt_text: string;  // descriptive alt text for the image. Guidelines: https://accessibility.huit.harvard.edu/describe-content-images
    description: string;  // short description of the types of recipes in this category
    recipes: Recipe[];  // list of recipes in this category
};

export default Category