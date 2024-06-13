import { onLoginPage } from '../pages/LoginPage'
import { onProductPage } from '../pages/ProductsPage'
import{ onBasketPage } from '../pages/BasketPage'
import {OnCheckoutPage} from "../pages/CheckoutPage";
import{onOverviewPage} from '../pages/OverviewPage';
import {OnCompletePage} from '../pages/CompletePage';


describe('Reorder Items from A to Z', () => {
  beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
  });

  it('Reorder Items from A to Z', () => {
    onLoginPage.visitWebsite()
    onLoginPage.LoginWithValidCredentials()

    onProductPage.verifytheitemsisloaded()
    onProductPage.verifyItemsNumber(6)

    onProductPage.ReorderItemfromAtoZ()
    onProductPage.VerifytheproductfromAtoZ()


  });
});