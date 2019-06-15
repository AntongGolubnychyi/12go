/// <reference types="Cypress" />

describe('main test', function(){
    it('Open main page 12go.asia', function(){

        cy.visit('https://12go.asia');
        cy.url().should('include','https://12go.asia/en');
        cy.get('#date').click().get('.datepicker-days > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(5) > td:nth-child(7)').click();
        cy.get('.ts-action > .btn').as("findBtn").click();
        cy.wait(40000);
        cy.get('[data-trip_id="271145"]').contains('Book now').click();
        cy.wait(10000);
        cy.get('#seats').select("1");
        cy.wait(2000);
        cy.get('.mobile').click().type("+33672618698", { delay: 100 });
        cy.get('.email').click().type("anton.golubnychyi@12go.asia", { delay: 100 });
        cy.get('input[name="passenger[0][full_name]"]').click().type('Tester Robot', { delay: 100});
        cy.get('input[name="misc[terms]"]').check();
        cy.get('input[name="misc[cancelation_policy]"]').check();
        cy.get('input[name="misc[confirm_trip]"]').check();
        cy.get('#cardNumber').click().type("4242424242424242", { delay: 200 }).should('have.value', '4242 4242 4242 4242');
        cy.get('#cardName').click().type("SERG SAF", { delay: 200}).should('have.value', 'SERG SAF');
        cy.get('#cardValid').click().type("1225", { delay: 200}).should('have.value', '12/25');
        cy.get('#cardPass').click().type("255", { delay: 200}).should('have.value', '255');
        cy.get('button[data-action=omise]').click();
    })
})