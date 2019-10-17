//TASK: Implement bubblesort!

function bubbleSort(arr) {
  for(let i = 0; i < arr.length; i++) {
    for(let j = i+1; j < arr.length; j++) {
      if(arr[i] > arr[j]) {
        tmp = arr[i]
        arr[i] = arr[j]
        arr[j] = tmp
      }
    }
  }
return arr;
}

let firstBubble = (bubbleSort([9, 2, 5, 6, 4, 3, 7, 10, 1, 8]));
let secondBubble = (bubbleSort([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
let thirdBubble = (bubbleSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]));

console.log(firstBubble);
console.log(secondBubble);
console.log(thirdBubble);
