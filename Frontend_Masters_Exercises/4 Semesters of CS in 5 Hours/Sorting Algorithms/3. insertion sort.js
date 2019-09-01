/*
  Insertion sort! | Be sure to name your function insertionSort.
  
  The idea here is that the beginning of your list is sorted and the everything else is assumed to be an unsorted mess.
  The outer loop goes over the whole list, the index of which signifies where the "sorted" part of the list is. The inner
  loop goes over the sorted part of the list and inserts it into the correct position in the array.
  
  Like bubble sort, there's a visualization mechanism available to you. Just call snapshot(myArray) at the beginning of
  your inner loop and it should handle the rest for you!
*/

function insertionSort (nums) {
  
  for(let i = 1; i < nums.length; i++) {

    for(let j = 0; j < i; j++) {
      snapshot(nums);
      if(nums[j] > nums[i]) {

        // Remove one element at index i
        const spliced = nums.splice(i, 1);
        
        // insert removed element at index j
        nums.splice(j, 0, spliced[0]);        
      }
    }
  }
}


// unit tests
// do not modify the below code
describe('insertion sort', function() {
  it('should sort correctly', () => {
    var nums = [10,5,3,8,2,6,4,7,9,1];
    insertionSort(nums);
    expect(nums).toEqual([1,2,3,4,5,6,7,8,9,10]);
    done();
  });
});