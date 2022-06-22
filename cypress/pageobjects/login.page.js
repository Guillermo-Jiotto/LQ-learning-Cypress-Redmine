export class LoginPage {

    username = 'Yaroslav0974'
    password = '2134retyoplf0'
    errorText = 'Неправильное имя пользователя или пароль'
    restorePasswordURL = 'https://redmine.org/account/lost_password'
    restorePasswordHeadingText = 'Восстановление пароля'

    usernameField = () => cy.get('[id="username"]')
    passwordField = () => cy.get('[id="password"]')
    submitButton = () => cy.get('[type="submit"]')
    flashError = () => cy.get('[id="flash_error"]')
    restorePasswordLink = () => cy.get('[href*="lost_password"]')
    restorePasswordHeading = () => cy.xpath('//h2[text()="Восстановление пароля"]')

    loginWithInvalidCredentials = () => {
        this.usernameField().type(`${this.username}`)
        this.passwordField().type(`${this.password}`)
        this.submitButton().click()
        this.flashError().should('have.text', this.errorText)
    }

    restorePasswordPageCheck = () => {
        this.restorePasswordLink().click()
        cy.url().should('eq', this.restorePasswordURL)
        this.restorePasswordHeading().should('have.text', this.restorePasswordHeadingText)
    }
}