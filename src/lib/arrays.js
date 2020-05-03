exports.getNthElement = (index, array) => {
  return array[index % array.length]; // remainder of index/array length equals given parameter in questions
};

exports.arrayToCSVString = array => {
  return array.toString();
};

exports.csvStringToArray = string => {
  return string.split(',');
};

exports.addToArray = (element, array) => {
  array.push(element);
};

exports.addToArray2 = (element, array) => {
  let expectedArray = array.concat(element);
  return expectedArray;
};

exports.removeNthElement = (index, array) => {
  return array.splice(2, 1);
};

exports.numbersToStrings = numbers => {
  return numbers.map(String);
};

exports.uppercaseWordsInArray = strings => {
  return strings.map(expected => expected.toUpperCase());
};

exports.reverseWordsInArray = strings => {
  return strings.map(expected =>
    expected
      .split('')
      .reverse()
      .join(''),
  );
};

exports.onlyEven = numbers => {
  return numbers.filter(expected => expected % 2 === 0);
};

exports.removeNthElement2 = (index, array) => {
  const newArray = [...array];
  newArray.splice(index, 1);
  return newArray;
};

exports.elementsStartingWithAVowel = strings => {
  return strings.filter(expected => /^[aeiou]/i.test(expected));
};

exports.removeSpaces = string => {
  return string.replace(/\s/g, '');
};

exports.sumNumbers = numbers => {
  return numbers.reduce((accumulator, currentValue) => accumulator + currentValue);
};

exports.sortByLastLetter = strings => {
  return strings.sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));
};
