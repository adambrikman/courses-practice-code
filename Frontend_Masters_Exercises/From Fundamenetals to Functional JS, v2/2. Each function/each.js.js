// Function to create an object for suspects
function CreateSuspectObjects(name) {
  return {
    name: name,
    color: name.split(' ')[1],
    speak() {console.log(`my name is ${name}`);}
  };
};

var suspects = ['Miss Scarlet', 'Colonel Mustard', 'Mr. White'];

var suspectList = [];

  // Populate suspectList with suspect objects using a for...of loop
/* 
  for(let suspect of suspects) {
    suspectList.push(CreateSuspectObjects(suspect));
  };
*/

/* ._each implementation of the above task 
   without lodash or underscore libraries   */

// Create an object for the underscore
const _ = {};

// Assign _.each to a function that loops through arrays & objects
_.each = function(list, iterator) {
  
  // If list is an array
  if(Array.isArray(list)) {

    // Loop through array
    for(let item of list) {
      iterator(item, item, list);
    };

    // Loop through array, but using regular for-loop
/*
    for(var i = 0; i < list.length; i++) {
      iterator(list[i], i, list);
    }
*/
    
  } else {
    
    // Loop through object
    for(let prop in list) {
      iterator(list[prop], prop, list);
    };
  }
};


// Populate suspectList with suspect objects using a ._each
_.each(suspects, function(name) {
  suspectList.push(CreateSuspectObjects(name));
});

console.log(suspectList);
