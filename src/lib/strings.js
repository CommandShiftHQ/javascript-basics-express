function sayHello (string) {
  // your code here
  return ("Hello, " + string + "!");
};

// const sayHello = string => `Hello, ${string}!`;

function uppercase (string) {
  // your code here
  return string.toUpperCase();
};

function lowercase (string) {
  // your code here
  return string.toLowerCase();
};

function countCharacters (string) {
  // your code here
  return string.length;
};

function firstCharacter (string) {
  // your code here
  return string.substring(0, 1);
};

// const firstCharacter = string => string.charAt(0);

function firstCharacters (string, n) {
  // your code here
  return string.substring(0, n);
};

// const firstCharacters = (string, n) => string.slice(0, n);

module.exports = {
  sayHello,
  uppercase,
  lowercase,
  countCharacters,
  firstCharacter,
  firstCharacters
};
