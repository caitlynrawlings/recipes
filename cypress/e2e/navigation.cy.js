/// <reference types="cypress" />

import categories from "../../src/constants/recipeCategories"
import breakfastRecipes from "../../src/constants/recipes/breakfastRecipes"
import dessertsRecipes from "../../src/constants/recipes/dessertsRecipes"


describe('check renavigates to not found', () => {

    it('not valid category link 1', () => {
        cy.visit('http://localhost:3000/recipes#/not-valid-category')

        cy.url().should('eq', 'http://localhost:3000/recipes#/not-found');
    })

    it('not valid category link 2', () => {
        cy.visit('http://localhost:3000/recipes#/smoothie')

        cy.url().should('eq', 'http://localhost:3000/recipes#/not-found');
    })

    it('not valid recipe link 1', () => {
        cy.visit('http://localhost:3000/recipes#/smoothies/not-valid-recipe')

        cy.url().should('eq', 'http://localhost:3000/recipes#/not-found');
    })

    it('not valid recipe link 2', () => {
        // recipe that with wrong category
        cy.visit('http://localhost:3000/recipes#/smoothies/Butterful%20Biscuits')

        cy.url().should('eq', 'http://localhost:3000/recipes#/not-found');
    })
})

describe('navigate to category pages from home page', () => {

    it('click all category names', () => {

        for (let i = 0; i < categories.length; i++) {
            cy.visit('http://localhost:3000/recipes#/')
            cy.get('article h2').eq(i).click();
            cy.url().should('eq', `http://localhost:3000/recipes#/${categories[i].link}`);
        }
    })

    it('click all category names', () => {

        for (let i = 0; i < categories.length; i++) {
            cy.visit('http://localhost:3000/recipes#/')
            cy.get('article img').eq(i).click();
            cy.url().should('eq', `http://localhost:3000/recipes#/${categories[i].link}`);
        }
    })
})

describe('navigate to recipe details page from categories page', () => {

    it('click all recipe names in breakfast', () => {
        const sortedRecipes = [...breakfastRecipes].sort((a, b) => {
            return a.name.localeCompare(b.name);
        })

        for (let i = 0; i < sortedRecipes.length; i++) {
            cy.visit('http://localhost:3000/recipes#/breakfast')
            cy.get('article h2').eq(i).click();
            cy.url().should('eq', encodeURI(`http://localhost:3000/recipes#/breakfast/${sortedRecipes[i].name}`));
        }
    })

    it('click all recipe names in desserts', () => {
        const sortedRecipes = [...dessertsRecipes].sort((a, b) => {
            return a.name.localeCompare(b.name);
        })

        for (let i = 0; i < sortedRecipes.length; i++) {
            cy.visit('http://localhost:3000/recipes#/desserts')
            cy.get('article h2').eq(i).click();
            cy.url().should('eq', encodeURI(`http://localhost:3000/recipes#/desserts/${sortedRecipes[i].name}`));
        }
    })
})

describe('back button', () => {

    it('back to home from category page', () => {

        for (let i = 0; i < categories.length; i++) {
            cy.visit(`http://localhost:3000/recipes#/${categories[i].link}`)
            cy.get('#back').click();
            cy.url().should('eq', `http://localhost:3000/recipes#/`);
        }
    })

    it('back to desserts category page from recipe details page ', () => {

        for (let i = 0; i < dessertsRecipes.length; i++) {
            cy.visit(encodeURI(`http://localhost:3000/recipes#/desserts/${dessertsRecipes[i].name}`))
            cy.get('#back').click();
            cy.url().should('eq', `http://localhost:3000/recipes#/desserts`);
        }
    })

    it('back to breakfast category page from recipe details page ', () => {

        for (let i = 0; i < breakfastRecipes.length; i++) {
            cy.visit(encodeURI(`http://localhost:3000/recipes#/breakfast/${breakfastRecipes[i].name}`))
            cy.get('#back').click();
            cy.url().should('eq', `http://localhost:3000/recipes#/breakfast`);
        }
    })
})