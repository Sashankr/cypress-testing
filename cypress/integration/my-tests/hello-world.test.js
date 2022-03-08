/// <reference types="cypress" />

describe('Empty test',()=>{
    it('Check if page loads', () =>{
        cy.viewport("macbook-13")
        cy.visit('https://codedamn.com/')
    })

    it.only('Check sign in page error', {scrollBehavior : false} ,  () =>{
        cy.viewport("macbook-13")
        cy.visit('https://codedamn.com/')
        
        // 1.Visit Sign in page
        cy.contains('Sign in').should('exist').click();
        cy.url().then(value => {
            cy.log('current url',value)
        })
        cy.url().should('include','/login');
        cy.contains('Unable to authorize').should('not.exist');

        cy.get('[data-testid = username]').type('admin')
        cy.get('[data-testid = password]').type('admin')
        cy.get('[data-testid=login]').should('exist').click()
        cy.contains('Unable to authorize').should('exist');
    })
})