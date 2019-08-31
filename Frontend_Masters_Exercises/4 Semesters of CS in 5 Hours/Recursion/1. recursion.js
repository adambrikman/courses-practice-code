/*
  Make a function that computes a factorial recursively.
  A factorial is when you take a number n and multiply 
  by each preceding integer until you hit one.
  n * (n-1) * (n-2) ... * 3 * 2 * 1
  
  Call the function factorial
  
  factorial(1) = 1
  factorial(2) = 2
  factorial(3) = 6 
*/

// Recursive solution
function factorial (n) {
  if(n < 2) return 1;
  return n * factorial(n-1);
}
  
// Iterative Solution
/*
  let total = 1;
  for(let i = 1; i <= n; i++) {
    total *= i;
  }
  return total;
*/

// unit tests
// do not modify the below code
describe('factorial', function() {
  it('should do factorials', () => {
    expect(factorial(1)).toEqual(1);
    expect(factorial(2)).toEqual(2);
    expect(factorial(3)).toEqual(6);
    expect(factorial(10)).toEqual(3628800);
  });
});