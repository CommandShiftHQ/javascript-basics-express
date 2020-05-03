const numbersController = require('./../controllers/numbersControllers');
const express = require('express');

const router = express.Router();

router
  .get('/add/:a/and/:b', numbersController.add)
  .get('/subtract/:a/from/:b', numbersController.subtract)
  .post('/multiply', numbersController.multiply)
  .post('/divide', numbersController.divide)
  .post('/remainder', numbersController.remainder);

module.exports = router;
