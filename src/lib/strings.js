const sayHello = string => {
  return `Hello, ${string}!`;
  console.log(sayHello());
};

const uppercase = string => {
  const x = string.toUpperCase();
  return x;
  console.log(x);
};

const lowercase = string => {
  const x = string.toLowerCase();
  return x;
  console.log(x);
};

const countCharacters = string => {
  const x = string.length;
  return x;
  console.log(x);
};

const firstCharacter = string => {
  const x = string.charAt(0);
  return x;
  console.log(x);
};

const firstCharacters = (string, n) => {
  const x = string.substring(0, n);
  return x;
  console.log(x);
};

module.exports = {
  sayHello,
  uppercase,
  lowercase,
  countCharacters,
  firstCharacter,
  firstCharacters,
};
