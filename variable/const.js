// const
/*
    const is a constant where after being declared once we cannot change its value
*/

const name = "Jhon";
// name = "Jhon1"; // Error assignment to constant variable
console.log(name);

// scope local
{
  // console.log(value); // Error value is not defined
  {
    // console.log(value); // Error value is not defined
    {
      const value = 600;
      console.log(value); // In this console it will only display the value because the variable value has already been declared making it display the value without popping an error
    }
  }
}
