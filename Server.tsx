import cors_proxy from 'cors-anywhere';

// Listen on a specific host via the HOST environment variable
var host = process.env.HOST || 'localhost';
// Listen on a specific port via the PORT environment variable
var port = process.env.PORT || 5000;

cors_proxy.createServer({
    originWhitelist: [], // Allow all origins
    removeHeaders: [
      'cookie',
      'cookie2',
      // Strip Heroku-specific headers
      'x-request-start',
      'x-request-id',
      'via',
      'connect-time',
      'total-route-time',
      // Other Heroku added debug headers
      // 'x-forwarded-for',
      // 'x-forwarded-proto',
      // 'x-forwarded-port',
    ],
    redirectSameOrigin: true,
    httpProxyOptions: {
      // Do not add X-Forwarded-For, etc. headers, because Heroku already adds it.
      xfwd: false,
    }
}).listen(port, host, function() {
    console.log('Running CORS Anywhere on ' + host + ':' + port);
});

/*
import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';

var app = express();
app.use(cors());
var port = process.env.PORT || 5000;

// create a GET route
app.get('/api*', async (req, res) => {
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  const url = req.url.toString().substring(5);

  await fetch(url, {
    method: 'GET'
  }).then(response => {
    if (response.ok) {
      return response.text();
    } else {
      console.error('Cannot communicate with website.');
    }

    return 'failed';
  }).then(text => {
    res.send(text);
  }).catch(error => {
    res.send('proxy server: ' + error.toString());
  });
});

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`));*/