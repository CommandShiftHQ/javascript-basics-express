const express = require('express');

const app = express();

app.use(express.json());

app.get('/strings/hello/:string', (req, res) => {
  return res.status(200).json({
    result: `Hello, ${req.params.string}!`,
  });
});

module.exports = app;
