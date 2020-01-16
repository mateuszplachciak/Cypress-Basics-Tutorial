/// <reference types="cypress" />

it('Navigating to practice website and practice basic commands',() => {
 
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')

    cy.get(':nth-child(1) > .product-action > button').click()

    cy.get('.search-keyword').type('Cashews')

    cy.wait(1000)

    cy.get('.product').find('button').click()
   
})
