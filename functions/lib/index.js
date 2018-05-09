"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
exports.contact = functions.https.onRequest((request, response) => {
    response.send('Mail sent!');
});
//# sourceMappingURL=index.js.map