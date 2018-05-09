import * as functions from 'firebase-functions';
import * as cors from 'cors';

const corsResponse = cors({ origin: true });

export const contact = functions.https.onRequest((req, res) => {
  corsResponse(req, res, () => {
    if (req.body && req.body.message) {
      console.log(`Received message: ${req.body.message}`);
      res.send('Mail sent.');
    } else {
      res.status(500).send();
    }
  });
});
