export class NewsPage {

    mainHeadingText = 'Новости'
    mainHeading = () => cy.xpath('//h2[text()="Новости"]')

    verifyNewsPage = () => {
        this.mainHeading().should('have.text', this.mainHeadingText)
    }
}