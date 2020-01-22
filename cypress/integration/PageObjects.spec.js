/// <reference types="cypress" />

import { VegePage } from "../page-objects/VegetablePage"

describe('Using imported classes to make code more clear.',() => {

    const vegePage = new VegePage()

    beforeEach('Navigate to practice page',() => {
        vegePage.navigate()
    })

    it('Searchong for Vegetables with imported method',() => {
        vegePage.searchVeg('Cashews')
        cy.wait(1000)
        vegePage.validateVege('Cashews')
    })

    it('Thanks to page object, we can i fast and easy way chose any vegetable along with assertion using created method',() => {

        vegePage.searchVeg('Brinjal')
        cy.wait(1000)
        vegePage.validateVege('Brinjal')
        vegePage.countVege(1)
    })

    it('Lets check if number of products is valid',() => {
        vegePage.searchVeg('ca')
        cy.wait(1000)
        vegePage.countVege(4)
    })
})