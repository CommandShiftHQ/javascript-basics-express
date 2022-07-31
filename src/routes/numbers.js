const { Router } = require('express');
const { add, subtract } = require('../lib/numbers');

const router = Router();

router
  .get('/add/:number1/and/:number2', (req, res) => {
    const { number1, number2 } = req.params;
    if (Number.isNaN(Number(number1)) || Number.isNaN(Number(number2))) {
      return res.status(400).json({ error: 'Parameters must be valid numbers.' });
    }
    return res.status(200).json({ result: add(+number1, +number2) });
  })
  .get('/subtract/:number1/from/:number2', (req, res) => {
    const { number1, number2 } = req.params;
    return res.status(200).json({ result: subtract(+number2, +number1) });
  });

module.exports = router;
