import * as express from 'express';
import * as admin from "firebase-admin";
import limitByCategory from "./limitByCategory";


const cookieParser = require('cookie-parser')();

const podcasts = express();

const cors = require('cors')({origin: true});
podcasts.use(cors);
podcasts.use(cookieParser);

const getPodcasts = async () => {
    const podcastsSnapshot = await admin.database()
        .ref(`/podcasts`)
        .orderByChild('views')
        .limitToLast(10)
        .once('value');
    return podcastsSnapshot.val();
};

const getCategory = async (category: string) => {
    const podcastsSnapshot = await admin.database()
        .ref(`/podcasts`)
        .once('value');
    let allPodcasts = podcastsSnapshot.val();
    return limitByCategory(allPodcasts, category);
};


podcasts.get('/api/podcasts/popular', async (req, res) => {
    const podcasts = await getPodcasts();
    res.status(200)
        .type('application/json')
        .send(Object.values(podcasts));
});


podcasts.get('/api/podcasts/categories/:category', async (req, res) => {
    const podcasts = await getCategory(req.params.category);
    res.status(200)
        .type('application/json')
        .send(Object.values(podcasts));
});

export default podcasts;
