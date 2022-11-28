function negate(a) {
  return !a;
}

function both(a, b) {
  if (a === true && b === true) {
    return true;
  }
  return false;
}

function either(a, b) {
  if (a === true || b === true) {
    return true;
  }
  return false;
}

function none(a, b) {
  if (a === false && b === false) {
    return true;
  }
  return false;
}

function one(a, b) {
  if (a === true && b === false) {
    return true;
  }
  if (a === false && b === true) {
    return true;
  }
  return false;
}

function truthiness(a) {
  if (a === 0 || a === '' || Number.isNaN(a) || a === undefined || a === null) {
    return false;
  }
  return true;
}

function isEqual(a, b) {
  if (a === b) {
    return true;
  }
  return false;
}

function isGreaterThan(a, b) {
  if (a > b) {
    return true;
  }
  return false;
}

function isLessThanOrEqualTo(a, b) {
  if (a <= b) {
    return true;
  }
  return false;
}

function isOdd(a) {
  if (a % 2 !== 0) {
    return true;
  }
  return false;
}

function isEven(a) {
  if (a % 2 === 0) {
    return true;
  }
  return false;
}

function isSquare(a) {
  const i = Math.sqrt(a);
  const rest = i * i;

  if (rest === a) {
    return true;
}
  return false;
}

function startsWith(char, string) {
  if (char === string.charAt(0)) {
    return true;
  }
  return false;
}

function containsVowels(string) {
  if (string.match(/[aeiou]/gi)) {
    return true;
  }
  return false;
}

function isLowerCase(string) {
  if (string.match(/[A-Z]/g)) {
    return false;
  }
  return true;
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