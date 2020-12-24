// conditional if and else

const age = 15;

if (age <= 12) {
  console.log("Yes age is smaller than 12");
} else {
  console.log("No age is smaller than 12");
}

if (age >= 15) {
  console.log("Yes age is larger than 12");
} else {
  console.log("No age is larger than 12");
}

if (age > 7 && age < 12) {
  console.log("Kids");
} else if (age > 11 && age < 15) {
  console.log("pre-adolescent");
} else if (age > 14 && age < 18) {
  console.log("teenager");
} else {
  console.log("adults");
}
