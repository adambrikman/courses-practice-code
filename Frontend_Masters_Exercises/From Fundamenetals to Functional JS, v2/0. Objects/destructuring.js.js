/* Exercise: 
  1. Create an object that looks like this:
  {"character": "Rusty", "room":"kitchen", "weapon":"candlestick"}
  
  2. Extract out the weapon and location using destructuring
*/

// Create object & assign values of the pairs to the variables via destructuring
let {name, weapon, room} = {"name": "Rusty", "room":"kitchen", "weapon":"candlestick"};

// Log weapon & location
// console.log(weapon, room);
