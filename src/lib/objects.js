const createPerson = (name, age) => {
  // your code here
  return {name:name, age:age};
};

const getName = object => {
  // your code here
  return object.name;
};

const getProperty = (property, object) => {
  // your code here
  return object[property];
};

const hasProperty = (property, object) => {
  // your code here
  return property in object;
};

//const hasProperty = (property, object) => object.hasOwnProperty(property);

const isOver65 = person => {
  // your code here
  return person.age > 65;
};

const getAges = people => {
  // your code here
  return people.map( onePerson => {return onePerson.age;});
};

const findByName = (name, people) => {
  // your code here
  return people.find(onePerson => { return onePerson.name === name;});
};

const findHondas = cars => {
  // your code here
  return cars.filter( car => {return car.manufacturer === 'Honda';} );
};

const averageAge = people => {
  // your code here
  let sum = 0;
  let count = 0;
  people.forEach( person => { 
    count ++;
    sum += person.age;
  });
  return sum / count;
};

// const averageAge = people => {
//   const totalAge = people.reduce((prevAge, currentPerson) => {
//     return prevAge + currentPerson.age;
//   }, 0);
//
//   return totalAge / people.length;
// };

const createTalkingPerson = (name, age) => {
  // your code here
  return {
  name:name,
  age:age,
  introduce: function(person) {
    return `Hi ${person}, my name is ${this.name} and I am ${this.age}!`;
    }
  }
};

// const createTalkingPerson = (name, age) => {
//   return {
//     name: name,
//     age: age,
//     introduce: strangersName => {
//       return `Hi ${strangersName}, my name is ${name} and I am ${age}!`;
//     }
//   };
// };

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson
};
