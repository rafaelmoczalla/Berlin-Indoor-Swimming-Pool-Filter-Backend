import cors_proxy from 'cors-anywhere';

// Listen on a specific host via the HOST environment variable
var host = process.env.PORT ? '0.0.0.0' : '127.0.0.1';
// Listen on a specific port via the PORT environment variable
var port = process.env.PORT || 5000;

cors_proxy.createServer({
    originWhitelist: [], // Allow all origins
    requireHeader: ['origin', 'x-requested-with'],
    removeHeaders: ['cookie', 'cookie2']
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