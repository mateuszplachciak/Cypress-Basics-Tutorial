export class VegePage {
    navigate(){
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
    }
    searchVeg(vegeName) {
        cy.get('.search-keyword').type(vegeName)
    }

    validateVege(vegeName) {
        cy.get('.product').find('.product-name').should('include.text', vegeName)
    }

    countVege(vegeNumber) {
        cy.get('.product:visible').should('have.length', vegeNumber)
    }
}