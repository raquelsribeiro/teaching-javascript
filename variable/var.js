// var
/*
    The variable can have a varied value so when we declare a variable we can change the value we gave it.
    It is important to know that the variable is of global scope.
*/
var name = "Jhonas1";
console.log(name);

var name = "Jhonas2";
console.log(name);

name = "Jhonas3";
console.log(name);

// global scope
// A var called before your declaration receives the undefined value and does not break the application
{
  console.log("fisrt scope", test);
  {
    console.log("second scope", test);
    {
      var test = "teste";
      console.log("declared scope", test);
    }
  }
}
