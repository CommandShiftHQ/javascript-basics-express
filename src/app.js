const express = require('express');
const strings = require('./lib/strings.js');

const app = express();
// const word = strings.sayHello();

app.get('/strings/hello/:basename', (req, res) => {
  const word = strings.sayHello(req.params.basename);
  // res;

  res.json({ result: `${word}` }).sendStatus(200);
});

app.get('/strings/upper/:basename', (req, res) => {
  const word = strings.uppercase(req.params.basename);
  // res.status(200);

  res.json({ result: `${word}` }).sendStatus(200);
});

app.get('/strings/lower/:basename', (req, res) => {
  const word = strings.lowercase(req.params.basename);
  // res.status(200);

  res.json({ result: `${word}` }).sendStatus(200);
});


app.get('/strings/first-characters/:basename', (req, res) => {

  if (req.query.length){

    let n = parseInt(Object.values(req.query).join());
    let word = strings.firstCharacters(req.params.basename, n);
    res.json({ result: `${word}` }).sendStatus(200);

  }
  else {
     // let n = 1;
    let word = strings.firstCharacter(req.params.basename);
    res.json({ result: `${word}` }).sendStatus(200);
  }
});

module.exports = app;
