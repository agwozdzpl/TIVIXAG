describe("Wrong lenght in card number input", () => {
    it("should valid insufficient lenght or card number", () => {
        cy.rentCarLastStep();
        cy.get('#card_number').type('123456789012345678901');
        cy.get('.btn').click();
        cy.get('.alert').should('be.visible');
    })
});