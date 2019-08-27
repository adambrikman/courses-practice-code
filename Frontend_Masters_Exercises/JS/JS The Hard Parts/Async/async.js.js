/////////////////
//             //
// CHALLENGE 1 //
//             //
/////////////////

 /* <<<=== Remove the first two slashes (//) to comment out this challenge when finished
console.log('Start of Challenge 1');

  console.log('I am at the beginning of the code');

  const consoleTimeout = function(){ console.log('I am in the setTimeout callback function') };

  setTimeout(consoleTimeout, 0);

  console.log('I am at the end of the code');

console.log('End of Challenge 1');
// */// (do not alter this line)




/////////////////
//             //
// CHALLENGE 2 //
//             //
/////////////////

 /* <<<=== Remove the first two slashes (//) to comment out this challenge when finished
console.log('Start of Challenge 2');

  // Declare function which logs message to console and assign to repeatMessage
  const repeatMessage = function(){ console.log("Interval Hello!") };

  // Initiate setInterval and assign the function to myInterval
  var myInterval = setInterval(repeatMessage, 2000);

  // Declare function which stops the calls to myInterval
  function pauseInterval() {
    clearInterval(myInterval);
  }

  // Initiate setTimeout, which calls our pauseInterval function & stops the logs to the console
  setTimeout(pauseInterval, 10000);

// ...your code above
function clearAllIntervals() {
  for (let i = 0; i < 1000; i++) {
    clearInterval(i);
  }
}
console.log('End of Challenge 2');
// */// (do not alter this line)



/////////////////
//             //
// CHALLENGE 3 //
//             //
/////////////////

 /* <<<=== Remove the first two slashes (//) to comment out this challenge when finished
console.log('Start of Challenge 3');


function everyXsecsForYsecs (func, interval, totalTime) {
  
  let start = setInterval(func, interval);
  let offSwitch = false;
 
  function pauseCalls() {
    clearInterval(start);
  }
  
  setTimeout(pauseCalls, totalTime);
  
}

function sayHowdy() {
  console.log("Howdy");
}

 everyXsecsForYsecs(sayHowdy, 1000, 5000);

console.log('End of Challenge 3');
// */// (do not alter this line)




/////////////////
//             //
// CHALLENGE 4 //
//             //
/////////////////

 /* <<<=== Remove the first two slashes (//) to comment out this challenge when finished
console.log('Start of Challenge 4');

  // Recreate forEach
  let forEach = function(arr, cb) {
    // Loop through array and apply callback to each array element
    for(let i = 0; i < arr.length; i++) {
      cb(arr[i]);
    }
  }
  
  // Define an array of delay times and assign it to delays
  let delays = [2000, 5000, 0, 3500];

  // define a function that prints a message to the console based on the delays array above
  let delayLog = function(delayTime, i) {

    // Declare a function that logs to the console a message and assign it to lognote
    let logNote = function() 
                 { console.log(`printing element ${i++}`)};
    
    // Loop through the delayTime array and invoke setTimeout for each time listed in delayTime
    forEach(delayTime, function(index) {
      setTimeout(logNote, index);
    });
    
  }


delayLog(delays,0) ;


console.log('End of Challenge 4');
// */// (do not alter this line)



/////////////////
//             //
// CHALLENGE 5 //
//             //
/////////////////

 /* <<<=== Remove the first two slashes (//) to comment out this challenge when finished
console.log('Start of Challenge 5');

  // Define a function to change theh background color of the panel on the right
  function changeColor() {
    // If background is light blue
    if(document.body.style.background == 'rgb(221, 238, 255)') {
      // Change it to orange
      document.body.style.background = 'rgb(255, 238, 221)';
    } else {
      // Otherwise, set it to light blue
      document.body.style.background = 'rgb(221, 238, 255)';
    }
  
  }

  // Locate our two buttons within the DOM and assign them to variables
  let buttonOne = document.getElementById('activate');
  let buttonTwo = document.getElementById('color');

  // Define a function that logs when the first button is clicked and adds an event listener to the second button
  function firstClicked() {
    console.log('clicked #1')
    buttonTwo.addEventListener('click', changeColor);
  }

  // Change color of the panel on the right
  buttonOne.addEventListener('click', firstClicked);

// ...your code above
document.body.style.background = '#def';
console.log('End of Challenge 5');
// */// (do not alter this line)



/////////////////
//             //
// CHALLENGE 6 //
//             //
/////////////////

 /* <<<=== Remove the first two slashes (//) to comment out this challenge when finished
console.log('Start of Challenge 6');
var dataReceived;

function ajaxSimulate(id, callback) {
  var database = ['Aaron', 'Barbara', 'Chris'];
  setTimeout(function() {
    // timer that passes the element of database whose index matches id to the callback after 0ms
    callback( database[id] );
  }, 0);
}
// function that takse data as input and assigns it to dataReceived & logs it.
function storeData(data) {
  dataReceived = data;
  console.log(dataReceived)
}

ajaxSimulate(1, storeData);


console.log('End of Challenge 6');
// */// (do not alter this line)



/////////////////
//             //
// CHALLENGE 7 //
//             //
/////////////////

 /* <<<=== Remove the first two slashes (//) to comment out this challenge when finished
console.log('Start of Challenge 7');

// Make API request
document.addEventListener('DOMContentLoaded', function() {
  req = new XMLHttpRequest();
  req.open("GET", "https://rest.bandsintown.com/artists/bruno%20mars?app_id=jshp", true);
  req.send();
  req.onload = function() {
    json = JSON.parse(req.responseText);
    
    // Loop through JSON
    for(let item in json) {
      // If JSON is image_url
      if(item == "image_url") {
        // Target DIV element
        let divPhoto = document.getElementById('ch2');
        
        // Add img tag
        divPhoto.innerHTML += '<img src = ' + json[item] + ' alt="Bruno Mars" width="80%">'
      }
    }
  }
});


console.log('End of Challenge 7');
// */// (do not alter this line)



/////////////////
//             //
// CHALLENGE 8 //
//             //
/////////////////

 /* <<<=== Remove the first two slashes (//) to comment out this challenge when finished
console.log('Start of Challenge 8');

  // Target DIV for list
  const captureDIV = document.getElementById('ch3');

  // Add UL tag to div and assign it an ID
  const listDOM = captureDIV.innerHTML = '<ul id="venues"></ul>'

  // Target the UL within the DIV
  const venueList = document.getElementById('venues');

  // Make API request
  document.addEventListener('DOMContentLoaded', function() {
    req = new XMLHttpRequest();
    req.open("GET", "https://rest.bandsintown.com/artists/bruno%20mars/events?app_id=jshp", true);
    req.send();
    req.onload = function() {
      json = JSON.parse(req.responseText);

      // Create array to store venues
      let venues = [];
    
      // Loop through JSON
      for(let i = 0; i < json.length; i++) {
        venues.push(json[i].venue);
      }
    
      // Loop through venues and add them to the list on the DOM
      for(let prop of venues) {
        // Append venue name to UL list
        venueList.innerHTML += '<li> ' + prop.name + ' </li>';
      }
    }
  });


console.log('End of Challenge 8');
// */// (do not alter this line)


/////////////////
//             //
// CHALLENGE 9 //
//             //
/////////////////

 /* <<<=== Remove the first two slashes (//) to comment out this challenge when finished
console.log('Start of Challenge 9');

  // Target DIV for list
  const captureDIV2 = document.getElementById('ch4');

  // Add UL tag to div and assign it an ID
  const listDOM2 = captureDIV2.innerHTML = '<ul id="venues2"></ul>'

  // Target the UL within the DIV
  const venueList = document.getElementById('venues2');

  // Make API request
  document.addEventListener('DOMContentLoaded', function() {
    req = new XMLHttpRequest();
    req.open("GET", "https://rest.bandsintown.com/artists/maroon%205/events?app_id=jshp", true);
    req.send();
    req.onload = function() {
      json = JSON.parse(req.responseText);

      // Create array to store venues
      let venues = [];
          
      // Loop through JSON
      for(let i = 0; i < json.length; i++) {
        venues.push(json[i].venue);
      }
    
      // Loop through venues and add them to the list on the DOM
      for(let prop of venues) {
        // Append venue name to UL list if the show is located in the US
        if(prop.country == "United States") {
          venueList.innerHTML += '<li> ' + prop.name + ' </li>';
        }
      }
    }
  });





console.log('End of Challenge 9');
// */// (do not alter this line)


