const express = require('express');
const strings = require('./routes/strings');

const app = express();

app.use(express.json());
app.use('/strings', strings);

module.exports = app;
