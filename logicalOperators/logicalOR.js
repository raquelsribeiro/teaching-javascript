// OR

// LOGICAL OPERATORS => https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Operadores_Logicos

const o1 = true || true; // t || t return true
const o2 = false || true; // f || t return true
const o3 = true || false; // t || f return true
const o4 = false || 3 == 4; // f || f return false
const o5 = "Cat" || "Dog"; // t || t return "Cat"
const o6 = false || "Cat"; // f || t return "Cat"
const o7 = "Cat" || false; // t || f return "Cat"
const o8 = "" || false; // f || f return false
const o9 = false || ""; // f || f return ""
