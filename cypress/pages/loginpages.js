class LoginPage {
  visitWebsite() {
    cy.visit('/');
  }

    Enterusername(){
        let validusername='standard_user'

        cy.get('[data-test="username"]').as('inputUsername')

        //Enter valid Username
        cy.get('@inputUsername').type(validusername)

        //Verify
        cy.get('@inputUsername').invoke('prop','value').then((text)=>{
            expect(text).to.equal(validusername)
        })
    }

    Enterpassword(){
        let validPassword='secret_sauce'

        cy.get('#password').as('inputpassword')
        cy.get('@inputpassword').type(validPassword)
        //Verify

        cy.get('@inputpassword').invoke('prop','value').then((text)=>{
            expect(text).to.equal(validPassword)
        })
    }
    ClickonLogin(){

        cy.get('[data-test="login-button"]').as('buttonlogin')
        cy.get('@buttonlogin').click()

    }




}

export default LoginPage;
export const login = new LoginPage();
