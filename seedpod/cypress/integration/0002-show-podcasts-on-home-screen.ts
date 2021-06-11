/// <reference types="cypress" />

import {episodes, home} from "../support/pages";
import {table, tableRows} from "../support/utils";

context('Actions', () => {
    it('should show me some other podcast', () => {
        // Given I know what is on a podcast
        cy.intercept({
            pathname: '/api/proxy',
            query: {
                url: 'http://www.example.com/podcast2.rss'
            },
        }, {
            fixture: 'example.rss',
        })
        cy.intercept({
            pathname: '/api/podcasts/popular',
        }, {
            fixture: 'podcasts.json',
        })
        // When I go to the home page
        home.launch()
        // Then I should see the popular podcasts
        home.popular.matches(tableRows`
        | Title             | Description           | Image                               |
        | Example podcast 1 | Example description 1 | http://www.example.com/podcast1.jpg |
        | Example podcast 2 | Example description 2 | http://www.example.com/podcast2.jpg |
        `)
        home.popular.item(1).click()
        episodes.episodes.matches(tableRows`
        | Title     | Description    | Duration | Details                       | File type  | File size |
        | Episode 1 | All about fish | 1:23:45  | https://www.example.com/1.mp4 | video/mpeg | 1         |
        | Episode 2 | All about dogs | 4:56:18  | https://www.example.com/1.mp3 | audio/mpeg | 2         |
        `)
    })
})
