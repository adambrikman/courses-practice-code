/* Assignment: Create an object using bracket/dot notation that represents 
the characters and related data you may find in a game of clue */

// Initialize object literal
var piece = {};

// Assign array as an object property via bracket notation (using a string)
var area = "rooms";

// Create an array of characters
piece["characters"] = ["Tom"];

// Add second character via brackets
piece["characters"][1] = "Jerry";

// Add third character via a method
piece["characters"].push("Bob");



// Assign array as an object property via dot notation
piece.weapons = ["candle-stick", "lead pipe"];



// Assign array as an object property via passing a variable via brackets (& assign it the "rooms" array below)
piece[area] = ["parlor", "library", "conservatory"];

// console.log(piece.characters);
// console.log(piece.weapons);
// console.log(piece.rooms); // NOTE: ".rooms" is used since it was assigned the property (array) on line 27
