import Recipe from "./Recipe";

type Category = {
    name: string;
    link: string;
    picture: string;
    description: string;
    recipes: Recipe[];
};

export default Category