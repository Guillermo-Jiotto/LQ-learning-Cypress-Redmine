export class SearchPage {

    headingText = 'Поиск'

    searchHeading = () => cy.xpath('//h2[text()="Поиск"]')
    submitButton = () => cy.get('[type="submit"]')

    checkHeading = () => {
        this.searchHeading().should('have.text', this.headingText)
    }
}