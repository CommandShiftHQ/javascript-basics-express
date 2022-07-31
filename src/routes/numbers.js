const { Router } = require('express');
const {
  add,
} = require('../lib/numbers');

const router = Router();

router.get('/add/:number1/and/:number2', (req, res) => {
  const { number1, number2 } = req.params;
  return res.status(200).json({ result: add(+number1, +number2) });
});

module.exports = router;
