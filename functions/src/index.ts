import * as functions from 'firebase-functions';

export const contact = functions.https.onRequest((request, response) => {
  response.send('Mail sent!');
});
