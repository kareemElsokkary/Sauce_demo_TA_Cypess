export class CheckoutPage {
    EnterUserInformation(FirstName, Lastname, postalcode){
        cy.get('#first-name').type(FirstName);
        cy.get('#last-name').type(Lastname);
        cy.get('#postal-code').type(postalcode);
    }
    Continue(){
        cy.contains('Continue').click();
    }
}
export const OnCheckoutPage = new CheckoutPage();