/// <reference types="cypress" />

import { Product } from "../page-objects/Workshop"

//Quest here is to add 5 products to cart (Beans, Carrot, Capsicum, Musk Melon, Water Melon)
//check if product we chose are correct ones and check if they are in cart

const product = new Product 

describe('Test of shop Flow',() => {
    beforeEach('Navigating to Page',() => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
    })
    it('Searching, checking and adding products with one method, Validating cart',() => {
        product.addProduct('Carrot')
        product.addProduct('Beans')
        product.addProduct('Capsicum')
        product.addProduct('Musk Melon')
        product.addProduct('Water Melon')
        product.checkCart(5)
    })
    
})