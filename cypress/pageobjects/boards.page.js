export class BoardsPage {

    mainHeadingText = 'Форумы'
    boardsTableText = 'Форум'
    jobOffersHeadingText = 'Job offers'
    helpTopicHeadingText = 'Help'

    mainHeading = () => cy.xpath('//h2[text()="Форумы"]')
    boardsTable = () => cy.xpath('//th[text()="Форум"]')
    jobOffersTopic = () => cy.get('[href="/projects/redmine/boards/5"]')
    jobOffersHeading = () => cy.xpath('//h2[text()="Job offers"]')
    listMessages = () => cy.get('[class="list messages"]')
    helpTopic = () => cy.get('[href="/projects/redmine/boards/2"]')
    helpTopicHeading = () => cy.xpath('//h2[text()="Help"]')

    verifyBoardsPage = () => {
        this.mainHeading().should('have.text', this.mainHeadingText)
        this.boardsTable().should('have.text', this.boardsTableText)
    }

    verifyJobOfferTopic = () => {
        this.jobOffersTopic().click()
        this.jobOffersHeading().should('have.text', this.jobOffersHeadingText)
        this.listMessages().should('be.visible')
    }

    verifyHelpTopic = () => {
        this.helpTopic().click()
        this.helpTopicHeading().should('have.text', this.helpTopicHeadingText)
        this.listMessages().should('be.visible')
    }
}