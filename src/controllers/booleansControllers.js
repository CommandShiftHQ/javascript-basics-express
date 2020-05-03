const { negate, truthiness, isOdd, startsWith } = require('./../lib/booleans');

exports.negate = (req, res) => {
  const { value } = req.body;

  res.status(200).json({
    result: negate(value),
  });
};

exports.truthiness = (req, res) => {
  const truth = req.body.value;

  res.status(200).json({
    result: truthiness(truth),
  });
};

exports.isOdd = (req, res) => {
  const number = parseInt(req.params.num);

  return Number.isNaN(number)
    ? res.status(400).json({
        error: 'Parameter must be a number.',
      })
    : res.status(200).json({
        result: isOdd(number),
      });
};

exports.startsWith = (req, res) => {
  const { string, char } = req.params;

  return char.length !== 1
    ? res.status(400).json({
        error: 'Parameter "character" must be a single character.',
      })
    : res.status(200).json({
        result: startsWith(char, string),
      });
};
