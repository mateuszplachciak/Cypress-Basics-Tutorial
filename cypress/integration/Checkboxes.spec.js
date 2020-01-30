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

    it('Grabing all Checkboxes and make actions on chosen ones',() => {
        // Locator besed on type without arguments will on check() method will checked all from checkboxes
        cy.get("input[type='checkbox']")
        .check(['option2', 'option3'])
    })

    it('grabbing text from label in checboxes, and check the one chosen by text',()=>{
        cy.get('#checkbox-example')
        .find('label')
        .contains('Option1')
        .should('include.html', 'Option1')
        .find('[type="checkbox"]')
        .check()
    })

    it('Radio',() => {
        cy.get('input[type="radio"]')
        .check('radio1')
        
        cy.get('[for="radio2"]')
        .find('.radioButton')
        .check()
        

    })

})
