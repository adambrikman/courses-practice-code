// Function to create an object for suspects
function CreateSuspectObjects(name) {
  return {
    name: name,
    color: name.split(' ')[1],
    speak() {console.log(`my name is ${this.name}`);}
    
  };
};

var suspects = ['Miss Scarlet', 'Colonel Mustard', 'Mr. White'];

// Create underscore object
const _ = {};

// Assign a function to _.map, which loops through arrays & objects
_.map = function (list, iterator) {

  let myArr = [];
  
  // If list is array
  if(Array.isArray(list)) {

     // Loop through array, pass array item to function & store object in myArr
     for(let item of list) {
       myArr.push(iterator(item, item, list)); //, item, list
     };

  } else {
    
     // Loop through object, pass object property to function & store object in myArr
     for(let prop in list) {
       myArr.push(iterator(list[prop], prop, list));
     }
    }

  return myArr;
};

// Populate suspectObjectList using a _.map
var suspectObjectList = _.map(suspects, function (suspect) {
  return CreateSuspectObjects(suspect);
});

console.log(suspectObjectList);