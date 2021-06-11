import parse from 'html-react-parser'

describe('parser', () => {
    it('should parse things without crashing', () => {
        // parse('<p>Our ninth Kickstarter backers reward episode discusses the sweep of history during our period and what lies under the maps.</p> &#10;&nbsp;<br /><hr><p style=\'color: grey; font - size: 0.75em; \'>See <a style=\'color: grey; \' target=\'_blank\' rel=\'noopener noreferrer\' href=\'https://acast.com/privacy\'>acast.com/privacy</a> for privacy and opt-out information.</p>')
        // parse('<p>.</p> &#10;&nbsp;<br /><hr><p style=\'color: grey; font - size: 0.75em; \'>See <a style=\'color: grey; \' target=\'_blank\' rel=\'noopener noreferrer\' href=\'https://acast.com/privacy\'>acast.com/privacy</a> for privacy and opt-out information.</p>')
        // parse('<p>.</p> &#10;&nbsp;<br /><hr><p style=\'color: grey; font - size: 0.75em; \'>A</p>')
        // parse('<p style=\'color: grey; font - size: 0.75em; \'>A</p>')
        parse('<p style=\'color: grey; font-size: 0.75em; \'>A</p>')
    })
})