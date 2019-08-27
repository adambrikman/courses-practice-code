/*
    Assignment: Filter and then map this data
    structure to get the names of the final
    suspects to send back to the team
*/

const videoData = [
    {
        name: 'Miss Scarlet',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Mrs. White',
        present: false,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Reverend Green',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Rusty',
        present: false,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Colonel Mustard',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Professor Plum',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    }
];


// Create underscore object
const _ = {};

/* Assign a function to _.filter, which loops 
through arrays & returns a new (filtered) array */
_.filter = function (list, callback) {

  // Create a new array
  let storage = [];

  // Loop through array
  for(let i = 0; i < list.length; i++) {

    // Check if callback returns true 
    if(callback(list[i], i, list)) { // Note, we are using brackets on list[i] because i is a variable

       // If it returns true, push into array 
       storage.push(list[i]);
    };
  };
return storage;
}

/* Assign a function to _.map, which loops 
through arrays & returns a new array */
_.map = function (list, callback) {
  
  // create new array
  let myArr = [];
  
  if(Array.isArray(list)) {

    // Loop through array
    for(let item of list) {
      myArr.push(callback(item, item, list));
    }
    
  } else {

    // Loop through object
    for(let prop in list) {
      myArr.push(callback(list[prop], prop, list));
    }
    
  }
  
    
  // return array
  return myArr;
}

// Filter the data
let filteredSuspects = _.filter(videoData, function (suspectObject) {
  
  // Return the present object property
  return suspectObject.present;
});

// Map the data into a new array of strings
let mappedSuspects = _.map(filteredSuspects, remainingObj => {
  return remainingObj.name;
})

console.log(mappedSuspects);
