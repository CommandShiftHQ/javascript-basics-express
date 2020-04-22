const negate = a => {
  // your code here
  return !a;
};

const both = (a, b) => {
  // your code here
  return (a && b);
};

const either = (a, b) => {
  // your code here
 
    return (a || b);
 };

const none = (a, b) => {
  // your code here
  
    return (!a && !b);
   
};

const one = (a, b) => {
  // your code here
     return ((a && !b) || (!a && b));

};

const truthiness = a => {
  // your code here
    return !(!a);


};

const isEqual = (a, b) => {
  // your code here

    return (a==b);
 
};

const isGreaterThan = (a, b) => {
  // your code here
    return (a>b);
 
};

const isLessThanOrEqualTo = (a, b) => {
  // your code here
   return (a<=b);

};

const isOdd = a => {
  // your code here
 
  return !(a%2==0);
 
};

const isEven = a => {

  return (a%2==0);
  // your code here
};

const isSquare = a => {
  // your code here

    return (a>=0 && Math.sqrt(a) % 1 === 0);
  
  
};

const startsWith = (char, string) => {
  return (string.startsWith(char));
        
  // your code here
};

const containsVowels = string => {
  // your code here
/*
  let vowelArray=[a,A,e,E,i,I,o,O,u,U];
  
  for (let i=0;i<vowelArray.length; i++){
    if (string.includes(vowelArray[i])){
      return true;
    }
    else return false;
  }*/


  return (string.includes('a') || string.includes('e') || string.includes('i') || string.includes('o') || string.includes('u') || string.includes('O'));

};

const isLowerCase = string => {
  // your code here
  return (string === string.toLowerCase());
};

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase
};
