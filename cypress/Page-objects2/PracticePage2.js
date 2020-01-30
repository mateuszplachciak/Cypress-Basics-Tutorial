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

export class Menu{
    dynamicDropdown(searchWord , letters){
        it('Dynamic dropdown function to iterate through possible elements',() => {
            cy.get('#autocomplete')
            .type(letters)
            cy.get('.ui-menu-item div')
            .each((name) =>{
                if(name.text()===searchWord){
                    name.click()
                }
            })
            cy.get('#autocomplete').should('have.value', searchWord)
        })
    }
    staticDropdown(value){
        it('Select command for static dropdown menu',() => {
            cy.get('select').select(value).should('have.value', value)
        })
    }
}

