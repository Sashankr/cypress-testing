/// <reference types="cypress" />

describe('Basic tests',()=>{

    before(()=>{
        cy.log('before ran')
    })

    beforeEach(()=>{
        cy.viewport("macbook-13")
        cy.visit('https://codedamn.com/')
        cy.then(()=>{
            window.localStorage.setItem('login',true)
        })
    })


    it('Check sign in page error', {scrollBehavior : false} ,  () =>{
        cy.viewport("macbook-13")
        cy.visit('https://codedamn.com/')
        
        // 1.Visit Sign in page
        cy.contains('Sign in').should('exist').click();
        cy.url().then(value => {
            cy.log('current url',value)
        })
        cy.url().should('include','/login');
        cy.contains('Unable to authorize', {timeout : 6 * 1000}).should('not.exist');

        cy.get('[data-testid = username]').type('admin')
        cy.get('[data-testid = password]').type('admin')
        // cy.type('{enter}')
        // cy.contains('Unable to authorize').should('exist');
        cy.get('[data-testid=google-oauth-btn]',{timeout : 5 * 1000}).should('exist').rightclick()
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
        cy.get('[data-testid=login]').should('exist').rightclick()
        // cy.contains('Unable to authorize').should('exist');
        cy.get('body').rightclick()
    })

    afterEach(()=>{
        cy.log('After each ran')
    })

    after(()=>{
        cy.log('Final run')
    })
})