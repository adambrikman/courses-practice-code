// Implement _.from()

// Implementation via ES6 function syntax
const from = obj => {
  
  // Execute the following if parameter is not an array
  if(!Array.isArray(obj)) {
    // Use ES5 syntax on passed value
    return Array.prototype.slice.call(obj);
  }
}


// Function that calls our from method
const constructArr = function() {
  const arr = from(arguments);
  arr.push('the billiards room?');
  return arr.join(' ');
  
};

console.log( constructArr('was', 'it', 'in') );
