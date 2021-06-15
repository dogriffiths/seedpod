import limitByCategory from "./limitByCategory";

const data = {
    "X-1015112903" : {
        "categories" : [ "Comedy" ],
        "title" : "That Happens",
        "url" : "https://feeds.megaphone.fm/that-happens",
        "views" : 1
    },
    "X-1177610792" : {
        "categories" : [ "Society & Culture", "Society & Culture", "History" ],
        "title" : "The Anthropocene Reviewed",
        "url" : "https://feeds.simplecast.com/p7S4nr_h",
        "views" : 1
    },
    "X-1186014644" : {
        "categories" : [ "Comedy", "Leisure" ],
        "title" : "Wait Wait... Don't Tell Me!",
        "url" : "https://feeds.npr.org/344098539/podcast.xml",
        "views" : 1
    },
    "X-1241538766" : {
        "categories" : [ "TV & Film" ],
        "title" : "Kill James Bond!",
        "url" : "https://feed.podbean.com/killjamesbondpod/feed.xml",
        "views" : 1
    },
    "X-1311019339" : {
        "categories" : [ "True Crime", "Society & Culture" ],
        "title" : "Confronting",
        "url" : "https://rss.art19.com/confronting-oj-simpson",
        "views" : 1
    },
    "X-146656449" : {
        "categories" : [ "News" ],
        "title" : "Innovation Hub",
        "url" : "https://feeds.wgbh.org/106/feed-rss.xml",
        "views" : 2
    },
    "X-1522725216" : {
        "categories" : [ "Business" ],
        "title" : "WorkLife with Adam Grant",
        "url" : "https://feeds.feedburner.com/WorklifeWithAdamGrant",
        "views" : 1
    },
    "X-159589200" : {
        "categories" : [ "Business" ],
        "title" : "How I Built This with Guy Raz",
        "url" : "https://feeds.npr.org/510313/podcast.xml",
        "views" : 1
    },
}

describe('limitByCategory', () => {
    it('should be able to filter', () => {
        const result = limitByCategory(data, "Comedy");
        expect(result).toEqual({
            "X-1015112903" : {
                "categories" : [ "Comedy" ],
                "title" : "That Happens",
                "url" : "https://feeds.megaphone.fm/that-happens",
                "views" : 1
            },
            "X-1186014644" : {
                "categories" : [ "Comedy", "Leisure" ],
                "title" : "Wait Wait... Don't Tell Me!",
                "url" : "https://feeds.npr.org/344098539/podcast.xml",
                "views" : 1
            },
        })
    });
})