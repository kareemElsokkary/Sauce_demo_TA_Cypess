import { onLoginPage } from '../pages/LoginPage'
import { onProductPage } from '../pages/ProductsPage'
import{ onBasketPage } from '../pages/BasketPage'
import {OnCheckoutPage} from "../pages/CheckoutPage";
import{onOverviewPage} from '../pages/OverviewPage';
import {OnCompletePage} from '../pages/CompletePage';


describe('Reorder Items Price Low to High', () => {
  beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
  });

  it('Reorder Items', () => {
    onLoginPage.visitWebsite()
    onLoginPage.LoginWithValidCredentials()

    onProductPage.verifytheitemsisloaded()
    onProductPage.verifyItemsNumber(6)

    onProductPage.ReorderItemfromLowtohigh()
    onProductPage.VerifytheproductfromLowtohigh()

    onProductPage.ReorderItemfromhightoLow()
    onProductPage.VerifytheproductfromHightoLow()

    onProductPage.ReorderItemfromAtoZ()
    onProductPage.VerifytheproductfromAtoZ()

    onProductPage.ReorderItemfromZtoA()
    onProductPage.VerifytheproductfromZtoA()

  });
});