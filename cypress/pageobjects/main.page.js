// https://redmine.org/

export class MainPage {

    searchTextInput = 'Cypress'
    mainHeadingText = 'Redmine¶'
    latestReleasesHeadingText = 'Latest releases¶'
    planioHeadingText = 'Is your Redmine secure?'
    faqHeadingText = 'Frequently Asked Questions¶'
    ircHeadingText = 'IRC¶'
    policyHeadingText = 'redmine.org privacy policy¶'

    buyBookLink = 'https://www.packtpub.com/product/redmine-cookbook/'
    loginPageLink = 'https://redmine.org/login'
    registrationPageLink = 'https://redmine.org/account/register'
    overviewTabURL = 'https://redmine.org/projects/redmine'
    downloadTabURL = 'https://redmine.org/projects/redmine/wiki/Download'
    activityTabURL = 'https://redmine.org/projects/redmine/activity'
    roadmapTabURL = 'https://redmine.org/projects/redmine/roadmap'
    issuesTabURL = 'https://redmine.org/projects/redmine/issues'
    newsTabURL = 'https://redmine.org/projects/redmine/news'
    wikiTabURL = 'https://redmine.org/projects/redmine/wiki'
    boardsTabURL = 'https://redmine.org/projects/redmine/boards'
    repositoryTabURL = 'https://redmine.org/projects/redmine/repository'
    securityScanerURL = 'https://plan.io/redmine-security-scanner/'
    logoURL = 'https://redmine.org/projects/redmine/wiki/Logo'

    mainHeading = () => cy.xpath('//div[@id="content"]//h1[text()="Redmine"]')
    latestReleasesHeading = () => cy.xpath('//h3[text()="Latest releases"]')
    
    //Top main menu
    searchInput = () => cy.get('[id="q"]')    
    logInButton = () => cy.get('[href="/login"]')
    registrationButton = () => cy.get('[href="/account/register"]')

    //Wiki Links
    redmineCookbook = () => cy.get('[href*="redmine-cookbook"]')
    faqLink = () => cy.get('p [href*="FAQ"]')
    changelogLink = () => cy.get('p [href*="Changelog"]')
    privacyPolicyLink = () => cy.get('[href*="PrivacyPolicy"]')
    pluginsLink = () => cy.get('[href="/plugins"]')
    securityAdvisoriesLink = () => cy.get('li [href*="Security_Advisories"]')
    securityScannerLink = () => cy.get('[href*="redmine-security-scanner"]')
    planioHeading = () => cy.xpath('//h1[text()="Is your Redmine secure?"]')
    planioInput = () => cy.get('[placeholder="https://redmine.example.org"]')
    faqHeading = () => cy.xpath('//h1[text()="Frequently Asked Questions"]')
    logoAndIconLink = () => cy.get('[href*="Logo"]')
    logoImg = () => cy.get('img[src*="redmine_logo_v1.png"]')
    chatroomLink = () => cy.get('[href*="IRC"]')
    ircHeading = () => cy.xpath('//h1[text()="IRC"]')
    ircClientLink = () => cy.get('[href*="channel=#redmine"]')
    liberaChatInput = () => cy.get('[class="u-input"]')
    policyHeading = () => cy.xpath('//h1[text()="redmine.org privacy policy"]')
    allPluginsLink = () => cy.get('[href="/plugins?page=1"]')
    pluginSelector = () => cy.get('select[id="v"]')
    pluginHeading = () => cy.xpath('//h2[contains(text(), "5.0.x")]')
    
    // Tabs
    activityTab = () => cy.get('[class*=activity]')
    roadmapTab = () => cy.get('[href*="roadmap"]')
    downloadTab = () => cy.get('li [href*="Download"]')
    issuesTab = () => cy.get('[href*="issues"]')
    newsTab = () => cy.get('[href*="news"]')
    wikiTab = () => cy.get('[href="/projects/redmine/wiki"]')
    boardsTab = () => cy.get('li [href*="boards"]')
    repositoryTab = () => cy.get('[href*="repository"]')
    overviewTab = () => cy.get('[href="/projects/redmine"]')

    typeToSearchField = () => {
        this.searchInput().click().type(`${this.searchTextInput}{enter}`)
    }

    buyCookbookRedirectionCheck = () => {
        this.redmineCookbook().last().click()
        cy.url().should('include', this.buyBookLink)
    }

    loginClick = () => {
        this.logInButton().click()
        cy.url().should('eq', this.loginPageLink)
    }

    registrationClick = () => {
        this.registrationButton().click()
        cy.url().should('eq', this.registrationPageLink)
    }

    overviewTabClick = () => {
        this.overviewTab().click()
        cy.url().should('eq', this.overviewTabURL)
    }

    downloadTabClick = () => {
        this.downloadTab().click()
        cy.url().should('eq', this.downloadTabURL)
    }

    activityTabClick = () => {
        this.activityTab().click()
        cy.url().should('eq', this.activityTabURL)
    }

    roadmapTabClick = () => {
        this.roadmapTab().click()
        cy.url().should('eq', this.roadmapTabURL)
    }

    issuesTabClick = () => {
        this.issuesTab().click()
        cy.url().should('eq', this.issuesTabURL)
    }

    newsTabClick = () => {
        this.newsTab().click()
        cy.url().should('eq', this.newsTabURL)
    }

    verifyWikiPage = () => {
        this.wikiTab().click()
        cy.url().should('eq', this.wikiTabURL)
        this.mainHeading().should('have.text', this.mainHeadingText)
        this.latestReleasesHeading().should('have.text', this.latestReleasesHeadingText)
    }

    boardsTabClick = () => {
        this.boardsTab().click()
        cy.url().should('eq', this.boardsTabURL)
    }

    repositoryTabClick = () => {
        this.repositoryTab().click()
        cy.url().should('eq', this.repositoryTabURL)
    }

    verifySecurityScanner = () => {
        this.securityAdvisoriesLink().click()
        this.securityScannerLink().click()
        this.planioHeading().should('have.text', this.planioHeadingText)
        this.planioInput().should('be.visible')
    }

    verifyFAQ = () => {
        this.faqLink().click()
        this.faqHeading().should('have.text', this.faqHeadingText)
    }

    checkLogoIcon = () => {
        this.logoAndIconLink().click()
        cy.url().should('eq', this.logoURL)
        this.logoImg().should('be.visible')
    }

    verifyReminesChat = () => {
        this.chatroomLink().click()
        this.ircHeading().should('have.text', this.ircHeadingText)
        this.ircClientLink().click()
        this.liberaChatInput().last().should('have.value', '#redmine')
    }

    verifyPrivacyPolicy = () => {
        this.privacyPolicyLink().click()
        this.policyHeading().should('have.text', this.policyHeadingText)
    }

    showPlugins = () => {
        this.pluginsLink().click()
        this.allPluginsLink().click()
        this.pluginSelector().select('5.0').should('have.value', '5.0')
        this.pluginHeading().should('exist')
    }
}