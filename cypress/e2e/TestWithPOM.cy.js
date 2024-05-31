import { login } from '../pages/loginpages'
import { product } from '../pages/Products'
import{ basket } from '../pages/basket'

describe('open Application', () => {
  it('open Application', () => {
    login.visitWebsite()
  });

  it('Login with valid Creditnal', () => {
    login.visitWebsite()
    login.Enterusername()
    login.Enterpassword()
    login.ClickonLogin()

  });

  it('Order All Items', () => {
    login.visitWebsite()
    login.Enterusername()
    login.Enterpassword()
    login.ClickonLogin()
    product.orderallitems()
    product.verifytheitemsisadded()
  });

  it('Order First Items', () => {
    login.visitWebsite()
    login.Enterusername()
    login.Enterpassword()
    login.ClickonLogin()
    product.AddFirstitems()
    product.verifyFirstitemsisadded()
  });


  it.only('Order First Items', () => {

    login.visitWebsite()
    login.Enterusername()
    login.Enterpassword()
    login.ClickonLogin()
    product.AddFirstitems()
    product.verifyFirstitemsisadded()
    product.GetPriceOfFirstitems().then((price) => {
      cy.log(`The Price is ${price}`)
    basket.openBasket()
    basket.VerifyPriceOfFirstitems(price)
    })
    
  });
});
