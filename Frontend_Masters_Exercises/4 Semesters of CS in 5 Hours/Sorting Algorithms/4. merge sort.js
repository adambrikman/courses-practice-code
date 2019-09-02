/*
  Write a function that performs mergesort & name the function mergeSort. It will take in a array of numbers and return a sorted array numbers
  
  To read the approach, refer to the class materials at 
  https://btholt.github.io/four-semesters-of-cs/
*/

function mergeSort(nums) {
  
  // base case
  if(nums.length < 2) {
    return nums;
  }
  
  const length = nums.length;
  const middle = Math.floor(length / 2);
  
  const left = nums.slice(0, middle);
  const right = nums.slice(middle);
  
  return stitch(mergeSort(left), mergeSort(right));  
}

function stitch (left, right) {
  
  const results = [];
  
  while(left.length && right.length) {
    
    if(left[0] <= right[0]) {
      results.push(left.shift());
    }
    
    else {
      results.push(right.shift());
    }
  }
  
  return results.concat(left, right);
}


// unit tests
// do not modify the below code
describe('insertion sort', function() {
  it('should sort correctly', () => {
    var nums = [10,5,3,8,2,6,4,7,9,1];
    var ans = mergeSort(nums);
    expect(ans).toEqual([1,2,3,4,5,6,7,8,9,10]);
  });
});