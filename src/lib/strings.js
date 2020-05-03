exports.sayHello = string => {
  return 'Hello, ' + string + '!';
};

exports.uppercase = string => {
  return string.toUpperCase();
};

exports.lowercase = string => {
  return string.toLowerCase();
};

exports.countCharacters = string => {
  return string.length;
};

exports.firstCharacter = string => {
  return string.charAt(0);
};

exports.firstCharacters = (string, n) => {
  return string.slice(0, n);
};
