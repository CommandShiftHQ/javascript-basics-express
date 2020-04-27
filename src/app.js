const express = require('express');
const strings = require('./lib/strings.js');
const numbers = require('./lib/numbers.js');
const bool = require('./lib/booleans.js');
const arr = require('./lib/arrays.js');

const app = express();

app.use(express.json()); // FOR POST
// app.use(bodyParser.json());

app.get('/strings/hello/:basename', (req, res) => {
  const word = strings.sayHello(req.params.basename);

  res.json({ result: `${word}` }).sendStatus(200);
});

app.get('/strings/upper/:basename', (req, res) => {
  const word = strings.uppercase(req.params.basename);

  res.json({ result: `${word}` }).sendStatus(200);
});

app.get('/strings/lower/:basename', (req, res) => {
  const word = strings.lowercase(req.params.basename);

  res.json({ result: `${word}` }).sendStatus(200);
});

app.get('/strings/first-characters/:basename', (req, res) => {
  const length = req.query.length ? parseInt(req.query.length) : 1;
  const word = strings.firstCharacters(req.params.basename, length);
  res.json({ result: `${word}` }).sendStatus(200);

  /* if (req.query.length) {
    const n = parseInt(Object.values(req.query).join());
    const word = strings.firstCharacters(req.params.basename, n);
    res.json({ result: `${word}` }).sendStatus(200);
  } else {
    const word = strings.firstCharacter(req.params.basename);
    res.json({ result: `${word}` }).sendStatus(200);
  } */
});
//-----------------------------------------------
app.get('/numbers/add/:param1/and/:param2', (req, res) => {
  const num1 = parseInt(req.params.param1);
  const num2 = parseInt(req.params.param2);
  const sum = numbers.add(num1, num2);

  if (Number.isNaN(sum)) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  } else {
    res.status(200).json({ result: sum });
  }
  // TO REMEMBER: sendStatus() closes the connection. You can only send body before it, not after. Instead use status to send body with or after status.
});
//--------------------------------------------------

app.get('/numbers/subtract/:param1/from/:param2', (req, res) => {
  const num1 = parseInt(req.params.param1);
  const num2 = parseInt(req.params.param2);
  const diff = numbers.subtract(num2, num1);

  if (Number.isNaN(diff)) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  } else {
    res.status(200).json({ result: diff });
  }
});
//--------------------------------------------------
app.post('/numbers/multiply', (req, res) => {
  // const arr = Object.values(req.body);
  const num1 = parseInt(req.body.a);
  const num2 = parseInt(req.body.b);
  // console.log({ num1, num2 });

  const prod = numbers.multiply(num1, num2);

  if (!req.body.a || !req.body.b) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  }
  if (Number.isNaN(prod)) {
    res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
  } else {
    res.status(200).json({ result: prod });
  }
});
//----------------------------------------------------
app.post('/numbers/divide', (req, res) => {
  /*
  const arr = Object.values(req.body);
  const div = numbers.divide(arr[0], arr[1]);
  console.log ({div});

  if (arr[1] === 0) {
    res.status(400).json({ error: 'Unable to divide by 0.' });
  }
  if (arr.length !== 2) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  }
  if (Number.isNaN(div)) {
    res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
  } else {
    res.status(200).json({ result: div });
  } */

  const num1 = parseInt(req.body.a);
  const num2 = parseInt(req.body.b);
  const div = numbers.divide(num1, num2);

  if (num2 === 0) {
    res.status(400).json({ error: 'Unable to divide by 0.' });
  }
  if (!req.body.a || !req.body.b) {
    return req.body.a === 0
      ? res.status(200).json({ result: div })
      : res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  }
  return Number.isNaN(div)
    ? res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' })
    : res.status(200).json({ result: div });
});
//----------------------------------------------------
app.post('/numbers/remainder', (req, res) => {
  const num1 = parseInt(req.body.a);
  const num2 = parseInt(req.body.b);
  const rem = numbers.remainder(num1, num2);

  if (num2 === 0) {
    res.status(400).json({ error: 'Unable to divide by 0.' });
  }
  if (!req.body.a || !req.body.b) {
    return req.body.a === 0
      ? res.status(200).json({ result: rem })
      : res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  }
  return Number.isNaN(rem)
    ? res.status(400).json({ error: 'Parameters must be valid numbers.' })
    : res.status(200).json({ result: rem });

  /* const arr = Object.values(req.body);
  const rem = numbers.remainder(arr[0], arr[1]);
  if (arr[1] === 0) {
    res.status(400).json({ error: 'Unable to divide by 0.' });
  }
  if (arr.length !== 2) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  }
  if (Number.isNaN(rem)) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  } else {
    res.status(200).json({ result: rem });
  } */
});
//----------------------------------------------------
app.post('/booleans/negate', (req, res) => {
  const neg = bool.negate(req.body.value);

  res.status(200).json({ result: neg });
});

app.post('/booleans/truthiness', (req, res) => {
  const tr = bool.truthiness(req.body.value);
  res.status(200).json({ result: tr });
});

app.get('/booleans/is-odd/:param1', (req, res) => {
  const odder = parseInt(req.params.param1);
  if (Number.isNaN(odder)) {
    res.status(400).json({ error: 'Parameter must be a number.' });
  } else res.status(200).json({ result: bool.isOdd(odder) });
});

app.get('/booleans/:param1/starts-with/:param2', (req, res) => {
  if (req.params.param2.length > 1) {
    res.status(400).json({ error: 'Parameter "character" must be a single character.' });
  } else res.status(200).json({ result: bool.startsWith(req.params.param2, req.params.param1) });
});
//----------------------------------------------------

app.post('/arrays/element-at-index/:param1', (req, res) => {
  const element = arr.getNthElement(req.params.param1, req.body.array);
  res.status(200).json({ result: element });
});

app.post('/arrays/to-string', (req, res) => {
  const stringified = arr.arrayToCSVString(req.body.array);

  res.status(200).json({ result: stringified });
});

app.post('/arrays/append', (req, res) => {
  const newarr = arr.addToArray2(req.body.value, req.body.array);
  res.status(200).json({ result: newarr });
});

app.post('/arrays/starts-with-vowel', (req, res) => {
  const elements = arr.elementsStartingWithAVowel(req.body.array);
  res.status(200).json({ result: elements });
});

app.post('/arrays/remove-element', (req, res) => {
  const index = req.query.index ? parseInt(req.query.index) : 0;
  res.status(200).json({ result: arr.removeNthElement2(index, req.body.array) });

  /*
    if (!req.query.index){
    const newarr = arr.removeNthElement2(0, req.body.array);
    res.status(200).json({ result: newarr});
    }

    else{
    const newIndex = parseInt(req.query.index);
    const newarr = arr.removeNthElement2(newIndex, req.body.array);
    res.status(200).json({ result: newarr });
    } */
});
module.exports = app;
