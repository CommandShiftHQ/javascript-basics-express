const { Router } = require('express');

const router = Router();

router
  .get('/hello/:string', (req, res) => {
    return res.status(200).json({
      result: `Hello, ${req.params.string}!`,
    });
  })
  .get('/upper/:string', (req, res) => {
    return res.status(200).json({
      result: req.params.string.toUpperCase(),
    });
  })
  .get('/lower/:string', (req, res) => {
    return res.status(200).json({
      result: req.params.string.toLowerCase(),
    });
  })
});

module.exports = router;
