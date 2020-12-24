// Promisse

// PROMISSE => https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Usando_promises

/*
    A Promise is an object that represents the eventual conclusion or failure of an asynchronous operation.
     As most people consume promises already created, this guide will explain the consumption of returned promises before explaining how to create them.
*/
const sum = (a, b) =>
  new Promise((resolve, reject) => {
    if (typeof a === "string" || typeof b === "string") {
      reject(Error("Not suported string in params"));
    }
    resolve(a + b);
  });

sum(10, 5)
  .then((res) => console.log(res))
  .catch((error) => console.error(error));
