export class Navigate {
    practicePage2(){
        beforeEach('Visiting another practice app to cover different parts of web elements',() => {
            cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        })
    }
}

export class Checkboxes {
    markAsChecked(checkbox, option){
        cy.get(checkbox)
        .check()
        .should('be.checked')
        .and('have.value', option)
    }
    markAsUnchecked(checkbox, option){
        cy.get(checkbox)
        .uncheck()
        .should('not.be.checked')
        .and('have.value',option)
    }
}