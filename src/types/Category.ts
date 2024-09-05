import Recipe from "./Recipe";

type Category = {
    name: string;
    link: string;
    picture: string;
    alt_text: string;
    description: string;
    recipes: Recipe[];
};

export default Category