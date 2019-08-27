// Implement curry() that only takes up to 2 arguments
const _ = {};

// Store a function that takes one argument in a variable
_.curry = function(arg) {
  // Return the function, which accepts a second argument
  return function (arg2) {
    // Return the value
    return arg + " " + arg2
  }
}

let myTest = _.curry("fat")("cat");

console.log(myTest);