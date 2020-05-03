const arraysRouter = require('./routers/arraysRouter');
const booleansRouter = require('./routers/booleansRouter');
const numbersRouter = require('./routers/numbersRouter');
const stringsRouter = require('./routers/stringsRouter');
const express = require('express');

const app = express();

app.use(express.json());
app.use('/arrays', arraysRouter);
app.use('/booleans', booleansRouter);
app.use('/numbers', numbersRouter);
app.use('/strings', stringsRouter);

module.exports = app;
