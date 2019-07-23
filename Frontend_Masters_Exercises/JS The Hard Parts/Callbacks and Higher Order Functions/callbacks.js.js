// Type JavaScript here and click "Run Code" or press Ctrl + s
// console.log('Hello, world!');


// Challenge 1
function addTwo(num) {
	return num + 2;
}

// To check if you've completed it, uncomment these console.logs!
// console.log(addTwo(3));
// console.log(addTwo(10));

// Challenge 2
function addS(word) {
	return word+'s';
}

// uncomment these to check your work
// console.log(addS('pizza'));
// console.log(addS('bagel'));

// Challenge 3
function map(array, callback) {

  // Create new array
  let storage = [];
  
  // Loop through passed-in array
  for(let i = 0; i < array.length; i++) {
    
    // Pass each value in the array to our callback and push it to storage
    storage.push(callback(array[i]));
  }
  
  // Return new array
  return storage;
  
}

// console.log(map([1, 2, 3], addTwo));


// Challenge 4
function forEach(array, callback) {
	
  // Loop through passed-in array
  for(let i = 0; i < array.length; i++) {
    // Pass each value in the array to our callback
    callback(array[i])
  }
  
}

// see for yourself if your forEach works!
// var alphabet = '';
// var letters = ['a', 'b', 'c', 'd'];
// forEach(letters, function(char) {
//   alphabet += char;
// });
// console.log(alphabet);   //prints 'abcd'




//--------------------------------------------------
// Extension
//--------------------------------------------------

//Extension 1
function mapWith(array, callback) {
  
  // Create new array
	const storage = [];
  
	// Loop through passed-in array using forEach
  forEach(array, function(value) {
    
    // Push result of callback to storage array
    storage.push(callback(value));
  });
   
  // Return new array
  return storage;

}

// console.log(mapWith([1, 2, 3], addTwo));


//Extension 2
function reduce(array, callback, initialValue) {

  // Assign initialValue to a variable named total
  let total = initialValue;
  
  // Loop through passed in array
  forEach(array, function(val) {
    // Set total to the value returned from our callback
    total = callback(total, val);
  });
  
  // Return the final, reduced total
  return total;
  
}

// var nums = [4, 1, 3];
// var add = function(a, b) { return a + b; }
// console.log (reduce(nums, add, 0) );   //-> 8

//Extension 3
function intersection(...arrays) {
 
  // Create a hash table
  let elementCount = {};
  
  // Loop through all arrays
  for(let i = 0; i < arrays.length; i++) {
    for(let j = 0; j < arrays[i].length; j++) {
      
      // If number is not in our hashtable, add it
	    if(!elementCount.hasOwnProperty(arrays[i][j])) {
        elementCount[arrays[i][j]] = 1;
      } else {
        
        // Otherwise, increment it
        elementCount[arrays[i][j]] += 1;
      }
    }
  }
  
  // Create an array to hold the intersecting values
  let newArr = [];
  
  /* Loop through our hashtable. If the elementCount matches 
  the number of arrays we have, push the element to the array */
  for(let key in elementCount) {
    if(arrays.length == elementCount[key]) {
      newArr.push( parseInt(key) );
    };
  }
  
  // Return array
	return newArr;
  
}

// console.log(intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]));
// should log: [5, 15]

//Extension 4
function union(...arrays) {

  // Create an array to hold the union values
  let newArr = [];
   
  // Loop through all arrays
  for(let i = 0; i < arrays.length; i++) {
    for(let j = 0; j < arrays[i].length; j++) {
      
      // If number is not in our hashtable, add it
	    if(!newArr.includes(arrays[i][j])) {
        newArr.push(arrays[i][j]);
      }
    }
  }
  
	return newArr; 
  
}

// console.log(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]));
// should log: [5, 10, 15, 88, 1, 7, 100]

//Extension 5
function objOfMatches(array1, array2, callback) {

  // Create an object to hold all of our matches
  let matchedObj = {};
  
  // Loop through both arrays
  for(let i = 0; i < array1.length; i++) {
    
    /* If the value in array1 (after being passed 
    to callback) matches the corresponding value 
    in array2, add it to matchedObj */
    if(callback(array1[i]) == array2[i]) {
      matchedObj[array1[i]] = array2[i];
    }
  }
  
  return matchedObj;
  
}

// console.log(objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], function(str) { return str.toUpperCase(); }));
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }

//Extension 6
function multiMap(arrVals, arrCallbacks) {

  // Create an object to hold our results
  let multiObj = {};
  
  
  // Loop through arrVals
  for(let i = 0; i < arrVals.length; i++) {
    
    // Create a new array for each arrVal
    let multiArr = [];
    
    // Loop through our functions
    for(let j = 0; j < arrCallbacks.length; j++) {
      
      // Push the value returned from each callback to multiArr
			multiArr.push(arrCallbacks[j](arrVals[i]));
    }
    
    // Add to our object the respective key & array value
    multiObj[arrVals[i]] = multiArr;
  }
  
  // Return the result
	return multiObj;
  
}

// console.log(multiMap(['catfood', 'glue', 'beer'], [function(str) { return str.toUpperCase(); }, function(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }, function(str) { return str + str; }]));
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }

