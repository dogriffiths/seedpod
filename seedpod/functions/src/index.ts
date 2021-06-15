import * as admin from "firebase-admin";
import proxy from "./proxy";
import podcasts from "./podcasts";
import {Change, EventContext} from "firebase-functions";
import {database} from "firebase-admin/lib/database";
import * as Parser from "rss-parser";
import { hashString } from "./utils";

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
            const db = admin.database();
            const hashURL = hashString(url);
            const existing = db.ref('podcasts').child(hashURL);
            existing.once('value').then(async (v) => {
                const exists = v.val();
                if (exists) {
                    return existing.child('views').set(exists.views ? exists.views + 1 : 1);
                } else {
                    let feed = await parser.parseURL(url);
                    const ref = db.ref('podcasts');
                    await ref.child(hashURL).set({
                        description: feed.description,
                        image: feed.itunes ? feed.itunes.image : (feed.image ? feed.image.url : ''),
                        title: feed.title,
                        url: url,
                        categories: feed.itunes ? (feed.itunes.categories ? feed.itunes.categories : []) : [],
                        views: 1,
                    });
                    return data.ref.set(null);
                }
            });
        }
        console.error('Unable to lookup feed with null url!');
    });