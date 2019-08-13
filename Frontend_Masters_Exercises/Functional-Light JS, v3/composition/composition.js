/*
# Composition
This is an exercise to practice composition.

## Instructions
1. Define a `compose(..)` that takes any number of functions (as individual arguments) and composes them right-to-left.

2. Define a `pipe(..)` that takes any number of functions (as individual arguments) and composes them left-to-right.
*/
"use strict";

function increment(x) { return x + 1; }
function decrement(x) { return x - 1; }
function double(x) { return x * 2; }
function half(x) { return x / 2; }

/* Create a compose function by passing it to
   pipe and reversing the function order */
function compose(...fns) {
  return pipe(...fns.reverse());
}

function pipe(...fns) {

  /* Loop through the functions passed in and apply the functions
    (front left to right) to the v (value) for each iteration */
  return function piped(v) {   
    for(let fn of fns) {
      v = fn(v);
    }
    return v;  
  }
}

var f1 = compose(increment,decrement);
var f2 = pipe(decrement,increment);
var f3 = compose(decrement,double,increment,half);
var f4 = pipe(half,increment,double,decrement);
var f5 = compose(increment);
var f6 = pipe(increment);

console.log( f1(3) === 3 );
console.log( f1(3) === f2(3) );
console.log( f3(3) === 4 );
console.log( f3(3) === f4(3) );
console.log( f5(3) === 4 );
console.log( f5(3) === f6(3) );
