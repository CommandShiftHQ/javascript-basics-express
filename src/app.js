const express = require('express');
const strings = require('./lib/strings.js');
const numbers = require('./lib/numbers.js');

const app = express();

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
  if (req.query.length) {
    const n = parseInt(Object.values(req.query).join());
    const word = strings.firstCharacters(req.params.basename, n);
    res.json({ result: `${word}` }).sendStatus(200);
  } else {
    const word = strings.firstCharacter(req.params.basename);
    res.json({ result: `${word}` }).sendStatus(200);
  }
});
//-----------------------------------------------
app.get('/numbers/add/:param1/and/:param2', (req, res) => {
  const num1 = parseInt(req.params.param1);
  const num2 = parseInt(req.params.param2);
  const sum = numbers.add(num1, num2);
  
  if (Number.isNaN(sum)){
    res.status(400).json({ error: 'Parameters must be valid numbers.'});

  }
  else{
    res.status(200).json({ result: sum });
  }
  
});

module.exports = app;
