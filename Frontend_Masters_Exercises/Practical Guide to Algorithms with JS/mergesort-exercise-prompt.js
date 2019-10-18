//TASK: implement mergesort!
// protip: Split the array into halves and merge them recursively 
// protip: return once we hit an array with a single item. That is a sorted array of size 1!
// protip: compare the arrays item by item and return the concatenated result

function mergesort(nums) {

  // base case
  if(nums.length < 2) {
    return nums;
  }

  const length = nums.length;
  const middle = Math.floor(length/2);

  // shorten array lengths
  const left = nums.slice(0, middle);
  const right = nums.slice(middle);

  // recursively shorten arrays, then 'stitch' them together
  return stitch(mergesort(left), mergesort(right));
}

function stitch(left, right) {

  const results = [];

  // While either array is not empty
  while(left.length && right.length) {
    if(left[0] <= right[0]) {
      results.push(left.shift())
    } else {
      results.push(right.shift())
    }
  }

  // return results array, concatonating whichever array still has value(s)
  return results.concat(left, right);
}

let firstMerge = (mergesort([9, 2, 5, 6, 4, 3, 7, 10, 1, 8]));
let secondMerge = (mergesort([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
let thirdMerge = (mergesort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]));

console.log(firstMerge);
console.log(secondMerge);
console.log(thirdMerge);
