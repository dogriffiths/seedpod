import * as admin from "firebase-admin";
import proxy from "./proxy";
import podcasts from "./podcasts";
import {Change, EventContext} from "firebase-functions";
import {database} from "firebase-admin/lib/database";
import * as Parser from "rss-parser";

import DataSnapshot = database.DataSnapshot;

const functions = require('firebase-functions');

const parser = new Parser()

// The Firebase Admin SDK to access the Firebase Realtime Database.
admin.initializeApp(functions.config().firebase);

exports.proxy = functions.https.onRequest(proxy);
exports.podcasts = functions.https.onRequest(podcasts);

exports.lookupFeed = functions.database.ref('/lookup')
    .onWrite(async (event: Change<DataSnapshot>, context: EventContext) => {
        const data = event.after;
        const url = data.val();
        if (url) {
            let feed = await parser.parseURL(url);
            const db = admin.database();
            const ref = db.ref('podcasts');
            await ref.push().set({
                description: feed.description,
                image: feed.itunes ? feed.itunes.image : (feed.image ? feed.image.url : ''),
                title: feed.title,
                url: url
            });
            return data.ref.set(null);
        }
        console.error('Unable to lookup feed with null url!');
    });