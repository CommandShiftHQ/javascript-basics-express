const express = require('express');
const strings = require('./routes/strings');
const numbers = require('./routes/numbers');

const app = express();

app.use(express.json());
app.use('/strings', strings);
app.use('/numbers', numbers);

module.exports = app;
