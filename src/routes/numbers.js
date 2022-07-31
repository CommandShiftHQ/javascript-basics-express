const { Router } = require('express');
const { add } = require('../lib/numbers');

const router = Router();

router.get('/add/:number1/and/:number2', (req, res) => {
  const { number1, number2 } = req.params;
  if (Number.isNaN(Number(number1)) || Number.isNaN(Number(number2))) {
    return res.status(400).json({ error: 'Parameters must be valid numbers.' });
  }
  return res.status(200).json({ result: add(+number1, +number2) });
});

module.exports = router;
