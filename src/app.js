const express = require('express');
const bodyParser = require('body-parser');
const strings = require('./lib/strings');
const numbers = require('./lib/numbers');

const app = express();

app.use(express.json());

app.get('/strings/hello/:string', (req, res) => {
  res.status(200).json({ result: strings.sayHello(req.params.string) });
});

app.get('/strings/upper/:string', (req, res) => {
  res.status(200).json({ result: strings.uppercase(req.params.string) });
});

app.get('/strings/lower/:string', (req, res) => {
  res.status(200).json({ result: strings.lowercase(req.params.string) });
});

app.get('/strings/first-characters/:string', (req, res) => {
  if (req.query.length) {
    res.status(200).json({ result: strings.firstCharacters(req.params.string, req.query.length) });
  }
  res.status(200).json({ result: strings.firstCharacter(req.params.string) });
});

app.get('/numbers/add/:a/and/:b', (req, res) => {
  const a = parseInt(req.params.a);
  const b = parseInt(req.params.b);

  if (Number.isNaN(a) || Number.isNaN(b)) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  }
  res.status(200).json({ result: a + b });
});

app.get('/numbers/subtract/:a/from/:b', (req, res) => {
  const a = parseInt(req.params.a);
  const b = parseInt(req.params.b);

  if (Number.isNaN(a) || Number.isNaN(b)) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  }
  res.status(200).json({ result: b - a });
});

app.post('/numbers/multiply', (req, res) => {
  const a = req.body.a;
  const b = req.body.b;

  if (a == undefined || b == undefined) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  } else if (Number.isNaN(parseInt(a)) || Number.isNaN(parseInt(b))) {
    res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
  } else {
    res.status(200).json({ result: a * b });
  }
});

app.post('/numbers/divide', (req, res) => {
  const a = req.body.a;
  const b = req.body.b;

  if (b === 0) {
    res.status(400).json({ error: 'Unable to divide by 0.' });
  } else if (a == undefined || b == undefined) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  } else if (Number.isNaN(parseInt(a)) || Number.isNaN(parseInt(b))) {
    res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
  } else {
    res.status(200).json({ result: a / b });
  }
});

app.post('/numbers/remainder', (req, res) => {
  const a = req.body.a;
  const b = req.body.b;

  if (b === 0) {
    res.status(400).json({ error: 'Unable to divide by 0.' });
  } else if (a == undefined || b == undefined) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  } else if (Number.isNaN(parseInt(a)) || Number.isNaN(parseInt(b))) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  } else {
    res.status(200).json({ result: a % b });
  }
});

module.exports = app;
