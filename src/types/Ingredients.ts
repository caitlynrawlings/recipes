type Ingredient = {
    name: string;
    amount: number;
    unit: string;
  };

  export default Ingredient

  export const createIngredient = (name: string, amount: number, unit: string): Ingredient => {
    return {
      name,
      amount,
      unit
    };
  };