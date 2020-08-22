describe("Wrong lenght in card number input", () => {
    it("should valid insufficient lenght or card number", () => {
        cy.rentCarLastStep();
        cy.get('.btn').click();
        cy.get('.alert').contains('Card number is required');
    })
});