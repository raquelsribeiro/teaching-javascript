// recursive functions

/*
    We call recursiveness the ability of a routine to invoke itself. 
    In other words: a recursive function is one that invokes itself. 
*/

function contDown(fromNumber) {
  console.log(fromNumber);

  let nextNumber = fromNumber - 1;

  if (nextNumber > 0) {
    contDown(nextNumber);
  }
}

contDown(6);
