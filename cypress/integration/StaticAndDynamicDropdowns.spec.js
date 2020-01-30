/// <reference types="cypress" />

describe('Practice of dropdown menu',() => {
    beforeEach('Visiting another practice app to cover different parts of web elements',()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    })

    it('Select command for static dropdown menu',() => {
        cy.get('select').select('option1').should('have.value', 'option1')
        cy.get('select').select('option2').should('have.value', 'option2')
    })

    it('Dynamic dropdown function to iterate through possible elements',() => {
        cy.get('#autocomplete')
        .type('po')
        cy.get('.ui-menu-item div')
        .each((name) =>{
            if(name.text()==='Poland'){
                name.click()
            }
        })
        cy.get('#autocomplete').should('have.value', 'Poland')
    })
})