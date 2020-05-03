const { add, subtract, multiply, divide, remainder } = require('./../lib/numbers');

exports.add = (req, res) => {
  const a = parseInt(req.params.a);
  const b = parseInt(req.params.b);

  return Number.isNaN(a) || Number.isNaN(b)
    ? res.status(400).json({
        error: 'Parameters must be valid numbers.',
      })
    : res.status(200).json({
        result: add(a, b),
      });
};

exports.subtract = (req, res) => {
  const a = parseInt(req.params.a);
  const b = parseInt(req.params.b);

  return Number.isNaN(a) || Number.isNaN(b)
    ? res.status(400).json({
        error: 'Parameters must be valid numbers.',
      })
    : res.status(200).json({
        result: subtract(b, a),
      });
};

exports.multiply = (req, res) => {
  const { a, b } = req.body;

  if (!a || !b) {
    res.status(400).json({
      error: 'Parameters "a" and "b" are required.',
    });
  } else if (Number.isNaN(parseInt(a)) || Number.isNaN(parseInt(b))) {
    res.status(400).json({
      error: 'Parameters "a" and "b" must be valid numbers.',
    });
  } else {
    res.status(200).json({
      result: multiply(a, b),
    });
  }
};

exports.divide = (req, res) => {
  const { a, b } = req.body;

  if (b === 0) {
    res.status(400).json({
      error: 'Unable to divide by 0.',
    });
  } else if (a === undefined || b === undefined) {
    res.status(400).json({
      error: 'Parameters "a" and "b" are required.',
    });
  } else if (Number.isNaN(parseInt(a)) || Number.isNaN(parseInt(b))) {
    res.status(400).json({
      error: 'Parameters "a" and "b" must be valid numbers.',
    });
  } else {
    res.status(200).json({
      result: divide(a, b),
    });
  }
};

exports.remainder = (req, res) => {
  const { a, b } = req.body;

  if (b === 0) {
    res.status(400).json({
      error: 'Unable to divide by 0.',
    });
  } else if (a === undefined || b === undefined) {
    res.status(400).json({
      error: 'Parameters "a" and "b" are required.',
    });
  } else if (Number.isNaN(parseInt(a)) || Number.isNaN(parseInt(b))) {
    res.status(400).json({
      error: 'Parameters must be valid numbers.',
    });
  } else {
    res.status(200).json({
      result: remainder(a, b),
    });
  }
};
