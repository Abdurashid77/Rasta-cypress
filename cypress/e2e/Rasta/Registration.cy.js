let a = Math.floor(100000 + Math.random() * 900000000)
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
        cy.get('.Button_greenButton__UlmDG').click()
        cy.get('.Button_greenButton__UlmDG').type('202020')
        cy.get('.Button_greenButton__UlmDG').click()
        cy.wait(200)
    })
})

