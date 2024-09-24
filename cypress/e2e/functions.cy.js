/// <reference types="cypress" />

import { renderToString } from 'react-dom/server';
import ratingStars from "../../src/functions/ratingStars.tsx"

import getIngredients from '../../src/functions/getIngredients.ts'
import { createIngredient } from '../../src/types/Ingredient';
import { Unit } from '../../src/types/Unit.ts';
import getIngredientsString from '../../src/functions/getIngredientsString';

describe('getIngredientsString', () => {
    it('returns an empty string when no ingredients are provided', () => {
        const result = getIngredientsString([]);
        expect(result).to.equal('');
    });

    it('returns a single ingredient without a comma', () => {
        const result = getIngredientsString(['Sugar']);
        expect(result).to.equal('Sugar');
    });

    it('returns multiple ingredients separated by commas', () => {
        const result = getIngredientsString(['Sugar', 'Salt', 'Pepper']);
        expect(result).to.equal('Sugar, Salt, Pepper');
    });

    it('handles a two-ingredient case correctly', () => {
        const result = getIngredientsString(['Apples', 'Bananas']);
        expect(result).to.equal('Apples, Bananas');
    });

    it('returns the correct string with leading and trailing spaces', () => {
        const result = getIngredientsString(['  Flour ', '  Sugar  ', '  Eggs  ']);
        expect(result).to.equal('  Flour ,   Sugar  ,   Eggs  ');
    });

    it('handles large number of ingredients', () => {
        const ingredients = Array.from({ length: 100 }, (_, i) => `Ingredient ${i + 1}`);
        const result = getIngredientsString(ingredients);
        const expectedString = ingredients.join(', '); // Join all ingredients with a comma
        expect(result).to.equal(expectedString);
    });
});

const emptyRecipes = [];
const oneRecipe = [
    {
        name: "Mac and Cheese",
        picture: "/macAndCheese.jpg",
        alt_text: "A bowl of mac and cheese made from elbow noodles.",
        rating: 3,
        description: "Your classic comfort food!",
        ingredients: [ 
          createIngredient("Pasta", 3.25, new Unit("pound")), 
          createIngredient("Butter", 0.5, new Unit("cup")),
          createIngredient("Flour", 0.25, new Unit("cup")),
          createIngredient("Milk", 4, new Unit("cup")),
          createIngredient("Shredded Cheese", 5, new Unit("cup")),
        ],
        directions: []
      },
]
const oneRecipeRepeatIngredients = [
    {
        name: "Mac and Cheese",
        picture: "/macAndCheese.jpg",
        alt_text: "A bowl of mac and cheese made from elbow noodles.",
        rating: 3,
        description: "Your classic comfort food!",
        ingredients: [ 
          createIngredient("Pasta", 3.25, new Unit("pound")), 
          createIngredient("Butter", 0.5, new Unit("cup")),
          createIngredient("Flour", 0.25, new Unit("cup")),
          createIngredient("Milk", 4, new Unit("cup")),
          createIngredient("Shredded Cheese", 5, new Unit("cup")),
          createIngredient("Butter", 2, new Unit("tablespoon")),
        ],
        directions: []
      },
]
const multipleRecipes = [
    {
        name: "Mac and Cheese",
        picture: "/macAndCheese.jpg",
        alt_text: "A bowl of mac and cheese made from elbow noodles.",
        rating: 3,
        description: "Your classic comfort food!",
        ingredients: [ 
          createIngredient("Pasta", 3.25, new Unit("pound")), 
          createIngredient("Butter", 0.5, new Unit("cup")),
        ],
        directions: []
    },
    {
        name: "Mac and Cheese",
        picture: "/macAndCheese.jpg",
        alt_text: "A bowl of mac and cheese made from elbow noodles.",
        rating: 3,
        description: "Your classic comfort food!",
        ingredients: [ 
          createIngredient("Milk", 3.25, new Unit("pound")), 
          createIngredient("Cheese", 0.5, new Unit("cup")),
        ],
        directions: []
    },
]
const multipleRecipesWithRepeatIngredients = [
    {
        name: "Mac and Cheese",
        picture: "/macAndCheese.jpg",
        alt_text: "A bowl of mac and cheese made from elbow noodles.",
        rating: 3,
        description: "Your classic comfort food!",
        ingredients: [ 
          createIngredient("Pasta", 3.25, new Unit("pound")), 
          createIngredient("Butter", 0.5, new Unit("cup")),
          createIngredient("Flour", 0.5, new Unit("cup")),
        ],
        directions: []
    },
    {
        name: "Mac and Cheese",
        picture: "/macAndCheese.jpg",
        alt_text: "A bowl of mac and cheese made from elbow noodles.",
        rating: 3,
        description: "Your classic comfort food!",
        ingredients: [ 
          createIngredient("Milk", 3.25, new Unit("pound")), 
          createIngredient("Cheese", 0.5, new Unit("cup")),
          createIngredient("Pasta", 3.25, new Unit("pound")), 
          createIngredient("Butter", 0.5, new Unit("cup")),
        ],
        directions: []
    },
]

describe('getIngredients', () => {
    it('returns an empty set when no recipes are provided', () => {
        const result = getIngredients(emptyRecipes);
        expect(result).to.deep.equal(new Set()); // Expect an empty array from the Set
    });


    it('returns unique ingredients from a single recipe', () => {
        const result = getIngredients(oneRecipe);
        expect(result).to.deep.equal(new Set(['Pasta', 'Butter', 'Flour', 'Milk', 'Shredded Cheese']));
    });

    it('returns unique ingredients from recipe with repeat ingredients', () => {
        const result = getIngredients(oneRecipeRepeatIngredients);
        expect(result).to.deep.equal(new Set(['Pasta', 'Butter', 'Flour', 'Milk', 'Shredded Cheese']));
    });

    it('handles unique ingredients across multiple recipes with all unique ingredients', () => {
        const result = getIngredients(multipleRecipes);
        expect(result).to.deep.equal(new Set(['Pasta', 'Butter', 'Cheese', 'Milk']));
    });

    it('handles unique ingredients across multiple recipes with repeat ingredients', () => {
        const result = getIngredients(multipleRecipesWithRepeatIngredients);
        expect(result).to.deep.equal(new Set(['Pasta', 'Butter', 'Cheese', 'Milk', 'Flour']));
    });
});


describe('ratingStars Component', () => {
  
    it('renders correct number of filled stars for a rating of 5', () => {
        // Call the function and get the rendered HTML
        const html = renderToString(ratingStars(5));
    
        // Load the returned HTML into the Cypress DOM
        cy.document().then((doc) => {
          doc.body.innerHTML = html;
    
          // Assert that there are 5 filled stars (using class material-symbols-sharp)
          cy.get('.material-symbols-sharp').should('have.length', 5);
    
          // Assert that there are no empty stars or half stars
          cy.get('.material-symbols-outlined').should('not.exist');
        });
      });
    
      it('renders 3 filled stars, 1 half star, and 1 empty star for a rating of 3.5', () => {
        // Call the function and get the rendered HTML
        const html = renderToString(ratingStars(3.5));
    
        cy.document().then((doc) => {
          doc.body.innerHTML = html;
    
          // Check for 3 filled stars
          cy.get('.material-symbols-sharp').should('have.length', 3);
    
          // Check for 1 half star
          cy.get('.material-symbols-outlined.half').should('have.length', 1);
    
          // Check for 1 empty star
          cy.get('.material-symbols-outlined.empty').should('have.length', 1);
        });
      });

      it('renders 2 filled stars, 0 half star, and 3 empty star for a rating of 2', () => {
        // Call the function and get the rendered HTML
        const html = renderToString(ratingStars(2));
    
        cy.document().then((doc) => {
          doc.body.innerHTML = html;
    
          // Check for 3 filled stars
          cy.get('.material-symbols-sharp').should('have.length', 2);
    
          // Check for 1 half star
          cy.get('.material-symbols-outlined.half').should('have.length', 0);
    
          // Check for 1 empty star
          cy.get('.material-symbols-outlined.empty').should('have.length', 3);
        });
      });

      it('renders 4 empty stars and 1 half star for a rating of 0.5', () => {
        // Call the function and get the rendered HTML
        const html = renderToString(ratingStars(0.5));
    
        cy.document().then((doc) => {
          doc.body.innerHTML = html;
    
          // Check for 3 filled stars
          cy.get('.material-symbols-sharp').should('have.length', 0);
    
          // Check for 1 half star
          cy.get('.material-symbols-outlined.half').should('have.length', 1);
    
          // Check for 1 empty star
          cy.get('.material-symbols-outlined.empty').should('have.length', 4);
        });
      });

      it('renders 5 empty stars for a rating of 0', () => {
        // Call the function and get the rendered HTML
        const html = renderToString(ratingStars(0));
    
        cy.document().then((doc) => {
          doc.body.innerHTML = html;
    
          // Check for 3 filled stars
          cy.get('.material-symbols-sharp').should('have.length', 0);
    
          // Check for 1 half star
          cy.get('.material-symbols-outlined.half').should('have.length', 0);
    
          // Check for 1 empty star
          cy.get('.material-symbols-outlined.empty').should('have.length', 5);
        });
      });
  });
  