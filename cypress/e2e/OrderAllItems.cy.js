import { onLoginPage } from '../pages/LoginPage'
import { onProductPage } from '../pages/ProductsPage'
import{ onBasketPage } from '../pages/BasketPage'
import {OnCheckoutPage} from "../pages/CheckoutPage";
import{onOverviewPage} from '../pages/OverviewPage';
import {OnCompletePage} from '../pages/CompletePage';


describe('Order Items', () => {
  beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
  });

  it('Order All Items', () => {
    onLoginPage.visitWebsite()
    onLoginPage.LoginWithValidCredentials()

    onProductPage.verifytheitemsisloaded()
    onProductPage.verifyItemsNumber(6)

    onProductPage.orderallitems()
    onProductPage.verifytheitemsisadded()

    onBasketPage.openBasket()
    onBasketPage.Checkout()

    OnCheckoutPage.EnterUserInformation('Kareem','Tester','12345')
    OnCheckoutPage.Continue()

    onOverviewPage.Finish()

    OnCompletePage.ConfirmtheOrderisSubmitted()
    OnCompletePage.BackHomePage()

    onProductPage.verifytheitemsisloaded()
    onProductPage.verifyItemsNumber(6)
  });

});
