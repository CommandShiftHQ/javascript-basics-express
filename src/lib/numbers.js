function add (a, b) {
  // your code here
  return (a + b);
}

function subtract (a, b) {
  // your code here
  return (a - b);
}

function multiply (a, b) {
  // your code here
  return (a * b);
}

function divide (a, b) {
  // your code here
  return (a / b);
}

function power (a, b) {
  // your code here
  return (a ** b);
}

function round (a) {
  // your code here
  return Math.round(a);
}

function roundUp (a) {
  // your code here
  return Math.ceil(a);
}

function roundDown (a) {
  // your code here
  return Math.floor(a);
}

function absolute (a) {
  // your code here
  return Math.abs(a);
}

function quotient (a, b) {
  // your code here
  return Math.trunc(a / b);
}

// const quotient = (a, b) => (a - (a % b)) / b;

function remainder (a, b) {
  // your code here
  return (a % b);
}

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
}
