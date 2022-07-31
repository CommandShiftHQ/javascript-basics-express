const { Router } = require('express');

const router = Router();

router.get('/add/:number1/and/:number2', (req, res) => {
  const { number1, number2 } = req.params;
  const result = Number(number1) + Number(number2);
  res.json({ result });
});

module.exports = router;
