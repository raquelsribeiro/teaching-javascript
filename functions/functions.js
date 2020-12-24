// functions

// FUNCTIONS => https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Fun%C3%A7%C3%B5es

/* 
    after a function is declared it should have some return 
*/
/*
    function without parameter that always returns the same value
*/
function sumWithoutParameters() {
  return 1 + 1;
}
console.log(sumWithoutParameters());

/* 
    A function with parameters will always return different values than the latter if it is a sum
*/
function sumWithParameters(a, b) {
  return a + b;
}
console.log(sumWithParameters(1, 2));

function displayNameWithoutParameters() {
  return "Raquel";
}
console.log(displayNameWithoutParameters());

function displayNameWithParameters(name) {
  return name;
}
console.log(displayNameWithParameters("Vitor"));
