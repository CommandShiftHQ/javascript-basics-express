const express = require('express');
const { sayHello } = require('./lib/strings');

const app = express();

app.get('/strings/hello/:string', (req, res) => {
  res.status(200).json({ result: sayHello(req.params.string) });
});

/* app.get('/strings/hello/turtle', (req, res) => {
  res.status(200).json({ result: 'Hello, turtle!' });
});n */

module.exports = app;
