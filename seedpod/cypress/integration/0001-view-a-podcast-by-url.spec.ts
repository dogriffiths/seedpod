/// <reference types="cypress" />

import {episodes, home} from "../support/pages";
import {table} from "../support/utils";

context('Actions', () => {
    it('should show me the episodes on a podcast', () => {
        // Given I know what is on a podcast
        cy.intercept('http://www.example.com/aPodcast.rss', {
            statusCode: 200,
            fixture: 'example.rss',
        })
        // When I choose to view the episodes for the podcast's URL
        home.launch()
        home.urlFeed.set('http://www.example.com/aPodcast.rss')
        home.viewURLButton.click()
        // Then I should see the correct episodes
        episodes.episodes.matches(table`
        | Title     | Description    |
        | Episode 1 | All about fish |
        | Episode 2 | All about dogs |
        `)
    })
})
