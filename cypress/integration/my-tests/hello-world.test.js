/// <reference types="cypress" />

describe('Empty test',()=>{
    it('Check if page loads', () =>{
        cy.viewport("macbook-13")
        cy.visit('https://codedamn.com/')
    })

    it('Check sign in page', () =>{
        cy.viewport("macbook-13")
        cy.visit('https://codedamn.com/')
        cy.contains('Sign in').should('exist').click();
        cy.contains('Register').should('exist');
        cy.get('[data-testid=login]').should('exist');
        cy.contains('Forgot your password?').should('exist');
        cy.contains('Create one').should('exist');
    })
})