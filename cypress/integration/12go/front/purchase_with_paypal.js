/// <reference types="Cypress" />

import { localeData } from "moment";

describe('flight + paypal', function(){
    it('Open main page 12go.asia', function(){

        cy.visit('https://12go.asia');
        cy.url().should('include','https://12go.asia/en');
        cy.get('#date').click().get('.datepicker-days > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(5) > td:nth-child(7)').click();
        cy.get('.ts-action > .btn').as("findBtn").click();
        //wait for recheck
        cy.wait(40000);
        cy.get('[data-trip_id="185567"]').contains('Book now').click();
        //wait checkout opens
        cy.wait(10000);
        cy.get('#seats').select("1");
        //wait for checkout update
        cy.wait(7000);
        cy.get('input[name="contact[mobile]"]').click().type("+33672618698", { delay: 100 });
        cy.get('input[name="contact[email]"]').click().type("anton.golubnychyi@12go.asia", { delay: 100 });
        //set name, last and middle names
        cy.get('input[name="passenger[0][first_name]"]').click().type('Mister', { delay: 100});
        cy.get('input[name="passenger[0][last_name]"]').click().type('Robot', { delay: 100});
        cy.get('input[name="passenger[0][middle_name]"]').click().type('Dynamics', { delay: 100});  
        //set country   
        cy.get('select[name="passenger[0][country_id]"]').select("UA");   
        //check passport issue date
        cy.get('select[name="passenger[0][id_issue_date][day]"]').select("1");       
        cy.get('select[name="passenger[0][id_issue_date][month]"]').select("06 June");   
        cy.get('select[name="passenger[0][id_issue_date][year]"]').select("2005");
        //set gender
        cy.get('select[name="passenger[0][gender]"]').select("Male").should('have.value', '0');
        //set DOB
        cy.get('select[name="passenger[0][dob][day]"]').select("1");       
        cy.get('select[name="passenger[0][dob][month]"]').select("06 June");   
        cy.get('select[name="passenger[0][dob][year]"]').select("1989");       
        //set checkboxes
        cy.get('input[name="misc[terms]"]').check();
        cy.get('input[name="misc[cancelation_policy]"]').check();
        cy.get('input[name="misc[confirm_trip]"]').check();
        //start payment paypal
        cy.get('ul > li.form-payment-tab').next().contains('PayPal').click().within(() => {
            cy.wait(5000)
            cy.get('.paypal-button').click();    
        });

    })
})