describe('example to-do app', () => {
    beforeEach(() => {
      cy.visit('https://rasta.uz/')
    })
    it('Product', () => {
        //Login-Start
        cy.wait(200)
        cy.get('.Header_buttons__QxOme > .Button_button__bShZq').click()
        cy.wait(200)
        cy.get('.InputMask_input__wMoYl').type('996031915')
        cy.wait(200)
        cy.get('.Button_greenButton__UlmDG').click()
        cy.wait(200)
        cy.get(':nth-child(2) > .InputMask_inputBox__kdkmE > .InputMask_input__wMoYl').type('202020')
        cy.wait(200)
        cy.get('.Button_greenButton__UlmDG').click()
        cy.wait(500)
        //Login-End

        //Enter to the product
         
        //Enter to the product

    })
})