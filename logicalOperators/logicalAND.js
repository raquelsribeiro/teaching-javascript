// AND

// LOGICAL OPERATORS => https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Operadores_Logicos

const a1 = true && true; // t && t return true
const a2 = true && false; // t && f return false
const a3 = false && true; // f && t return false
const a4 = false && 3 == 4; // f && f return false
const a5 = "Cat" && "Dog"; // t && t return "Dog"
const a6 = false && "Cat"; // f && t return false
const a7 = "Cat" && false; // t && f return false
const a8 = "" && false; // f && f return ""
const a9 = false && ""; // f && t return false
