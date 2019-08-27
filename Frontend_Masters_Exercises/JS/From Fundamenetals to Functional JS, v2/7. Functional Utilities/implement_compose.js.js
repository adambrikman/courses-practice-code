// Implement your own compose function

const _ = {};

_.compose = function(fn, fn2) {
  
  // Return the passed in string
  return function(str) {
    
    // Save result of passing string through fn2
    const result = fn2(str);
    
    // Return final output by passing the above result to fn
    return fn(result);
  }
}

/*  Test case   */

const consider = (name) => { 
  return `I think it could be... ${name}`; };

const exclaim  = (statement) => { 
  return `${statement.toUpperCase()}!`; };

const blame = _.compose(consider, exclaim);

console.log( blame('you') ); // 'I think it could be... YOU!'
