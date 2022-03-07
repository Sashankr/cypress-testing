/// <reference types="cypress" />

describe('Empty test',()=>{
    it('Check if page loads', () =>{
        cy.viewport("macbook-13")
        cy.visit('https://codedamn.com/')
    })

    it('Check sign in page', () =>{
        cy.viewport("macbook-13")
        cy.visit('https://codedamn.com/')
        
        // 1.Visit Sign in page
        cy.contains('Sign in').should('exist').click();
        cy.url().should('include','/login');
        
        // //2. Checking forgot password url
        // cy.get('a').contains('Forgot your password?').should('exist').click();
        // // cy.url().should('include','/password-reset');
        // // cy.go('back');


        //3. Checking register page url

        cy.contains('Create one').should('exist').click();
        cy.url().should('include','/register');
        cy.go('back');

    })
})