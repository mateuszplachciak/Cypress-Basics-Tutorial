/// <reference types="cypress" />


describe('Testing vegetable fake shop',() => {

    //Inside of this function we can locate our test which is somehow associated
    //, for example, they cover some functionality in a few different ways

    beforeEach('Navigating to the page where tests are executed',() => {

        //this one as the name describes is doing something before every next test
        //is very useful if you need to login into the page
    })

    it('Test itself 1', () => {

        //and over here we write test
        //every "it" is a separate test so "beforeEach" statement making it much shorter and more readable

    })

    it('Test itselfe 2', () => {

        //Another test 
        

    })
})