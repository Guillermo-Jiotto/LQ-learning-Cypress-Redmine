import { ActivityPage } from "../pageobjects/activity.page.js"
import { BoardsPage } from "../pageobjects/boards.page.js"
import { DownloadPage } from "../pageobjects/download.page.js"
import { IssuesPage } from "../pageobjects/issues.page.js"
import { LoginPage } from "../pageobjects/login.page.js"
import { MainPage } from "../pageobjects/main.page.js"
import { NewsPage } from "../pageobjects/news.page.js"
import { OverviewPage } from "../pageobjects/overview.page.js"
import { RegistrationPage } from "../pageobjects/registration.page.js"
import { RepositoryPage } from "../pageobjects/repository.page.js"
import { RoadmapPage } from "../pageobjects/roadmap.page.js"
import { SearchPage } from "../pageobjects/search.page.js"

describe('Testing Redmine', () => {

  const mainPage = new MainPage()
  const searchPage = new SearchPage()
  const loginPage = new LoginPage()
  const registrationPage = new RegistrationPage()
  const overviewPage = new OverviewPage()
  const downloadPage = new DownloadPage()
  const activityPage = new ActivityPage()
  const roadmapPage = new RoadmapPage()
  const issuesPage = new IssuesPage()
  const newsPage = new NewsPage()
  const boardsPage = new BoardsPage()
  const repositoryPage = new RepositoryPage()

  beforeEach(() => {
    cy.visit('https://redmine.org/')
  })

  it('TC_1 Check if the search on mane page is working', () => {
    mainPage.typeToSearchField()
    searchPage.checkHeading()
  })

  it('TC_2 Check if redirection to bookstore is working', () => {
    mainPage.buyCookbookRedirectionCheck()
  })

  it('TC_3 Try to login with invalid credentials', () => {
    mainPage.loginClick()
    loginPage.loginWithInvalidCredentials()
  })

  it('TC_4 Restore password page check', () => {
    mainPage.loginClick()
    loginPage.restorePasswordPageCheck()
  })

  it('TC_5 Registration blank check', () => {
    mainPage.registrationClick()
    registrationPage.verifyRegistrationPage()
  })

  it('TC_6 Verify Overview Page', () => {
    mainPage.overviewTabClick()
    overviewPage.verifyOverviewPage()
  })

  it('TC_7 Verify Download Page', () => {
    mainPage.downloadTabClick()
    downloadPage.verifyDownloadPage()
  })

  it('TC_8 Verify Activity Page', () => {
    mainPage.activityTabClick()
    activityPage.verifyActivityPage()
  })

  it('TC_9 Verify Roadmap Page', () => {
    mainPage.roadmapTabClick()
    roadmapPage.verifyRoadmapPage()
  })

  it('TC_10 Verify Issues Page', () => {
    mainPage.issuesTabClick()  
    issuesPage.verifyIssuesPage()
  })

  it('TC_11 Verify News Page', () => {
    mainPage.newsTabClick()
    newsPage.verifyNewsPage()
  })

  it('TC_12 Verify Wiki Page', () => {
    mainPage.verifyWikiPage()
  })

  it('TC_13 Verify Boards Page', () => {
    mainPage.boardsTabClick()
    boardsPage.verifyBoardsPage()
  })

  it('TC_14 Verify Repository Page', () => {
    mainPage.repositoryTabClick()
    repositoryPage.verifyRepositoryPage()
  })

  it('TC_15-16 Add filters on Issues Tab', () => {
    mainPage.issuesTabClick()
    issuesPage.chooseSelectors()
    issuesPage.checkAddedCheckboxes()
    issuesPage.removeFiltersOnPage()
  })

  it('TC_17 Remove columns from table on Issues Tab', () => {
    mainPage.issuesTabClick()
    issuesPage.removeColumnsFromTable()
  })

  it('TC_18 Check Description option on Issues Tab', () => {
    mainPage.issuesTabClick()
    issuesPage.descriptionCheck()
  })

  it('TC_19 Add all columns to table on tab Issue', () => {
    mainPage.issuesTabClick()
    issuesPage.addColumnsToChoosen()
  })

  it('TC_20 Verify Job offer and Help topics on Boards tab', () => {
    mainPage.boardsTabClick()
    boardsPage.verifyJobOfferTopic()
    mainPage.boardsTabClick()
    boardsPage.verifyHelpTopic()
  })

  it('TC_21 Check Statistic on Repository tab', () => {
    mainPage.repositoryTabClick()
    repositoryPage.verifyStatisticLink()
  })

  it('TC_22 Verify Redmine Security Scanner', () => {
    mainPage.verifySecurityScanner()
  })

  it('TC_23 Verify FAQ', () => {
    mainPage.verifyFAQ()
  })

  it('TC_24 Check Redmines logo at Logo-page', () => {
    mainPage.checkLogoIcon()
  })

  it('TC_25 Verify Remines chat', () => {
    mainPage.verifyReminesChat()
  })

  it('TC_26 Check work of checkboxes on Roadmap Tab', () => {
    mainPage.roadmapTabClick()
    roadmapPage.checkWorkOfCheckboxes()
  })

  it('TC_27 Check work of checkboxes on Activity Tab', () => {
    mainPage.activityTabClick()
    activityPage.checkWorkOfCheckboxes()
  })

  it('TC_28 Verify Changelog page', () => {
    mainPage.downloadTabClick()
    downloadPage.verifyChangelog()
  })

  it('TC_29 Verify Privacy Policy page', () => {
    mainPage.verifyPrivacyPolicy()
  })

  it('TC_30 Show all plugins for Redmine 5.0', () => {
    mainPage.showPlugins()
  })
})