// The objective of this exercise is to implement
// reduce. Note that reduce always returns one value.

const reduce = function(list, callback, initial) {
  
  // Set our initial value
  let prev = initial;
  
  // Loop through list
  for(let i = 0; i < list.length; i++) {
    
    // If no argument passed for initial value
    if(i == 0 && prev === undefined) {
      // Set prev to start at first index of array
      prev = list[0];
    } else {
      // Call the callback with arr[i], prev/initial
     prev = callback(list[i], prev);      
    }
    
  }
  
  // Return result
  return prev;
}


let myTest = reduce([1, 2, 3], function(n, sum) {
  return n + sum;
}, 0);

 console.log(myTest);