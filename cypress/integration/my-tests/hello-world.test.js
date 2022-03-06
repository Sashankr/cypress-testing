/// <reference types="cypress" />

describe('Empty test',()=>{
    it('test desktop', () =>{
        cy.viewport("macbook-13")
        cy.visit('https://codedamn.com/')
        cy.contains('Build projects, practice and learn to code from scratch - without leaving your browser.')
        cy.get('header.cd-morph-dropdown').should('exist');
        cy.get('a').contains('Explore All Roadmaps').should('exist').click();
        cy.get('h1.text-center').should('have.text','Learning Paths');
    })

    it('test mobile', () =>{
        cy.viewport("iphone-xr")
        cy.visit('https://codedamn.com/')
        cy.contains('Build projects, practice and learn to code from scratch - without leaving your browser.')
        cy.get('header.cd-morph-dropdown').should('exist');
        cy.get('a').contains('Explore All Roadmaps').should('exist').click();
        cy.get('h1.text-center').should('have.text','Learning Paths');
    })
})