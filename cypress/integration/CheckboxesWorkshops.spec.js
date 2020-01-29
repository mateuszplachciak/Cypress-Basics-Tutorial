/// <reference types="cypress" />

import { Navigate, Checkboxes } from "../Page-objects2/PracticePage2"

const navigate = new Navigate
const checboxes = new Checkboxes

describe('test suit to cover basic functions to interact with checkbxoes, and showing why its different from clicks',() => {
//This below handle our before each statement, and as its name says its navigate to the second practice page
navigate.practicePage2()

    it('Grabing checkboxes, write assertions',() => {
        // #idName          - value
        // #checkBoxOption1 - option1
        // #checkBoxOption2 - option2
        // #checkBoxOption3 - option3
        checboxes.markAsChecked('#checkBoxOption1', 'option1')
        checboxes.markAsUnchecked('#checkBoxOption1', 'option1')
        checboxes.markAsChecked('#checkBoxOption2', 'option2')
        checboxes.markAsUnchecked('#checkBoxOption2', 'option2')  
    })
})
