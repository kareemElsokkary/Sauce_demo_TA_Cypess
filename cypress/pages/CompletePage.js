export class CompletePage {

    ConfirmtheOrderisSubmitted(){
        cy.get('.pony_express').should('be.visible');
        cy.contains('Thank you for your order!').should('be.visible');
        cy.contains('Your order has been dispatched, and will arrive just as fast as the pony can get there!').should('be.visible');
    }
    BackHomePage()
    {
        cy.get('#back-to-products').click()
    }

}
export const OnCompletePage = new CompletePage();