/// <reference types="cypress" />

describe('Set of tests for practice udemy course', ()=> {

    beforeEach('Navigating to practice website', ()=> {

        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')

    })

    it('Practice Each function with some vegetables.', ()=> {

        cy.get('.search')
        .type('ca')
        .wait(1000)

        cy.get('.products')
        .find('.product')
        .each(($el) => {

            const vegeName = $el.find('h4.product-name').text()

            if(vegeName.includes('Cashews')){

                $el.find('button').click()
            }


        })
    })
})