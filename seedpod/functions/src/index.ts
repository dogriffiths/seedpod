import * as admin from "firebase-admin";
import proxy from "./proxy";

const functions = require('firebase-functions');

// The Firebase Admin SDK to access the Firebase Realtime Database.
admin.initializeApp(functions.config().firebase);

exports.proxy = functions.https.onRequest(proxy);
