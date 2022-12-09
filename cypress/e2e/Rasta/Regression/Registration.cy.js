let a = Math.floor(100000 + Math.random() * 90000000000)
describe('example to-do app', () => {
    beforeEach(() => {
      cy.visit('https://rasta.uz/')
    })
    it('Login', () => { 
        cy.wait(200)
        cy.get('.Header_buttons__QxOme > .Button_button__bShZq').click()
        cy.get('.InputMask_input__wMoYl').type(a)
        cy.get('.Button_greenButton__UlmDG').click()
        cy.wait(200)
        cy.get('.Input_input__gaPT2').type('Hello bugs')
        cy.wait(200)
        cy.get('.Button_greenButton__UlmDG').click()
        cy.wait(200)
        cy.get('.InputMask_input__wMoYl').type('202020')
        cy.wait(200)
        cy.get('.Button_greenButton__UlmDG').click()
        cy.wait(200)
    })
})

