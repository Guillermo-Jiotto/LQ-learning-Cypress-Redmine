export class ActivityPage {

    headingText = 'Действия'

    //Heading
    mainHeading = () => cy.xpath('//h2[text()="Действия"]')
    rightHeading = () => cy.xpath('//h3[text()="Действия"]')

    //Checkboxes (rigth part of the screen)
    changesetsCheckbox = () => cy.get('[id="show_changesets"]')
    issuesCheckbox = () => cy.get('[id="show_issues"]')
    newsCheckbox = () => cy.get('[id="show_news"]')
    wikiCheckbox = () => cy.get('[id="show_wiki_edits"]')
    messagesCheckbox = () => cy.get('[id="show_messages"]')
    subprojectsCheckbox = () => cy.get('p [name="with_subprojects"]')
    submitButton = () => cy.get('[type="submit"]')

    //Subjects of notes
    changesetTopic = () => cy.get('[class*="changeset"]')
    issueTopic = () => cy.get('dt[class*="issue"]')
    messageTopic = () => cy.get('[class*="message"]')
    issueNoteTopic = () => cy.get('[class*="issue-note"]')
    replyTopic = () => cy.get('[class*="reply"]')
    issueClosedTopic = () => cy.get('[class*="issue-closed"]')
    issueEditTopic = () => cy.get('[class*="issue-edit"]')

    verifyActivityPage = () => {
        this.mainHeading().should('have.text', this.headingText)
        this.rightHeading().should('have.text', this.headingText)
    }

    checkWorkOfCheckboxes = () => {
        this.subprojectsCheckbox().click()
        this.issuesCheckbox().click()
        this.newsCheckbox().click()
        
        this.submitButton().click()
        this.changesetTopic().first().should('exist')

        this.issueTopic().should('not.exist')
        this.messageTopic().should('not.exist')
        this.issueNoteTopic().should('not.exist')
        this.replyTopic().should('not.exist')
        this.issueClosedTopic().should('not.exist')
        this.issueEditTopic().should('not.exist')
    }
}