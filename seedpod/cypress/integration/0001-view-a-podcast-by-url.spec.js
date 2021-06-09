/// <reference types="cypress" />

context('Actions', () => {
    it('should show me the episodes on a podcast', () => {
        // Given I know what is on a podcast
        cy.intercept('http://www.example.com/podcast.rss', {
            statusCode: 200,
            body: 'Hello',
        })
        // When I choose to view the episodes for the podcast's URL
        cy.visit('/')
        cy.get('.urlFeed').type('http://www.example.com/podcast.rss')
        cy.contains('View URL').click()
        // Then I should see the correct episodes

    })
})
