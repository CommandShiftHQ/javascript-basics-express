  const negate = a => {
  if (a === true) {x = false} else (x = true);
  return  x;
};

const both = (a, b) => {
  let x = '';
  if (a === true && b === true) {
    x = true} else {x = false};
    return x;
};

const either = (a, b) => {
  let x = '';
  if (a === true && b === true) {
    x = true;
  } 
    else if (a === true && b === false) {
      x = true;
    }
      else if (a === false && b === true) {
        x = true;
      }
        else if (a === false && b === false) {
          x = false;
        }
        else {alert = 'Invalid Variable';
      }
  
  return x;
}

const none = (a, b) => {
  let x = '';
  if (a === true && b === true) {
    x = false;
  } 
    else if (a === true && b === false) {
      x = false;
    }
      else if (a === false && b === true) {
        x = false;
      }
        else if (a === false && b === false) {
          x = true;
        }
        else {alert = 'Invalid Variable';
      }
  
  return x
 
};

const one = (a, b) => {
  let x = '';
  if (a === true && b === true) {
    x = false;
  } 
    else if (a === true && b === false) {
      x = true;
    }
      else if (a === false && b === true) {
        x = true;
      }
        else if (a === false && b === false) {
          x = false;
        }
        else {alert = 'Invalid Variable';
      }
  
  return x
 
};

    
const truthiness = a => {
  return !!a
};

const isEqual = (a, b) => {
  if (a === b) {
    x = true; 
  } else {x = false;}
  return x
};

const isGreaterThan = (a, b) => {
  if (a > b) {
    x = true; 
  } else {x = false;}
  return x
};

const isLessThanOrEqualTo = (a, b) => {
  if (a <= b) {
    x = true; 
  } else {x = false;}
  return x
};

const isOdd = a => {
  if (a%2 === 0) {x = false;} else {x=true;}
  return x
};

const isEven = a => {
  if (a%2 === 0) {x = true;} else {x=false;}
  return x
};

const isSquare = a => {
  if (Number.isInteger(Math.sqrt(a))) {x = true;} else {x=false;}
  return x
};

const startsWith = (char, string) => {
  if (string.charAt(0) === char) {x = true;} else {x=false;}
  return x
};

 const containsVowels = string => {
  return string
  .split("")
  .some(letter => ["a", "e", "i", "o", "u"].includes(letter.toLowerCase()));
};

const isLowerCase = string => {
  return string === string.toLowerCase();
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
