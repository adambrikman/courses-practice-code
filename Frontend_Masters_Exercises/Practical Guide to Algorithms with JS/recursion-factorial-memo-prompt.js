// Task 2: Use your memo function from the previous exercise to memoize your factorial method

const memoize = (fn) => {
  const cache = {};

  return (...args) => {
    let n = args[0];

    if(n in cache) {
      return cache[n]

    } else {
      let result = fn(n)
      cache[n] = result
      return result;
    }
  }
}

// Task 1: Without peeking, write your own recursive factorial method

const factorial = memoize(
  (n) => {
    // Base case
    if(n == 0) return 1;

    // Recursive function
    return n * factorial(n-1)
  }
)

factorial(8)