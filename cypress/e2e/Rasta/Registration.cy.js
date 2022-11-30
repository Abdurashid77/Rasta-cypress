let a = Math.floor(100000 + Math.random() * 900000)
describe('example to-do app', () => {
    beforeEach(() => {
      cy.visit('https://rasta.uz/')
    })
    it('Login', () => { 
        cy.wait(200)
        cy.get('.Header_buttons__QxOme > .Button_button__bShZq').click()
    })
})

