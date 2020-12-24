// reduce
/*
    The reduce() method reduces the matrix to a single value. 
    The reduce() method performs a function provided for each value of the matrix (from left to right). 
    The return value of the function is stored in an accumulator (result / total). 
    The reduce() method does not execute the function for matrix elements without values.
*/

// REDUCE => https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

const numbers = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(numbers.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(numbers.reduce(reducer, 5));
// expected output: 15
