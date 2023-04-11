// Write Reusable JS with Functions
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

