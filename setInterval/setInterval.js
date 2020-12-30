let oneTest = setInterval(function () {
  console.log("After 3 seconds");
  clearInterval(oneTest);
}, 3000);

let twoTest = setInterval(() => {
  console.log("After 4 seconds");
  clearInterval(twoTest);
}, 4000);

let threeTest = setInterval(() => {
  console.log("After 5 seconds");
  clearInterval(threeTest);
}, 5000);
