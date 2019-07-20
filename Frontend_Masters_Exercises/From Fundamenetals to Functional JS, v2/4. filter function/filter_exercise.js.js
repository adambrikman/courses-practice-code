/*
    Assignment: Filter the videoData below by the individuals who were present.
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

// Filter the data
let myTest = _.filter(videoData, function (suspectObject) {
  
  // Return the present object property
  return suspectObject.present;
});

console.log(myTest);
