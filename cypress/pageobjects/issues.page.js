export class IssuesPage {

    mainHeadingText = 'Задачи'
    availableColumnsOptions = ['project', 'parent', 'priority', 'author', 'assigned_to', 'fixed_version', 'start_date', 'due_date', 'estimated_hours', 'done_ratio', 'created_on', 'closed_on', 'relations', 'cf_2', 'cf_4']
    selectedColumnsOptions = ['tracker', 'status', 'updated_on', 'category']

    mainHeading = () => cy.xpath('//h2[text()="Задачи"]')
    filtersFieldset = () => cy.get('[id="filters"]')
    optionsFieldset = () => cy.xpath('//legend[text()="Опции"]')
    addFilterSelect = () => cy.get('[id="add_filter_select"]')
    treckerCheckbox = () => cy.get('[for="cb_tracker_id"]')
    authorsCheckbox = () => cy.get('[for="cb_author_id"]')
    removeFiltersButton = () => cy.get('[class="icon icon-reload"]')
    selectedColumns = () => cy.get('[id="selected_columns"]')
    applyButton = () => cy.get('[class="icon icon-checked"]')
    toAvailableArrow = () => cy.get('[value="←"]')
    toSelectedArrow = () => cy.get('[value="→"]')
    tableTitles = () => cy.get('[class="list issues"] th[title]')
    themeTitle = () => cy.get('[class="list issues"] [title*="Тема"]')
    listIssuesTable = () => cy.get('[class="list issues"]')
    descriptionCheckbox = () => cy.get('[class="inline"]')
    descriptionClass = () => cy.get('[class="description"]')
    availableColumns = () => cy.get('[id="available_columns"]')

    verifyIssuesPage = () => {
        this.mainHeading().should('have.text', this.mainHeadingText)
        this.filtersFieldset().should('be.visible')
        this.optionsFieldset().should('be.visible')
    }

    chooseSelectors = () => {
        this.addFilterSelect().select('tracker_id')
        this.addFilterSelect().select('author_id')
    }

    checkAddedCheckboxes = () => {
        this.treckerCheckbox().should('be.visible')
        this.authorsCheckbox().should('be.visible')
    }

    removeFiltersOnPage = () => {
        this.removeFiltersButton().click()
        this.treckerCheckbox().should('not.exist')
        this.authorsCheckbox().should('not.exist')
    }

    removeColumnsFromTable = () => {
        this.optionsFieldset().click()
        this.selectedColumns().select(this.selectedColumnsOptions)
                            .invoke('val')
                            .should('deep.equal', this.selectedColumnsOptions)
        this.toAvailableArrow().click()
        this.applyButton().click()
        this.listIssuesTable().find('th').should('have.length', 3)
        this.themeTitle().should('exist')
    }

    descriptionCheck = () => {
        this.optionsFieldset().click()
        this.descriptionCheckbox().click()
        this.applyButton().click()
        this.descriptionClass().first().should('exist')
    }

    addColumnsToChoosen = () => {
        this.optionsFieldset().click()
        this.availableColumns().select(this.availableColumnsOptions)
                            .invoke('val')
                            .should('deep.equal', this.availableColumnsOptions)
        this.toSelectedArrow().click()
        this.applyButton().click()
        this.listIssuesTable().find('th').should('have.length', 22)
    }
}