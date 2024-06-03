class BasketPage {
    openBasket(){
        cy.get('.shopping_cart_link').click()
    }

    VerifyPriceOfFirstitems( price){
        cy.get('.inventory_item_price').invoke('text').then( text=>{
            expect(text.trim()).to.equals(price)
        })
    }
    Checkout(){
        cy.contains('Checkout').click()
    }

}
export const onBasketPage = new BasketPage()
