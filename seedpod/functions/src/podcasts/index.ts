import * as express from 'express';
const cookieParser = require('cookie-parser')();

const podcasts = express();

const cors = require('cors')({origin: true});
podcasts.use(cors);
podcasts.use(cookieParser);

podcasts.get('/api/podcasts/popular', (req, res) => {
    res.status(200)
        .type('application/json')
        .send([
            {
                "url": "https://feeds.simplecast.com/54nAGcIl",
                "title": "The Daily",
                "description": "This is what the news should sound like. The biggest stories of our time, told by the best journalists in the world. Hosted by Michael Barbaro. Twenty minutes a day, five days a week, ready by 6 a.m.",
                "image": "https://image.simplecastcdn.com/images/03d8b493-87fc-4bd1-931f-8a8e9b945d8a/2cce5659-f647-4366-b318-46e4b67afcfa/3000x3000/c81936f538106550b804e7e4fe2c236319bab7fba37941a6e8f7e5c3d3048b88fc5b2182fb790f7d446bdc820406456c94287f245db89d8656c105d5511ec3de.jpeg?aid=rss_feed"
            },
            {
                "url": "http://feeds.megaphone.fm/watergate",
                "title": "Slow Burn",
                "description": "In 2003, the United States invaded Iraq without provocation. Most Americans supported the war—as did most politicians and intellectuals, both liberal and conservative. Today, it’s universally considered a disaster.Hosted by award-winning reporter Noreen Malone, the fifth season of Slow Burn explores the people and ideas that propelled the country into the Iraq War, and the institutions that failed to stop it. How did the Iraq catastrophe happen? And what was it like to watch America make one of its most consequential mistakes?",
                "image": "https://megaphone.imgix.net/podcasts/86fe6492-bb2a-11e7-873d-cf56b25e8a62/image/3000x3000_PodcastArt_SlowBurnS5.jpg?ixlib=rails-2.1.2&amp;max-w=3000&amp;max-h=3000&amp;fit=crop&amp;auto=format,compress"
            }
        ]);
});

export default podcasts;
