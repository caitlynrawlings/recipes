/// <reference types="cypress" />


describe('check page content', () => {

    it('404 page test', () => {
        cy.visit('http://localhost:3000/recipes#/not-found')

        // Check the first <p> element contains the "404" text
        cy.get('div.flex-col > p.text-5xl')
            .should('contain.text', '404')
            .and('have.class', 'p-2');

        // Check the second <p> element contains the "Not Found" text
        cy.get('div.flex-col > p.text-3xl')
            .should('contain.text', 'Not Found')
            .and('have.class', 'border border-t-1 border-b-0 border-x-0 border-slate-600 p-2');
    })
})