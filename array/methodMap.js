// map
/*
    The map method calls the callback function received per parameter for each element of the original Array, in order, and builds a new array based on the returns of each call.
*/

// MAP => https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/map

const persons = [
  { name: "Carlos", age: 19 },
  { name: "Laura", age: 30 },
  { name: "Ricardo", age: 45 },
];
console.log("persons", persons);

const newPersons = persons.map((person) => {
  return {
    ...person, // Spread operator (https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Spread_operator)
    pay: false,
  };
});
console.log("newPersons", newPersons);

const names = ["Vitor", "Raquel"];
console.log("names", names);

const newNames = names.map((name) => {
  return {
    name: name,
  };
});
console.log("newNames", newNames);
