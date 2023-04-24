//Escaping Literal Quotes in Strings
const myStr = "I am a \"double quoted\" string inside \"double quotes\".";

//Quoting Strings with Single Quotes
const myStr2 = '<a href="http://www.example.com" target="_blank">Link</a>';

//Escape Sequences in Strings
const myStr3 = "FirstLine\n\t\\SecondLine\nThirdLine";

//Concatenating Strings with Plus Operator
const myStr4 = "This is the start." + " This is the end.";

//Concatenating Strings with the Plus Equals Operator
let myStr5 = "This is the first sentence. ";
myStr5 += "This is the second sentence.";

//Constructing Strings with Variables
const myName = "Vika";
const myStr6 = "My name is " + myName + " and I am well!";

//Appending Variables to Strings
const someAdjective = "cool!";
let myStr7 = "Learning to code is ";
myStr7 += someAdjective;

//Find the Length of a String
let lastNameLength = 0;
const lastName = "Lovelace";
lastNameLength = lastName.length;

//Use Bracket Notation to Find the First Character in a String
let firstLetterOfLastName = "";
const lastName1 = "Lovelace";
firstLetterOfLastName = lastName1[0];

//Understand String Immutability
let myString = "Jello World";
myString = "Hello World";

//Use Bracket Notation to Find the Nth Character in a String
const lastName2 = "Lovelace";
const thirdLetterOfLastName = lastName2[2];

//Use Bracket Notation to Find the Last Character in a String
const lastName3 = "Lovelace";
const lastLetterOfLastName = lastName3[lastName3.length-1] ;

//Use Bracket Notation to Find the Nth-to-Last Character in a String
const lastName4 = "Lovelace";
const secondToLastLetterOfLastName = lastName4[lastName4.length - 2];

//Word Blanks
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";
const wordBlanks = myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb;
