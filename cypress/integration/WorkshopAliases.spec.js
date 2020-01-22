/// <reference types="cypress" />

//Quest here is to add 5 products to cart (Beans, Carrot, Capsicum, Musk Melon, Water Melon)
//check if product we chose are correct ones and check if they are in cart


describe('Test of shop Flow',() => {
    beforeEach('Navigating to Page',() => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
    })
    it('Finding products, checking if it is the right one, checking card and price',() => {
        cy.get('.search-keyword')
        .as('search')
        .type('Beans')
        .wait(1000)
        .get('.product')
        .find('.product-name')
        .should('include.html', 'Beans')
        
        cy.get('.product')
        .find('button')
        .contains('ADD TO CART')
        .as('addProduct')
        .click()

        cy.get('@search')
        .type('{selectAll}carrot')
        .wait(1000)

        cy.get('.product')
        .find('.product-name')
        .should('include.html', 'Carrot')

        cy.get('@addProduct')
        .click()

        cy.get('.cart-icon')
        .click()
        .wait(500)
        cy.get('ul.cart-items')
        .find('.cart-item:visible')
        .should('have.length', 2)
        
    })
    
})