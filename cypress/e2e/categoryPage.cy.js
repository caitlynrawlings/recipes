/// <reference types="cypress" />

import categories from "../../src/constants/recipeCategories"

describe('recipe categories page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('page heading', () => {
    cy.get('h1').should('have.text', "Recipes I've Tried")
    cy.get('header p:first').should('have.text', "Just a place for me to track recipes I've tried.")
  })

  it('amount of recipe cards', () => {
    cy.get('article')
      .should('have.length', categories.length)
  })

  it('check category card content', () => {
    cy.get('article h2').each((el, index) => {
      cy.wrap(el).should('have.text', categories[index].name);
    });

    cy.get('article p').each((el, index) => {
      cy.wrap(el).should('have.text', categories[index].description);
    });

    cy.get('article img').each((el, index) => {
      // check alt text
      cy.wrap(el)
        .should('have.attr', 'alt')
        .then(alttext => {
          expect(alttext).to.equal(categories[index].alt_text)
        })
      
      // check image src
      cy.wrap(el)
      .should('have.attr', 'src')
      .then(alttext => {
        expect(alttext).to.match(new RegExp(`${categories[index].picture}$`))
      })
    });
  })
})
