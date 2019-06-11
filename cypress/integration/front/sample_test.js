describe('My First Test', function(){
    it('Open main page 12go.asia', function(){

        cy.visit('https://12go.asia');
        cy.url().should('include','https://12go.asia/en');
        cy.get('.ts-action > .btn').as("findBtn").click();
        cy.get('.trips-group.recommended-block > :nth-child(2) > .col-md-12 > .trip-ticket-point > .col-md-2 > .buy > .variant-buttons > .col-xs-12 > .btn-primary')
        .as("findBtn").click();
        cy.get('.mobile').click().type("+33672618698", { delay: 100 });
        cy.get('.email').click().type("anton.golubnychyi@12go.asia", { delay: 100 });
        cy.get('#seats').select("1");
        cy.get('#alternative_7-precise').check();
        cy.get('#cardNumber').click().type("424242424242424242", { delay: 200 }).should('have.value', '424242424242424242')
    


        


    })
})