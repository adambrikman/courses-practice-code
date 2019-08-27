/*
# Point-Free
This is an exercise to practice point-free style.

## Instructions
1. Refactor the `output(..)`, `printIf(..)`, and `isLongEnough(..)` functions to use point-free style.

2. Hints:
	- Some browsers require `console.log(..)` to run against the `console` context , so `f = console.log; f(..)` fails (because of lost `this` binding).

	Use `.bind(..)` to be safe.

	- `printIf(..)` can be expressed in terms of a `when(..)` that looks like:

	```js
	function when(fn) {
		return function(predicate){
			return function(...args){
				if (predicate(...args)) {
					return fn(...args);
				}
			};
		};
	}
	```

	- `isLongEnough(..)` is the negation of `isShortEnough(..)`.
*/

"use strict";

/*
To use the when function, we want to execute output()
WHEN isShortEnough/isLongEnough returns true for a particular message

Due to the structure of our when function, we will use equational reasoning.
*/
function when(fn) {
  return function(predicate){
    return function(...args){
      if (predicate(...args)) {
        return fn(...args);
      }
    };
  };
}

// Negate function
function not(fn) {
  return function negate(...args) {
    return !fn(...args)
  };
}

// *********************

/* Use equational reasoning.
   Also, since some browsers require console.log() to run agains the console context.
   Our equational reasoning would cause console.log() to lose it's this binding. So
   we use a hard binding */
var output = console.log.bind(console);

var printIf = when(output);

// Define isLongEnough by negating isShortEnough
var isLongEnough = not(isShortEnough);

function isShortEnough(str) {
	return str.length <= 5;
}

// *********************

var msg1 = "Hello";
var msg2 = msg1 + " World";

printIf(isShortEnough)(msg1);		// Hello
printIf(isShortEnough)(msg2);
printIf(isLongEnough)(msg1);
printIf(isLongEnough)(msg2);		// Hello World





/* Previous functions that have been refactored above*/

// function output(txt) {
// 	console.log(txt);
// }

// function printIf(shouldPrintIt) {
// 	return function(msg) {
// 		if (shouldPrintIt(msg)) {
// 			output(msg);
// 		}
// 	};
// }

// function isLongEnough(str) {
// 	return !isShortEnough(str);
// }
