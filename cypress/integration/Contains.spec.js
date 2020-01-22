/// <reference types="cypress" />

describe('Lets try assertions!',() =>{

    beforeEach('Navigating to the page',() => {

        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
       
    })

    it('How to confuse cypress', () => {

        cy.get('.search-keyword').type('ca')
        
        cy.wait(1000)
        
        cy.get('.product').find('button').contains('ADD TO CART')
    })
})    