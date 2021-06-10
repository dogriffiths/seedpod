/// <reference types="cypress" />

import {episodes, home} from "../support/pages";
import {table, tableRows} from "../support/utils";

context('Actions', () => {
    it('should show me the episodes on a podcast', () => {
        // Given I know what is on a podcast
        cy.intercept({
            pathname: '/api/proxy',
            query: {
                url: 'http://www.example.com/aPodcast.rss'
            },
        }, {
            fixture: 'example.rss',
        })
        // When I choose to view the episodes for the podcast's URL
        home.launch()
        home.urlFeed.set('http://www.example.com/aPodcast.rss')
        home.viewURLButton.click()
        // Then I should see the correct episodes
        episodes.episodes.matches(tableRows`
        | Title     | Description    | Duration | File                          | File type  | File size | Image                               |
        | Episode 1 | All about fish | 1:23:45  | https://www.example.com/1.mp4 | video/mpeg | 1         | https://www.example.com/1.jpg       |
        | Episode 2 | All about dogs | 4:56:18  | https://www.example.com/1.mp3 | audio/mpeg | 2         | https://www.example.com/podcast.jpg |
        `)
    })
    it('should show me an error if the feed has a funny status code', () => {
        // Given I look for a podcast with an error response
        cy.intercept({
            pathname: '/api/proxy',
            query: {
                url: 'http://www.example.com/error.rss'
            },
        }, {
            statusCode: 404
        })
        // When I choose to view the episodes for the podcast's URL
        home.launch()
        home.urlFeed.set('http://www.example.com/error.rss')
        home.viewURLButton.click()
        // Then I should see the error
        episodes.errorMessage.matches('Status code 404')
    })
})
