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
  .get('/first-characters/:string', (req, res) => {
    const { string } = req.params;
    const length = req.query.length || 1;
    const slice = string.slice(0, length);
    return res.status(200).json({
      result: slice,
    });
  })
});

module.exports = router;
