exports.negate = a => {
  return !a;
};

exports.both = (a, b) => {
  return a && b;
};

exports.either = (a, b) => {
  return a || b;
};

exports.none = (a, b) => {
  if (!a && !b) {
    return true;
  }
  return false;
};

exports.one = (a, b) => {
  return a != b;
};

exports.truthiness = a => {
  return !!a;
};

exports.isEqual = (a, b) => {
  return a == b;
};

exports.isGreaterThan = (a, b) => {
  return a > b;
};

exports.isLessThanOrEqualTo = (a, b) => {
  return a <= b;
};

exports.isOdd = a => {
  return a % 2 !== 0;
};

exports.isEven = a => {
  return a % 2 == 0;
};

exports.isSquare = a => {
  return Math.sqrt(a) % 1 === 0;
};

exports.startsWith = (char, string) => {
  return string.charAt(0) === char;
};

exports.containsVowels = string => {
  return !!string.match(/[aeiou]/gi);
};

exports.isLowerCase = string => {
  return string === string.toLowerCase();
};
