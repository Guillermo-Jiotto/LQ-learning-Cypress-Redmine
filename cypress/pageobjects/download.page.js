export class DownloadPage {

    mainHeadingText = 'Download¶'
    stableReleasesHeadingText = 'Stable releases¶'
    latestSourceCodeHeadingText = 'Latest source code¶'
    changelogHeadingText = 'Changelog¶'

    mainHeading = () => cy.xpath('//h1[text()="Download"]')
    stableReleasesHeading = () => cy.xpath('//h2[text()="Stable releases"]')
    latestSourceCodeHeading = () => cy.xpath('//h2[text()="Latest source code"]')
    changelogLink = () => cy.xpath('//div[@id="sidebar"]//a[contains(@href, "Changelog")]')
    changelogHeading = () => cy.xpath('//h1[text()="Changelog"]')

    verifyDownloadPage = () => {
        this.mainHeading().should('have.text', this.mainHeadingText)
        this.stableReleasesHeading().should('have.text', this.stableReleasesHeadingText)
        this.latestSourceCodeHeading().should('have.text', this.latestSourceCodeHeadingText)
    }

    verifyChangelog = () => {
        this.changelogLink().click()
        this.changelogHeading().should('have.text', this.changelogHeadingText)
    }
}