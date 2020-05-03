exports.add = (a, b) => {
  return a + b;
};

exports.subtract = (a, b) => {
  return a - b;
};

exports.multiply = (a, b) => {
  return a * b;
};

exports.divide = (a, b) => {
  return a / b;
};

exports.power = (a, b) => {
  return a ** b;
};

exports.round = a => {
  return Math.round(a);
};

exports.roundUp = a => {
  return Math.ceil(a);
};

exports.roundDown = a => {
  return Math.floor(a);
};

exports.absolute = a => {
  return Math.abs(a);
};

exports.quotient = (a, b) => {
  return ~~(a / b);
};

exports.remainder = (a, b) => {
  return a % b;
};
