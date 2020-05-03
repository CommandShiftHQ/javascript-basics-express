const booleansController = require('./../controllers/booleansControllers');
const express = require('express');

const router = express.Router();

router
  .post('/negate', booleansController.negate)
  .post('/truthiness', booleansController.truthiness)
  .get('/is-odd/:num', booleansController.isOdd)
  .get('/:string/starts-with/:char', booleansController.startsWith);

module.exports = router;
