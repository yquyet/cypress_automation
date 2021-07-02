export class LoginPage {
    login = (acc) => {
        cy.visit('http://demo.guru99.com/V4/index.php')
        cy.get('input[type="text"]').type(acc.uid)
        cy.get('input[type="password"]').type(acc.password)
        cy.get('input[type="submit"]')
            .should('be.visible')
            .click()
    }
}