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
  //res.status(200);

  res.json({ result: `${word}`}).sendStatus(200);
});

module.exports = app;
