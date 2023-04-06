//Store Multiple Values in one Variable using JavaScript Arrays
const myArray = ["bread", 7];

//Nest one Array within Another Array
const myArr = [[1, 2, 3]];

//Access Array Data with Indexes
const myArray1 = [50, 60, 70];
const myData = myArray1[0];

//Modify Array Data With Indexes
const myArray2 = [18, 64, 99];
myArray2[0] = 45;

//Access Multi-Dimensional Arrays With Indexes
const myArray3 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
  ];
  
const data = myArray3[2][1];

//Manipulate Arrays With push Method
const myArray4 = [["John", 23], ["cat", 2]];
myArray4.push(["dog", 3]);

//Manipulate Arrays With pop Method
const myArray5 = [["John", 23], ["cat", 2]];
const removedFromMyArray = myArray5.pop();

//Manipulate Arrays With shift Method
const myArray6 = [["John", 23], ["dog", 3]];
const removedFromMyArray1 = myArray6.shift();

