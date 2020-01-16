/// <reference types="cypress" />

describe('Set of tests for practice Each', ()=> {

    beforeEach('Navigating to practice website', ()=> {

        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        
    })

    it('Practice Each function with some vegetables and else condition', ()=> {

        cy.get('.search')
        .type('ca')
        .wait(2000)

        cy.get('.products')
        .find('.product')
        .each(($el) => {

            const vegeName = $el.find('h4.product-name').text()

            if(vegeName.includes('Cashews')){

                $el.find('button').click() 
            }
            else{
                cy.log(vegeName)
            }


        })

            cy.get('[href="#/offers"]')
            .then((logo)=>{

            cy.log(logo.text())

       }) 

    })

})