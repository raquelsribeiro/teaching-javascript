// 01 - Create a list of people with at least 10 names
const people = [
  "Raquel",
  "Vitor",
  "Duda",
  "Hebert",
  "Felipe",
  "Rafael",
  "Emanoel",
  "Eliana",
  "Janaina",
  "Vitoria",
];
console.log(people[7]);

//02 - create a list with numbers from 0 to 50

let numbers = []; //condição
console.log("inicio" + numbers);

for (let i = 0; i <= 50; i++) {
  //numbers.push(i);
  numbers = [...numbers, i];
}
console.log(numbers + "fim");

//03 - create a shopping list with product name, product price and whether it is healthy or not

const food = [
  { foods: "Espinafre", price: 3.5, healthy: true },
  { foods: "Abacate", price: 5, healthy: true },
  { foods: "Refrigerante", price: 4, healthy: false },
  { foods: "Macarrão instantâneo", price: 3, healthy: false },
  { foods: "Melancia", price: 16.99, healthy: true },
];
console.log(food[3]);

const filterHealthy = food.filter((foods) => foods.healthy == false);
console.log(filterHealthy);

//04 - create a list of names up to 5 names and filter one of the names within the list

const persons = ["Noah", "Helena", "Uriel", "Rafael"];

const filterPersons = persons.filter((persons) => persons === "Noah");
console.log(filterPersons);

//05 - create a list of radom numbers and then rearrange them incrementally

const numbersRadom = [4, 7, 8, 5, 1, 3, 6, 2];
const numbersSort = numbersRadom.sort((a, b) => {
  return a - b;
});
console.log(numbersSort);

//06 - create a list of objects with name and age and include whether the person is married or not.

const objects = [
  { name: "Raquel", age: 19 },
  { name: "Luan", age: 30 },
  { name: "Rafael", age: 45 },
  { name: "Jessica", age: 21 },
];
console.log("objects", objects);

const newObjects = objects.map((objects) => {
  return {
    ...objects,
    married: true,
  };
});
console.log("newObjects", newObjects);

//07 - create a list of random numbers and capture only the total value of all the numbers

const listNumbers = [10, 20, 30, 40];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

console.log(listNumbers.reduce(reducer));
