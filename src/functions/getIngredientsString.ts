export default function getIngredientsString(ingredients: string[]) : string {
  let str = ""
  ingredients.map((ingredient, index) => (
    index < ingredients.length - 1 ? str += ingredient + ', ' : str += ingredient
  ))
  return str
}