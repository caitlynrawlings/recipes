import { Unit } from "./Unit";

type Ingredient = {
  name: string;
  amount: number;
  unit: Unit;
  note?: string;
};

export default Ingredient


// name of the ingredient
// amount of ingredient used
// unit that igedient is measured in
// note about the ingredient, for example if it for a specific part of a recipe
export const createIngredient = (name: string, amount: number, unit: Unit, note?: string): Ingredient => {
  return {
    name,
    amount,
    unit,
    note
  };
};