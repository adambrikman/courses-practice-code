// TASK: Implement linear search.

function linearSearch(list, item) {
  let index = -1;
  list.forEach((listItem, i) => {
    if(listItem == item) {
      index = i;
    }
    i++;
  })
  return index;
}

linearSearch([2,6,7,90,103], 90);