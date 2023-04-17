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
function phoneticLookup(val) {
    let result = "";
    const lookup = {
      "alpha": "Adams",
      "bravo": "Boston",
      "charlie": "Chicago",
      "delta": "Denver",
      "echo": "Easy",
      "foxtrot": "Frank"
    };
    result = lookup[val];
    return result;
  }
console.log(phoneticLookup("charlie"));


//Testing Objects for Properties
function checkObj(obj, checkProp) {
    if (obj.hasOwnProperty(checkProp)) {
      return obj[checkProp];
    }
    else {
      return "Not Found";
    }
}

// Manipulating Complex Objects
const myMusic = [
    {
      "artist": "Billy Joel",
      "title": "Piano Man",
      "release_year": 1973,
      "formats": [
        "CD",
        "8T",
        "LP"
      ],
      "gold": true
    },
    {
      "artist": "Daft Punk",
      "title": "Random Access Memories",
      "release_year": 2013,
      "formats": [
        "CD", "LP", "Vinyl"
      ]
    }
];

//Accessing Nested Objects
const myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
};
const gloveBoxContents = myStorage.car.inside["glove box"];

//Accessing Nested Arrays
const myPlants = [
    {
      type: "flowers",
      list: [
        "rose",
        "tulip",
        "dandelion"
      ]
    },
    {
      type: "trees",
      list: [
        "fir",
        "pine",
        "birch"
      ]
    }
];
const secondTree = myPlants[1].list[1];