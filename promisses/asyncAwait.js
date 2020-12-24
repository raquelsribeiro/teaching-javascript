// async await

// ASYNC AWAIT => https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/funcoes_assincronas

const sum = (a, b) => {
  return new Promise((resolve, reject) => {
    if (typeof a === "number" && typeof b === "number") {
      resolve(a + b);
    }
    reject(Error("Not suported string in params"));
  });
};

(async function () {
  try {
    const result = await sum(10, 5);
    console.log(result);
  } catch (error) {
    throw Error(error);
  }
})();
