const express = require('express');

const {
  sayHello,
  uppercase,
  lowercase,
  firstCharacter,
  firstCharacters,
} = require('./lib/strings.js');

const {
  add, 
  subtract, 
  multiply,
  divide 
} = require('./lib/numbers.js');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello');
});

// STRINGS

app.get('/strings/hello/:string', (req, res) => {
  const { string } = req.params;
  const result = sayHello(string);
  res.status(200).send({ result });
});

app.get('/strings/upper/:string', (req, res) => {
  const { string } = req.params;
  const result = uppercase(string);
  res.status(200).send({ result });
});

app.get('/strings/lower/:string', (req, res) => {
  const { string } = req.params;
  const result = lowercase(string);
  res.status(200).send({ result });
});

app.get('/strings/first-characters/:string', (req, res) => {
  const { string } = req.params;
  const { length } = req.query;
  const result = !length ? firstCharacter(string) : firstCharacters(string, length);
  res.status(200).send({ result });
});

//  END STRINGS

//  NUMBERS

app.get('/numbers/add/:a/and/:b', (req, res) => {
  const n1 = Number(req.params.a);
  const n2 = Number(req.params.b);
  return Object.is(n1, NaN) || Object.is(n2, NaN)
    ? res.status(400).send({ error: 'Parameters must be valid numbers.' })
    : res.status(200).send({ result: add(n1, n2) });
});

app.get('/numbers/subtract/:a/from/:b', (req, res) => {
  const { a, b } = req.params;
  const n1 = Number(a);
  const n2 = Number(b);
  return Object.is(n1, NaN) || Object.is(n2, NaN)
    ? res.status(400).send({ error: 'Parameters must be valid numbers.' })
    : res.status(200).send({ result: subtract(n2, n1) });
});

app.post('/numbers/multiply', (req, res) => {
  if (!req.body.a || !req.body.b) {
    res.status(400).send({ error: 'Parameters "a" and "b" are required.' });
  }
  const a = parseInt(req.body.a, 10);
  const b = parseInt(req.body.b, 10);
  return Number.isNaN(a) || Number.isNaN(b)
    ? res.status(400).send({ error: 'Parameters "a" and "b" must be valid numbers.' })
    : res.status(200).send({ result: multiply(a, b) });
});

app.post('/numbers/divide', (req, res) => {
  if ((!req.body.a && req.body.a !== 0) || (!req.body.b && req.body.b !== 0)) {
    res.status(400).send({ error: 'Parameters "a" and "b" are required.' });
  }
  if (req.body.b === 0) {
    res.status(400).send({ error: 'Unable to divide by 0.' });
  }
  const a = parseInt(req.body.a, 10);
  const b = parseInt(req.body.b, 10);
  return Number.isNaN(a) || Number.isNaN(b)
   ? res.status(400).send({ error: 'Parameters "a" and "b" must be valid numbers.' })
   : res.status(200).send({ result: divide(a, b) });
});

module.exports = app;
