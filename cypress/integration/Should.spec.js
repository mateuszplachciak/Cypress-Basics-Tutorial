/// <reference types="cypress" />

describe('Lets try assertions!',() =>{

    beforeEach('Navigating to the page',() => {

        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
       
    })

    it('simple Length assertion',() => {

        cy.get('.search-keyword')
        .type('Cashews')

        cy.wait(1000)

        cy.get('.product').should('have.length',1)

        //this assertion above, checking how many objects with class .procuct is on the site.
        //since there is only 1 object visible and cypress found 2 products lets investigate it

    })

    it('Invisible objects',() => {

        cy.get('.search-keyword')
        .type('Cashewsssssssssssss')

        cy.wait(1000)

        cy.get('.product')
        .should('have.length', 1)


    })

    it('Capturing only visible elements', () => {

        cy.get('.search-keyword')
        .type('Ca')

        cy.wait(1000)

        cy.get('.product:visible')
        .should('have.length',4)
    })

    it('Checking name if its equal',() => {

        cy.get('.search-keyword')
        .type('Cashews')

        cy.wait(1000)
        
        cy.get('.product')
        .find('.product-name')
        .should('have.html' , 'Cashews - 1 Kg')

        cy.wait(1000)

        cy.get('.product')
        .find('.product-name')
        .should('include.text' , 'Cashews - 1 Kg')

        cy.get('.product')
        .find('.product-name')
        .should('include.html' , 'Cashews')

    } )
}) 