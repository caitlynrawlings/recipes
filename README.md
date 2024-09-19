
# Recipes I've Tried

A website to track recipes I've tried, hosted at https://caitlynrawlings.github.io/recipes/. There is information like how much I enjoyed the recipe, the original recipe source, any alterations I made, and more.


## Project Goals

* Design a website that was useful to me using Figma for prototyping. 
* Gain experience using Tailwind CSS.  
* Make up fun names for the smoothies I made.


## Run Locally

Clone the project

```bash
  git clone https://github.com/caitlynrawlings/recipes.git
```

Go to the project directory and install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```


## Running Tests

To run tests, first run the program on locally on port 3000. Then run the command 

```bash
npx cypress open
```

Select 'E2E Testing' then select your prefered browser. Once the Cypress interface opens, select the desired test files from the displayed list, and click on them to run the tests. Cypress will automatically execute the tests and display the results in real-time as the browser interacts with your application.


## Edit for Personal Use

To adjust this website for different recipes and recipe categories, the main files you need to edit are the files in the `./src/constants` directory, as well as adding images to the `./public` directory. 

### Adding a Category

The `recipeCategories.ts` file exports the list of Category objects. 
1. Add an image representing the category to the `./public` directory.
2. Add a Category object to this list. You can view what fields a Category object has and what they consist of in the `./src/types/Category.ts` file.
3. Using the value you chose for the 'link' field of the category, create a new file in the `./src/constants/recipes` directory named `<link field value>Recipes.ts`. It is important that it is named in this format or the navigation to recipes in that category will not work.
4. Copy the following code into the new file.
```ts
import { createIngredient } from '../../types/Ingredient.ts';
import Recipe from '../../types/Recipe.ts';
import { Unit } from '../../types/Unit.ts';

const newCategoryRecipes: Recipe[] = []

export default newCategoryRecipes;
```
5. Rename `newCategoryRecipes` to `<category name>Recipes`, using the appropriate category name.
6. Copy `import <category name>Recipes from "./recipes/<link field value>Recipes.ts";` into `recipeCategories.ts` and edit <category name> and <link field value> appropriately.
7. Ensure that the recipes field of the added Category object is set to the newly imported `<category name>Recipes`.

### Adding a Recipe

Each file in the `./src/constants/recipes` directory exports a list of Recipe objects that represent the recipes in the category associated with that file.
1. Add an image representing the recipe to the `./public` directory.
2. Add a Recipe object to this list. You can view what fields a Recipe object has and what they consist of in the `./src/types/Recipe.ts` file. If the recipe has an ingredient that is measured in a unit that is not already supported, you can add that unit in the `./src/types/Unit.ts` file:
    1. Add ` | '<unit name>'` to definition of type UnitType.
    2. Add a case to the switch statement in the getLabel function following this format:
    ```ts
    case '<unit name>':
        label = amount <= 1 && amount !== 0 ? '<singular unit name>' : '<plural unit name>';
            break;
    ```

### Editing Tests for Category and Recipe changes

File `./cypress/e2e/preview.cy.js` needs to edited with the addition, deletion, or name change of a category. 

#### Deletion
1. Delete the describe for that category's previews page.

#### Addition
1. Import the recipes list at the top of the test file.
1. Add the following test to the file:
```js
describe('<category name> previews page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/#/<category link>')
  })

  it('page heading', () => {
    cy.get('h1').should('have.text', "<category name>")
  })

  it('check recipe cards length', () => {
    cy.get('article')
      .should('have.length', <recipe list>.length)
  })

  it('check recipe card content', () => {
    const sortedRecipes = [...<recipe list>].sort((a, b) => {
      return a.name.localeCompare(b.name);
    });

    cy.get('article h2').each((el, index) => {
      cy.wrap(el).should('have.text', sortedRecipes[index].name);
    });

    cy.get('article p:first').each((el, index) => {
      cy.wrap(el).should('have.text', sortedRecipes[index].description);
    });

    const altTextRegex = new RegExp(<recipe list>.map(recipe => `${recipe.alt_text}$`).join('|'));
    const srcRegex = new RegExp(<recipe list>.map(recipe => `${recipe.picture}$`).join('|'));
    cy.get('article img').each((el) => {
      // check alt text
      cy.wrap(el)
        .should('have.attr', 'alt')
        .then(alttext => {
          expect(alttext).to.match(altTextRegex)
        })

      // check src
      cy.wrap(el)
        .should('have.attr', 'src')
        .then(src => {
          expect(src).to.match(srcRegex)
        })
    });
  })
})
```
3. Edit each `<category name>`, `<category link>`, and `<recipe list>` in the test.


#### Category name change

1. Edit the name of the test to match the new category name.
2. Edit the imported recipes name if needed.
3. Edit the link that is visited in the test.
4. Edit the text that is checked for in the 'page heading' test to match the new category name.

## Acknowledgements

- [Create React App](https://github.com/facebook/create-react-app)  
- [Tailwind background colors HEX codes](https://gist.github.com/guvener/d8952570d5a8be430580b93800519439)
- [Tailwind css](https://tailwindui.com/)
- [GitHub-pages](https://pages.github.com/)
- [Helpful Reddit post](https://www.reddit.com/r/csshelp/comments/ly4vxd/how_can_i_prevent_a_child_from_expanding_its/)
- [Pixel Perfect](https://www.flaticon.com/free-icons/close)


