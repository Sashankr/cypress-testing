/// <reference types="cypress" />

describe('Empty test',()=>{
    it('test one', () =>{
        cy.visit('https://codedamn.com/')
        cy.contains('Build projects, practice and learn to code from scratch - without leaving your browser.')
    })
})