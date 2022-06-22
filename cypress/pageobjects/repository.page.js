export class RepositoryPage {

    latestReactionsHeadingText = 'Последние редакции'
    statisticHeadingText = 'Статистика'

    latestReactionsHeading = () => cy.xpath('//h3[text()="Последние редакции"]')
    showAllRevisionsLink = () => cy.get('[href="/projects/redmine/repository/revisions"]')
    statisticLink = () => cy.get('[class="icon icon-stats"]')
    statisticHeading = () => cy.xpath('//h2[text()="Статистика"]')

    verifyRepositoryPage = () => {
        this.latestReactionsHeading().should('have.text', this.latestReactionsHeadingText)
        this.showAllRevisionsLink().should('be.visible')
    }

    verifyStatisticLink = () => {
        this.statisticLink().click()
        this.statisticHeading().should('have.text', this.statisticHeadingText)
    }
}