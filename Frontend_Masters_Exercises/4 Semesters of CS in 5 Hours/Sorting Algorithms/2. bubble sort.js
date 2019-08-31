/*
  Write a bubble sort algorithm and name the function 'bubbleSort'
    
  Bubble sort works by comparing two adjacent numbers next to each other and then
  swapping their places if the smaller index's value is larger than the larger
  index's. Continue looping through until all values are in ascending order
  
  Provided is an optional visualization helper. Call snapshot(yourArray) at the
  beginning of each iteration of your inner loop with the state of the being-sorted
  array and the helper tool will show you how your array looks in the HTML section
  of CodePen. This is optional and only for your help.
*/

function bubbleSort (nums) {
  
  // Declare boolean to be used as the test for ending our do-while loop
  let swapped = false;
  
  // Loop through array until all values are in consecutive order
  do {
    swapped = false;
    /* Each time the value of index + 1 is greater than the value at the 
    current index, swap and set 'swapped' boolean to true to continue looping. */
    for(let i = 0; i < nums.length - 1; i++) {
      
      if(nums[i+1] < nums[i]) {
            var tmp = nums[i];
            nums[i] = nums[i+1];
            nums[i+1] = tmp;
            swapped = true;
      }
      // Visualization
      snapshot(nums);
    } 
  } while(swapped);
}

// unit tests
// do not modify the below code
describe('bubble sort', function() {
  it('should sort correctly', () => {
    var nums = [10,5,3,8,2,6,4,7,9,1];
    bubbleSort(nums);
    expect(nums).toEqual([1,2,3,4,5,6,7,8,9,10]);
    done();
  });
});