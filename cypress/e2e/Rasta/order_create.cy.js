describe('example to-do app', () => {
    beforeEach(() => {
      cy.visit('https://rasta.uz/')
    })
    it('Login', () => {

        //Start-login

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

        //End-login

        //Start-search-restaurant-and-create-order

        cy.get('.Input_input__gaPT2').type('Test Dokon Toshkent (kokcha)')
        cy.wait(500)
        cy.get('.Header_restaurantItem__8SCd3').click()
        cy.wait(300)
        cy.get(':nth-child(3) > .ProductList_body__wrcJI > .Product_product__OCH58 > .Product_info__UIIg6').click({force: true})
        cy.wait(200)
        cy.get('.ProductModal_order__gUggN > .Button_greenButton__UlmDG').click({force: true})
        cy.wait(200)
        cy.get('.Cart_button__mKzap > .Button_greenButton__UlmDG').click({force: true})
        cy.wait(200)
        cy.get('.CheckoutPayment_list__cZ2_D > :nth-child(1)').click({force: true})
        cy.wait(300)
        cy.get('.CheckoutPriceInfo_priceInfo__HIlqr > .Button_greenButton__UlmDG').click({force: true})


    })
    })
  