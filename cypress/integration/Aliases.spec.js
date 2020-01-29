/// <reference types="cypress" />

describe('Test of shop Flow',() => {
    beforeEach('Navigating to Page',() => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
    })
    it('Lets make some Aliases',() => {
        cy.get('.search-keyword').as('search').type('Capsicum').wait(1000)
        cy.get('.product').find('.product-name').as('productName').should('include.html', 'Capsicum')
        cy.get('.product').find('button').contains('ADD TO CART').as('addProduct').click()
    
    
        cy.get('@search').type('{selectAll}Carrot').wait(1000)
        cy.get('@productName').should('include.html', 'Carrot')
        cy.get('@addProduct').click()
    })
    it('Check',() => {
        cy.get('@search').type('{selectAll}Carrot').wait(1000)
        cy.get('@productName').should('include.html', 'Carrot')
        cy.get('@addProduct').click()
    })
})