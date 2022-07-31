const { Router } = require('express');

const {
  sayHello,
  uppercase,
  lowercase,
  firstCharacter,
  firstCharacters,
} = require('../lib/strings');

const router = Router();

router
  .get('/hello/:string', (req, res) => {
    return res.status(200).json({
      result: sayHello(req.params.string),
    });
  })
  .get('/upper/:string', (req, res) => {
    return res.status(200).json({
      result: uppercase(req.params.string),
    });
  })
  .get('/lower/:string', (req, res) => {
    return res.status(200).json({
      result: lowercase(req.params.string),
    });
  })
  .get('/first-characters/:string', (req, res) => {
    const { string } = req.params;
    const { length } = req.query;
    if (!length) {
      return res.status(200).json({
        result: firstCharacter(string),
      });
    }
    return res.status(200).json({
      result: firstCharacters(string, length),
    });
  });

module.exports = router;
