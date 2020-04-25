const express = require('express');
const strings = require ('./lib/strings.js');

const app = express();
//const word = strings.sayHello();

app.get('/strings/hello/:basename', (req, res) => {
    const word = strings.sayHello(req.params.basename);

    res.json({"result": `${word}`});

    res.sendStatus(200);
    
});


module.exports = app;
