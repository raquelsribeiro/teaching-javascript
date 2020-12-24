// object
/*
    An object is a collection of properties, 
    and a property is an association between a name (or key) and a value
*/

// OBJECT => https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Trabalhando_com_Objetos

// We have two ways of declaring an object, they are as follows

//way one
const object1 = new Object();
object1.name = "Koard";
object1.age = 26;
object1.pay = false;
console.log(object1);

// way two
const object2 = {
  name: "Koard",
  age: 26,
  pay: false,
};
console.log(object2);
