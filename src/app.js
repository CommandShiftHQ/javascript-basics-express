const express = require('express');
const strings = require('./lib/strings');
const booleans = require('./lib/booleans');
const arrays = require('./lib/arrays');

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
  const { a, b } = req.body;

  if (!a || !b) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  } else if (Number.isNaN(Number(a)) || Number.isNaN(Number(b))) {
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
  const { a, b } = req.body;

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

//booleans
app.post('/booleans/negate', (req, res) => {
  if (req.body.value === true) {
    res.status(200).json({ result: false });
  } else if (req.body.value === false) {
    res.status(200).json({ result: true });
  }
});

app.post('/booleans/truthiness', (req, res) => {
  if (!req.body.value) {
    res.status(200).json({ result: false });
  } else if (req.body.value === 0) {
    res.status(200).json({ result: false });
  } else if (req.body.value === null) {
    res.status(200).json({ result: false });
  } else if (typeof req.body.value === 'string') {
    res.status(200).json({ result: true });
  } else if (typeof req.body.value === 'number') {
    res.status(200).json({ result: true });
  }
});

app.get('/booleans/is-odd/:num', (req, res) => {
  if (isNaN(req.params.num)) {
    res.status(400).json({ error: 'Parameter must be a number.' });
  } else if (req.params.num % 2 != 0) {
    res.status(200).json({ result: booleans.isOdd(req.params.num) });
  } else res.status(200).json({ result: booleans.isOdd(req.params.num) });
});

app.get('/booleans/:string/starts-with/:char', (req, res) => {
  const string = req.params.string;
  const char = req.params.char;

  if (char.length != 1) {
    res.status(400).json({ error: 'Parameter "character" must be a single character.' });
  } else if (string.charAt(0) == char) {
    res.status(200).json({ result: booleans.startsWith(char, string) });
  } else res.status(200).json({ result: booleans.startsWith(char, string) });
});

//arrays
app.post('/arrays/element-at-index/:index', (req, res) => {
  const { array } = req.body;
  const index = req.params.index;

  res.status(200).json({ result: arrays.getNthElement(index, array) });
});

app.post('/arrays/to-string', (req, res) => {
  const { array } = req.body;

  res.status(200).json({ result: arrays.arrayToCSVString(array) });
});

app.post('/arrays/append', (req, res) => {
  const { array, value } = req.body;

  res.status(200).json({ result: arrays.addToArray2(value, array) });
});

app.post('/arrays/starts-with-vowel', (req, res) => {
  const { array } = req.body;

  res.status(200).json({ result: arrays.elementsStartingWithAVowel(array) });
});

app.post('/arrays/remove-element', (req, res) => {
  const { array } = req.body;
  const { index } = req.query || 0;

  res.status(200).json({ result: arrays.removeNthElement2(index, array) });
});
module.exports = app;
