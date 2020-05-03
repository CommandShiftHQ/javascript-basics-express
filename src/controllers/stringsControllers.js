const { sayHello, uppercase, lowercase, firstCharacters } = require('./../lib/strings');

exports.hello = (req, res) => {
  const string = req.params.string;

  res.status(200).json({
    result: sayHello(string),
  });
};

exports.upper = (req, res) => {
  const string = req.params.string;

  res.status(200).json({
    result: uppercase(string),
  });
};

exports.lower = (req, res) => {
  const string = req.params.string;

  res.status(200).json({
    result: lowercase(string),
  });
};

exports.firstCharacter = (req, res) => {
  const string = req.params.string;
  const length = req.query.length || 1;

  res.status(200).json({
    result: firstCharacters(string, length),
  });
};
