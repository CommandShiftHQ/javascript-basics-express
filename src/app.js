const express = require('express');
const strings = require ('./lib/strings.js');

const app = express();
const word = strings.sayHello();

app.get('/strings/hello/*', (req, res) => {
    res.json({"result": `${word}`});

    res.sendStatus(200);
    
});


module.exports = app;
