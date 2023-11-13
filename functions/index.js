const functions = require('firebase-functions');
const cors = require('cors')({ origin: true });
const axios = require('axios');

exports.detectObjects = functions.https.onRequest((req, res) => {
  cors(req, res, async () => {
    try {
      const response = await axios.post('end point', req.body);
      res.json(response.data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
});
