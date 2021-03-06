context('Login', () => {
    beforeEach(() => {
        cy.visit('localhost:4200');
    })
    it('Login success', () => {
        cy.get('#email').type('alefacco').should('have.value', 'alefacco');
        cy.get('#pass').type('ciao1').should('have.value', 'ciao1');
        cy.get('#submit').click();
        cy.get('.title').should('have.text', "Welcome to SposiStore");
    })
    it('Login fail', () => {
        cy.get('#email').type('fail').should('have.value', 'fail');
        cy.get('#pass').type('fail').should('have.value', 'fail');
        cy.get('#submit').click();
        cy.get('#error').should('have.text', 'Mail o password errate')
    })
})