// Figure out which room no one claims to be in on the night of the murder from the dataset

const newDevelopment = [
    {
        name: 'Miss Scarlet',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: true},
            {'dining room': true},
            {'billiard room': false},
            {library: true}
        ]
    },
    {
        name: 'Reverend Green',
        present: true,
        rooms: [
            {kitchen: true},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': true},
            {library: false}
        ]
    },
    {
        name: 'Colonel Mustard',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: true},
            {'dining room': false},
            {'billiard room': true},
            {library: false}
        ]
    },
    {
        name: 'Professor Plum',
        present: true,
        rooms: [
            {kitchen: true},
            {ballroom: false},
            {conservatory: false},
            {'dining room': true},
            {'billiard room': false},
            {library: false}
        ]
    }
];

/* Assign a function to notInRoom, which loops 
through arrays & returns a new (filtered) array */
const notInRoom = function (list, callback) {

  // Create a new array
  let storage = [];

  // Loop through array of suspect objects
  for(let i = 0; i < list.length; i++) {

    // Loop through rooms to identify rooms 'not visited' (e.g. false)
    for(let j = 0; j < list[i].rooms.length; j++) {

      // If the value of the room property is false
      if(Object.values(list[i].rooms[j]) == "false") {
        
        // push room name onto array
        storage.push(Object.keys(list[i].rooms[j]));
      }
    }
  };
  return storage;
}


/*  The following function counts the number of suspects & the number of times a room showed up in the 
    array generated from our notInRoom function. The room which shows up the same number of times as the
    number of suspects we have is the empty room. */

const emptyRoom = function(objList, arr) {
  
  // Create a variable for number of Suspects
  let numberOfSuspects = 0;
  
  // Count suspects  
  for(let obj of objList) {
    numberOfSuspects += 1;
  }

  // Create object to hold the rooms & their counts
  let roomObj = {};

  // Loop through array of rooms and add them to our roomObj
  for(let i = 0; i < arr.length; i++) {
    
    // If room not already in roomObj, add it
    if(!roomObj.hasOwnProperty(arr[i])) {
      roomObj[arr[i]] = 1;
      
    // Otherwise, increment it
    } else {
      roomObj[arr[i]] +=1;
    }
  }
  
  /* Loop through our roomObj. If the count for a room matches 
  the number of suspects, print the below sentence to the console */
  for(let room in roomObj) {
    if(roomObj[room] == numberOfSuspects) {
      console.log(`The ${room} was the empty room!!!`);
    }
  }
    
}


// Filter the data
let myTest = notInRoom(newDevelopment, function (suspectObject) {
  
  // Return the present object property
  return suspectObject.rooms;
});

emptyRoom(newDevelopment, myTest);

