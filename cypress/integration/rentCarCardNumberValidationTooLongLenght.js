describe("Wrong lenght in card number input", () => {
    it("should valid too long lenght in card number input", () => {
        cy.rentCarLastStep();
        cy.get('#card_number').type('1234567890123456789012341234');
        cy.get('.btn').click();
        cy.get('.alert').contains('Card number value is too long');
    })
});