// Part 1: Loop through suspects array:

const game = {
  'suspects': [
    {
      name: "Rusty",
      color: "orange"
    }, {
      name: "Miss Scarlet",
      color: "red"
    }
  ]
}

// Loop through suspects array
/* 
  for(let suspect of game.suspects) {
    console.log(suspect);
  }
*/



// Part 2: Loop through all the properties of the suspect objects in the suspects array, mark them if you think they are guilty

// for…of is used to iterate over the values in an iterable (e.g. array)
for(let suspect of game.suspects) {

  // for..in is used to iterate over the values in the objects
  for (let key in suspect) {
    
    // verify that the key is an actual property of an object
    if(suspect.hasOwnProperty(key)) {
      
      // If suspect's name is Rusty, update value to include "Guilty"
      if(suspect[key] == "Rusty") {
        suspect[key] += " [GUILTY]";
      }
      
      // Print each key/value pair
      // console.log(key + ": " + suspect[key]);    
    }
  }
}

// Part 3: Destructure the below nested data structure into two variables with the strings 'red' and 'orange'

var suspects = [
    {
      name: "Rusty",
      color: "orange"
    }, {
      name: "Miss Scarlet",
      color: "red"
    }
  ]

// Destructured
var [{color: firstColor}, {color: secondColor}] = suspects;

 console.log(firstColor);
