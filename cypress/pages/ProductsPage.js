class ProductsPage {
    orderallitems(){
        cy.get('.btn').each( (items)=>{
            cy.wrap(items).click()

        })
    }
    verifytheitemsisadded() {
        cy.get('.btn').each((items) => {
            cy.wrap(items).invoke('text').then((text) => {
                expect(text.trim()).to.equals('Remove')
            })
        })
    }

    verifytheitemsisloaded() {
        cy.get('.inventory_item').should('be.visible')
    }

    verifyItemsNumber(number) {

        cy.get('.inventory_item').its('length').then((length) => {
            expect(length).to.equal(number)
            cy.log('Number of elements:', length);
        });

    }

    AddFirstitems(){
        cy.get('.btn').first().click()
        cy.get('.btn').first().invoke('text').then((text)=>{
            expect(text).to.equals('Remove')
        })
    }

    verifyFirstitemsisadded(){
        cy.get('.btn').first().invoke('text').then((text)=>{
            expect(text).to.equals('Remove')
        })
    }

    GetPriceOfFirstitems() {
        return cy.get('.inventory_item_price').first().invoke('text').then((text) => {
            return text.trim(); // Optionally, trim the text to remove any extra spaces
        });
    }


}
export const onProductPage = new ProductsPage()