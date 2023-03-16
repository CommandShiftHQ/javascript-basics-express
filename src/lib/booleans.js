function negate(a) {
  // your code here
  return !a;
};

function both(a, b) {
  // your code here
  return (a && b);
};

function either(a, b) {
  // your code here
  return (a || b);
};

function none(a, b) {
  // your code here
  return !(a || b);
};

function one(a, b) {
  // your code here
  return ((a && !b) || (!a && b));
};

// const one = (a, b) => (a || b) && !(a && b);

function truthiness(a) {
  // your code here
  //if ((true && a) === a) {return true;}
  //else {return false;}
  //if ((a && true) === a) {return false;}
  //else {return true;}
  if (a) {return true;}
  else {return false;}
};

// const truthiness = a => Boolean(a);

function isEqual(a, b) {
  // your code here
  return (a === b);
};

function isGreaterThan(a, b) {
  // your code here
  return (a > b);
};

function isLessThanOrEqualTo(a, b) {
  // your code here
  return (a <= b);
};

function isOdd(a) {
  // your code here
  return ((a % 2) === 1);
};

function isEven(a) {
  // your code here
  return ((a % 2) === 0);
};

function isSquare(a) {
  // your code here
  return (Math.sqrt(a) % 1 === 0);
};

// const isSquare = a => Boolean(Math.sqrt(a) % 1 === 0);


function startsWith(char, string) {
  // your code here
  return (char === string.charAt(0));
};

function containsVowels(string) {
  // your code here
  return (/[aeiouAEIOU]/.test(string));
};

function isLowerCase(string) {
  // your code here
  return !(/[A-Z]/.test(string));
};

// const isLowerCase = string => string === string.toLowerCase();

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase
};
