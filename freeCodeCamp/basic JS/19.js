// Use Recursion to Create a Countdown
function countdown(n){
    if (n < 1) {
      return [];
    } else {
      const constArray = countdown(n - 1);
      constArray.unshift(n);
      return constArray;
    }
}
countdown(5);

// Use Recursion to Create a Range of Numbers
function rangeOfNumbers(startNum, endNum) {
  if (endNum < startNum) {
    return [];
  } else {
    const constArray = rangeOfNumbers(startNum, endNum - 1);
    constArray.push(endNum);
    return constArray;
  }
}
console.log(rangeOfNumbers(2, 6));