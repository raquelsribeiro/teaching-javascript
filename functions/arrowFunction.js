// arrow function

// ARROW FUNCTION => https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/Arrow_functions

// An arrow function expression has a shorter syntax when compared to a function expression and does not have its own this, arguments, super or new.target.

/*
    function without parameter that always returns the same value
*/
const sumWithoutParameters = () => {
  return 1 + 1;
};
console.log(sumWithoutParameters());

/* 
      A function with parameters will always return different values than the latter if it is a sum
  */
const sumWithParameters = (a, b) => {
  return a + b;
};
console.log(sumWithParameters(1, 2));

const displayNameWithoutParameters = () => {
  return "Raquel";
};
console.log(displayNameWithoutParameters());

const displayNameWithParameters = (name) => {
  return name;
};
console.log(displayNameWithParameters("Vitor"));
