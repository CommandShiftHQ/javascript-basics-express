const getNthElement = (index, array) => {
  // your code here
  const x = index % array.length;
  return array[x];
};

const arrayToCSVString = array => {
  // your code here
//  let retString = '';
//  for (var i=0;i<array.length;i++) {
//    retString += array[i];
//    if (i !== (array.length - 1)) {
//      retString += ',';
//    }
//  }
//  return retString;
    return array.join();
};

const csvStringToArray = string => {
  // your code here
  return string.split(',');
};

// const csvStringToArray = (string) => string.split(',');

const addToArray = (element, array) => {
  // your code here
  array.push(element);
};

const addToArray2 = (element, array) => {
  // your code here
  let array1 = [];
  array.forEach( item => array1.push(item));
  array1.push(element);
  return array1;
};

// const addToArray2 = (element, array) => array.concat([element]);

const removeNthElement = (index, array) => {
  // your code here
  array.splice(index,1);
};

const numbersToStrings = numbers => {
  // your code here
  let array1 = [];
  numbers.forEach( item => array1.push(item.toString()));
  return array1;
};

// const numbersToStrings = (numbers) => numbers.map(number => String(number));

const uppercaseWordsInArray = strings => {
  // your code here
  let array1 = [];
  strings.forEach( item => array1.push(item.toUpperCase()));
  return array1;
};

// const uppercaseWordsInArray = (strings) => {
//   return strings.map(word => word.toUpperCase());
// };

const reverseWordsInArray = strings => {
  // your code here
  let array1 = [];
  let splitString = [];
  let reverseArray = [];
  let joinArray = '';
  strings.forEach( item => {
    splitString = item.split("");
    reverseArray = splitString.reverse();
    joinArray = reverseArray.join("");
    array1.push(joinArray);
  });
  return array1;
};

// const reverseWordsInArray = (strings) => {
//   return strings.map(word => word.split('').reverse().join(''));
// };

const onlyEven = numbers => {
  // your code here
  return numbers.filter(number => {return number % 2 === 0;});
};

// const onlyEven = (numbers) => numbers.filter(number => number % 2 === 0);

const removeNthElement2 = (index, array) => {
  // your code here
  return array.filter( (item, i) => {return i !== index;});
};

// const removeNthElement2 = (index, array) => {
//   return array.filter((_, itemIndex) => itemIndex !== index);
// };

const elementsStartingWithAVowel = strings => {
  // your code here
  const vowels = 'aeiouAEIOU';
  return strings.filter( string => {return vowels.includes(string.charAt(0))});
};

const removeSpaces = string => {
  // your code here
  splitString = string.split("");
  filterString = splitString.filter( ch => {return ch !== " ";});
  return filterString.join("");
};

// const removeSpaces = (string) => string.split(' ').join('');

const sumNumbers = numbers => {
  // your code here
  return numbers.reduce( (acc, number) => {return acc + number});
};

const sortByLastLetter = strings => {
  // your code here
  return strings.sort( (str1 , str2) => {
    let ch1 = str1.charAt(str1.length - 1);
    let ch2 = str2.charAt(str2.length - 1);
    if (ch1 < ch2) {
      return -1;
    } else if (ch1 > ch2) {
      return 1;
    } else {
      return 0;
    }
  } );
};

// const sortByLastLetter = (strings) => {
//   const reverseString = (item) => item.split('').reverse().join('');
//   
//   return strings.map(reverseString).sort().map(reverseString);
// };

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
