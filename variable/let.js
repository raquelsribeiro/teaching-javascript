// let

/*
    after a let is declared you can not declare another let with the same name,
    in this case what could be done is to replace the value of the same variable declared
*/

let name = "Pedro";
console.log(name);

// let name = "Pedro";
// console.log(name); // let error already declared

name = "Stephany"; // Here we can change the value of the name because it is a variable
console.log(name);

// scope local
{
  // console.log(value); // Error value is not defined
  {
    // console.log(value); // Error value is not defined
    {
      let value = 800;
      console.log(value); // In this console it will only display the value because the variable value has already been declared making it display the value without popping an error
    }
  }
}
