const sayHello = string => {
  return 'Hello, ' + string + '!';
  console.log(sayHello());
};


const uppercase = string => {
  let x = string.toUpperCase();
  return x;
  console.log(x);
};

const lowercase = string => {
  let x = string.toLowerCase();
  return x;
  console.log(x);
};

const countCharacters = string => {
  let x = string.length;
  return x;
  console.log(x);
};

const firstCharacter = string => {
  let x = string.charAt(0);
  return x;
  console.log(x);
};

const firstCharacters = (string, n) => {
let x = string.substring(0,n);
return x; 
console.log(x);
};

module.exports = {
  sayHello,
  uppercase,
  lowercase,
  countCharacters,
  firstCharacter,
  firstCharacters
};
