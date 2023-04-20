// Generate Random Fractions with JavaScript
function randomFraction() {
  return Math.random();
}

// Generate Random Whole Numbers with JavaScript
function randomWholeNum() {
  return  Math.floor(Math.random() * 10);
}

// Generate Random Whole Numbers within a Range
function randomRange(myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}
randomRange(3, 7);

// Use the parseInt Function
function convertToInteger(str) {
  return parseInt(str);
}
convertToInteger("56");
