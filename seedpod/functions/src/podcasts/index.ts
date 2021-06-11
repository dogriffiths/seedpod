import * as express from 'express';
import * as admin from "firebase-admin";


const cookieParser = require('cookie-parser')();

const podcasts = express();

const cors = require('cors')({origin: true});
podcasts.use(cors);
podcasts.use(cookieParser);

const getPodcasts = async () => {
    const podcastsSnapshot = await admin.database()
        .ref(`/podcasts`).once('value');
    return podcastsSnapshot.val();
};


podcasts.get('/api/podcasts/popular', async (req, res) => {
    const podcasts = await getPodcasts();
    res.status(200)
        .type('application/json')
        .send(Object.values(podcasts));
});

export default podcasts;
