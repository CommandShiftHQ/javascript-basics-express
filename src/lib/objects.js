const createPerson = (name, age) => {
  person = {
    name,
    age
  };
  return person;
};

const getName = object => {
  return object.name;
};

const getProperty = (property, object) => {
  let question = property === 'name' ? object.name : object.age;
  return question;
};

const hasProperty = (property, object) => {
  let question = property === 'name' ? true 
  : property === 'age' ? true 
  : false;
  return question;
};

const isOver65 = person => {
  if (person.age > 65) {
    return true;
  }
  return false;
};

const getAges = people => {
  const result = people.map(array => array.age);
  return result;
};

const findByName = (name, people) => {
  const byName = people.find(byName => byName.name === name);
  return byName;
};

const findHondas = cars => {
  const honda = cars.filter(honda => honda.manufacturer === 'Honda');
  return honda;
};

const averageAge = people => {
  const average =
    people.reduce((initial, newt) => initial + newt.age, 0) / people.length;
  return average;
};

const createTalkingPerson = (name, age) => {
 const person = {
  name,
  age,
  introduce: a => {
    return `Hi ${a}, my name is ${name} and I am ${age}!`;
    }
 }
 return person;
};

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
