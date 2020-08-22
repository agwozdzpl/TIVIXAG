describe("Wrong digits in card input", () => {
    it("should valid wrong characters in card number input", () => {
        cy.rentCarLastStep();
        cy.get('#card_number').type('1234567890123456789012341234');
        cy.get('.btn').click();
        //cy.get('.alert').contains('Card number contains wrong chars');
    })
});