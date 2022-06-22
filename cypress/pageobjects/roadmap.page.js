export class RoadmapPage {

    mainHeadingText = 'Оперативный план'

    mainHeading = () => cy.xpath('//h2[text()="Оперативный план"]')
    completedVersionsLink = () => cy.get('a[id*="completed-versions"]')
    
    //Checkboxes
    defectCheckbox = () => cy.get('[value="1"]')
    featureCheckbox = () => cy.get('[value="2"]')
    patchCheckbox = () => cy.get('[value="3"]')
    submitButton = () => cy.get('[type="submit"]')

    //Topics
    featureTopic = () => cy.xpath('//td[@class="subject"]/a[contains(text(), "Feature")]')
    patchTopic = () => cy.xpath('//td[@class="subject"]/a[contains(text(), "Patch")]')
    defectTopic = () => cy.xpath('//td[@class="subject"]/a[contains(text(), "Defect")]')
    
    verifyRoadmapPage = () => {
        this.mainHeading().should('have.text', this.mainHeadingText)
        this.completedVersionsLink().should('be.visible')
    }

    checkWorkOfCheckboxes = () => {
        this.featureCheckbox().click()
        this.patchCheckbox().click()
        this.submitButton().click()
        this.featureTopic().should('not.exist')
        this.patchTopic().should('not.exist')
        this.featureCheckbox().click()
        this.defectCheckbox().first().click()
        this.submitButton().click()
        this.defectTopic().should('not.exist')
        this.patchTopic().should('not.exist')
        this.patchCheckbox().click()
        this.featureCheckbox().click()
        this.submitButton().click()
        this.defectTopic().should('not.exist')
        this.featureTopic().should('not.exist')
    }
}