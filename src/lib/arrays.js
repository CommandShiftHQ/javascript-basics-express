const getNthElement = (index, array) => {
  return array[index % array.length];
};

const arrayToCSVString = array => {
  return array.toString(array);
};

const csvStringToArray = string => {
  const array = string.split(',');
  return array;
};


const addToArray = (element, array) => {
  array.push(element);
};

const addToArray2 = (element, array) => {
  const newArray = [...array, element];
  return newArray;
};

const removeNthElement = (index, array) => {
  return array.splice(index, 1);
};

const numbersToStrings = numbers => {
  return numbers.map(String);
}

const uppercaseWordsInArray = strings => {
  return strings.map(upc => {
    return upc.toUpperCase();
  });
};

const reverseWordsInArray = strings => {
  return strings.map(word =>
    word
      .split('')
      .reverse()
      .join('')
  );
};

const onlyEven = numbers => {
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] % 2 !== 0) {
      numbers.splice(i, 1);
    }
  }
  return numbers;
};


const removeNthElement2 = (index, array) => {
  let a2 = [...array];
  a2.splice(index, 1);
  return a2;
};

const elementsStartingWithAVowel = strings => {
  const vowels = /^[aeiou]/gi;
  const filtering = strings.filter(result => vowels.test(result));
  return filtering;
};

const removeSpaces = string => {
  return string.replace(/\s/g, '');
};

const sumNumbers = numbers => {
  return numbers.reduce((a, b) => a + b);
};

const sortByLastLetter = strings => {
  for (let i = 0; i < strings.length; i++) {
    strings[i] = strings[i]
      .split('')
      .reverse()
      .join('');
 }
  strings.sort();
  for (let i = 0; i < strings.length; i++) {
    strings[i] = strings[i]
      .split('')
      .reverse()
      .join('');
 }
 return strings;
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};
