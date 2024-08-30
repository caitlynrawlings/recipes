import { Unit } from "./Unit";

type Ingredient = {
    name: string;
    amount: number;
    unit: Unit;
  };

  export default Ingredient

  export const createIngredient = (name: string, amount: number, unit: Unit, note?: string,): Ingredient => {
    return {
      name,
      amount,
      unit
    };
  };