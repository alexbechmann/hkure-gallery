import * as functions from 'firebase-functions';
import * as cors from 'cors';

const corsResponse = cors({ origin: true });

export const contact = functions.https.onRequest((req, res) => {
  corsResponse(req, res, () => {
    res.send('Mail sent.');
  });
});
