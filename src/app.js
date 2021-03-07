const express = require('express');
const { sayHello, uppercase, lowercase, firstCharacter } = require('./lib/strings');

const app = express();

app.get('/strings/hello/:string', (req, res) => {
  res.status(200).json({ result: sayHello(req.params.string) });
});

app.get('/strings/upper/:string', (req, res) => {
  res.status(200).json({ result: uppercase(req.params.string) });
});

app.get('/strings/lower/:string', (req, res) => {
  res.status(200).json({ result: lowercase(req.params.string) });
});

app.get('/strings/first_character/:string', (req, res) => {
  res.status(200).json({ result: lowercase(req.params.string) });
});

app.get('/strings/first-characters/:id', (req, res) => {
  if (req.query.length === 'undefined') {
    res.json({ result: firstCharacter(req.params.id, 0) });
  } else {
    res.json({ result: firstCharacter(req.params.id, req.query.length) });
  }
});

/* app.get('/strings/hello/:string', (req, res) => {
  res.status(200).json({ result: uppercase(req.params.string) });
}); */

/* app.get('/strings/hello/turtle', (req, res) => {
  res.status(200).json({ result: 'Hello, turtle!' });
});n */

module.exports = app;
