// Challenge 1

function sayHello() {
  
	function sayHello() {
    console.log("Hello!");
  }
  
	setTimeout(sayHello ,1000);
}

// Uncomment the line below when ready
// sayHello(); // should log "Hello" after 1000ms


// Challenge 2
var promise = new Promise(function (resolve, reject) {

  // setTimeout function to be called upon promise request
  setTimeout(function makeResolve() {
    resolve('Resolved!');
  }, 1000);
});

// Expected output: "Resolved!"
// promise.then(function printOutput(value) {
//   console.log(value);
// });


// Challenge 3

promise = new Promise(function(resolve, reject) {
  reject('Rejected!');
});

// Should print out "Reject!"
/*
promise.then(
  function() {
    // Nothing to do...
	})
  
  .catch(
		function(reason) {
      console.log(reason);
    }
	);
*/

// Challenge 4

promise = new Promise(function (resolve, reject) {
  resolve();
});

// Uncomment the lines below when ready
// promise.then(() => console.log('Promise has been resolved!'));
// console.log("I'm not the promise!");


// Challenge 5
function delay(){
  // Create a promise
	promise = new Promise(function (resolve, reject) {
    
    // Create a timeout function that calls resolve after 1000ms
    setTimeout(function returnTimeout() {
      setTimeout(resolve, 1000);
    });
  });
  
  return promise;
}

// Uncomment the code below to test
// This code should log "Hello" after 1000ms
// delay().then(sayHello);


// Challenge 6

// Create a promise that prints "Second"
var secondPromise = new Promise(function (resolve, reject) {
	resolve("Second!");
});

// Chain a promise to secondPromise
var firstPromise = new Promise(function (resolve, reject) {
	resolve(secondPromise);    
});

// Call firstPromise & print output result of chaining
// firstPromise.then(function printOutput(val) {
//   console.log(val);
// });



// Challenge 7
const fakePeople = [
  { name: 'Rudolph', hasPets: false, currentTemp: 98.6 },
  { name: 'Zebulon', hasPets: true, currentTemp: 22.6 },
  { name: 'Harold', hasPets: true, currentTemp: 98.3 },
]

const fakeAPICall = (i) => {
  const returnTime = Math.floor(Math.random() * 1000);
  return new Promise((resolve, reject) => {
    if (i >= 0 && i < fakePeople.length) {
      setTimeout(() => resolve(fakePeople[i]), returnTime);
    } else {
      reject({ message: "index out of range" });
    }
  });
};

function getAllData() {
  
  Promise.all(
    // List of all promises
    [fakePeople[0], fakePeople[1], fakePeople[2]]
  )
  	// Print out values after all promises returned
    .then(function(val) {
    console.log(val);
  })
}

// getAllData();

