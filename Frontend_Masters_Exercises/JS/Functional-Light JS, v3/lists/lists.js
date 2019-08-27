/*
# Lists (And FP Review!)
This is an exercise to practice list operations (map/reduce/filter). We also revisit a variety of previous FP concepts (closure, recursion, etc).

## Instructions
1. Write two functions, each which return a fixed number (different from each other) when called.

2. Write an `add(..)` function that takes two numbers and adds them and returns the result. Call `add(..)` with the results of your two functions from (1) and print the result to the console.

3. Write an `add2(..)` that takes two functions instead of two numbers, and it calls those two functions and then sends those values to `add(..)`, just like you did in (2) above.

4. Replace your two functions from (1) with a single function that takes a value and returns a function back, where the returned function will return the value when it's called.

5. Write an `addn(..)` that can take an array of 2 or more functions, and using only `add2(..)`, adds them together. Try it with a loop. Try it without a loop (recursion). Try it with built-in array functional helpers (hint: reduce).

6. Start with an array of odd and even numbers (with some duplicates), and trim it down to only have unique values.

7. Filter your array to only have even numbers in it.

8. Map your values to functions, using (4), and pass the new list of functions to the `addn(..)` from (5).

## Bonus
Write tests for your functions.
*/
"use strict";

// #2
function add(a, b) { return a + b; }

// #3
function add2(fn1, fn2) { return add(fn1(), fn2()); }

// #4
function constant(v) {
    return function f() {
        return v;
    }
}

let value50 = constant(50), value42 = constant(42), value60 = constant(60);

// #5
/* Iterative */
/*
function addn(fns) {
  
  // continue looping until two functions remain
  while (fns.length > 2) {
    
    // destructuring
    let [fns0, fns1, ...rest] = fns;

    // restructuring
    fns = [
      function f() {
        return add2(fns0,fns1);
      },
      ...rest 
    ]
  }
  return add2(fns[0],fns[1]);
  
}
*/

/* Recursion */
/*
function addn([fns0, fns1, ...rest]) {
  
  // base case
  if (rest.length == 0) return add2(fns0,fns1);
  
  // Recursive call with restructuring
  return addn([
    function f() {
      return add2(fns0, fns1);
    },
    ...rest
  ]);
}
*/

/* Reduce */
function addn(fns) {
  
  // Group functions inside of eachother, then execute
  return fns.reduce(function reducer(groupedFns, fn) {
    return function f() {
      return add2(groupedFns, fn);
    };
  })(); 
}

var list = [1,2,3,4,5,6,7,8,9,10,11,12,1,2,3,4,5,6,7,8,9,10,11,12];

// #6, 7, & 8
let get42 = addn(
                list
                .reduce(function reducer (acc, v) {
                    if(!acc.includes(v)) {
                      return [...acc, v]
                    };
                    return acc;
                  }, [])

                .filter(function isEven(v) { return v % 2 == 0; })

                .map(constant)
            )

let get152 = addn([value42, value50, value60]);
console.log(get152);

console.log(get42);