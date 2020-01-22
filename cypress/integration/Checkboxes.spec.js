/// <reference types="cypress" />

describe('test suit to cover basic functions to interact with checkbxoes, and showing why its different from clicks',() => {

    beforeEach('Visiting another practice app to cover different parts of web elements',()=>{

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    })

    it('Grabing checkboxes, write assertions',() => {

        cy.get('#checkBoxOption1')
        .check()
        .should('be.checked')
        .and('have.value','option1')

        cy.get('#checkBoxOption1')
        .uncheck()
        .should('not.be.checked')
        .and('have.value','option1')
        .check()
        .wait(1000)
    })

    it('grabbing text from label in checboxes',()=>{

        cy.get('#checkbox-example').find('label').should('include.html', 'Option1')

    })

})
