Cypress.Commands.add('rentCarLastStep', () => {
            cy.visit('http://qalab.pl.tivixlabs.com/');
            cy.get('#country').select('Poland');
            cy.get('#city').select('Wroclaw');
            cy.get('#model').type('Skoda');
            cy.get('#pickup').type('2020-10-25');
            cy.get('#dropoff').type('2020-10-30');
            cy.get('.btn').click();
            cy.get(':nth-child(1) > :nth-child(7) > .btn').click();
            cy.get('.btn').click();
            cy.get('#name').type('test');
            cy.get('#last_name').type('test');
            cy.get('#email').type('testowyemail1@yopmail.com');
        })