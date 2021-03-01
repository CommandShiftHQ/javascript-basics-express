const getNthElement = (index, array) => {
  const newIndex = index;
  if (newIndex < array.length) {
    return array[newIndex];
  }

  return array[newIndex - array.length];
};

const arrayToCSVString = array => {
  return array.join();
};

const csvStringToArray = string => {
  return string.split(",");
};

const addToArray = (element, array) => {
  array.push(element);
};

const addToArray2 = (element, array) => {
  return array.concat(element);
};

const removeNthElement = (index, array) => {
  return array.splice(index, 1);
};

const numbersToStrings = numbers => {
  return numbers.map(string => string.toString());
};

const uppercaseWordsInArray = strings => {
  return strings.map(string => string.toUpperCase());
};

const reverseWordsInArray = strings => {
  return strings.map(string =>
    string
      .split("")
      .reverse()
      .join("")
  );
};

const onlyEven = numbers => {
  return numbers.filter(element => element % 2 === 0);
};

const removeNthElement2 = (index, array) => {
  return array.filter((element, arIn) => arIn !== index);
};

const elementsStartingWithAVowel = strings => {
  const vowels = ["a", "e", "i", "o", "u"];

  return strings.filter(word => {
    const firstLetter = word[0].toLowerCase();
    return vowels.includes(firstLetter);
  });
};

const removeSpaces = string => {
  return string.split(" ").join("");
};

const sumNumbers = numbers => {
  return numbers.reduce((total, number) => {
    return total + number
  }, 0);
};

const sortByLastLetter = strings => {
  const reverseString = (item) => item.split('').reverse().join('');

  return strings.map(reverseString).sort().map(reverseString)
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
