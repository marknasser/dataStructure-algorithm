const searchArr = [6, 8, 9, 1, 0, 6];
const searchSortedArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// ____________searching algorithims____________

/*[1] linear search:is defined as a sequential search algorithm that starts at one end and goes through each element of a list until the desired element is found, otherwise the search continues till the end of the data set.
// worst case: O(n) , best: O(1)

function linearSearch(target, ar) {
  for (let i = 0; i < ar.length; i++) {
    if (ar[i] === target) return i;
  }
  return -1;
}
// console.log(linearSearch(0, searchArr));
*/

/*[2] Binary Search:is used in a sorted array by repeatedly dividing the search interval in half then
// worst case: O(logn) , best: O(1)
function binarySearch(arr, x) {
  let start = 0;
  let end = arr.length - 1;
  let mid;
  while (end >= start) {
    mid = start + Math.floor((end - start) / 2);
    if (arr[mid] == x) return mid;
    if (arr[mid] > x) end = mid - 1;
    else start = mid + 1;
  }

  //if the return statment did't happen = means last item does't match the target
  return -1;
}

console.log(binarySearch(searchSortedArr, 9));
*/
// ____________sortinging algorithims____________

/*
// _____Selection Sort ______
// is an easy and efficint one that works repetedly by selcting the smallest/buggest elemnt from the unsorted portion and moving it to the sorted list
// it's stable and in-
//O (n2) time complexity
// space complexity is O. (1).

// Javascript program for implementation of selection sort

function swap(arr, j, i) {
  var temp = arr[j];
  arr[j] = arr[i];
  arr[i] = temp;
}

function selectionSort(arr) {
  let min_idx;

  for (let i = 0; i < arr.length - 1; i++) {
    min_idx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min_idx]) min_idx = j;
    }

    swap(arr, min_idx, i);
  }
}

var arr = [64, 25, 12, 22, 11];
selectionSort(arr);
console.log(arr);
// This code is contributed by akshitsaxenaa09.
*/
