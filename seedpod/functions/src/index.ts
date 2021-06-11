import * as admin from "firebase-admin";
import proxy from "./proxy";
import podcasts from "./podcasts";

const functions = require('firebase-functions');

// The Firebase Admin SDK to access the Firebase Realtime Database.
admin.initializeApp(functions.config().firebase);

exports.proxy = functions.https.onRequest(proxy);
exports.podcasts = functions.https.onRequest(podcasts);
