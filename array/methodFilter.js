// filter
/*
    The filter() is a method that returns the elements of a matrix that meet the condition specified in a callback function
*/

// FILTER => https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/filtro

const persons = [
  { name: "Carlos", age: 19, gender: "M" },
  { name: "Laura", age: 30, gender: "F" },
  { name: "Ricardo", age: 45, gender: "M" },
];

const names = ["Vitor", "Raquel"];
const filterName1 = names.filter((name) => name === "Vitor");
console.log(filterName1);

console.log("persons", persons);

const filterName = persons.filter(function (person, index) {
  console.log(index); // exibe position
  return person.name === "Ricardo";
});
console.log(filterName);

const filterAge = persons.filter((person) => person.age < 40);
console.log(filterAge);

const filterGender = persons.filter((person) => person.gender === "F");
console.log(filterGender);
