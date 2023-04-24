//Write Reusable JS with Functions
function reusableFunction() {
    console.log('Hi World');
  } 
reusableFunction();

//Passing Values to Functions with Arguments
function functionWithArgs(param1, param2) {
    console.log(param1 + param2);
  }
functionWithArgs(2, 3);

//Return a Value from a Function with Return
function timesFive(num) {
    return num * 5;
  }
timesFive(3);

//Global Scope and Functions
let myGlobal = 10;

function fun1() {
    let oopsGlobal = 5;
}

function fun2() {
    let output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
        // output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}

//Local Scope and Functions
function myLocalScope() {
    const myVar = 5;
    console.log('inside myLocalScope', myVar);
}
myLocalScope();
// console.log('outside myLocalScope', myVar);


//Global vs. Local Scope in Functions 
const outerWear = "T-Shirt";
function myOutfit() {
    const outerWear = "sweater";
    return outerWear;
}
myOutfit();

//Understanding Undefined Value returned from a Function
let sum = 0;
function addThree() {
  sum = sum + 3;
}
function addFive() {
  sum += 5;
}
addThree();
addFive();

// Assignment with a Returned Value
let processed = 0;
function processArg(num) {
    return (num + 3) / 5;
}
processed = processArg(7);

//Stand in Line 
function nextInLine(arr, item) {
    arr.push(item);
    item = arr.shift();
    return item;
}  
let testArr = [1, 2, 3, 4, 5];
console.log(nextInLine(testArr, 6));

//Understanding Boolean Values
function welcomeToBooleans() {  
    return true; 
}

//Use Conditional Logic with If Statements
function trueOrFalse(wasThatTrue) {
    if (wasThatTrue) {
      return "Yes, that was true";
    }
    return "No, that was false";
  }
trueOrFalse(true);
trueOrFalse(false);

//Comparison with the Equality Operator
function testEqual(val) {
    if (val == 12) {
      return "Equal";
    }
    return "Not Equal";
  }
testEqual(10);

//Comparison with the Strict Equality Operator
function testStrict(val) {
    if (val === 7) {
      return "Equal";
    }
    return "Not Equal";
}
console.log(testStrict(10));

//Practice comparing different values
function compareEquality(a, b) {
    if (a === b) { // Change this line
      return "Equal";
    }
    return "Not Equal";
}
compareEquality(10, "10");

//Comparison with the Inequality Operator
function testNotEqual(val) {
    if (val != 99) { // Change this line
      return "Not Equal";
    }
    return "Equal";
}  
testNotEqual(10);

//Comparison with the Strict Inequality Operator
function testStrictNotEqual(val) {
    if (val !== 17) { // Change this line
      return "Not Equal";
    }
    return "Equal";
}  
testStrictNotEqual(10);

//Comparison with the Greater Than Operator
function testGreaterThan(val) {
    if (val > 100) {
      return "Over 100";
    }
  
    if (val > 10) {
      return "Over 10";
    }
  
    return "10 or Under";
}  
testGreaterThan(10);

//Comparison with the Greater Than Or Equal To Operator
function testGreaterOrEqual(val) {
    if (val >= 20) {  
      return "20 or Over";
    }
  
    if (val >= 10) {
      return "10 or Over";
    }
  
    return "Less than 10";
}
testGreaterOrEqual(10);

//Comparison with the Less Than Operator
function testLessThan(val) {
    if (val < 25) { 
      return "Under 25";
    }
    if (val < 55) { 
      return "Under 55";
    }
    return "55 or Over";
}
testLessThan(10);

//Comparison with the Less Than Or Equal To Operator
function testLessOrEqual(val) {
    if (val <= 12) { 
      return "Smaller Than or Equal to 12";
    }
    if (val <= 24) { 
      return "Smaller Than or Equal to 24";
    }
    return "More Than 24";
}
testLessOrEqual(10);

//Comparisons with the Logical And Operator
function testLogicalAnd(val) {
    if (val <= 50 && val >= 25) {
      return "Yes";
    }
    return "No";
  }
testLogicalAnd(10);

//Comparisons with the Logical Or Operator
function testLogicalOr(val) {
    if (val < 10 || val > 20) {
      return "Outside";
    }
    return "Inside";
}
testLogicalOr(15);