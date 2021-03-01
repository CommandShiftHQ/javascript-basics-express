const express = require('express');

const app = express();

app.get('/strings/hello/world', (req, res) => {
  res.status(200).json({ result: 'Hello, world!' });
});

module.exports = app;
