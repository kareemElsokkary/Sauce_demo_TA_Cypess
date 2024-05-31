class Basket {
    openBasket(){
        cy.get('.shopping_cart_link').click()
    }

    VerifyPriceOfFirstitems( price){
        cy.get('.inventory_item_price').invoke('text').then( text=>{
            expect(text.trim()).to.equals(price)
        })
    }

}
export const basket = new Basket()
