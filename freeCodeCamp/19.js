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
