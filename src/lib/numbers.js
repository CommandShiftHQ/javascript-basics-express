const add = (a, b) => {
  return a + b
};

const subtract = (a, b) => {
  let x = a - b;
  return x;
};

const multiply = (a, b) => {
  let x = a*b;
  return x;
};

const divide = (a, b) => {
  let x = a / b;
  return x;
};

const power = (a, b) => {
  let x =  Math.pow(a, b);
  return x;
};

const round = a => {
  let x = Math.round(a);
  return x;
};

const roundUp = a => {
  let x = Math.ceil(a);
  return x;
};

const roundDown = a => {
  let x = Math.floor(a);
  return x;
};

const absolute = a => {
 let x = Math.abs(a);
 return x;
};

const quotient = (a, b) => {
  let x = (a/b);
  let y = '';
  if (x < 0) {y = Math.ceil(x)} else {y = Math.floor(x)};
  return y;
};

const remainder = (a, b) => {
  let x = a % b;
  return x;
};

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  power,
  round,
  roundUp,
  roundDown,
  absolute,
  quotient,
  remainder
};
