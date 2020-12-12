const createPerson = (name, age) => {
  return {
          name: name,
          age: age
        }
}

const getName = object => object.name;

const getProperty = (property, object) => object[property];

const hasProperty = (property, object) => Boolean(object[property]);
const hasPropertySol = (property, object) => object.hasOwnProperty(property);

const isOver65 = person => person.age > 65;

const getAges = people => people.map(person => person.age);

const findByName = (name, people) => people.filter(people => people.name === name)[0];
const findByNameSol = (name, people) => people.find(obj => obj.name === name);

const findHondas = cars => cars.filter(car => car.manufacturer === "Honda");

const averageAge = people => {
  const ages = people.map(person => person.age);
  return ages.reduce((total, age) => total + age) / ages.length;
};

const averageAge2 = people => {
  return people.reduce((total, obj) => total + obj.age, 0) / people.length;
}  // in this case we need to give reduce the initial value 
//- this is necessary when getting at a number inan object or sub-array

const createTalkingPerson = (name, age) => {
  return {
          name: name,
          age: age,
          introduce: (name2) => `Hi ${name2}, my name is ${name} and I am ${age}!`
        }
  }



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
