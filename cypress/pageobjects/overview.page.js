export class OverviewPage {

    mainHeadingText = 'Обзор'
    issuesHeadingText = 'Задачи'
    participantsHeadingText = 'Участники'
    lastNewsHeadingText = 'Последние новости'

    mainHeading = () => cy.xpath('//h2[text()="Обзор"]')
    issuesHeading = () => cy.xpath('//h3[text()="Задачи"]')
    participantsHeading = () => cy.xpath('//h3[text()="Участники"]')
    lastNewsHeading = () => cy.xpath('//h3[text()="Последние новости"]')

    verifyOverviewPage = () => {
        this.mainHeading().should('have.text', this.mainHeadingText)
        this.issuesHeading().should('have.text', this.issuesHeadingText)
        this.participantsHeading().should('have.text', this.participantsHeadingText)
        this.lastNewsHeading().should('have.text', this.lastNewsHeadingText)
    }
}