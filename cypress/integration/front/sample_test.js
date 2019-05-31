describe('My First Test', function(){
    it('Open main page 12go.asia', function(){

        cy.visit('https://12go.asia');
        cy.url().should('include','https://12go.asia/en');
        cy.get('.ts-action > .btn').as("findBtn").click();
        cy.get('.trips-group.recommended-block > :nth-child(2) > .col-md-12 > .trip-ticket-point > .col-md-2 > .buy > .variant-buttons > .col-xs-12 > .btn-primary')
        .as("findBtn").click();
        cy.get('.mobile').type("+33672618698");
        cy.get('.email').type("anton.golubnychyi@12go.asia");
        cy.get('#seats').select("1");
        cy.get('#alternative_7-precise').check();
        cy.get('#cardNumber').type("424242424242424242")


        


    })
})