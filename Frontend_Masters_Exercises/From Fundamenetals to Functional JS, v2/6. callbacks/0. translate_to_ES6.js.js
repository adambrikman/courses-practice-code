// Translate the below code into ES6

var increment = function(n) { return n + 1; };
var square = function(n) { return n * n; };
var doMathSoIDontHaveTo = function(n, func) { return func(n); };
doMathSoIDontHaveTo(5, square);
doMathSoIDontHaveTo(4, increment);


// ES6 implementation

const incrementV2 = n => {return n + 1 };
const squareV2 = n => {return n * n };
const doMathV2 = (n, func) => {return func(n) };

// console.log( doMathV2(5, square) );
// console.log(doMathV2(4, increment) );