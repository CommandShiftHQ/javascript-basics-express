const { Router } = require('express');

const router = Router();

router.get('/hello/:string', (req, res) => {
  return res.status(200).json({
    result: `Hello, ${req.params.string}!`,
  });
});

module.exports = router;
