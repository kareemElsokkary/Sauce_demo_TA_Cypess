describe('Login', () => {
let validusername='standard_user'
let validPassword='secret_sauce'

  it('Login with valid Credtential', () => {
     cy.visit('/')
     //define Elements
      cy.get('[data-test="username"]').as('inputUsername')
      cy.get('#password').as('inputpassword')
      cy.get('[data-test="login-button"]').as('buttonlogin')

      //Enter valid Username
      cy.get('@inputUsername').type(validusername)
      cy.get('@inputpassword').type(validPassword)

      //Verify
      cy.get('@inputUsername').invoke('prop','value').then((text)=>{
      expect(text).to.equal(validusername)
      })
      cy.get('@inputpassword').invoke('prop','value').then((text)=>{
      expect(text).to.equal(validPassword)
      })

       //Login
       cy.get('@buttonlogin').click()

        cy.get('[data-test="shopping-cart-link"]').as('PageofItems')

                  //page is displayed
                 cy.get('@PageofItems').should('be.visible')

            //verify Drop downlist

            cy.get('[data-test="product-sort-container"]').select('za')
            cy.get('.product_sort_container option').each(listitem=>{
            const List = listitem.text()
            console.log(List)
            cy.contains(List).click({force: true} )
            })


          // cy.get('.active_option select option').eq('1').click({force: true})
        })
})