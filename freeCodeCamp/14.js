// Build JavaScript Objects
const myDog = {
    "name": "Toby",
    legs: 4,
    tails: 1,
    friends: ["Emma", "Sara"]
};

// Accessing Object Properties with Dot Notation
const testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
  };
const hatValue = testObj.hat;
const shirtValue = testObj.shirt;

//Accessing Object Properties with Bracket Notation
const testObj2 = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
  };
const entreeValue = testObj2["an entree"];
const drinkValue = testObj2["the drink"];

// Accessing Object Properties with Variables
const testObj3 = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
  };
const playerNumber = 16;
const player = testObj3[playerNumber];   

//Updating Object Properties
// Setup
const myDog2 = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
  };
myDog2.name = "Happy Coder";
  
// Add New Properties to a JavaScript Object
const myDog3 = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
  };
myDog3.bark = "woof";

//Delete Properties from a JavaScript Object
delete myDog.tails;
  
//Using Objects for Lookups
  
