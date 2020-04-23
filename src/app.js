const express = require('express');
const strings = require ('./lib/strings.js');

const app = express();
const word = 'Hello, world!';

app.get('/strings/hello/world', (req, res) => {
    res.json({"result": `${word}`});

    res.sendStatus(200);
    
});


module.exports = app;
