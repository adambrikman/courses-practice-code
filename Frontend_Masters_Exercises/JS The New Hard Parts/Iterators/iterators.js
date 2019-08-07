// Type JavaScript here and click "Run Code" or press Ctrl + s
// console.log('Hello, world!');

// CHALLENGE 1

function sumFunc(arr) {
  let val = 0;
  
	for(let i = 0; i < arr.length; i++) {
    val += arr[i];
  }
  return val;
}

// Uncomment the lines below to test your work
// const array = [1, 2, 3, 4];
// console.log(sumFunc(array)); // -> should log 10

function returnIterator(arr) {
	let i = 0;
  
  // Create a function that iterates through array values
  function loop() {
    let value = arr[i];
    i++;
    return value;
  }
  
  return loop;
}

// Uncomment the lines below to test your work
// const array2 = ['a', 'b', 'c', 'd'];
// const myIterator = returnIterator(array2);
// console.log(myIterator()); // -> should log 'a'
// console.log(myIterator()); // -> should log 'b'
// console.log(myIterator()); // -> should log 'c'
// console.log(myIterator()); // -> should log 'd'



// CHALLENGE 2

function nextIterator(arr) {
    
  let i = 0;
  
  // Construct an iterator
  let iterator = {
    next: function iterate() {
      let indexValue = arr[i];
      i++;
      return indexValue;
    }
  }
  
  return iterator;
}

// Uncomment the lines below to test your work
// const array3 = [1, 2, 3];
// const iteratorWithNext = nextIterator(array3);
// console.log(iteratorWithNext.next()); // -> should log 1
// console.log(iteratorWithNext.next()); // -> should log 2
// console.log(iteratorWithNext.next()); // -> should log 3



// CHALLENGE 3

function sumArray(arr) {

  // Construct an iterator using nextIterator function
  let vals = nextIterator(arr);
  let total = 0;

  // Loop through iterator using .next & updating total
  for(let i = 0; i < arr.length; i++) {
    total += vals.next();
	}
  
  return total;
}

// Uncomment the lines below to test your work
// const array4 = [1, 2, 3, 4];
// console.log(sumArray(array4)); // -> should log 10



// CHALLENGE 4

function setIterator(set) {
  
  let i = 0;
  
  // Assign values of the set to a variable
  let setVals = set.values();
  
  // Construct an iterator
	let iterator = {
    next: function iterate() {
      // Assign .next method to a variable
      var next = setVals.next();
      // Call next for each iteration
      return next['value'];
    }
  }
  
  return iterator;
}

// Uncomment the lines below to test your work
// const mySet = new Set('hey');
// const iterateSet = setIterator(mySet);
// console.log(iterateSet.next()); // -> should log 'h'
// console.log(iterateSet.next()); // -> should log 'e'
// console.log(iterateSet.next()); // -> should log 'y'



// CHALLENGE 5

function indexIterator(arr) {
  let i = 0;

  // Construct an iterator
  let iterator = {
    next: function iterate() {
      let value = arr[i];
      i++;
      return [i-1, value];
    }
  }

  return iterator;

}

// Uncomment the lines below to test your work
// const array5 = ['a', 'b', 'c', 'd'];
// const iteratorWithIndex = indexIterator(array5);
// console.log(iteratorWithIndex.next()); // -> should log [0, 'a']
// console.log(iteratorWithIndex.next()); // -> should log [1, 'b']
// console.log(iteratorWithIndex.next()); // -> should log [2, 'c']



// CHALLENGE 6

function Words(string) {
  this.str = string;
}

Words.prototype[Symbol.iterator] = function() {

  // Separate string into words
  let regex = this.str.match(/\w+/g);
    
  let i = 0;

  // Construct iterator
  let iterator = {
    next: function iterate() {
      
      // If we haven't iterated through all words yet
      if(i < regex.length) {
        
        // Assign word to variable & increment
      	let val = regex[i];
        i++;

        // Return promise object
     		return {value: val, done: false}; 
      } else {
        
        // Once we're done with all words, return done: true
        return {done: true};
      }

    }
  }  
  return iterator; 
}

/*

*/

// Uncomment the lines below to test your work
// const helloWorld = new Words('Hello World');
// for (word of helloWorld) { console.log(word); } // -> should log 'Hello' and 'World'

// CHALLENGE 7

function valueAndPrevIndex(array){
	let i = 0;
  
  // Construct iterator
  let iterator = {
    // Create method called sentence which creates log output per challenge
    sentence: function iterate() {
      let val = array[i];
      i++;
      return( `${val} was found after index ${i-1}` );
    }
  }

	return iterator;
}

// const returnedSentence = valueAndPrevIndex([4,5,6])
// console.log(returnedSentence.sentence());
// console.log(returnedSentence.sentence());
// console.log(returnedSentence.sentence());


//CHALLENGE 8

function* createConversation(string) {

  // Create a setInterval upon receiving a call to .next
  yield setInterval(function createResponse() {
    
    if(string == "english") {
      console.log("hello there");
      
    } else {
      console.log("gibberish")
    }
  }, 3000);


}

// console.log(createConversation('english').next());



//CHALLENGE 9
function waitForVerb(noun) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('run'+noun);
    }, 2000);
  });
}

async function f(noun) {
  
  let result = await waitForVerb(noun);

  console.log(result);	
}

// f("dog");
