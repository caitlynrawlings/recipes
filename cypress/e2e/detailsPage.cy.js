/// <reference types="cypress" />

import smoothieRecipes from "../../src/constants/recipes/smoothiesRecipes.ts"
import basesAndBasicsRecipes from "../../src/constants/recipes/basesAndBasicsRecipes.ts"
import dessertsRecipes from "../../src/constants/recipes/dessertsRecipes.ts"


describe('check page content', () => {

    // check recipes that has neither the optional notes or source field
    it('berry grape recipe', () => {
        cy.visit('http://localhost:3000/recipes#/smoothies/Berry%20Grape')

        const recipe = smoothieRecipes.find(recipe => recipe.name.toLowerCase() === "berry grape");

        checkDetailsPageRequiredContent(recipe)
        checkSourceSection(recipe, false);
        checkNotesSection(recipe, false);
    })

    it('berryful recipe', () => {
        cy.visit('http://localhost:3000/recipes#/smoothies/Berryful')

        const recipe = smoothieRecipes.find(recipe => recipe.name.toLowerCase() === "berryful");

        checkDetailsPageRequiredContent(recipe)
        checkSourceSection(recipe, false);
        checkNotesSection(recipe, false);
    })

    // check recipes with the source field, but no notes
    it('noodles recipe', () => {
        cy.visit('http://localhost:3000/recipes#/basesAndBasics/Noodles')

        const recipe = basesAndBasicsRecipes.find(recipe => recipe.name.toLowerCase() === "noodles");

        checkDetailsPageRequiredContent(recipe);
        checkSourceSection(recipe, true);
        checkNotesSection(recipe, false);
    })

    it('artisan bread recipe', () => {
        cy.visit('http://localhost:3000/recipes#/basesAndBasics/Artisan%20Bread')

        const recipe = basesAndBasicsRecipes.find(recipe => recipe.name.toLowerCase() === "artisan bread");

        checkDetailsPageRequiredContent(recipe);
        checkSourceSection(recipe, true);
        checkNotesSection(recipe, false);
    })

    // check recipes with the source field and notes
    it('caramel molasses cookies recipe', () => {
        cy.visit('http://localhost:3000/recipes#/desserts/Caramel%20Molasses%20Cookies')

        const recipe = dessertsRecipes.find(recipe => recipe.name.toLowerCase() === "caramel molasses cookies");

        checkDetailsPageRequiredContent(recipe);
        checkSourceSection(recipe, true);
        checkNotesSection(recipe, true);
    })

    it('baked donut recipe', () => {
        cy.visit('http://localhost:3000/recipes#/desserts/Baked%20Donut')

        const recipe = dessertsRecipes.find(recipe => recipe.name.toLowerCase() === "baked donut");

        checkDetailsPageRequiredContent(recipe);
        checkSourceSection(recipe, true);
        checkNotesSection(recipe, true);
    })

    // check recipes with the notes but no source
    it('caramel molasses cookies recipe', () => {
        cy.visit('http://localhost:3000/recipes#/basesAndBasics/Pizza%20Crust')

        const recipe = basesAndBasicsRecipes.find(recipe => recipe.name.toLowerCase() === "pizza crust");

        checkDetailsPageRequiredContent(recipe);
        checkSourceSection(recipe, false);
        checkNotesSection(recipe, true);
    })
})

describe('check recipe scaling functionality', () => {
    const recipe = dessertsRecipes.find(recipe => recipe.name.toLowerCase() === "caramel molasses cookies");

    beforeEach(() => {
        cy.visit('http://localhost:3000/recipes#/desserts/Caramel%20Molasses%20Cookies')
    })

    it('check initial state', () => {
        // check initial value and attributes
        cy.get('#serving-size')
        .should('exist')
        .and('have.value', '1')
        .and('have.attr', 'type', 'number')
        .and('have.attr', 'min', '0')
        .and('have.attr', 'max', '10')
        .and('have.attr', 'step', '0.5')
        .and('have.class', 'w-14 text-center ml-2 p-1 outline outline-1 outline-slate-400 text-slate-700 bg-slate-100 rounded-lg');
    })

    it('check scales ingredients x2', () => {
        cy.get('#serving-size').and('have.value', '1')
        
        cy.get('#serving-size').type('{backspace}')
        cy.get('#serving-size').type('2')

        cy.get('#serving-size').and('have.value', '2')

        checkIngredients(recipe, 2)
    })

    it('check scales ingredients x3', () => {
        cy.get('#serving-size').and('have.value', '1')
        
        cy.get('#serving-size').type('{backspace}')
        cy.get('#serving-size').type('3')

        cy.get('#serving-size').and('have.value', '3')

        checkIngredients(recipe, 3)
    })

    it('check scales ingredients x0.5', () => {
        cy.get('#serving-size').and('have.value', '1')
        
        cy.get('#serving-size').type('{backspace}')
        cy.get('#serving-size').type('0')
        cy.get('#serving-size').type('.5')

        cy.get('#serving-size').and('have.value', '0.5')

        checkIngredients(recipe, 0.5)
    })

    it('check scales ingredients x0.5', () => {
        cy.get('#serving-size').and('have.value', '1')
        
        cy.get('#serving-size').type('{backspace}')
        cy.get('#serving-size').type('0')
        cy.get('#serving-size').type('.5')

        cy.get('#serving-size').and('have.value', '0.5')

        checkIngredients(recipe, 0.5)
    })
})


// ---------- Helper Functions ----------

// checks for back button on the page
// check for recipe information like name, description,
// rating, photo, scaling input, ingredients, and directions
function checkDetailsPageRequiredContent(recipe) {
    // Check for back button
    cy.get('#back').should('have.text', '< Back to Browse')

    // check recipe name
    cy.get('h1').should('have.text', recipe.name.toUpperCase());

    // check recipe rating
    cy.get('div[role="img"]')
        .should('have.attr', 'aria-label')
        .then(ariaLabel => {
            expect(ariaLabel).to.equal(`${recipe.rating} out of 5 stars`)
        })

    // check recipe description
    cy.get('p:first').should('have.text', recipe.description);

    // check recipe image
    cy.get('img')
        .should('have.attr', 'alt')
        .then(alttext => {
            expect(alttext).to.equal(recipe.alt_text)
        })
    cy.get('img')
        .should('have.attr', 'src')
        .then(src => {
            expect(src).to.equal('/recipes' + recipe.picture)
        })
    
    // check recipe scaling input
    cy.get('label[for="serving-size"]')
        .should('exist')
        .and('have.text', 'Scale by factor of:');
    cy.get('#serving-size').should('exist');

    // check recipe ingredients
    cy.get('h2:first').should('have.text', 'Ingredients')

    // Find the <ul> list by its class
    cy.get('ul.list-disc').should('exist');

    // Assert the correct number of <li> elements
    cy.get('ul.list-disc > li')
    .should('have.length', recipe.ingredients.length);  // Ensure the number of <li> matches the number of ingredients

    checkIngredients(recipe, 1);

    // check recipe directions
    cy.get('h2').eq(1).should('have.text', 'Directions')

    // Find the <ol> list by its class
    cy.get('ol.list-decimal').should('exist'); // Ensure the <ol> exists

    // Assert the correct number of <li> elements
    cy.get('ol.list-decimal > li')
    .should('have.length', recipe.directions.length);  // Check the number of steps matches the directions array

    // Check each <li> element for correct content (step number and direction)
    recipe.directions.forEach((direction, index) => {
    // Check that the step number is correctly displayed inside the div
    cy.get('ol.list-decimal > li').eq(index).within(() => {
        cy.get('div').first()
        .should('contain.text', (index + 1).toString());  // Check the step number

        // Check that the direction text is rendered correctly inside the <p> tag
        cy.get('p')
        .should('contain.text', direction);
    });
    });
}

// rceipe: Recipe - the recipe being checked
// scaleFactor: number - amount the recipe is supposed to be scaled by
function checkIngredients(recipe, scaleFactor) {
    // Check each <li> element for correct content
    recipe.ingredients.forEach((ingredient, index) => {
        const scaledAmount = parseFloat((ingredient.amount * scaleFactor).toFixed(2));
  
        // Check that the ingredient name and scaled amount are correctly displayed
        cy.get('ul.list-disc > li').eq(index)
          .should('contain.text', `${ingredient.name}: ${ingredient.unit.getLabel(scaledAmount)}`);
  
        // If the ingredient has a note, check for its existence
        if (ingredient.note) {
          cy.get('ul.list-disc > li').eq(index)
            .should('contain.text', `*${ingredient.note}`);
        }
    });
}

// rceipe: Recipe - the recipe being checked
// shouldHave: boolean - if the recipe should have this section
function checkSourceSection(recipe, shouldHave) {
    if (!shouldHave) {
        // Check that the <div> with the flex-row class exists
        cy.get('div.flex.flex-row.font-semibold.pt-2')
        .should('not.exist');
        return;
    }

    // Check that the <div> with the flex-row class exists
    cy.get('div.flex.flex-row.font-semibold.pt-2')
    .should('exist');

    // Check the <p> element contains the "Credits:" text
    cy.get('div.flex.flex-row.font-semibold.pt-2 > p')
        .should('contain.text', 'Credits:')
        .and('have.class', 'text-slate-600');

    // Check the <a> element exists, contains the correct href and text
    cy.get('div.flex.flex-row.font-semibold.pt-2 > a')
        .should('have.attr', 'href', recipe.source)  // Check the href attribute
        .and('contain.text', 'Recipe Source')
        .and('have.class', 'text-cyan-700 underline pb-4');
}

// rceipe: Recipe - the recipe being checked
// shouldHave: boolean - if the recipe should have this section
function checkNotesSection(recipe, shouldHave) {
    if (!shouldHave) {
        cy.get('section.outline')
        .should('not.exist')
        return;
    }

    // Check that the <section> with the outline class exists
    cy.get('section.outline')
      .should('exist')
      .and('have.class', 'outline-2 outline-slate-400 text-slate-700 bg-slate-200 p-2 flex flex-col');

    // Check for the "Notes:" <p> element
    cy.get('section.outline > p')
      .should('contain.text', 'Notes:')
      .and('have.class', 'font-semibold');

    // Check the <ul> exists and contains the correct number of <li> notes
    cy.get('section.outline ul > li')
      .should('have.length', recipe.notes.length);

    // Check each note's text is displayed correctly
    recipe.notes.forEach((note, index) => {
      cy.get('section.outline ul > li').eq(index)
        .should('contain.text', note);
    });
}
