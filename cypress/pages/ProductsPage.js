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
    ReorderItemfromLowtohigh(){
        cy.get('.product_sort_container').select('lohi')
        cy.contains('Price (low to high)').should('be.visible')
    }

    ReorderItemfromhightoLow(){
        cy.get('.product_sort_container').select('hilo')
        cy.contains('Price (high to low)').should('be.visible')
    }

    ReorderItemfromAtoZ(){
        cy.get('.product_sort_container').select('az')
        cy.contains('Name (A to Z)').should('be.visible')
    }
    ReorderItemfromZtoA(){
        cy.get('.product_sort_container').select('za')
        cy.contains('Name (Z to A)').should('be.visible')
    }

    VerifytheproductfromLowtohigh(){
        let previousPrice = 0;
        cy.get('.inventory_item_price').each((price) => {
            cy.wrap(price).invoke('text').then((text) => {
                const currentPrice = parseFloat(text.trim().replace('$', ''));
                cy.log('Previous price:', previousPrice);
                cy.log('Current price:', currentPrice);
                // Ensure current price is above the previous price
                expect(currentPrice).to.be.at.least(previousPrice);
                // Update the previousPrice for the next iteration
                previousPrice = currentPrice;
            });
        });

    }

    VerifytheproductfromHightoLow(){
        let previousPrice = 9999999999;
        cy.get('.inventory_item_price').each((price) => {
            cy.wrap(price).invoke('text').then((text) => {
                const currentPrice = parseFloat(text.trim().replace('$', ''));
                cy.log('Previous price:', previousPrice);
                cy.log('Current price:', currentPrice);
                // Ensure current price is above the previous price
                expect(currentPrice).to.be.at.most(previousPrice);
                // Update the previousPrice for the next iteration
                previousPrice = currentPrice;
            });
        });

    }
    VerifytheproductfromAtoZ(){
        let previousChar = 'A'; // Start with 'A'
        cy.get('.inventory_item_name').each((char) => { // Replace '.characters' with your selector
            cy.wrap(char).invoke('text').then((text) => {
                const currentChar = text.trim(); // Assuming you're comparing text content
                // Ensure current character is greater than or equal to previous character
                expect(currentChar >= previousChar).to.be.true;
                cy.log('Previous character:', previousChar);
                cy.log('Current character:', currentChar);
                // Update the previousChar for the next iteration
                previousChar = currentChar;
            });
        });

    }

    VerifytheproductfromZtoA(){
        let previousChar = 'Z'; // Start with 'A'
        cy.get('.inventory_item_name').each((char) => { // Replace '.characters' with your selector
            cy.wrap(char).invoke('text').then((text) => {
                const currentChar = text.trim(); // Assuming you're comparing text content
                // Ensure current character is greater than or equal to previous character
                expect(currentChar <= previousChar).to.be.true;
                cy.log('Previous character:', previousChar);
                cy.log('Current character:', currentChar);
                // Update the previousChar for the next iteration
                previousChar = currentChar;
            });
        });

    }
}
export const onProductPage = new ProductsPage()