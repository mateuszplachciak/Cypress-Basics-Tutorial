/// <reference types="cypress" />


describe('Testing vegetable fake shop',() => {

    beforeEach('Navigating to the page',() => {

        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
       
    })

    it('Tests which pass', () => {

        cy.get(':nth-child(1) > .product-action > button').click()

        cy.get('.search-keyword').type('Cashews')
    
        cy.wait(1000)
    
        cy.get('.product').find('button').click()

    })

    it('Tests with bugs', () => {

        cy.get(':nth-child(1) > .product-action > button').click()

        cy.get('.search-keyword').type('Cashewss')
    
        cy.wait(1000)
    
        cy.get('.product').find('button').click()

    })
})