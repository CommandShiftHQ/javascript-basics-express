const {
  getNthElement,
  arrayToCSVString,
  addToArray2,
  elementsStartingWithAVowel,
  removeNthElement2,
} = require('./../lib/arrays');

exports.elementAtID = (req, res) => {
  const { array } = req.body;
  const index = req.params.index;

  res.status(200).json({
    result: getNthElement(index, array),
  });
};

exports.toString = (req, res) => {
  const { array } = req.body;

  res.status(200).json({
    result: arrayToCSVString(array),
  });
};

exports.append = (req, res) => {
  const { array, value } = req.body;

  res.status(200).json({
    result: addToArray2(value, array),
  });
};

exports.startsWithVowel = (req, res) => {
  const { array } = req.body;

  res.status(200).json({
    result: elementsStartingWithAVowel(array),
  });
};

exports.removeElement = (req, res) => {
  const { array } = req.body;
  const { index } = req.query || 0;

  res.status(200).json({
    result: removeNthElement2(index, array),
  });
};
