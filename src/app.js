const express = require('express');

const app = express();

// app.get('/strings/hello/:name', (req, res) => {
//   const { name } = req.params;
//   res.status(200).json({ result: `Hello, ${name}!` });
// });

const { sayHello } = require('./lib/strings');

app.get('/strings/hello/:string', (req, res) => {
  res.json({ result: sayHello(req.params.string) });
});

const { uppercase } = require('./lib/strings');

app.get('/strings/upper/:string', (req, res) => {
  res.json({ result: uppercase(req.params.string) });
});

const { lowercase } = require('./lib/strings');

app.get('/strings/lower/:string', (req, res) => {
  res.json({ result: lowercase(req.params.string) });
});

const { firstCharacter } = require('./lib/strings');

// app.get('/strings/first-character/:string', (req, res) => {
//   res.json({ result: firstCharacter(req.params.string) });
// });

const { firstCharacters } = require('./lib/strings');

app.get('/strings/first-characters/:string', (req, res) => {
  if (req.query.length === undefined) {
    res.json({ result: firstCharacter(req.params.string) });
  } else {
    res.json({ result: firstCharacters(req.params.string, req.query.length) });
  }
});

module.exports = app;
