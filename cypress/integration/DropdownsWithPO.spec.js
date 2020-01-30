/// <reference types="cypress" />

import { Navigate, Menu } from "../Page-objects2/PracticePage2"

const navigate = new Navigate
const menu = new Menu

describe('Practice of dropdown menu',() => {
    navigate.practicePage2()
    menu.staticDropdown('option1')
    menu.dynamicDropdown('India', 'in')
    
})