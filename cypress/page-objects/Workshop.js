export class Product {

    addProduct(nameOfVegetable){

        

            cy.get('.search-keyword')
            .type(nameOfVegetable)
            .wait(1000)
            .get('.product')
            .find('.product-name')
            .should('include.html', nameOfVegetable)
    
            cy.get('.product')
            .find('button')
            .contains('ADD TO CART')
            .click()
    
            cy.get('.search-keyword')
            .type('{selectAll}{backspace}')
        
    }
    checkCart(number){

        cy.get('.cart-icon')
        .click()
        .wait(500)
        cy.get('ul.cart-items')
        .find('.cart-item:visible')
        .should('have.length', number)
    }
}
