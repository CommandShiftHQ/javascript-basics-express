const createPerson = (name, age) => {
  // your code here
  return {
    name, 
    age
  }
  
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
  return object.hasOwnProperty(property);
  
};

const isOver65 = person => {
  // your code here
  return (person.age>65);

};

const getAges = people => {
  // your code here
  return (people.map(person => person.age));

};

const findByName = (name, people) => {
  // your code here

  return (people.find(person => person.name === name));
};

const findHondas = cars => {
  return (cars.filter(car => car.manufacturer === 'Honda'));
  // your code here
};

const averageAge = people => {
  // your code here

  const total = people.reduce((acc, person)=> acc + person.age, 0);
  return (total/people.length); 
};

const createTalkingPerson = (name, age) => {
  /*
  name, 
  age,
 introduce=> name{
    return "Hi" +this.name+ ", my name is"+ name + "and I am" + this.age +"!";
  }
  introduce ("Fred");
  */
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
