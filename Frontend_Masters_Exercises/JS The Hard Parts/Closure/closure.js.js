// Type JavaScript here and click "Run Code" or press Ctrl + s
// console.log('Hello, world!');

function createFunction() {
  
	function printHello( ) {
    console.log("hello");
  }
  
  return printHello;
  
}

// UNCOMMENT THESE TO TEST YOUR WORK!
// var function1 = createFunction();
// function1();



function createFunctionPrinter(input) {
	
  function logger() {
    console.log(input);
  }
  
  return logger;
  
}

// UNCOMMENT THESE TO TEST YOUR WORK!
// var printSample = createFunctionPrinter('sample');
// printSample();
// var printHello = createFunctionPrinter('hello');
// printHello();



function outer() {
  var counter = 0; // this variable is outside incrementCounter's scope
  function incrementCounter () {
    counter ++;
    console.log('counter', counter);
  }
  return incrementCounter;
}

var willCounter = outer();
var jasCounter = outer();

// Uncomment each of these lines one by one.
// Before your do, guess what will be logged from each function call.

// willCounter(); // ('counter, 1')
// willCounter(); // ('counter, 2')
// willCounter(); // ('counter, 3')

// jasCounter();  // ('counter, 1')
// willCounter();  // ('counter, 4')



function addByX(x) {
 
  function addValue(val) {

    return val + x;
    
  }
  
  return addValue;
  
}

var addByTwo = addByX(2);

// now call addByTwo with an input of 1
// console.log(addByTwo(1));

// now call addByTwo with an input of 2
// console.log(addByTwo(2));


//--------------------------------------------------
// Extension
//--------------------------------------------------

function once(func) {
  
  // Create value variable to store result of callback
  let value;
  
  // Create boolean to prevent reassignment
  let switchOff = false;
  
  // Utilize callback
  function useCallback(val) {
    
    // If bool is false
    if(!switchOff) {
      
      // Set value (for first execution)
	    value = func(val);
      
      /* Set bool to true, so that this 
      if block can no longer be accessed */
  		switchOff = true;    
    }
    
    // Return value returned from callback (first time)
    return value;
    
  }
  
  return useCallback;

}

var onceFunc = once(addByTwo);

// // UNCOMMENT THESE TO TEST YOUR WORK!
// console.log(onceFunc(4));  //should log 6
// console.log(onceFunc(10));  //should log 6
// console.log(onceFunc(9001));  //should log 6


function after(count, func) {
  
  // Initialize counter
  let counter = 0;
  
  // Create function that requires repeat calls
  function repeatCalls() {
    
    // Increment counter for each call
    counter++;

    // If counter matches count parameter, call func
    if(counter == count) {
      return func();
    }
    
  }
  
  return repeatCalls;

}

var called = function() { console.log('hello') };
var afterCalled = after(3, called);

// afterCalled(); // -> nothing is printed
// afterCalled(); // -> nothing is printed
// afterCalled(); // -> 'hello' is printed


function delay(func, wait) {
  
  // setTimeout(func, wait);

}

// function elloThere() { console.log('ello') };
// delay(elloThere, 1000);

