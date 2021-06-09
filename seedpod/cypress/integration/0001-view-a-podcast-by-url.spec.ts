/// <reference types="cypress" />

import {home} from "../support/pages";

context('Actions', () => {
    it('should show me the episodes on a podcast', () => {
        // Given I know what is on a podcast
        cy.intercept('http://www.example.com/podcast.rss', {
            statusCode: 200,
            body: 'Hello',
        })
        // When I choose to view the episodes for the podcast's URL
        home.launch()
        home.urlFeed.set('http://www.example.com/podcast.rss')
        home.viewURLButton.click()
        // Then I should see the correct episodes

    })
})
