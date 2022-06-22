export class RegistrationPage {

    headingText = 'Регистрация '

    regiHeading = () => cy.xpath('//h2[contains(text(), "Регистрация")]')
    submitButton = () => cy.get('[type="submit"]')
    errorList = () => cy.get('[id="errorExplanation"]')

    verifyRegistrationPage = () => {
        this.regiHeading().should('have.text', this.headingText)
        this.submitButton().click()
        this.errorList().should('be.visible')
    }
}