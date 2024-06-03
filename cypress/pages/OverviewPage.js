export class OverviewPage {

    Finish(){
        cy.contains('Finish').click();
    }
}
export const onOverviewPage = new OverviewPage();