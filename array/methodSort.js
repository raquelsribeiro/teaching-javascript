// sort
/*
    The sort() method sorts the elements of the array itself and returns the array. 
    The sort() method is not necessarily stable. 
    The default sorting is according to the unicode code score.
*/

// SORT => https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

const fruit = ["cherries", "apples", "bananas"];
const fruitSort = fruit.sort();
console.log(fruitSort);

const numbers = [4, 2, 5, 1, 3];
const numbersSort = numbers.sort((a, b) => {
  return a - b;
});
console.log(numbersSort);
