const {
  sayHello,
  uppercase,
  lowercase,
  countCharacters,
  firstCharacter,
  firstCharacters,
} = require('./lib/strings');
const {
  add,
  subtract,
  multiply,
  divide,
  power,
  round,
  roundUp,
  roundDown,
  absolute,
  quotient,
  remainder,
} = require('./lib/numbers');
const {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase,
} = require('./lib/booleans');
const {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter,
} = require('./lib/arrays');

const express = require('express');

const app = express();

app.get('/strings/hello/:name', (req, res) => {
  // const result = sayHello(req.params.name);
  // // res.send({ result: `${result}` });
  // res.status(200).json({ result: `${result}` });
  res.json({ result: sayHello(req.params.name) });
});

app.get('/strings/upper/:myStr', (req, res) => {
  const result = uppercase(req.params.myStr);
  // res.send({ result: `${result}` });
  res.status(200).json({ result: `${result}` });
});

app.get('/strings/lower/:myStr', (req, res) => {
  const result = lowercase(req.params.myStr);
  // res.send({ result: `${result}` });
  res.status(200).json({ result: `${result}` });
});

app.get('/strings/first-characters/:myStr', (req, res) => {
  const length = req.query.length;
  let result = '';
  if (length > 0) {
    result = firstCharacters(req.params.myStr, length);
  } else {
    result = firstCharacter(req.params.myStr);
  }
  // res.send({ result: `${result}` });
  res.status(200).json({ result: `${result}` });
});

app.get('/numbers/add/:num1/and/:num2', (req, res) => {
  if (Number.isNaN(+req.params.num1) || Number.isNaN(+req.params.num2)) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  } else {
    // res.json({ result: add(+req.params.num1, +req.params.num2) });
    res.json({ result: add(parseInt(req.params.num1, 10), parseInt(req.params.num2, 10)) });
  }
});

app.get('/numbers/subtract/:num1/from/:num2', (req, res) => {
  if (Number.isNaN(+req.params.num1) || Number.isNaN(+req.params.num2)) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  } else {
    res.json({ result: subtract(+req.params.num2, +req.params.num1) });
  }
});

app.use(express.json());
app.post('/numbers/multiply', (req, res) => {
  if (req.body.a === undefined || req.body.b === undefined) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  } else if (Number.isNaN(+req.body.a) || Number.isNaN(+req.body.b)) {
    res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
  } else {
    // res.json({ result: multiply(+req.body.a, +req.body.b) });
    res.status(200).json({ result: multiply(req.body.a, req.body.b) });
  }
});

app.use(express.json());
app.post('/numbers/divide', (req, res) => {
  if (req.body.a === undefined || req.body.b === undefined) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  } else if (Number.isNaN(+req.body.a) || Number.isNaN(+req.body.b)) {
    res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
  } else if (+req.body.b === 0) {
    res.status(400).json({ error: 'Unable to divide by 0.' });
  } else {
    res.json({ result: divide(+req.body.a, +req.body.b) });
  }
});

app.use(express.json());
app.post('/numbers/remainder', (req, res) => {
  if (req.body.a === undefined || req.body.b === undefined) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  } else if (Number.isNaN(+req.body.a) || Number.isNaN(+req.body.b)) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  } else if (+req.body.b === 0) {
    res.status(400).json({ error: 'Unable to divide by 0.' });
  } else {
    // res.json({ result: remainder(+req.body.a, +req.body.b) });
    res.status(200).json({ result: remainder(req.body.a, req.body.b) });
  }
});

app.use(express.json());
app.post('/booleans/negate', (req, res) => {
  res.status(200).json({ result: negate(req.body.value) });
});

app.use(express.json());
app.post('/booleans/truthiness', (req, res) => {
  res.status(200).json({ result: truthiness(req.body.value) });
});

app.get('/booleans/is-odd/:num', (req, res) => {
  if (Number.isNaN(+req.params.num)) {
    res.status(400).json({ error: 'Parameter must be a number.' });
  } else {
    res.status(200).json({ result: isOdd(req.params.num) });
  }
});

app.get('/booleans/:str1/starts-with/:char1', (req, res) => {
  if (req.params.char1.length === 1) {
    res.status(200).json({ result: startsWith(req.params.char1, req.params.str1) });
  } else {
    res.status(400).json({ error: 'Parameter "character" must be a single character.' });
  }
});

app.use(express.json());
app.post('/arrays/element-at-index/:index', (req, res) => {
  res.status(200).json({ result: getNthElement(req.params.index, req.body.array) });
});

app.use(express.json());
app.post('/arrays/to-string', (req, res) => {
  res.status(200).json({ result: arrayToCSVString(req.body.array) });
});

app.use(express.json());
app.post('/arrays/append', (req, res) => {
  res.status(200).json({ result: addToArray2(req.body.value, req.body.array) });
});

app.use(express.json());
app.post('/arrays/starts-with-vowel', (req, res) => {
  res.status(200).json({ result: elementsStartingWithAVowel(req.body.array) });
});

app.use(express.json());
app.post('/arrays/remove-element', (req, res) => {
  let index = 0;
  if (+req.query.index) {
    index = +req.query.index;
  }
  res.status(200).json({ result: removeNthElement2(index, req.body.array) });
});

module.exports = app;
